import { prodcutMediaUrl } from "@/api/endpoints";
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, BoxProps, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const CommunicativeStyled = styled(Box)`
  position: relative;
  .independent_wrapper {
    position: absolute;
    left: 0;
    top: 120px;
    width: 100%;
    z-index: 1;

    @media (max-width: 899px) {
      top: 70px;
    }

    @media (max-width: 599px) {
      top: 30px;
    }
    h2 {
      margin-bottom: 25px;
      max-width: 811px;
      line-height: 1.2;
    }
    p {
      max-width: 335px;
      margin-left: auto;
      margin-right: 280px;
      @media (max-width: 899px) {
        max-width: 100%;
        margin-right: 0;
        margin-left: 0;
      }
    }
  }
  figure {
    @media (max-width: 599px) {
      height: 350px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

interface ICommunicativeProps extends BoxProps {
  banner_bg: string;
  description: string;
}

const Communicative = ({
  banner_bg,
  description,
  section_title,
  section_subtitle,
  section_subtitle_one,
  ...props
}: ICommunicativeProps & ICommonProductSection) => {
  return (
    <CommunicativeStyled {...props}>
      <figure>
        <Image
          src={prodcutMediaUrl(banner_bg)}
          alt="coummunicative_wire"
          width={1920}
          height={900}
        />
      </figure>
      <Box className="independent_wrapper">
        <Container fixed>
          <CommonHeader
            mainTitle={`${section_subtitle as string} ${String(
              section_subtitle_one
            )}`}
            subTitle={`${section_title as string}`}
          />
          <Typography>
            {description}
            {/* When uptime matters and Wi-Fi wavers, the serial stays solid.
            Simple, stable & reliable route of communication notably from PC to
            industrial controllers, sensors, routers and PoS systems. */}
          </Typography>
        </Container>
      </Box>
    </CommunicativeStyled>
  );
};

export default Communicative;
