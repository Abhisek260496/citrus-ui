import assest from "@/json/assest";
import { ExclusiveStyled } from "@/styles/styledComponents/ExclusiveStyled";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const Exclusive = () => {
  return (
    <ExclusiveStyled className="cmn_gap cmn_gap_top">
      <Container fixed>
        <CommonHeader
          mainTitle="360"
          subTitle="Exclusive"
          degree_val="0"
          sub_break_title="view"
        />
        <Box className="exclusive_Section">
          <Typography variant="h3" className="water_mark">
            3600 view
          </Typography>
          <figure>
            <Image
              src={assest?.exclusive_img}
              alt="exclusive_img"
              width={900}
              height={500}
            />
          </figure>
          <Image
            src={assest?.rotate_img}
            alt="rotate_img"
            width={970}
            height={110}
            className="rotate_img"
          />
          <Button disableRipple className="btm_title">
            Click activate 3600 view
          </Button>
        </Box>
      </Container>
    </ExclusiveStyled>
  );
};

export default Exclusive;
