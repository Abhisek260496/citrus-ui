import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const IndependentDisplayStyled = styled(Box)`
  position: relative;
  .independent_wrapper {
    position: absolute;
    left: 0;
    top: 120px;
    width: 100%;
    z-index: 1;
    text-align: center;
    h2 {
      margin-bottom: 25px;
    }
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const IndependentDisplay = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content
}: ICommonProductSection) => {
  return (
    <IndependentDisplayStyled>
      <figure>
        <Image
          src={section_background_image as string}
          alt="independent_display"
          width={1920}
          height={900}
        />
      </figure>
      <Box className="independent_wrapper">
        <Container fixed>
          <CommonHeader
            mainTitle={section_title as string}
            subTitle={section_subtitle as string}
          />
          <Typography
            dangerouslySetInnerHTML={{
              __html: section_content || ""
            }}
          />
        </Container>
      </Box>
    </IndependentDisplayStyled>
  );
};

export default IndependentDisplay;
