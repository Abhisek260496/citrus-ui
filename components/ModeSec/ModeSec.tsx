import { prodcutMediaUrl } from "@/api/endpoints";
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

export const ModeSecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  .modeBack {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    height: 100%;
    /* z-index: 1; */
    object-fit: contain;
  }
  .sec_hd {
    text-align: center;
    position: relative;
    z-index: 2;
    margin-bottom: 50px;
    h2 {
      color: #fff;
      font-weight: 400;
      margin-bottom: 15px;
    }
    p {
      color: #fff;
      max-width: 700px;
      margin: 0 auto;
    }
  }
  .modeImg {
    max-width: 792px;
    margin: 0 auto;
  }
`;

const ModeSec = ({ ...props }: ICommonProductSection) => {
  return (
    <ModeSecWrapper>
      <Container fixed sx={{ position: "relative", zIndex: 2 }}>
        <Box className="sec_hd">
          <Typography variant="h2">
            <strong>Centralised, Controlled</strong> & <strong>Secure</strong>{" "}
            mode of Computing
          </Typography>
          <Typography>{props?.section_content}</Typography>
        </Box>
        <figure>
          <Image
            src={prodcutMediaUrl(props.section_image as string)}
            alt="modeBack"
            width={792}
            height={495}
            className="modeBack"
          />
        </figure>
      </Container>
    </ModeSecWrapper>
  );
};

export default ModeSec;
