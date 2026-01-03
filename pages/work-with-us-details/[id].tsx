import { careerMediaUrl } from "@/api/endpoints";
import { getJob } from "@/api/functions/cms.api";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomInput from "@/ui/Inputs/CustomInput";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Typography,
  styled
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

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

  const { data: jobData, isLoading: jobDataLoading } = useQuery({
    queryKey: ["getJob", id],
    queryFn: () => getJob(id as string)
  });

  console.log(jobData, "jobData");

  return (
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
                      <Typography variant="h3">Key Responsibilities</Typography>
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
                    <form action="">
                      <Grid2 container spacing={2}>
                        <Grid2 md={6} xs={12}>
                          <Typography variant="body2" mb={1}>
                            First name
                          </Typography>
                          <CustomInput
                            placeholder="Enter First name"
                            isTypeTwo
                            fullWidth
                          />
                        </Grid2>
                        <Grid2 md={6} xs={12}>
                          <Typography variant="body2" mb={1}>
                            Last name
                          </Typography>
                          <CustomInput
                            placeholder="Enter Last name"
                            isTypeTwo
                            fullWidth
                          />
                        </Grid2>
                        <Grid2 md={6} xs={12}>
                          <Typography variant="body2" mb={1}>
                            Email
                          </Typography>
                          <CustomInput
                            placeholder="Enter Email"
                            isTypeTwo
                            fullWidth
                          />
                        </Grid2>
                        <Grid2 md={6} xs={12}>
                          <Typography variant="body2" mb={1}>
                            Phone number
                          </Typography>
                          <CustomInput
                            placeholder="Enter Phone number"
                            isTypeTwo
                            fullWidth
                          />
                        </Grid2>
                        <Grid2 xs={12}>
                          <Typography variant="body2" mb={1}>
                            Currently employed in
                          </Typography>
                          <CustomInput
                            placeholder="Enter Currently employed in"
                            isTypeTwo
                            fullWidth
                          />
                        </Grid2>
                        <Grid2 xs={12}>
                          <Typography variant="body2" mb={1}>
                            Cover letter
                          </Typography>
                          <CustomInput
                            placeholder="Enter Cover letter"
                            isTypeTwo
                            multiline
                            rows={4}
                            fullWidth
                          />
                        </Grid2>
                        <Grid2 xs={12}>
                          <FormControlLabel
                            sx={{
                              "& .MuiTypography-root": {
                                color: "#0c0d0c",
                                fontWeight: 300,
                                fontSize: "14px"
                              }
                            }}
                            control={<Checkbox />}
                            label="I hereby declare that all the information provided in this application is true
                                    and correct to the best of my knowledge. I consent to allow Citrus Solutions
                                    Pvt. Ltd. to process my personal data for recruitment purposes and
                                    contacting me regarding this application."
                          />
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
  );
};

export default Index;
