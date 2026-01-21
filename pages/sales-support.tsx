import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButton from "@/ui/Buttons/CustomButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { Box, Container, Typography, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";

const SalesSupportStyled = styled(Box)`
  background-color: #fff;
  .banner_sec {
    position: relative;
    .banner_text {
      position: absolute;
      left: 0;
      bottom: 100px;
      width: 100%;
      z-index: 10;
      text-align: center;
      h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 83px;
        letter-spacing: 0.00390625em;
        text-transform: capitalize;
        margin-bottom: 20px;
      }
    }
    figure {
      height: 820px;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 100%
        );
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 9;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .form_inner {
    border: 1px solid #0c0d0c;
    border-radius: 30px;
    padding: 30px;
    p {
      color: #0c0d0c;
    }
  }
`;

const Index = () => {
  return (
    <Wrapper>
      <SalesSupportStyled>
        <Box className="banner_sec">
          <figure>
            <Image
              src={assest?.sales_support}
              alt="sales_support"
              width={1920}
              height={1000}
            />
          </figure>
          <Box className="banner_text">
            <Container fixed>
              <Typography variant="h1">Sales Support</Typography>
              <Typography>Your Next Big Upgrade Starts Here</Typography>
            </Container>
          </Box>
        </Box>

        <Box className="form_sec cmn_gap">
          <Container fixed>
            <Box
              className="form_inner"
              sx={{ maxWidth: "712px", margin: "0 auto" }}
            >
              {" "}
              <form action="">
                <Grid2 container spacing={2}>
                  <Grid2 md={6} xs={12}>
                    <Typography variant="body2" mb={1}>
                      Name
                    </Typography>
                    <CustomInput
                      placeholder="Enter Name "
                      isTypeTwo
                      fullWidth
                    />
                  </Grid2>
                  <Grid2 md={6} xs={12}>
                    <Typography variant="body2" mb={1}>
                      Contact No.
                    </Typography>
                    <CustomInput
                      placeholder="Enter Contact No."
                      isTypeTwo
                      fullWidth
                    />
                  </Grid2>
                  <Grid2 md={6} xs={12}>
                    <Typography variant="body2" mb={1}>
                      Company Name
                    </Typography>
                    <CustomInput
                      placeholder="Enter Company Name"
                      isTypeTwo
                      fullWidth
                    />
                  </Grid2>
                  <Grid2 md={6} xs={12}>
                    <Typography variant="body2" mb={1}>
                      Email Address
                    </Typography>
                    <CustomInput
                      placeholder="Enter Email Address"
                      isTypeTwo
                      fullWidth
                    />
                  </Grid2>

                  <Grid2 xs={12}>
                    <Typography variant="body2" mb={1}>
                      Mention your query
                    </Typography>
                    <CustomInput
                      placeholder="mention your query"
                      isTypeTwo
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </Grid2>

                  <Grid2 xs={12}>
                    <CustomButton isTypeTwo>Submit</CustomButton>
                  </Grid2>
                </Grid2>
              </form>
            </Box>
          </Container>
        </Box>
      </SalesSupportStyled>
    </Wrapper>
  );
};

export default Index;
