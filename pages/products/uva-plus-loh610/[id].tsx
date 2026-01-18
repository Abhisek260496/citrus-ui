import { prodcutMediaUrl } from "@/api/endpoints";
import { getSingleProduct } from "@/api/functions/cms.api";
import AccessSec from "@/components/AccessSec/AccessSec";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import DualStorage from "@/components/DualStorage/DualStorage";
import IndependentSec from "@/components/IndependentSec/IndependentSec";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import RicherSec from "@/components/RicherSec/RicherSec";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function Index() {
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
          <InnerBanner
            bannerVideo={prodcutMediaUrl(
              singleProductData?.product_banner_content as string
            )}
          />
          <CoreToEveryThing
            bgImg={prodcutMediaUrl(
              singleProductData?.sections[0]?.section_background_image
            )}
            mainTitle={singleProductData?.sections[0]?.section_title}
            bgText={singleProductData?.sections[0]?.section_content}
          />
          <IndependentSec
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[1]?.section_background_image
            )}
            section_title={singleProductData?.sections[1]?.section_title}
            section_subtitle={singleProductData?.sections[1]?.section_subtitle}
            section_content={singleProductData?.sections[1]?.section_content}
          />
          <DualStorage
            section_title={singleProductData?.sections[2]?.section_title}
            section_subtitle={singleProductData?.sections[2]?.section_subtitle}
            section_background_image={
              singleProductData?.sections[2]?.section_background_image
            }
            section_content={singleProductData?.sections[2]?.section_content}
            section_image={singleProductData?.sections[2]?.section_image}
          />
          <RicherSec
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[3]?.section_background_image
            )}
            section_title={singleProductData?.sections[3]?.section_title}
            section_subtitle={singleProductData?.sections[3]?.section_subtitle}
            section_content={singleProductData?.sections[3]?.section_content}
          />
          <AccessSec
            section_background_image={prodcutMediaUrl(
              singleProductData?.sections[4]?.section_background_image
            )}
            section_title={singleProductData?.sections[4]?.section_title}
            section_subtitle={singleProductData?.sections[4]?.section_subtitle}
            section_content={singleProductData?.sections[4]?.section_content}
            section_image_one={prodcutMediaUrl(
              String(singleProductData?.sections[4]?.section_image_one)
            )}
            section_image={prodcutMediaUrl(
              String(singleProductData?.sections[4]?.section_image)
            )}
            section_sub_title_two={
              singleProductData?.sections[4]?.section_sub_title_two
            }
            section_sub_title_one={
              singleProductData?.sections[4]?.section_sub_title_one
            }
          />
          <RelatedProducts
            related_products={singleProductData?.related_products}
          />
        </>
      )}
    </Wrapper>
  );
}
