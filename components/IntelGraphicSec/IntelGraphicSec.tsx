import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const IntelGraphicSecStyled = styled(Box)``;

const IntelGraphicSec = ({
  section_image,
  section_content,
  section_subtitle,
  section_title
}: ICommonProductSection) => {
  return (
    <IntelGraphicSecStyled className="cmn_gap cmn_gap_btm">
      <Container fixed>
        <Box
          sx={{
            maxWidth: "950px",
            margin: "0 auto 40px auto",
            textAlign: "center"
          }}
        >
          <CommonHeader
            mainTitle={`${String(section_title)} `}
            subTitle={String(section_subtitle)}
            sx={{
              marginBottom: "10px"
            }}
            isReversed
          />
          <Typography>{section_content}</Typography>
        </Box>
      </Container>
      <figure>
        <Image
          src={String(section_image)}
          alt="intel_iris_graphics"
          width={1920}
          height={900}
        />
      </figure>
    </IntelGraphicSecStyled>
  );
};

export default IntelGraphicSec;
