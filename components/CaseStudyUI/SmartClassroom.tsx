import assest from "@/json/assest";
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

function SmartClassroom() {
  return (
    <SmartClassroomWrap>
      <Box className="smartClassroomSection">
        <Container fixed>
          <Typography variant="h4" className="smartClassroomHeading">
            SMART CLASSROOMS FOR KDMC{" "}
            <span>(Kalyan Dombivli Municipal Corporation)</span>
          </Typography>

          <Typography variant="body1" className="smartClassroomDescription">
            The Kalyan-Dombivli Municipal Corporation governs the city of
            Kalyan-Dombivli in the Thane district in the Indian state of
            Maharashtra. In addition to the city’s infrastructure, public
            services, and transportation, the municipal corporation oversees the
            local municipal schools.
          </Typography>

          <Box className="smartClassroomContent">
            <Grid container spacing={5}>
              <Grid item xs={12} md={5}>
                <figure className="smartClassroomFigure">
                  <Image
                    src={assest.smartClassroomImg}
                    width={750}
                    height={750}
                    alt="smartClassroomImg"
                  />
                </figure>
              </Grid>

              <Grid item xs={12} md={7}>
                <Typography variant="h6" className="objectiveTitle">
                  Objective
                </Typography>
                <Typography variant="body1" className="objectiveDescription">
                  They wanted to replace old & outdated existing computers with
                  new systems. Also the entire action plan was to digitize 200
                  classrooms within 7 days.
                </Typography>

                <Typography variant="h6" className="resultTitle">
                  Result
                </Typography>
                <List className="resultList">
                  <ListItem>
                    Citrus was successful in finishing the target of 200 Smart
                    classrooms in 7 days.
                  </ListItem>
                  <ListItem>
                    With Micro PCs replacing old CPUs the downtime was brought
                    to almost zero.
                  </ListItem>
                  <ListItem>
                    Teachers were showing teaching materials and create
                    presentations with Wi-Fi, a mouse, and a Bluetooth keyboard.
                  </ListItem>
                  <ListItem>
                    Teachers could transmit content using micro PCs, students
                    were benefited from better displays.
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </SmartClassroomWrap>
  );
}

export default SmartClassroom;
