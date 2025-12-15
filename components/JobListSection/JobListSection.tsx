import { JobListSectionWrap } from "@/styles/styledComponents/WorkWithUsBannerStyle";
import AccessTimeOutlinedIcon from "@/ui/Icons/AccessTimeOutlinedIcon";
import BusinessCenterOutlinedIcon from "@/ui/Icons/BusinessCenterOutlinedIcon";
import ChevronRightIcon from "@/ui/Icons/ChevronRightIcon";
import LocationOnOutlinedIcon from "@/ui/Icons/LocationOnOutlinedIcon";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";

const jobList = [
  {
    id: 1,
    title: "Sales Executive",
    description:
      "We are seeking a Sales Executive who will be responsible for driving new business, nurturing client relationships, and achieving revenue targets.",
    location: "Thane",
    type: "Full Time"
  },
  {
    id: 2,
    title: "Sales Executive",
    description:
      "We are seeking a Sales Executive who will be responsible for driving new business, nurturing client relationships, and achieving revenue targets.",
    location: "Thane",
    type: "Full Time"
  },
  {
    id: 3,
    title: "Sales Executive",
    description:
      "We are seeking a Sales Executive who will be responsible for driving new business, nurturing client relationships, and achieving revenue targets.",
    location: "Thane",
    type: "Full Time"
  }
];

function JobListSection() {
  return (
    <JobListSectionWrap>
      <Container>
        <Box className="jobListSection">
          {jobList.map((job) => (
            <Box className="jobCard" key={job.id}>
              <Stack direction="row" gap={4} alignItems="flex-start">
                <Box className="jobIcon">
                  <BusinessCenterOutlinedIcon />
                </Box>

                <Box className="jobContent">
                  <Typography className="jobTitle">
                    {job.title.toUpperCase()}
                  </Typography>

                  <Typography className="jobDescription">
                    {job.description}
                  </Typography>

                  <Stack direction="row" gap={3} className="jobMeta">
                    <Stack direction="row" gap={0.5} alignItems="center">
                      <LocationOnOutlinedIcon />
                      <Typography className="jobMetaText">
                        {job.location.toUpperCase()}
                      </Typography>
                    </Stack>

                    <Stack direction="row" gap={0.5} alignItems="center">
                      <AccessTimeOutlinedIcon />
                      <Typography className="jobMetaText">
                        {job.type.toUpperCase()}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>

                <IconButton className="jobArrow" disableRipple>
                  <ChevronRightIcon />
                </IconButton>
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>
    </JobListSectionWrap>
  );
}

export default JobListSection;
