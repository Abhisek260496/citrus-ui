import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Stack, Typography, styled } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const RigPlusBannerStyled = styled(Box)`
  position: relative;
  height: 1000px;

  @media (max-width: 1499px) {
    height: 700px;
  }
  @media (max-width: 1199px) {
    height: 600px;
  }
  @media (max-width: 899px) {
    height: 500px;
  }
  @media (max-width: 599px) {
    height: 450px;
  }

  .rig_plus_Bnrbg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    z-index: 1;
    .core_content {
      @media (max-width: 1199px) {
        flex-direction: column-reverse;
        align-items: flex-start;
      }
      h2 {
        line-height: 1.1;
        font-size: 107px;

        @media (max-width: 1199px) {
          font-size: 80px;
        }
        @media (max-width: 899px) {
          font-size: 50px;
        }
        @media (max-width: 599px) {
          font-size: 30px;
        }
      }
    }
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .core_fig {
    width: calc(100% - 620px);
    @media (max-width: 1199px) {
      max-width: 300px;
      width: 100%;
      margin: 0 auto 20px;
    }
  }
  .core_txt {
    width: 620px;
    @media (max-width: 1199px) {
      width: 100%;
    }
  }
`;

const RigPlusBanner = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content,
  section_image
}: ICommonProductSection) => {
  return (
    <RigPlusBannerStyled>
      <figure className="rig_plus_Bnrbg">
        <Image
          src={section_background_image as string}
          alt="rig_plus_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="flex-end"
            className="core_content"
          >
            <Box className="core_txt">
              <CommonHeader mainTitle={String(section_title)} />
              <Typography>{section_content}</Typography>
            </Box>
            <Box className="core_fig">
              <figure>
                <Image
                  src={section_image as string}
                  alt="rig_plus_img"
                  width={825}
                  height={510}
                />
              </figure>
            </Box>
          </Stack>
        </Container>
      </Box>
    </RigPlusBannerStyled>
  );
};

export default RigPlusBanner;
