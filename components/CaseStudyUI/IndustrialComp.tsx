import assest from "@/json/assest";
import { industrialListData } from "@/json/dummy";
import { SmartClassroomWrap } from "@/styles/styledComponents/CaseStudyUIWrapper";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography
} from "@mui/material";
import Image from "next/image";

function IndustrialComp() {
  return (
    <SmartClassroomWrap>
      <Box className="smartClassroomSection">
        <Container fixed>
          <Typography variant="h4" className="smartClassroomHeading">
            INDUSTRIAL PC SETUP <span>For Excel Industries</span>
          </Typography>

          <Typography variant="body1" className="smartClassroomDescription">
            Excel Industries Limited, one of the leading domestic chemical
            manufacturers. Roha their factory site near Mumbai, known for the
            production of highest quantities of phosphorus sulphate based
            products in India. A highly corrosive industrial setup, all major
            brands had failed in their existing setup.
          </Typography>

          <Box className="smartClassroomContent">
            <Grid container spacing={5}>
              <Grid item xs={12} md={5}>
                <figure className="smartClassroomFigure">
                  <Image
                    src={assest.case_img4}
                    width={750}
                    height={750}
                    alt="case_img4"
                  />
                </figure>
              </Grid>

              <Grid item xs={12} md={7}>
                <Typography variant="h6" className="objectiveTitle">
                  Objective
                </Typography>
                <Typography variant="body1" className="objectiveDescription">
                  The client wanted to implement computers in their industrial
                  setup in certain areas especially in emission gas control
                  systems. All previous exercise to put a computing systems had
                  failed. He wanted som thing that could work in those harsh
                  environment.
                </Typography>

                <Typography variant="h6" className="resultTitle">
                  Result
                </Typography>
                <List className="resultList" disablePadding>
                  {industrialListData.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </SmartClassroomWrap>
  );
}

export default IndustrialComp;
