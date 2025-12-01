import { prodcutMediaUrl } from "@/api/endpoints";
import { getSingleProduct } from "@/api/functions/cms.api";
import DualStorage from "@/components/DualStorage/DualStorage";
import HighBandwidthSec from "@/components/HighBandwidthSec/HighBandwidthSec";
import IntelGraphicSec from "@/components/IntelGraphicSec/IntelGraphicSec";
import OpsBanner from "@/components/OpsBanner/OpsBanner";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import UltraBg from "@/components/UltraBg/UltraBg";
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

  return (
    <Wrapper>
      {singleProductLoading ? (
        <Loader />
      ) : (
        <>
          <OpsBanner />
          <IntelGraphicSec
            section_title={singleProductData?.sections[0]?.section_title}
            section_subtitle={singleProductData?.sections[0]?.section_subtitle}
            section_content={singleProductData?.sections[0]?.section_content}
            section_image={prodcutMediaUrl(
              singleProductData?.sections[0]?.section_background_image
            )}
          />
          <HighBandwidthSec
            section_title={singleProductData?.sections[1]?.section_title}
            section_subtitle={singleProductData?.sections[1]?.section_subtitle}
            section_content={singleProductData?.sections[1]?.section_content}
            section_image={prodcutMediaUrl(
              singleProductData?.sections[1]?.section_background_image
            )}
          />
          <UltraBg
            section_background_image={
              singleProductData?.sections[3]?.section_background_image
            }
            section_content={singleProductData?.sections[3]?.section_content}
          />
          <DualStorage
            section_title={singleProductData?.sections[2]?.section_title}
            section_subtitle={singleProductData?.sections[2]?.section_subtitle}
            section_content={singleProductData?.sections[2]?.section_content}
            section_image={
              singleProductData?.sections[2]?.section_background_image
            }
          />

          {singleProductData?.related_products?.length ? (
            <RelatedProducts
              related_products={singleProductData?.related_products}
            />
          ) : null}
        </>
      )}
    </Wrapper>
  );
};

export default Index;
