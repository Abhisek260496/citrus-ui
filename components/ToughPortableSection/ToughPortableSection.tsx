/* eslint-disable react/no-unescaped-entities */
import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const ToughPortableSectionStyled = styled(Box)`
  position: relative;
  figure {
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

const ToughPortableSection = () => {
  return (
    <ToughPortableSectionStyled>
      <figure>
        <Image
          src={assest?.tough_portable_bg}
          alt="dual_lan_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <Box className="core_content_txt">
              <CommonHeader mainTitle=" & Portable" subTitle="Tough" />
              <Typography>
                Engineered for durability, this tough and compact Rugged PC
                features dust-resistant chassis that blocks out dust,
                maintaining optimal performance even in demanding harsh or
                industrial environments. Its outer shell is designed in order to
                protect internal hardware from impact, movement, and humidity,
                thereby delivering dependable operation in the field, all while
                being easy to carry and deploy wherever it's needed.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </ToughPortableSectionStyled>
  );
};

export default ToughPortableSection;
