import { prodcutMediaUrl } from "@/api/endpoints";
import { getSingleProduct } from "@/api/functions/cms.api";
import ConnectionSec from "@/components/ConnectionSec/ConnectionSec";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import EasySec from "@/components/EasySec/EasySec";
import HandelSec from "@/components/HandelSec/HandelSec";
import LanSec from "@/components/LanSec/LanSec";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import RigBanner from "@/components/RigBanner/RigBanner";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const Rig = () => {
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
          <RigBanner
            product_banner_content={prodcutMediaUrl(
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
          <HandelSec
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[1]?.section_background_image
            )}
            section_title={singleProductData?.sections[1]?.section_title}
            section_subtitle={singleProductData?.sections[1]?.section_subtitle}
            section_content={singleProductData?.sections[1]?.section_content}
          />
          <LanSec
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[2]?.section_background_image
            )}
            section_title={singleProductData?.sections[2]?.section_title}
            section_subtitle={singleProductData?.sections[2]?.section_subtitle}
            section_content={singleProductData?.sections[2]?.section_content}
          />
          <EasySec
            section_background_image={
              singleProductData?.sections[3]?.section_background_image
            }
            section_content={singleProductData?.sections[3]?.section_content}
          />
          <ConnectionSec
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[4]?.section_background_image
            )}
            section_title={singleProductData?.sections[4]?.section_title}
            section_subtitle={singleProductData?.sections[4]?.section_subtitle}
            section_subtitle_one={
              singleProductData?.sections[4]?.section_subtitle_one
            }
            section_content={singleProductData?.sections[4]?.section_content}
          />
          <RelatedProducts
            related_products={singleProductData?.related_products}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Rig;
