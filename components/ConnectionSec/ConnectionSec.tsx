import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import styled from "@emotion/styled";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const ConnectionSecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0 0;
  background: #fff;
  height: 952px;
  .conBack {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 564px;
  }
  .sec_hd {
    position: relative;
    z-index: 2;
    .left_txt {
      width: calc(100% - 400px);
    }
    h2 {
      font-size: 58px;
      color: #041724;
      font-weight: 400;
    }
    span {
      display: block;
      font-weight: 700;
      font-size: 128px;
      line-height: 1;
      text-transform: uppercase;
      background: linear-gradient(272.65deg, #ffffff 31.8%, #00baff 79.28%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    p {
      max-width: 404px;
      color: #4f5c65;
    }
  }
`;

const ConnectionSec = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content,
  section_subtitle_one
}: ICommonProductSection) => {
  return (
    <ConnectionSecWrapper>
      <Image
        src={String(section_background_image)}
        alt="conBack"
        width={1600}
        height={564}
        className="conBack"
      />
      <Container fixed>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="sec_hd"
        >
          <Box className="left_txt">
            <Typography variant="h2">
              {String(section_title)}{" "}
              <strong>{String(section_subtitle)}</strong>
            </Typography>
            <Typography variant="caption">
              {String(section_subtitle_one)}
            </Typography>
          </Box>
          <Typography variant="body1">{section_content}</Typography>
        </Stack>
      </Container>
    </ConnectionSecWrapper>
  );
};

export default ConnectionSec;
