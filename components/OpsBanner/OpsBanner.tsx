import assest from "@/json/assest";
import { Box, styled } from "@mui/material";
import Image from "next/image";

const OpsBannerStyled = styled(Box)`
  figure {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const OpsBanner = () => {
  return (
    <OpsBannerStyled>
      <figure>
        <Image
          src={assest?.ops_banner}
          alt="ops banner"
          width={1920}
          height={1080}
        />
      </figure>
    </OpsBannerStyled>
  );
};

export default OpsBanner;
