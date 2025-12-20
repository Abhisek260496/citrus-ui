/* eslint-disable sort-imports */
import { prodcutMediaUrl } from "@/api/endpoints";
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

export const EasySecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 1050px;
  @media (max-width: 1199px) {
    padding: 80px 0;
    height: 700px;
  }
  @media (max-width: 899px) {
    padding: 100px 0 100px;
    height: 100%;
  }
  @media (max-width: 599px) {
    padding: 80px 0 150px;
  }
  .easyBack {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    object-fit: cover;
  }
  .sec_hd {
    position: relative;
    z-index: 2;

    @media (max-width: 1199px) {
      flex-direction: column;
      align-items: flex-start;
    }
    h2 {
      font-weight: 400;
      color: #fff;
      line-height: 1.3;
    }
    p {
      color: #fff;
      max-width: 512px;
      @media (max-width: 1199px) {
        max-width: 100%;
      }
    }
  }
`;

const EasySec = ({ ...props }: ICommonProductSection) => {
  return (
    <EasySecWrapper>
      <Image
        src={prodcutMediaUrl(props?.section_background_image as string)}
        alt="easyBack"
        width={1600}
        height={910}
        className="easyBack"
      />
      <Container fixed>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="sec_hd"
        >
          <Typography variant="h2">
            Easy <br />
            <strong>Communicative</strong>
            <br /> Peripherals
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props?.section_content || ""
            }}
          />
        </Stack>
      </Container>
    </EasySecWrapper>
  );
};

export default EasySec;
