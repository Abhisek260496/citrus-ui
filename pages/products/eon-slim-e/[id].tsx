import { prodcutMediaUrl } from "@/api/endpoints";
import { getSingleProduct } from "@/api/functions/cms.api";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import EasySec from "@/components/EasySec/EasySec";
import EonSlimBanner from "@/components/EonSlimBanner/EonSlimBanner";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import TwoIndependentDisplay from "@/components/TwoIndependentDisplay/TwoIndependentDisplay";
import UltraBg from "@/components/UltraBg/UltraBg";
import assest from "@/json/assest";
import { productList2 } from "@/json/dummy";
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

  // useEffect(() => {
  //   if (!singleProductLoading && singleProductData) {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // }, [singleProductLoading, singleProductData]);

  console.log(singleProductData, "singleProductData");
  return (
    <Wrapper>
      {singleProductLoading ? (
        <Loader />
      ) : (
        <>
          <EonSlimBanner
            bannerImage={
              singleProductData?.banner_background_img
                ? prodcutMediaUrl(
                    singleProductData?.banner_background_img as string
                  )
                : assest?.eonSlimBannerBg
            }
            productImage={prodcutMediaUrl(
              singleProductData?.product_img as string
            )}
            bannerText={singleProductData?.product_banner_description}
          />
          <CoreToEveryThing
            bgImg={assest?.eon_slim_e_core_to_everything}
            bgText="A power-efficient & budget-friendly quad-core processor ideal for smooth multitasking and everyday computing."
          />
          <TwoIndependentDisplay
            bgImg={assest?.two_independent_displays_bg}
            mainTitle="independent"
            subTitle="two"
            description="The seamless transition between displays ensures a more efficient workflow without the hassle of constantly switching tabs or windows."
          />
          <EasySec />
          <UltraBg />
          <RelatedProducts productList={productList2} />
        </>
      )}
    </Wrapper>
  );
};

export default Index;
