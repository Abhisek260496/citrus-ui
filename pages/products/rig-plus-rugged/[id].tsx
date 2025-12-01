import { prodcutMediaUrl } from "@/api/endpoints";
import { getSingleProduct } from "@/api/functions/cms.api";
import Communicative from "@/components/Communicative/Communicative";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import DualLan from "@/components/DualLan/DualLan";
import FourDependentDisplay from "@/components/FourDependentDisplay/FourDependentDisplay";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import ResistSection from "@/components/ResistSection/ResistSection";
import RigPlusBanner from "@/components/RigPlusBanner/RigPlusBanner";
import ToughPortableSection from "@/components/ToughPortableSection/ToughPortableSection";
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

  console.log(singleProductData?.sections[5], "singleProductData?.sections[1]");

  return (
    <Wrapper>
      {singleProductLoading ? (
        <Loader />
      ) : (
        <>
          <RigPlusBanner
            section_background_image={prodcutMediaUrl(
              singleProductData?.banner_background_img as string
            )}
            section_image={prodcutMediaUrl(
              singleProductData?.product_banner_content as string
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
          <FourDependentDisplay
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[1]?.section_background_image
            )}
            section_title={singleProductData?.sections[1]?.section_title}
            section_subtitle={singleProductData?.sections[1]?.section_subtitle}
            section_subtitle_one={
              singleProductData?.sections[1]?.section_subtitle_one
            }
            section_content={singleProductData?.sections[1]?.section_content}
          />
          <DualLan
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[2]?.section_background_image
            )}
            section_image={prodcutMediaUrl(
              singleProductData?.sections[2]?.section_image
            )}
            section_title={singleProductData?.sections[2]?.section_title}
            section_subtitle={singleProductData?.sections[2]?.section_subtitle}
            section_content={singleProductData?.sections[2]?.section_content}
          />
          <ResistSection
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[3]?.section_background_image
            )}
            section_title={singleProductData?.sections[3]?.section_title}
            section_subtitle={singleProductData?.sections[3]?.section_subtitle}
            section_subtitle_one={
              singleProductData?.sections[3]?.section_subtitle_one
            }
            section_content={singleProductData?.sections[3]?.section_content}
          />
          <Communicative
            banner_bg={singleProductData?.sections[4]?.section_background_image}
            description={singleProductData?.sections[4]?.section_content}
            section_title={singleProductData?.sections[4]?.section_title}
            section_subtitle={singleProductData?.sections[4]?.section_subtitle}
          />
          <ToughPortableSection
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[5]?.section_background_image
            )}
            section_title={singleProductData?.sections[5]?.section_title}
            section_subtitle={singleProductData?.sections[5]?.section_subtitle}
            section_content={singleProductData?.sections[5]?.section_content}
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
