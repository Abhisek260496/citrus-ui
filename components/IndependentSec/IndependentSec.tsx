/* eslint-disable sort-imports */
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";

export const IndependentWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 840px;

  @media (max-width: 1199px) {
    padding: 80px 0;
    height: 600px;
  }
  @media (max-width: 899px) {
    padding: 60px 0;
    height: 450px;
  }
  @media (max-width: 599px) {
    padding: 30px 0;
    height: 350px;
  }
  .independent_img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 840px;
    z-index: 1;
    @media (max-width: 1199px) {
      height: 100%;
    }
  }
  .sec_hd {
    text-align: center;
    z-index: 2;
    position: relative;

    h2 {
      color: #041724;
      font-weight: 400;
      margin-bottom: 15px;
    }
    p {
      color: #464646;
      max-width: 700px;
      margin: 0 auto;
    }
  }
`;

const IndependentSec = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content
}: ICommonProductSection) => {
  return (
    <IndependentWrapper>
      <Image
        src={section_background_image as string}
        alt="independentBackImg"
        width={1600}
        height={840}
        className="independent_img"
      />
      <Container fixed>
        <Box className="sec_hd">
          <Typography variant="h2">
            {section_title} <strong>{section_subtitle}</strong>
          </Typography>
          {/* <Typography variant="body1">{section_content}</Typography> */}
          <Typography
            dangerouslySetInnerHTML={{
              __html: section_content || ""
            }}
          />
        </Box>
      </Container>
    </IndependentWrapper>
  );
};

export default IndependentSec;
