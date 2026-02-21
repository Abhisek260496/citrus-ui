import { techSuppSubmit } from "@/api/functions/cms.api";
import useNotiStack from "@/hooks/useNotistack";
import { ITechnicalSalesPayload } from "@/interface/apiresp.interfaces";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButton from "@/ui/Buttons/CustomButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import Loader from "@/ui/Loader/Loder";
import {
  Box,
  Container,
  Stack,
  Typography,
  colors,
  styled
} from "@mui/material";
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
  const router = useRouter();
  const { toastSuccess, toastError } = useNotiStack();
  const {
    control,
    handleSubmit,
    // formState: { errors },
    // setValue,
    reset
  } = useForm<ITechnicalSalesPayload>({
    mode: "onChange",
    defaultValues: {
      customer_name: "",
      description: "",
      email: "",
      mobile_no: "",
      product_details: ""
    }
  });

  const { mutate: techSuppSubmitMutate, isLoading: techSuppSubmitLoading } =
    useMutation({
      mutationKey: ["techSuppSubmit"],
      mutationFn: (payload: ITechnicalSalesPayload) => techSuppSubmit(payload),

      onSuccess: (res) => {
        if (res?.status) {
          toastSuccess(res?.message || "Application submitted successfully");
          reset();
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

  const onSubmit = (payload: ITechnicalSalesPayload) => {
    techSuppSubmitMutate(payload);
  };

  return (
    <>
      {techSuppSubmitLoading && <Loader />}
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
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <Grid2 container spacing={2}>
                      <Grid2 md={6} xs={12}>
                        <Typography variant="body2" mb={1}>
                          Product Details
                          <span style={{ color: colors?.red?.[500] }}>*</span>
                        </Typography>

                        <Controller
                          name="product_details"
                          control={control}
                          rules={{ required: "Product Details is required" }}
                          render={({
                            field,
                            fieldState: { error, invalid }
                          }) => (
                            <CustomInput
                              {...field}
                              placeholder="Enter Product Details"
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
                          Customer Name
                          <span style={{ color: colors?.red?.[500] }}>*</span>
                        </Typography>

                        <Controller
                          name="customer_name"
                          control={control}
                          rules={{ required: "Customer Name is required" }}
                          render={({
                            field,
                            fieldState: { error, invalid }
                          }) => (
                            <CustomInput
                              {...field}
                              placeholder="Enter Customer Name"
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
                          Mobile No.
                          <span style={{ color: colors?.red?.[500] }}>*</span>
                        </Typography>

                        <Controller
                          name="mobile_no"
                          control={control}
                          rules={{
                            required: "Mobile Number is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Enter valid 10 digit mobile number"
                            }
                          }}
                          render={({
                            field,
                            fieldState: { error, invalid }
                          }) => (
                            <CustomInput
                              {...field}
                              placeholder="Enter Mobile No."
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
                          render={({
                            field,
                            fieldState: { error, invalid }
                          }) => (
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
                          render={({
                            field,
                            fieldState: { error, invalid }
                          }) => (
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
          </Box>
        </SalesSupportStyled>
      </Wrapper>
    </>
  );
};

export default Index;
