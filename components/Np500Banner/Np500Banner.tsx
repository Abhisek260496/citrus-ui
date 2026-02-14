import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

const Np500BannerStyled = styled(Box)`
  position: relative;
  .np500_banner_txt {
    position: absolute;
    right: 0;
    bottom: 100px;
    z-index: 1;
    width: 100%;
    @media (max-width: 1199px) {
      bottom: 80px;
    }
    @media (max-width: 899px) {
      bottom: 40px;
    }
    @media (max-width: 599px) {
      bottom: 20px;
    }
    .np500_content {
      max-width: 563px;
      margin-left: auto;
      h1 {
        margin-bottom: 17px;
        font-size: 100px;

        @media (max-width: 1199px) {
          font-size: 80px;
        }
        @media (max-width: 899px) {
          font-size: 60px;
        }
        @media (max-width: 599px) {
          font-size: 40px;
          margin-bottom: 10px;
        }
      }
    }
  }
  figure {
    @media (max-width: 899px) {
      height: 500px;
    }
    @media (max-width: 599px) {
      height: 300px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Np500Banner = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content,
  section_image
}: ICommonProductSection) => {
  return (
    <Np500BannerStyled>
      <figure>
        <Image
          src={section_background_image as string}
          alt="np500_banner"
          width={1920}
          height={810}
        />
      </figure>
      <Box className="np500_banner_txt">
        <Container fixed>
          <Box className="np500_content">
            <Typography variant="h1">{section_title}</Typography>
            <Typography>{section_content}</Typography>
          </Box>
        </Container>
      </Box>
    </Np500BannerStyled>
  );
};

export default Np500Banner;
