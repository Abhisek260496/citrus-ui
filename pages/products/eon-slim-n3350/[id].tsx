import { prodcutMediaUrl } from "@/api/endpoints";
import { getSingleProduct } from "@/api/functions/cms.api";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";

import EonSlimBanner from "@/components/EonSlimBanner/EonSlimBanner";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import TwoIndependentDisplay from "@/components/TwoIndependentDisplay/TwoIndependentDisplay";
import TwoLanSection from "@/components/TwoLanSection/TwoLanSection";
import UltraBg from "@/components/UltraBg/UltraBg";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import { useRouter } from "next/router";
import { useEffect } from "react";
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

  useEffect(() => {
    if (!singleProductLoading && singleProductData) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [singleProductLoading, singleProductData]);

  console.log(singleProductData?.sections[2], "singleProductData");

  return (
    <Wrapper>
      {singleProductLoading ? (
        <Loader />
      ) : (
        <>
          <EonSlimBanner
            bannerImage={prodcutMediaUrl(
              singleProductData?.banner_background_img as string
            )}
            productImage={prodcutMediaUrl(
              singleProductData?.product_banner_content as string
            )}
            bannerText={singleProductData?.product_banner_description}
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
          <TwoLanSection
            section_title={singleProductData?.sections[2]?.section_title}
            section_subtitle={singleProductData?.sections[2]?.section_subtitle}
            section_background_image={
              singleProductData?.sections[2]?.section_background_image
            }
            section_content={singleProductData?.sections[2]?.section_content}
            section_image={singleProductData?.sections[2]?.section_image}
          />
          <UltraBg
            section_background_image={
              singleProductData?.sections[3]?.section_background_image
            }
            section_content={singleProductData?.sections[3]?.section_content}
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
