import { salesSuppSubmit } from "@/api/functions/cms.api";
import useNotiStack from "@/hooks/useNotistack";
import { ISalesSuppPayload } from "@/interface/apiresp.interfaces";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButton from "@/ui/Buttons/CustomButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import Loader from "@/ui/Loader/Loder";
import { Box, Container, Typography, colors, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";

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
  const router = useRouter();
  const { toastSuccess, toastError } = useNotiStack();
  const {
    control,
    handleSubmit
    // formState: { errors },
    // setValue,
    // reset
  } = useForm<ISalesSuppPayload>({
    mode: "onChange",
    defaultValues: {
      company_name: "",
      contact_no: "",
      description: "",
      email: "",
      name: ""
    }
  });

  const { mutate: salesSuppSubmitMutate, isLoading: salesSuppSubmitLoading } =
    useMutation({
      mutationKey: ["salesSuppSubmit"],
      mutationFn: (payload: ISalesSuppPayload) => salesSuppSubmit(payload),

      onSuccess: (res) => {
        if (res?.status) {
          toastSuccess(res?.message || "Application submitted successfully");
          router.push("/support");
        }
      },

      onError: (err: any) => {
        if (err?.response?.data?.errors) {
          Object.values(err.response.data.errors).forEach((msg: any) => {
            toastError(String(msg));
          });
        } else {
          toastError(
            err?.response?.data?.message ||
              "Submission failed. Please try again."
          );
        }
      }
    });

  const onSubmit = (data: ISalesSuppPayload) => {
    console.log("Sales Support Payload:", data);
    salesSuppSubmitMutate(data);
  };
  return (
    <>
      {salesSuppSubmitLoading && <Loader />}
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
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <Grid2 container spacing={2}>
                    <Grid2 md={6} xs={12}>
                      <Typography variant="body2" mb={1}>
                        Name
                        <span style={{ color: colors?.red?.[500] }}>*</span>
                      </Typography>

                      <Controller
                        name="name"
                        control={control}
                        rules={{ required: "Name is required" }}
                        render={({ field, fieldState: { error, invalid } }) => (
                          <CustomInput
                            {...field}
                            placeholder="Enter Name"
                            isTypeTwo
                            fullWidth
                            error={invalid}
                            helperText={error?.message}
                          />
                        )}
                      />
                    </Grid2>
                    <Grid2 md={6} xs={12}>
                      <Typography variant="body2" mb={1}>
                        Contact No.
                        <span style={{ color: colors?.red?.[500] }}>*</span>
                      </Typography>

                      <Controller
                        name="contact_no"
                        control={control}
                        rules={{
                          required: "Contact Number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter valid 10 digit contact number"
                          }
                        }}
                        render={({ field, fieldState: { error, invalid } }) => (
                          <CustomInput
                            {...field}
                            placeholder="Enter Contact No."
                            isTypeTwo
                            fullWidth
                            error={invalid}
                            helperText={error?.message}
                          />
                        )}
                      />
                    </Grid2>
                    <Grid2 md={6} xs={12}>
                      <Typography variant="body2" mb={1}>
                        Company Name
                      </Typography>

                      <Controller
                        name="company_name"
                        control={control}
                        render={({ field }) => (
                          <CustomInput
                            {...field}
                            placeholder="Enter Company Name"
                            isTypeTwo
                            fullWidth
                          />
                        )}
                      />
                    </Grid2>
                    <Grid2 md={6} xs={12}>
                      <Typography variant="body2" mb={1}>
                        Email Address
                        <span style={{ color: colors?.red?.[500] }}>*</span>
                      </Typography>

                      <Controller
                        name="email"
                        control={control}
                        rules={{
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter valid email address"
                          }
                        }}
                        render={({ field, fieldState: { error, invalid } }) => (
                          <CustomInput
                            {...field}
                            placeholder="Enter Email Address"
                            isTypeTwo
                            fullWidth
                            error={invalid}
                            helperText={error?.message}
                          />
                        )}
                      />
                    </Grid2>

                    <Grid2 xs={12}>
                      <Typography variant="body2" mb={1}>
                        Description
                        <span style={{ color: colors?.red?.[500] }}>*</span>
                      </Typography>

                      <Controller
                        name="description"
                        control={control}
                        rules={{
                          required: "Description is required",
                          minLength: {
                            value: 10,
                            message:
                              "Description must be at least 10 characters"
                          }
                        }}
                        render={({ field, fieldState: { error, invalid } }) => (
                          <CustomInput
                            {...field}
                            placeholder="Enter Description"
                            isTypeTwo
                            multiline
                            rows={4}
                            fullWidth
                            error={invalid}
                            helperText={error?.message}
                          />
                        )}
                      />
                    </Grid2>

                    <Grid2 xs={12}>
                      <CustomButton isTypeTwo type="submit">
                        Submit
                      </CustomButton>
                    </Grid2>
                  </Grid2>
                </form>
              </Box>
            </Container>
          </Box>
        </SalesSupportStyled>
      </Wrapper>
    </>
  );
};

export default Index;
