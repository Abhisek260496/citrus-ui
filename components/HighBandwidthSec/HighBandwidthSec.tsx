import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const HighBandwidthSecStyled = styled(Box)`
  position: relative;
  height: 900px;

  @media (max-width: 1199px) {
    height: 700px;
  }
  @media (max-width: 899px) {
    height: 500px;
  }
  @media (max-width: 599px) {
    height: 350px;
  }
  figure {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const HighBandwidthSec = ({
  section_image,
  section_content,
  section_subtitle,
  section_title
}: ICommonProductSection) => {
  return (
    <HighBandwidthSecStyled className="cmn_gap">
      <Container fixed>
        <Box
          sx={{
            maxWidth: "1170px",
            margin: "0 auto 40px auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            "& p": {
              maxWidth: "950px",
              margin: "0 auto"
            }
          }}
        >
          <CommonHeader
            mainTitle={String(section_subtitle)}
            subTitle={String(section_title)}
            sx={{
              marginBottom: "10px"
            }}
          />
          <Typography>{section_content}</Typography>
        </Box>
      </Container>
      <figure>
        <Image
          src={String(section_image)}
          alt="high_bandwidth_banner"
          width={1920}
          height={900}
        />
      </figure>
    </HighBandwidthSecStyled>
  );
};

export default HighBandwidthSec;
