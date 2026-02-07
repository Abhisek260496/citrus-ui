import { ourStoryMediaUrl } from "@/api/endpoints";
import palette from "@/themes/palette";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

const CSRBannerWrapper = styled(Box)`
  position: relative;
  min-height: 900px;
  height: 900px;
  @media (max-width: 899px) {
    min-height: auto;
    height: 700px;
  }
  @media (max-width: 599px) {
    height: 450px;
  }
  .banner_bg {
    width: 100%;
    height: 100%;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&1+0,0+100 */
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    z-index: 2;
  }
  .banner_wrapper {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    width: 100%;

    h1 {
      font-weight: 700;
      font-size: 65px;
      letter-spacing: 0.012207em;
      margin-bottom: 20px;
      @media (max-width: 1199px) {
        font-size: 55px;
      }
      @media (max-width: 899px) {
        font-size: 45px;
        margin-bottom: 15px;
      }
      @media (max-width: 599px) {
        font-size: 35px;
        margin-bottom: 10px;
      }
      span {
        color: ${palette.text.primary};
      }
    }
    p {
      font-size: 30px;
      @media (max-width: 899px) {
        font-size: 25px;
      }
      @media (max-width: 599px) {
        font-size: 22px;
      }
    }
  }
`;
interface ICSRBanner {
  banner_title?: string;
  banner_sub_title?: string;
  banner_content?: string;
  banner_bg_img?: string;
}

const CSRBanner = ({ ...props }: ICSRBanner) => {
  return (
    <CSRBannerWrapper>
      <figure className="banner_bg">
        <Image
          src={ourStoryMediaUrl(props?.banner_bg_img as string)}
          alt="csr_banner"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="banner_wrapper">
        <Container fixed>
          <Typography variant="h1">
            <Typography variant="caption">{props?.banner_title}</Typography>{" "}
            {props?.banner_sub_title}
          </Typography>
          <Typography>{props?.banner_content}</Typography>
        </Container>
      </Box>
    </CSRBannerWrapper>
  );
};

export default CSRBanner;
