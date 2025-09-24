import assest from "@/json/assest";
import { successStoryListData } from "@/json/dummy";
import { DigitalSignageCompWrap } from "@/styles/styledComponents/CaseStudyUIWrapper";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography
} from "@mui/material";
import Image from "next/image";

function SuccessStoryComp() {
  return (
    <DigitalSignageCompWrap >
      <Box className="digitalSignageBlk successStory">
        <Container fixed>
          <Box className="secHeadWrap">
            <Typography variant="h4" className="digitalSignageHeading">
              THIN CLIENT SUCCESS STORY <span> for Muthoot Finance</span>
            </Typography>
            <Typography variant="body1" className="digitalSignageDescription">
              Muthoot Finance Ltd. is an Indian financial corporation and the
              largest gold loan NBFC in the country. The brand has also been on
              an ex- pansion mode. Over the last 2-3 years, it has added over
              200 branches across the country. In their Pan-India expansion mode
              they were looking for IT-Hardware partners who had Pan-india
              presence.
            </Typography>
          </Box>

          <Box className="objectiveResultWrapper">
            <Grid container spacing={5}>
              <Grid item xs={12} md={7}>
                <Typography variant="h6" className="objectiveTitle">
                  Objective
                </Typography>
                <Typography variant="body1" className="objectiveDescription">
                  Year 2013 they were looking for implementing Thin-clients in
                  early stage of cloud computing. As Citrus was already in this
                  field from 2004. They had given us a task to work on it.
                </Typography>
                <Typography variant="h6" className="objectiveTitle">
                  Result
                </Typography>
                <List disablePadding className="resultList">
                  {successStoryListData.map((data, index) => (
                    <ListItem key={index}>{data}</ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={5}>
                <figure className="digitalRgtSecFig">
                  <Image
                    src={assest.digitalSignSecRgtImg}
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

export default SuccessStoryComp;
