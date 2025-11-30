import { prodcutMediaUrl } from "@/api/endpoints";
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const DualStorageStyled = styled(Box)`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    z-index: 1;
    .core_content {
      max-width: 858px;
      text-align: center;
      margin: 0 auto;
      h2 {
        line-height: 1.3;
      }
    }
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const DualStorage = ({
  section_background_image,
  section_image,
  section_content,
  section_subtitle,
  section_title,
  section_video
}: ICommonProductSection) => {
  return (
    <DualStorageStyled>
      <figure>
        <Image
          src={prodcutMediaUrl(section_image as string)}
          alt="dual_storage_bg"
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
    </DualStorageStyled>
  );
};

export default DualStorage;
