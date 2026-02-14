import { prodcutMediaUrl } from "@/api/endpoints";
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import assest from "@/json/assest";
import { Box, Container, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const UltraBgStyled = styled(Box)`
  position: relative;
  @media (max-width: 599px) {
    padding: 25px 0;
  }
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 160px;
    width: 100%;
    z-index: 1;

    @media (max-width: 899px) {
      top: 120px;
    }

    @media (max-width: 599px) {
      top: 0;
      position: relative;
      z-index: 3;
    }
    .core_content {
      /* max-width: 858px; */
      text-align: center;
      margin: 0 auto;
      h2 {
        line-height: 1.3;
      }
      p {
        max-width: 988px;
        margin: 0 auto;
      }
    }
  }
  figure {
    position: relative;
    /* &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.5;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    } */
    @media (max-width: 599px) {
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const UltraBg = ({ ...props }: ICommonProductSection) => {
  return (
    <UltraBgStyled>
      <figure>
        <Image
          src={
            prodcutMediaUrl(props.section_background_image as string) ||
            assest.ultra_bg
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
              subTitle="Richer Visual Experience with"
              mainTitle=" 4K Ultra HD"
              //   isReversed
            />
            <Box
              dangerouslySetInnerHTML={{
                __html: props?.section_content || ""
              }}
            />
          </Box>
        </Container>
      </Box>
    </UltraBgStyled>
  );
};

export default UltraBg;
