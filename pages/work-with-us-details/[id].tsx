/* eslint-disable import/no-extraneous-dependencies */
import { careerMediaUrl } from "@/api/endpoints";
import { getJob, submitJob } from "@/api/functions/cms.api";
import useNotiStack from "@/hooks/useNotistack";
import { IJobApplicationPayload } from "@/interface/apiresp.interfaces";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButton from "@/ui/Buttons/CustomButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import Loader from "@/ui/Loader/Loder";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Typography,
  colors,
  styled
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";

const SalesWrapperStyled = styled(Box)`
  background-color: #adcccc;
  p {
    font-size: 14px;
    color: #0c0d0c;
  }
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 63.4px;
    text-transform: capitalize;
    letter-spacing: 0.00195312em;
    margin-bottom: 20px;
    color: #0c0d0c;
  }
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    letter-spacing: 0.00390625em;
    color: #0c0d0c;
    text-transform: capitalize;
    margin-bottom: 30px;
  }
  .banner_fig {
    height: 1000px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cmn_block {
    margin-top: 50px;
    ul {
      li {
        color: #0c0d0c;
        position: relative;
        padding-left: 15px;
        &::after {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background-color: #0c0d0c;
          position: absolute;
          left: 0;
          top: 10px;
        }
        &:not(:last-of-type) {
          margin-bottom: 10px;
        }
      }
    }
  }
  .sales_content_right {
    border: 1px solid #0c0d0c;
    border-radius: 30px;
    padding: 30px;
  }
`;

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const { toastSuccess, toastError } = useNotiStack();
  const {
    control,
    handleSubmit,
    // formState: { errors },
    setValue,
    reset
  } = useForm<IJobApplicationPayload>({
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      job_title: "",
      email: "",
      cover_letter: "",
      phone_number: "",
      currently_employed_in: "",
      resume: null,
      declaration: false
    }
  });

  const { data: jobData, isLoading: jobDataLoading } = useQuery({
    queryKey: ["getJob", id],
    queryFn: () => getJob(id as string)
  });

  const { mutate: submitJobMutate, isLoading: submitJobLoading } = useMutation({
    mutationKey: ["submitJob"],
    mutationFn: (payload: FormData) => submitJob(payload),

    onSuccess: (res) => {
      if (res?.status) {
        toastSuccess(res?.message || "Application submitted successfully");
        reset();
        router.push("/work-with-us");
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

  useEffect(() => {
    if (jobData && Object.entries(jobData).length > 0) {
      setValue("job_title", jobData?.career_title);
    }
  }, [jobData]);

  const onSubmit = (data: IJobApplicationPayload) => {
    const formData = new FormData();

    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("phone_number", data.phone_number);
    formData.append("cover_letter", data.cover_letter);
    formData.append("job_title", data?.job_title);

    // Optional
    if (data.currently_employed_in) {
      formData.append("currently_employed_in", data.currently_employed_in);
    }

    if (data.resume) {
      formData.append("resume", data.resume);
    }

    submitJobMutate(formData);
  };

  return (
    <>
      {(jobDataLoading || submitJobLoading) && <Loader />}
      <Wrapper>
        <SalesWrapperStyled>
          <figure className="banner_fig">
            <Image
              src={careerMediaUrl(jobData?.career_banner_image as string)}
              alt=""
              width={1900}
              height={1000}
            />
          </figure>
          <Box className="cmn_gap">
            <Container fixed>
              <Paper sx={{ padding: "50px", borderRadius: "30px" }}>
                <Grid2 container spacing={10}>
                  <Grid2 lg={5} md={5} xs={12}>
                    <Box className="sales_content_left">
                      <Typography variant="h2">
                        {jobData?.career_title}
                      </Typography>
                      <Typography>{jobData?.career_description}</Typography>

                      <Box className="cmn_block">
                        <Typography variant="h3">
                          Key Responsibilities
                        </Typography>
                        <Box
                          component="div"
                          dangerouslySetInnerHTML={{
                            __html: jobData?.career_responsibilities as string
                          }}
                        />
                      </Box>
                      <Box className="cmn_block">
                        <Typography variant="h3">Requirements</Typography>
                        <Box
                          component="div"
                          dangerouslySetInnerHTML={{
                            __html: jobData?.career_requirements as string
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid2>

                  <Grid2 lg={7} md={7} xs={12}>
                    <Box className="sales_content_right">
                      <Typography variant="h2" mb={2}>
                        Application
                      </Typography>
                      <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <Grid2 container spacing={2}>
                          <Grid2 md={6} xs={12}>
                            <Typography variant="body2" mb={1}>
                              First name
                              <span style={{ color: colors?.red?.[500] }}>
                                *
                              </span>
                            </Typography>
                            <Controller
                              control={control}
                              name="first_name"
                              rules={{
                                required: "First Name is required"
                              }}
                              render={({
                                field,
                                fieldState: { error, invalid }
                              }) => (
                                <CustomInput
                                  {...field}
                                  placeholder="Enter First name"
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
                              Last name
                              <span style={{ color: colors?.red?.[500] }}>
                                *
                              </span>
                            </Typography>

                            <Controller
                              control={control}
                              name="last_name"
                              rules={{
                                required: "Last Name is required"
                              }}
                              render={({
                                field,
                                fieldState: { error, invalid }
                              }) => (
                                <CustomInput
                                  {...field}
                                  placeholder="Enter Last name"
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
                              Email
                              <span style={{ color: colors?.red?.[500] }}>
                                *
                              </span>
                            </Typography>

                            <Controller
                              control={control}
                              name="email"
                              rules={{
                                required: "Email is required",
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: "Enter a valid email address"
                                }
                              }}
                              render={({
                                field,
                                fieldState: { error, invalid }
                              }) => (
                                <CustomInput
                                  {...field}
                                  placeholder="Enter Email"
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
                              Phone number
                              <span style={{ color: colors?.red?.[500] }}>
                                *
                              </span>
                            </Typography>

                            <Controller
                              control={control}
                              name="phone_number"
                              rules={{
                                required: "Phone Number is required",
                                pattern: {
                                  value: /^[0-9]{10}$/,
                                  message: "Enter a valid 10 digit phone number"
                                }
                              }}
                              render={({
                                field,
                                fieldState: { error, invalid }
                              }) => (
                                <CustomInput
                                  {...field}
                                  placeholder="Enter Phone number"
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
                              Currently employed in
                            </Typography>

                            <Controller
                              control={control}
                              name="currently_employed_in"
                              render={({
                                field,
                                fieldState: { error, invalid }
                              }) => (
                                <CustomInput
                                  {...field}
                                  placeholder="Enter Currently employed in"
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
                              Cover letter
                              <span style={{ color: colors?.red?.[500] }}>
                                *
                              </span>
                            </Typography>

                            <Controller
                              control={control}
                              name="cover_letter"
                              rules={{
                                required: "Cover Letter is required",
                                minLength: {
                                  value: 20,
                                  message:
                                    "Cover letter must be at least 20 characters"
                                }
                              }}
                              render={({
                                field,
                                fieldState: { error, invalid }
                              }) => (
                                <CustomInput
                                  {...field}
                                  placeholder="Enter Cover letter"
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
                            <Typography variant="body2" mb={1}>
                              Resume
                            </Typography>

                            <Controller
                              control={control}
                              name="resume"
                              rules={{
                                validate: {
                                  fileType: (file) =>
                                    !file ||
                                    [
                                      "application/pdf",
                                      "application/msword",
                                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    ].includes(file.type) ||
                                    "Only PDF, DOC, DOCX files are allowed",

                                  fileSize: (file) =>
                                    !file ||
                                    file.size <= 2 * 1024 * 1024 ||
                                    "File size must be less than 2MB"
                                }
                              }}
                              render={({ field, fieldState: { error } }) => (
                                <>
                                  <Box
                                    component="label"
                                    sx={{
                                      border: "1px dashed #c4c4c4",
                                      borderRadius: "8px",
                                      p: 2,
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      backgroundColor: "#fafafa",
                                      cursor: "pointer",
                                      "&:hover": {
                                        borderColor: "#1976d2",
                                        backgroundColor: "#f5f9ff"
                                      }
                                    }}
                                  >
                                    <Box>
                                      <Typography
                                        variant="body2"
                                        fontWeight={500}
                                      >
                                        {field.value
                                          ? field.value.name
                                          : "Upload Resume (Optional)"}
                                      </Typography>
                                      <Typography
                                        variant="caption"
                                        color="text.secondary"
                                      >
                                        PDF, DOC, DOCX (Max 2MB)
                                      </Typography>
                                    </Box>

                                    <Button
                                      variant="contained"
                                      component="span"
                                      size="small"
                                    >
                                      Choose File
                                    </Button>

                                    <input
                                      type="file"
                                      hidden
                                      accept=".pdf,.doc,.docx"
                                      onChange={(e) => {
                                        const file =
                                          e.target.files?.[0] || null;
                                        field.onChange(file);
                                      }}
                                    />
                                  </Box>

                                  {error && (
                                    <Typography variant="caption" color="error">
                                      {error.message}
                                    </Typography>
                                  )}
                                </>
                              )}
                            />
                          </Grid2>
                          <Grid2 xs={12}>
                            <Controller
                              control={control}
                              name="declaration"
                              rules={{
                                required: "You must accept the declaration"
                              }}
                              render={({ field, fieldState: { error } }) => (
                                <>
                                  <FormControlLabel
                                    sx={{
                                      "& .MuiTypography-root": {
                                        color: "#0c0d0c",
                                        fontWeight: 300,
                                        fontSize: "14px"
                                      }
                                    }}
                                    control={
                                      <Checkbox
                                        {...field}
                                        checked={field.value}
                                      />
                                    }
                                    label="I hereby declare that all the information provided in this application is true and correct to the best of my knowledge..."
                                  />
                                  {error && (
                                    <Typography variant="caption" color="error">
                                      {error.message}
                                    </Typography>
                                  )}
                                </>
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
                  </Grid2>
                </Grid2>
              </Paper>
            </Container>
          </Box>
        </SalesWrapperStyled>
      </Wrapper>
    </>
  );
};

export default Index;
