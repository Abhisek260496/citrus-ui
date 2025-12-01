/* eslint-disable sort-imports */
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

export const LanSecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 900px;
  .lanBack {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 900px;
  }
  .sec_hd {
    position: relative;
    z-index: 2;
    h2 {
      font-size: 120px;
      font-weight: 400;
      color: #041724;
    }
    p {
      color: #4f5c65;
      max-width: 534px;
    }
  }
`;

const LanSec = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content
}: ICommonProductSection) => {
  return (
    <LanSecWrapper>
      <Image
        src={String(section_background_image)}
        alt="lanBack"
        width={1600}
        height={900}
        className="lanBack"
      />
      <Container fixed>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="sec_hd"
        >
          <Typography variant="h2">
            {String(section_title)} <strong>{String(section_subtitle)}</strong>
          </Typography>
          <Typography variant="body1">{section_content}</Typography>
        </Stack>
      </Container>
    </LanSecWrapper>
  );
};

export default LanSec;
