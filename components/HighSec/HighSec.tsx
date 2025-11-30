/* eslint-disable sort-imports */
import { prodcutMediaUrl } from "@/api/endpoints";
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";

export const HighSecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 900px;
  .bandwithImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 900px;
    z-index: 1;
  }
  .sec_hd {
    text-align: center;
    position: relative;
    z-index: 2;
    h2 {
      color: #fff;
      font-weight: 400;
      margin-bottom: 15px;
    }
    p {
      color: #fff;
      max-width: 900px;
      margin: 0 auto;
    }
    span {
      font-size: 128px;
      font-weight: 700;
      line-height: 1;
    }
  }
`;

const HighSec = ({ ...props }: ICommonProductSection) => {
  return (
    <HighSecWrapper>
      <Image
        src={prodcutMediaUrl(props.section_background_image as string)}
        alt="bandwithImg"
        width={1600}
        height={987}
        className="bandwithImg"
      />
      <Container fixed>
        <Box className="sec_hd">
          <Typography variant="h2">High bandwidth interface with</Typography>
          <Typography variant="caption">DDR4</Typography>
          <Typography
            dangerouslySetInnerHTML={{
              __html: props?.section_content || ""
            }}
          />
        </Box>
      </Container>
    </HighSecWrapper>
  );
};

export default HighSec;
