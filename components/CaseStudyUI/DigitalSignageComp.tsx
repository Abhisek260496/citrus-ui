import { caseStudyMediaUrl } from "@/api/endpoints";
import { CaseStudyData } from "@/interface/apiresp.interfaces";
import { DigitalSignageCompWrap } from "@/styles/styledComponents/CaseStudyUIWrapper";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

interface DigitalSignageCompProps {
  data?: CaseStudyData;
}

function DigitalSignageComp({ data }: DigitalSignageCompProps) {
  return (
    <DigitalSignageCompWrap
      casestudy_block_bg_img={caseStudyMediaUrl(
        data?.casestudy_block_bg_img as string
      )}
    >
      <Box className="digitalSignageBlk">
        <Container fixed>
          {/* <CommonHeader mainTitle="CASE STUDY " sx={{ mb: 4 }} /> */}
          <Box className="secHeadWrap">
            <Typography variant="h4" className="digitalSignageHeading">
              {data?.casestudy_title} <span>{data?.casestudy_sub_title}</span>
            </Typography>
            <Typography variant="body1" className="digitalSignageDescription">
              {data?.casestudy_description}
            </Typography>
          </Box>

          <Box className="objectiveResultWrapper">
            <Grid container spacing={5}>
              <Grid item xs={12} md={7}>
                <Typography variant="body1" className="objectiveTitle">
                  {data?.casestudy_block_title}
                </Typography>
                <Typography variant="body1" className="objectiveDescription">
                  {data?.casestudy_block_description}
                </Typography>
                <Typography variant="body1" className="objectiveTitle">
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
              <Grid item xs={12} md={5}>
                <figure className="digitalRgtSecFig">
                  <Image
                    src={caseStudyMediaUrl(data?.casestudy_image as string)}
                    width={750}
                    height={750}
                    alt="digitalSignSecRgtImg"
                  />
                </figure>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </DigitalSignageCompWrap>
  );
}

export default DigitalSignageComp;
