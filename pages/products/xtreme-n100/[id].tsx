import { prodcutMediaUrl } from "@/api/endpoints";
import { getSingleProduct } from "@/api/functions/cms.api";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import DisplaySec from "@/components/DisplaySec/DisplaySec";
import EasySec from "@/components/EasySec/EasySec";
import HighSec from "@/components/HighSec/HighSec";
import ModeSec from "@/components/ModeSec/ModeSec";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import XtremeBanner from "@/components/XtremeBanner/XtremeBanner";
import { productList2 } from "@/json/dummy";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";

const Xtreme = () => {
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

  console.log(singleProductData, "singleProductData");

  return (
    <Wrapper>
      {singleProductLoading ? (
        <Loader />
      ) : (
        <>
          <XtremeBanner
            banner_background_img={
              singleProductData?.banner_background_img as string
            }
            product_banner_content={
              singleProductData?.product_banner_content as string
            }
            product_banner_title_1={singleProductData?.product_banner_title_1}
            product_banner_title_2={singleProductData?.product_banner_title_2}
            product_banner_title_3={singleProductData?.product_banner_title_3}
            product_banner_description={
              singleProductData?.product_banner_description
            }
          />
          <CoreToEveryThing
            bgImg={prodcutMediaUrl(
              singleProductData?.sections[0]?.section_image
            )}
            mainTitle={singleProductData?.sections[0]?.section_title}
            bgText={singleProductData?.sections[0]?.section_content}
          />
          <ModeSec
            section_image={singleProductData?.sections[1]?.section_image}
            section_content={singleProductData?.sections[1]?.section_content}
          />
          <HighSec
            section_background_image={
              singleProductData?.sections[2]?.section_background_image
            }
            section_content={singleProductData?.sections[2]?.section_content}
          />
          <DisplaySec
            section_background_image={
              singleProductData?.sections[3]?.section_background_image
            }
            section_content={singleProductData?.sections[3]?.section_content}
          />
          <EasySec
            section_background_image={
              singleProductData?.sections[4]?.section_background_image
            }
            section_content={singleProductData?.sections[4]?.section_content}
          />
          <RelatedProducts productList={productList2} />
        </>
      )}
    </Wrapper>
  );
};

export default Xtreme;
