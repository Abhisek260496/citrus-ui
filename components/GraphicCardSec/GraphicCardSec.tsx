import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const GraphicCardSecStyled = styled(Box)`
  position: relative;
  .graphic_card_wrapper {
    position: absolute;
    left: 0;
    top: 120px;
    width: 100%;
    z-index: 1;
    h2 {
      margin-bottom: 25px;
      max-width: 1077px;
      line-height: 1.2;
    }
    p {
      max-width: 335px;
    }
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const GraphicCardSec = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content
}: ICommonProductSection) => {
  return (
    <GraphicCardSecStyled>
      <figure>
        <Image
          src={section_background_image as string}
          alt="graphic_card"
          width={1920}
          height={900}
        />
      </figure>
      <Box className="graphic_card_wrapper">
        <Container fixed>
          <CommonHeader
            mainTitle={String(section_title)}
            subTitle={section_subtitle as string}
          />
          <Typography
            dangerouslySetInnerHTML={{
              __html: section_content || ""
            }}
          />
        </Container>
      </Box>
    </GraphicCardSecStyled>
  );
};

export default GraphicCardSec;
