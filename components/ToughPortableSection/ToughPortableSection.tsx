/* eslint-disable react/no-unescaped-entities */
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const ToughPortableSectionStyled = styled(Box)`
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
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
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

    @media (max-width: 899px) {
      top: 60px;
    }
    @media (max-width: 599px) {
      top: 0;
      position: relative;
      z-index: 3;
    }
    .MuiContainer-root {
      height: 100%;
    }
    .core_content {
      position: relative;
      height: 100%;
      display: flex;
      /* align-items: flex-end; */
      justify-content: center;
    }
    .core_content_txt {
      max-width: 1111px;
      text-align: center;
      h2 {
        /* max-width: 533px; */
        margin-bottom: 15px;
      }
      p {
        /* max-width: 522px; */
      }
    }
  }
`;

const ToughPortableSection = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content
}: ICommonProductSection) => {
  return (
    <ToughPortableSectionStyled>
      <figure>
        <Image
          src={String(section_background_image)}
          alt="dual_lan_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <Box className="core_content_txt">
              <CommonHeader
                mainTitle={String(section_subtitle)}
                subTitle={String(section_title)}
              />
              <Typography>{section_content}</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </ToughPortableSectionStyled>
  );
};

export default ToughPortableSection;
