import assest from "@/json/assest";
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

const DualStorage = () => {
  return (
    <DualStorageStyled>
      <figure>
        <Image
          src={assest.dual_storage_bg}
          alt="dual_storage_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <CommonHeader subTitle="Dual " mainTitle="Storage" />
            <Typography>
              Dual storage with NVMe SSD/ 2.5” SATA 3 HDD optimizing both
              performance and storage capacity backed by PCIe 4.0 for
              significantly higher data transfer speeds.
            </Typography>
          </Box>
        </Container>
      </Box>
    </DualStorageStyled>
  );
};

export default DualStorage;
