import CommonHeader from "@/components/CommonHeader/CommonHeader";
import SupportSection from "@/components/SupportSection/SupportSection";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

const SupportBannerStyled = styled(Box)`
  position: relative;
  .banner_wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    .banner_txt {
      max-width: 700px;
      margin-left: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 1199px) {
        align-items: flex-end;
      }
      @media (max-width: 599px) {
        text-align: right;
      }

      h2 {
        font-size: 100px;
        color: #1a242c;
        text-transform: capitalize;
        margin-bottom: 10px;
        @media (max-width: 1199px) {
          font-size: 80px;
        }
        @media (max-width: 899px) {
          font-size: 60px;
        }
        @media (max-width: 599px) {
          font-size: 40px;
        }
      }
      p {
        font-size: 30px;
        color: #1a242c;
        @media (max-width: 1199px) {
          font-size: 25px;
        }
        @media (max-width: 899px) {
          font-size: 22px;
        }
        @media (max-width: 599px) {
          font-size: 20px;
        }
      }
    }
  }
  figure {
    height: 700px;

    @media (max-width: 1199px) {
      height: 600px;
    }
    @media (max-width: 899px) {
      height: 500px;
    }
    @media (max-width: 599px) {
      height: 350px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Index = () => {
  return (
    <Wrapper>
      <SupportBannerStyled>
        <figure>
          <Image
            src={assest?.support_banner_bg}
            alt="support_banner_bg"
            width={1600}
            height={900}
          />
        </figure>
        <Box className="banner_wrapper">
          <Container fixed>
            <Box className="banner_txt">
              <CommonHeader mainTitle="Support" />
              <Typography>
                We’re Here to answer any question you have
              </Typography>
            </Box>
          </Container>
        </Box>
      </SupportBannerStyled>
      <SupportSection />
    </Wrapper>
  );
};

export default Index;
