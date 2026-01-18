import { prodcutMediaUrl } from "@/api/endpoints";
import { getSingleProduct } from "@/api/functions/cms.api";
import Communicative from "@/components/Communicative/Communicative";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import GraphicCardSec from "@/components/GraphicCardSec/GraphicCardSec";
import IndependentDisplay from "@/components/IndependentDisplay/IndependentDisplay";
import Np500Banner from "@/components/Np500Banner/Np500Banner";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: singleProductData, isLoading: singleProductLoading } = useQuery(
    {
      queryKey: ["getSingleProduct", id],
      queryFn: () => getSingleProduct(id as string)
    }
  );

  console.log(singleProductData?.sections, "singleProductData");

  return (
    <Wrapper>
      {singleProductLoading ? (
        <Loader />
      ) : (
        <>
          <Np500Banner
            section_background_image={prodcutMediaUrl(
              singleProductData?.banner_background_img as string
            )}
            section_title={singleProductData?.product_banner_title_1}
            section_content={
              singleProductData?.product_banner_description as string
            }
          />
          <CoreToEveryThing
            bgImg={prodcutMediaUrl(
              singleProductData?.sections[0]?.section_background_image
            )}
            mainTitle={singleProductData?.sections[0]?.section_title}
            bgText={singleProductData?.sections[0]?.section_content}
          />
          <IndependentDisplay
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[1]?.section_background_image
            )}
            section_title={singleProductData?.sections[1]?.section_title}
            section_subtitle={singleProductData?.sections[1]?.section_subtitle}
            section_content={singleProductData?.sections[1]?.section_content}
          />
          <GraphicCardSec
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[2]?.section_background_image
            )}
            section_title={singleProductData?.sections[2]?.section_title}
            section_subtitle={singleProductData?.sections[2]?.section_subtitle}
            section_content={singleProductData?.sections[2]?.section_content}
            section_subtitle_one={
              singleProductData?.sections[2]?.section_subtitle_one
            }
          />
          <Communicative
            banner_bg={singleProductData?.sections[3]?.section_background_image}
            description={singleProductData?.sections[3]?.section_content}
            section_title={singleProductData?.sections[3]?.section_title}
            section_subtitle={singleProductData?.sections[3]?.section_subtitle}
            section_subtitle_one={
              singleProductData?.sections[3]?.section_subtitle_one
            }
          />
          <RelatedProducts
            related_products={singleProductData?.related_products}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Index;
