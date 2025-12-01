/* eslint-disable sort-imports */
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";

export const HandelSecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 900px;
  .handelBack {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 900px;
    z-index: 1;
  }
  .sec_hd {
    position: relative;
    z-index: 2;
    max-width: 840px;
    h2 {
      font-weight: 400;
      color: #fff;
      margin-bottom: 30px;
      line-height: 1.2;
    }
    p {
      color: #fff;
    }
  }
`;

const HandelSec = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content
}: ICommonProductSection) => {
  return (
    <HandelSecWrapper>
      <Image
        src={String(section_background_image)}
        alt="handelBack"
        width={1600}
        height={900}
        className="handelBack"
      />
      <Container fixed>
        <Box className="sec_hd">
          <Typography variant="h2">
            {String(section_title)}
            <strong>{String(section_subtitle)}</strong>
          </Typography>
          <Typography variant="body1">{section_content}</Typography>
        </Box>
      </Container>
    </HandelSecWrapper>
  );
};

export default HandelSec;
