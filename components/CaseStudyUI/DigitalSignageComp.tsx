import assest from "@/json/assest";
import { resultListData } from "@/json/dummy";
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

function DigitalSignageComp() {
  return (
    <DigitalSignageCompWrap>
      <Box className="digitalSignageBlk">
        <Container fixed>
          <Box className="secHeadWrap">
            <Typography variant="h4" className="digitalSignageHeading">
              DIGITAL SIGNAGE SOLUTION <span>FOR ADANI & GMR AIRPORTS</span>
            </Typography>
            <Typography variant="body1" className="digitalSignageDescription">
              Adani, one of the leading Airport Operators wanted to transform
              all existing airports in the country. They were in an expansion
              mode they were looking for computing partners with good track
              record for FIDS (Flight-Information Digital signage).
            </Typography>
          </Box>

          <Box className="objectiveResultWrapper">
            <Grid container spacing={5} >
              <Grid item xs={12} md={7}>
                <Typography variant="body1" className="objectiveTitle">
                  Objective
                </Typography>
                <Typography variant="body1" className="objectiveDescription">
                  To move from existing US based leading setup which was not
                  reliable and were exiting their business operations in the
                  country. They were looking for OEM who can work along with
                  their existing SI. Citrus was chosen among all available
                  options nationally, among top Brands.
                </Typography>
                <Typography variant="body1" className="objectiveTitle">
                  Result
                </Typography>
                <List disablePadding className="resultList">
                  {resultListData.map((data, index) => (
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

export default DigitalSignageComp;
