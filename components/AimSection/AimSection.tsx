import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const AimSectionStyled = styled(Box)`
  position: relative;
  figure {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .aim_content {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    .aim_wrapper {
      width: 565px;
      margin-left: auto;
      p {
        margin-top: 25px;
      }
    }
  }
`;

const AimSection = () => {
  return (
    <AimSectionStyled>
      <figure>
        <Image
          src={assest?.aim_banner}
          alt="aim_banner"
          width={1600}
          height={1000}
        />
      </figure>
      <Box className="aim_content">
        <Container fixed>
          <Box className="aim_wrapper">
            <CommonHeader mainTitle=" AIM FOR" subTitle="WE" />
            <Typography>
              We strive to build upon our expertise to develop high-performance,
              eco-friendly computing solutions that not only drive innovation
              but also grow in harmony with nature. With an even greater zeal to
              push the boundaries of technology, we are committed to empowering
              businesses with enhanced eciency, unwavering reliability, and a
              future-focused approach to sustainability.
            </Typography>
          </Box>
        </Container>
      </Box>
    </AimSectionStyled>
  );
};

export default AimSection;
