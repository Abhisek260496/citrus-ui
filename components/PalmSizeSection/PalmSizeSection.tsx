import { prodcutMediaUrl } from "@/api/endpoints";
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import assest from "@/json/assest";
import { Box, Container, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const PalmSizeSectionStyled = styled(Box)`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 160px;
    width: 100%;
    z-index: 1;
    @media (max-width: 899px) {
      top: 100px;
    }
    @media (max-width: 599px) {
      top: 30px;
    }
    .core_content {
      max-width: 858px;
      text-align: center;
      margin: 0 auto;
      h2 {
        line-height: 1.3;
      }
    }
  }
  figure {
    @media (max-width: 599px) {
      height: 350px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const PalmSizeSection = ({ ...props }: ICommonProductSection) => {
  return (
    <PalmSizeSectionStyled>
      <figure>
        <Image
          src={
            prodcutMediaUrl(props.section_image as string) ||
            assest.palm_size_bg
          }
          alt="core_to_everything"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <CommonHeader
              subTitle="Device"
              mainTitle="Palm-Sized "
              isReversed
            />
            <Box
              dangerouslySetInnerHTML={{
                __html: props?.section_content || ""
              }}
            />
          </Box>
        </Container>
      </Box>
    </PalmSizeSectionStyled>
  );
};

export default PalmSizeSection;
