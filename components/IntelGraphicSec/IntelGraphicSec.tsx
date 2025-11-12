import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const IntelGraphicSecStyled = styled(Box)``;

const IntelGraphicSec = () => {
  return (
    <IntelGraphicSecStyled className="cmn_gap cmn_gap_btm">
      <Container fixed>
        <Box
          sx={{
            maxWidth: "950px",
            margin: "0 auto 40px auto",
            textAlign: "center"
          }}
        >
          <CommonHeader
            mainTitle="Intel Iris Xe"
            subTitle=" Graphics"
            sx={{
              marginBottom: "10px"
            }}
            isReversed
          />
          <Typography>
            Enhanced multi-tasking, vibrant visuals & powerful graphics all
            driven by self-equipped, dedicated Intel Iris XE Graphics/ Capture
            card to maximise efficiency and conserve energy.
          </Typography>
        </Box>
      </Container>
      <figure>
        <Image
          src={assest?.intel_iris_graphics}
          alt="intel_iris_graphics"
          width={1920}
          height={900}
        />
      </figure>
    </IntelGraphicSecStyled>
  );
};

export default IntelGraphicSec;
