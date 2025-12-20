/* eslint-disable sort-imports */
import { prodcutMediaUrl } from "@/api/endpoints";
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

export const DisplaySecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 900px;
  @media (max-width: 1199px) {
    padding: 80px 0;
    height: 700px;
  }
  @media (max-width: 899px) {
    padding: 60px 0;
    height: 100%;
  }
  @media (max-width: 599px) {
    padding: 30px 0;
  }
  .displayBack {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 900px;
    z-index: 1;
    @media (max-width: 1199px) {
      height: 700px;
    }
    @media (max-width: 899px) {
      height: 100%;
    }
  }
  .sec_hd {
    position: relative;
    z-index: 2;
    @media (max-width: 1199px) {
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
    }
    h2 {
      color: #fff;
      font-weight: 400;
    }
    .color_caption {
      line-height: 1;
      font-weight: 700;
      font-size: 158px;
      text-transform: uppercase;
      background: linear-gradient(272.65deg, #ffffff 31.8%, #00baff 79.28%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      text-shadow: 0px 15px 25px rgba(0, 0, 0, 0.25);
      @media (max-width: 1199px) {
        font-size: 118px;
      }
      @media (max-width: 899px) {
        font-size: 90px;
      }
      @media (max-width: 599px) {
        font-size: 70px;
      }
    }
    p {
      max-width: 370px;
      color: #fff;
      @media (max-width: 1199px) {
        max-width: 100%;
      }
    }
  }
`;
const DisplaySec = ({ ...props }: ICommonProductSection) => {
  return (
    <DisplaySecWrapper>
      <Image
        src={prodcutMediaUrl(props?.section_background_image as string)}
        alt="displayBack"
        width={1600}
        height={908}
        className="displayBack"
      />
      <Container fixed>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="sec_hd"
        >
          <Box>
            <Typography variant="h2">
              Three <br /> <strong>independent</strong>
            </Typography>
            <Typography variant="caption" className="color_caption">
              displays
            </Typography>
          </Box>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props?.section_content || ""
            }}
          />
        </Stack>
      </Container>
    </DisplaySecWrapper>
  );
};

export default DisplaySec;
