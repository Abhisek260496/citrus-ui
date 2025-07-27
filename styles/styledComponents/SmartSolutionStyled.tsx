import { Box, styled } from "@mui/material";

export const SmartSolutionStyled = styled(Box)`
  .slick-slider {
    .slick-track {
      margin: 0 -15px;
    }
    .slick-slide {
      padding: 0 15px;
    }
    .slick-current {
    }
  }
`;
export const EachSmartSolutionStyled = styled(Box)`
  position: relative;
  .powerfull_content {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 40px;
    h3 {
      transition: all 0.5s ease-in-out;
      transform: translateY(30px);
    }
    p {
      transition: all 0.5s ease-in-out;
      opacity: 0;
    }
  }
  figure {
    height: 600px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
    }
  }
  &:hover {
    .powerfull_content {
      h3 {
        transform: translateY(-10px);
      }
      p {
        opacity: 1;
      }
    }
  }
`;
