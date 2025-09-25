/* eslint-disable sort-imports */
import assest from "@/json/assest";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

export const DisplaySecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 900px;
  .displayBack {
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
    h2 {
      color: #fff;
      font-weight: 400;
    }
    span {
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
    }
    p{
        max-width: 370px;
        color: #fff;
    }
  }
`;
const DisplaySec = () => {
  return (
    <DisplaySecWrapper>
      <Image
        src={assest.displayBack}
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
              Three <br/> <strong>independent</strong>
            </Typography>
            <Typography variant="caption">displays</Typography>
          </Box>
          <Typography variant="body1">
            The seamless transition between displays ensures a more efficient
            workflow without the hassle of constantly switching tabs or windows.
          </Typography>
        </Stack>
      </Container>
    </DisplaySecWrapper>
  );
};

export default DisplaySec;
