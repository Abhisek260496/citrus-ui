import assest from "@/json/assest";
import { Box, Stack, Typography, styled } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const RigPlusBannerStyled = styled(Box)`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    z-index: 1;
    .core_content {
      h2 {
        line-height: 1.1;
        font-size: 107px;
      }
    }
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .core_fig {
    width: calc(100% - 620px);
  }
  .core_txt {
    width: 620px;
  }
`;

const RigPlusBanner = () => {
  return (
    <RigPlusBannerStyled>
      <figure>
        <Image
          src={assest.rig_plus_bg}
          alt="rig_plus_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="flex-end"
            className="core_content"
          >
            <Box className="core_txt">
              <CommonHeader mainTitle="RIG PLUS RUGGED Pc" />
              <Typography>Indoor or Outdoor, Toughness is its Ethos</Typography>
            </Box>
            <Box className="core_fig">
              <figure>
                <Image
                  src={assest.rig_plus_img}
                  alt="rig_plus_img"
                  width={825}
                  height={510}
                />
              </figure>
            </Box>
          </Stack>
        </Container>
      </Box>
    </RigPlusBannerStyled>
  );
};

export default RigPlusBanner;
