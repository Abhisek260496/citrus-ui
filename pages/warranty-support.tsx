import { warrantySuppSubmit } from "@/api/functions/cms.api";
import useNotiStack from "@/hooks/useNotistack";
import { IWarrantySuppPayload } from "@/interface/apiresp.interfaces";
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
      left: 0;
      top: 50px;
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
      /* &::after {
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
      } */
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
  } = useForm<IWarrantySuppPayload>({
    mode: "onChange",
    defaultValues: {
      date_of_purchase: "",
      description: "",
      email: "",
      product_details: "",
      serial_no: ""
    }
  });

  const {
    mutate: warrantySuppSubmitMutate,
    isLoading: warrantySuppSubmitLoading
  } = useMutation({
    mutationKey: ["warrantySuppSubmit"],
    mutationFn: (payload: IWarrantySuppPayload) => warrantySuppSubmit(payload),

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
          err?.response?.data?.message || "Submission failed. Please try again."
        );
      }
    }
  });

  const onSubmit = (payload: IWarrantySuppPayload) => {
    warrantySuppSubmitMutate(payload);
  };
  return (
    <>
      {warrantySuppSubmitLoading && <Loader />}
      <Wrapper>
        <SalesSupportStyled>
          <Box className="banner_sec">
            <figure>
              <Image
                src={assest?.warranty_banner}
                alt="warranty_banner"
                width={1920}
                height={1000}
              />
            </figure>
            <Box className="banner_text">
              <Container fixed>
                <Stack direction="row" justifyContent="center">
                  <Image
                    src={assest?.warrenty_logo}
                    alt="warranty logo"
                    width={140}
                    height={160}
                  />
                </Stack>
                <Typography variant="h1">Warranty Support</Typography>
                <Typography>Confidence built on Support</Typography>
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
                        Product Details
                        <span style={{ color: colors?.red?.[500] }}>*</span>
                      </Typography>

                      <Controller
                        name="product_details"
                        control={control}
                        rules={{ required: "Product Details is required" }}
                        render={({ field, fieldState: { error, invalid } }) => (
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
                        Serial No.
                        <span style={{ color: colors?.red?.[500] }}>*</span>
                      </Typography>

                      <Controller
                        name="serial_no"
                        control={control}
                        rules={{ required: "Serial Number is required" }}
                        render={({ field, fieldState: { error, invalid } }) => (
                          <CustomInput
                            {...field}
                            placeholder="Enter Serial No."
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
                        Date of Purchase
                        <span style={{ color: colors?.red?.[500] }}>*</span>
                      </Typography>

                      <Controller
                        name="date_of_purchase"
                        control={control}
                        rules={{
                          required: "Date of Purchase is required",
                          pattern: {
                            value: /^\d{4}-\d{2}-\d{2}$/,
                            message: "Date must be in YYYY-MM-DD format"
                          }
                        }}
                        render={({ field, fieldState: { error, invalid } }) => (
                          <CustomInput
                            {...field}
                            type="date"
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
