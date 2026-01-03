import { getJobs } from "@/api/functions/cms.api";
import { JobListSectionWrap } from "@/styles/styledComponents/WorkWithUsBannerStyle";
import AccessTimeOutlinedIcon from "@/ui/Icons/AccessTimeOutlinedIcon";
import BusinessCenterOutlinedIcon from "@/ui/Icons/BusinessCenterOutlinedIcon";
import ChevronRightIcon from "@/ui/Icons/ChevronRightIcon";
import LocationOnOutlinedIcon from "@/ui/Icons/LocationOnOutlinedIcon";
import Loader from "@/ui/Loader/Loder";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

function JobListSection() {
  const { data: jobData, isLoading: jobDataLoading } = useQuery({
    queryKey: ["getJobs"],
    queryFn: () => getJobs()
  });

  const router = useRouter();

  return (
    <>
      {jobDataLoading && <Loader />}
      <JobListSectionWrap className="cmn_gap">
        <Container>
          <Box className="jobListSection">
            {!!jobData &&
              jobData?.length &&
              jobData.map((job) => (
                <Box className="jobCard" key={job.career_id}>
                  <Stack
                    direction="row"
                    gap={{ lg: 4, md: 3, sm: 2, xs: 1 }}
                    alignItems="flex-start"
                    className="jobDetailStack"
                  >
                    <Box className="jobIcon">
                      <BusinessCenterOutlinedIcon />
                    </Box>

                    <Box className="jobContent">
                      <Typography className="jobTitle">
                        {job.career_title.toUpperCase()}
                      </Typography>

                      <Typography className="jobDescription">
                        {job.career_description}
                      </Typography>

                      <Stack direction="row" gap={3} className="jobMeta">
                        <Stack direction="row" gap={0.5} alignItems="center">
                          <LocationOnOutlinedIcon />
                          <Typography className="jobMetaText">
                            {job.career_location.toUpperCase()}
                          </Typography>
                        </Stack>

                        <Stack direction="row" gap={0.5} alignItems="center">
                          <AccessTimeOutlinedIcon />
                          <Typography className="jobMetaText">
                            {job.career_type.toUpperCase()}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                  <IconButton
                    className="jobArrow"
                    disableRipple
                    onClick={() =>
                      router.push(`/work-with-us-details/${job?.career_id}`)
                    }
                  >
                    <ChevronRightIcon />
                  </IconButton>
                </Box>
              ))}
          </Box>
        </Container>
      </JobListSectionWrap>
    </>
  );
}

export default JobListSection;
