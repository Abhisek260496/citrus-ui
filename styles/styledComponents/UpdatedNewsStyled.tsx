import palette from "@/themes/palette";
import { Box, styled } from "@mui/material";

export const UpdatedNewsStyled = styled(Box)`
  .slick-slider {
    .slick-track {
      margin: 0 -15px;
    }
    .slick-slide {
      padding: 0 15px;
    }
    .slick-current {
      .powerfull_content {
        h3 {
          transform: translateY(-10px);
        }
        p {
          opacity: 1;
        }
      }
    }
  }
`;

export const EachUpdatedElementStyled = styled(Box)`
  background: linear-gradient(
    117.46deg,
    rgba(157, 162, 239, 0.1) -9.7%,
    rgba(1, 2, 20, 0.1) 106.97%
  );
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 20px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(135deg, #001545 0%, #00baff 100%);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    z-index: 1;
  }
  figure {
    height: 380px;
    margin-bottom: 24px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .updated_content {
    position: relative;
    z-index: 2;
    p {
      display: flex;
      align-items: center;
      margin-bottom: 13px;
      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
      }
    }
    h5 {
      min-height: 60px;
      a {
        color: inherit;
        &:hover {
          color: ${palette.text.primary};
        }
      }
    }
  }
`;
