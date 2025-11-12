import { Box, BoxProps, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const CoreToEveryThingStyled = styled(Box)`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    z-index: 1;
      object-fit: cover;
    .core_content {
      max-width: 483px;
      h2 {
        line-height: 1.3;
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

interface ICoreToEveryThingProps extends BoxProps{
  bgImg:string
  bgText?:string
}

const CoreToEveryThing = ({bgImg,bgText,...props}:ICoreToEveryThingProps) => {
  return (
    <CoreToEveryThingStyled {...props}>
      <figure>
        <Image
          src={bgImg}
          alt="core_to_everything"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <CommonHeader mainTitle="Core to everything" />
            <Typography>
              {bgText || ' Processors that are highly responsive and reliable, handling demanding creative applications with ease.'}
             
            </Typography>
          </Box>
        </Container>
      </Box>
    </CoreToEveryThingStyled>
  );
};

export default CoreToEveryThing;
