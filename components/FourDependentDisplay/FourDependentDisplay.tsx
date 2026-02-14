import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const FourDependentDisplayStyled = styled(Box)`
  position: relative;
  @media (max-width: 599px) {
    padding: 50px 0;
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
    }
  }
  figure {
    @media (max-width: 899px) {
      height: 450px;
    }
    @media (max-width: 599px) {
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 1;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    height: calc(100% - 200px);
    z-index: 2;
    @media (max-width: 599px) {
      position: relative;
      z-index: 3;
      top: 0;
    }
    .MuiContainer-root {
      height: 100%;
    }
    .core_content {
      position: relative;
      height: 100%;
    }
    h2 {
      max-width: 533px;
      @media (max-width: 599px) {
        max-width: none;
        margin-bottom: 15px;
      }
    }
    p {
      position: absolute;
      bottom: 0;
      right: 0;
      max-width: 522px;
      @media (max-width: 899px) {
        max-width: 100%;
      }
      @media (max-width: 599px) {
        position: static;
        max-width: none;
      }
    }
  }
`;

const FourDependentDisplay = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content,
  section_subtitle_one
}: ICommonProductSection) => {
  return (
    <FourDependentDisplayStyled>
      <figure>
        <Image
          src={String(section_background_image)}
          alt="core_to_everything"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <CommonHeader
              mainTitle={`${String(section_subtitle)} ${String(
                section_subtitle_one
              )}`}
              subTitle={String(section_title)}
            />
            <Typography>{section_content}</Typography>
          </Box>
        </Container>
      </Box>
    </FourDependentDisplayStyled>
  );
};

export default FourDependentDisplay;
