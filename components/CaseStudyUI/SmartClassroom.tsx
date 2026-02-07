import { caseStudyMediaUrl } from "@/api/endpoints";
import { CaseStudyData } from "@/interface/apiresp.interfaces";
import { SmartClassroomWrap } from "@/styles/styledComponents/CaseStudyUIWrapper";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

interface DigitalSignageCompProps {
  data?: CaseStudyData;
}
function SmartClassroom({ data }: DigitalSignageCompProps) {
  return (
    <SmartClassroomWrap>
      <Box className="smartClassroomSection">
        <Container fixed>
          <Typography variant="h4" className="smartClassroomHeading">
            {data?.casestudy_title} <span>{data?.casestudy_sub_title}</span>
          </Typography>
          <Typography variant="body1" className="smartClassroomDescription">
            {data?.casestudy_description}
          </Typography>

          <Box className="smartClassroomContent">
            <Grid container spacing={5}>
              <Grid item xs={12} md={5}>
                <figure className="smartClassroomFigure">
                  <Image
                    src={caseStudyMediaUrl(data?.casestudy_image as string)}
                    width={750}
                    height={750}
                    alt="smartClassroomImg"
                  />
                </figure>
              </Grid>

              <Grid item xs={12} md={7}>
                <Typography variant="h6" className="objectiveTitle">
                  {data?.casestudy_block_title}
                </Typography>
                <Typography variant="body1" className="objectiveDescription">
                  {data?.casestudy_block_description}
                </Typography>
                <Typography variant="h6" className="objectiveTitle">
                  {data?.casestudy_block_one_title}
                </Typography>
                <Box
                  className="resultList"
                  component="div"
                  dangerouslySetInnerHTML={{
                    __html: data?.casestudy_block_one_description as string
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </SmartClassroomWrap>
  );
}

export default SmartClassroom;
