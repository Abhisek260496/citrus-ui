import { prodcutMediaUrl } from "@/api/endpoints";
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const NextGenConectivityStyled = styled(Box)`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    z-index: 1;
    .core_content {
      max-width: 483px;
      h2 {
        line-height: 1.3;
        margin-bottom: 20px;
      }
    }
  }
  figure {
    /* height: 860px; */
    img {
      width: 100%;
      height: 100%;
      /* object-fit: cover; */
    }
  }
`;

const NextGenConectivity = ({
  section_background_image,
  section_image,
  section_content,
  section_subtitle,
  section_title,
  section_video
}: ICommonProductSection) => {
  return (
    <NextGenConectivityStyled>
      <figure>
        <Image
          src={prodcutMediaUrl(section_background_image as string)}
          alt="next_gen_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <CommonHeader
              mainTitle={section_subtitle as string}
              subTitle={section_title as string}
            />
            <Typography>{section_content}</Typography>
          </Box>
        </Container>
      </Box>
    </NextGenConectivityStyled>
  );
};

export default NextGenConectivity;
