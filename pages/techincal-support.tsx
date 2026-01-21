import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButton from "@/ui/Buttons/CustomButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";

const SalesSupportStyled = styled(Box)`
  background-color: #fff;
  .banner_sec {
    position: relative;
    .banner_text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      z-index: 10;
      h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 50.1px;
        letter-spacing: 0.0078125em;
        text-transform: capitalize;
        color: #0c0d0c;
      }
    }
    figure {
      height: 820px;
      position: relative;

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
              src={assest?.tech_support}
              alt="tech_support"
              width={1920}
              height={1000}
            />
          </figure>
          <Box className="banner_text">
            <Container fixed>
              <Box
                className="form_inner"
                sx={{
                  maxWidth: "712px",
                  margin: "0 auto",
                  backgroundColor: "#fff"
                }}
              >
                <Stack direction="row" alignItems="center" mb={4}>
                  <Image
                    src={assest?.texh_logo}
                    alt="texh_logo"
                    width={65}
                    height={65}
                  />
                  <Typography variant="h2">Technical Support</Typography>
                </Stack>
                <form action="">
                  <Grid2 container spacing={2}>
                    <Grid2 md={6} xs={12}>
                      <Typography variant="body2" mb={1}>
                        Product Details
                      </Typography>
                      <CustomInput
                        placeholder="Enter Product Details  "
                        isTypeTwo
                        fullWidth
                      />
                    </Grid2>
                    <Grid2 md={6} xs={12}>
                      <Typography variant="body2" mb={1}>
                        Customer Name
                      </Typography>
                      <CustomInput
                        placeholder="Enter Customer Name"
                        isTypeTwo
                        fullWidth
                      />
                    </Grid2>
                    <Grid2 md={6} xs={12}>
                      <Typography variant="body2" mb={1}>
                        Mobile No.
                      </Typography>
                      <CustomInput
                        placeholder="Enter Mobile No."
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
                        Vendor Name
                      </Typography>
                      <CustomInput
                        placeholder="Enter Vendor Name"
                        isTypeTwo
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
        </Box>
      </SalesSupportStyled>
    </Wrapper>
  );
};

export default Index;
