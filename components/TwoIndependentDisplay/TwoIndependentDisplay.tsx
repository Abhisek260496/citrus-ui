import {
  Box,
  BoxProps,
  Container,
  Stack,
  Typography,
  styled
} from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const TwoIndependentDisplayStyled = styled(Box)`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    z-index: 1;
    @media (max-width: 899px) {
      top: 60px;
    }
    @media (max-width: 599px) {
      top: 30px;
    }
    .core_content {
      @media (max-width: 1499px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }
      .cmn_header {
        max-width: 483px;
      }
      h2 {
        line-height: 1.3;
      }
      p {
        max-width: 333px;
        margin-left: auto;
        @media (max-width: 1499px) {
          margin-left: 0;
          max-width: 100%;
        }
      }
    }
  }
  figure {
    @media (max-width: 599px) {
      height: 350px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

interface ITwoIndependentDisplayProps extends BoxProps {
  bgImg: string;
  mainTitle: string;
  subTitle: string;
  description: string;
  displayText?: string;
}

const TwoIndependentDisplay = ({
  bgImg,
  description,
  mainTitle,
  subTitle,
  displayText,
  ...props
}: ITwoIndependentDisplayProps) => {
  return (
    <TwoIndependentDisplayStyled {...props}>
      <figure>
        <Image
          src={bgImg}
          alt="two_independent_displays_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="core_content"
          >
            <Box>
              <CommonHeader
                mainTitle={mainTitle}
                subTitle={subTitle}
                className="cmn_header"
              />
              <Typography variant="h2" className="gradient_header">
                {displayText}
              </Typography>
            </Box>
            <Typography
              dangerouslySetInnerHTML={{
                __html: description
              }}
            />
          </Stack>
        </Container>
      </Box>
    </TwoIndependentDisplayStyled>
  );
};

export default TwoIndependentDisplay;
