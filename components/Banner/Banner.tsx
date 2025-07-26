import assest from "@/json/assest";
import { BannerStyled } from "@/styles/styledComponents/BannerStyled";
import Image from "next/image";

const Banner = () => {
  return (
    <BannerStyled>
      <figure>
        <Image
          src={assest?.bannerImage}
          alt="banner"
          width={1600}
          height={724}
        />
      </figure>
    </BannerStyled>
  );
};

export default Banner;
