import { prodcutMediaUrl } from "@/api/endpoints";
import { getSingleProduct } from "@/api/functions/cms.api";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import Eon13ProBanner from "@/components/Eon13ProBanner/Eon13ProBanner";
import GbLanSec from "@/components/GbLanSec/GbLanSec";
import NextGenConectivity from "@/components/NextGenConectivity/NextGenConectivity";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import TwoIndependentDisplay from "@/components/TwoIndependentDisplay/TwoIndependentDisplay";
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

  console.log(singleProductData?.sections[3], "singleProductData");

  return (
    <Wrapper>
      {singleProductLoading ? (
        <Loader />
      ) : (
        <>
          <Eon13ProBanner
            banner_bg={prodcutMediaUrl(
              singleProductData?.banner_background_img as string
            )}
            product_img={prodcutMediaUrl(
              singleProductData?.product_banner_content as string
            )}
            description={
              singleProductData?.product_banner_description as string
            }
            static_img={prodcutMediaUrl(
              singleProductData?.product_banner_animation_img as string
            )}
          />
          <CoreToEveryThing
            bgImg={prodcutMediaUrl(
              singleProductData?.sections[0]?.section_background_image
            )}
            mainTitle={singleProductData?.sections[0]?.section_title}
            bgText={singleProductData?.sections[0]?.section_content}
          />
          <TwoIndependentDisplay
            bgImg={prodcutMediaUrl(
              singleProductData?.sections[1]?.section_background_image as string
            )}
            subTitle={singleProductData?.sections[1]?.section_title}
            mainTitle={singleProductData?.sections[1]?.section_subtitle}
            description={singleProductData?.sections[1]?.section_content}
            displayText={singleProductData?.sections[1]?.section_subtitle_one}
          />
          <CoreToEveryThing
            isFullWidth
            isReversed
            subTitle={singleProductData?.sections[2]?.section_subtitle}
            // mainTitle="Intel Arc"
            bgImg={prodcutMediaUrl(
              singleProductData?.sections[2]?.section_background_image
            )}
            mainTitle={singleProductData?.sections[2]?.section_title}
            bgText={singleProductData?.sections[2]?.section_content}
          />
          <GbLanSec
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[3]?.section_background_image
            )}
            section_image={prodcutMediaUrl(
              singleProductData?.sections[3]?.section_image
            )}
            section_content={singleProductData?.sections[3]?.section_content}
          />
          <NextGenConectivity
            section_title={singleProductData?.sections[4]?.section_title}
            section_subtitle={singleProductData?.sections[4]?.section_subtitle}
            section_background_image={
              singleProductData?.sections[4]?.section_background_image
            }
            section_content={singleProductData?.sections[4]?.section_content}
            section_image={singleProductData?.sections[4]?.section_image}
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
