import { Box, BoxProps, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const CoreToEveryThingStyled = styled(Box)<{isFullWidth?:boolean}>`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    z-index: 1;
      object-fit: cover;
    .core_content {
      max-width:${({isFullWidth})=> isFullWidth ? "100%" : "483px"}  ;
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
  bgText?:string;
  isFullWidth?:boolean;
  isReversed?:boolean;
  subTitle?:string;
  mainTitle?:string;
}

const CoreToEveryThing = ({bgImg,bgText,isFullWidth,subTitle,isReversed,mainTitle,...props}:ICoreToEveryThingProps) => {
  return (
    <CoreToEveryThingStyled isFullWidth={isFullWidth} {...props}>
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
            <CommonHeader mainTitle={mainTitle ||"Core to everything" } subTitle={subTitle} isReversed={isReversed} />
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
