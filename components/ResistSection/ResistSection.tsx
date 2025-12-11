import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const ResistSectionStyled = styled(Box)`
  position: relative;
  min-height: 900px;
  figure {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .MuiContainer-root {
      height: 100%;
    }
    .core_content {
      position: relative;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 100px;
    }
    .core_content_txt {
      max-width: 1111px;
      text-align: center;
      h2 {
        /* max-width: 533px; */
        margin-bottom: 15px;
      }
      p {
        /* max-width: 522px; */
      }
    }
  }
`;

const ResistSection = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content,
  section_subtitle_one
}: ICommonProductSection) => {
  return (
    <ResistSectionStyled>
      <figure>
        <Image
          src={String(section_background_image)}
          alt="dual_lan_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <Box className="core_content_txt">
              <CommonHeader
                mainTitle={`${String(section_title)} ${String(
                  section_subtitle
                )}`}
                subTitle={String(section_subtitle_one)}
                className="gradient_header"
                sx={{
                  fontSize: "68px !important"
                }}
                isReversed
              />
              <Typography>{section_content}</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </ResistSectionStyled>
  );
};

export default ResistSection;
