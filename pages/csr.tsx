import CommonHeader from "@/components/CommonHeader/CommonHeader";
import CSRBanner from "@/components/CSRBanner/CSRBanner";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { CommonStyledSection } from "@/styles/styledComponents/CommonStyledSection";
import {
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";

const Index = () => {
  return (
    <Wrapper>
      <CSRBanner />
      <CommonStyledSection>
        <Container fixed>
          <Box className="cmn_gap">
            <Typography mb={4}>
              At our company, we believe that true celebrations shine brighter
              when they carry the spirit of giving. For the past few years, our
              Corporate Social Responsibility (CSR) or what we wouldnlike to
              call it as Citrus Social Responsibility (CSR), initiative has been
              closely tied to the festival of Diwali, a time when homes are lit
              with diyas and hearts are lit with
            </Typography>
            <Typography>
              As a part of this tradition, we source handmade diyas (lamps)
              crafted by orphaned and destitute children supported by Vatsalya
              Trust, Mumbai. These diyas, simple yet profound, carry the effort,
              hope and dreams of the children who make them. Each year, we share
              these diyas with our clients as gifts of warmth, gratitude and
              light, a small gesture that
            </Typography>
          </Box>
        </Container>
        <Grid2 container spacing={2}>
          <Grid2 lg={7} md={6} xs={12}>
            <Box className="csr_img_block">
              {/* <Box className="color_block">
                <Typography>Lorem ipsum Lorem ipsum</Typography>
              </Box> */}
              <figure>
                <Image
                  src={assest?.csr_img1}
                  alt="csr_img1"
                  width={1200}
                  height={625}
                />
              </figure>
            </Box>
          </Grid2>
          <Grid2 lg={5} md={6} xs={12}>
            <Box className="csr_img_block">
              {/* <Box className="color_block">
                <Typography>Lorem ipsum Lorem ipsum</Typography>
              </Box> */}
              <figure>
                <Image
                  src={assest?.csr_img2}
                  alt="csr_img2"
                  width={1200}
                  height={625}
                />
              </figure>
            </Box>
          </Grid2>
        </Grid2>
        <Container fixed>
          <Box className="cmn_gap">
            <CommonHeader
              mainTitle="About Vatsalya Trust"
              sx={{
                color: "#231F20",
                textTransform: "capitalize",
                marginBottom: "40px"
              }}
            />
            <List className="list_block" disablePadding>
              <ListItem disablePadding>
                Founded in 1983 by a group of philanthropists, Vatsalya Trust,
                Mumbai is a public charitable organization dedicated to
                nurturing and uplifting children in need.
              </ListItem>
              <ListItem disablePadding>
                Over the years,<span>1,275</span>&nbsp; children have found
                comfort, care and a place to call home through the Vatsalya.
              </ListItem>
              <ListItem disablePadding>
                With centers across different parts of Mumbai, the Trust
                continues to empower children with education, shelter and
                opportunities to rebuild their future.
              </ListItem>
            </List>
          </Box>
        </Container>
        <Box className="gray_block">
          <Stack
            direction={{ sm: "column", md: "row" }}
            gap={2}
            width="100%"
            className="galleryMainStack"
          >
            {/* Left Large Image */}
            <Box
              flex={{ sm: 4, md: 4 }}
              width="100%"
              className="galleryLeftImageBox"
            >
              <figure
                style={{ height: "616px" }}
                className="galleryFigureLarge"
              >
                <Image
                  src={assest?.vas1}
                  alt="vatsalay_img1"
                  width={650}
                  height={600}
                  className="galleryImage"
                />
              </figure>
            </Box>

            {/* Middle 3-Image Section */}
            <Stack
              direction={{ sm: "column", md: "row" }}
              gap={2}
              flex={{ sm: 5, md: 5 }}
              width="100%"
              className="galleryMiddleStack"
            >
              {/* Left (2 stacked images) */}
              <Stack
                gap={2}
                flex={1}
                width="100%"
                className="galleryMiddleLeftStack"
              >
                <Box width="100%" className="gallerySmallImageBox">
                  <figure
                    style={{ height: "300px" }}
                    className="galleryFigureSmall"
                  >
                    <Image
                      src={assest?.vas2}
                      alt="vatsalay_img2"
                      width={650}
                      height={300}
                      className="galleryImage"
                    />
                  </figure>
                </Box>

                <Box width="100%" className="gallerySmallImageBox">
                  <figure
                    style={{ height: "300px" }}
                    className="galleryFigureSmall"
                  >
                    <Image
                      src={assest?.vas3}
                      alt="vatsalay_img3"
                      width={650}
                      height={300}
                      className="galleryImage"
                    />
                  </figure>
                </Box>
              </Stack>

              {/* Right (single tall image) */}
              <Box flex={1} width="100%" className="galleryMiddleRightImageBox">
                <figure
                  style={{ height: "616px" }}
                  className="galleryFigureLarge"
                >
                  <Image
                    src={assest?.vas4}
                    alt="vatsalay_img4"
                    width={650}
                    height={600}
                    className="galleryImage"
                  />
                </figure>
              </Box>
            </Stack>

            {/* Right Large Image */}
            <Box
              flex={{ sm: 3, md: 3 }}
              width="100%"
              className="galleryRightImageBox"
            >
              <figure
                style={{ height: "616px" }}
                className="galleryFigureLarge"
              >
                <Image
                  src={assest?.vas5}
                  alt="vatsalay_img5"
                  width={650}
                  height={600}
                  className="galleryImage"
                />
              </figure>
            </Box>
          </Stack>
        </Box>
        <Container fixed>
          <Box className="cmn_gap">
            <CommonHeader
              mainTitle="Lighting Lives Together"
              sx={{
                color: "#231F20",
                textTransform: "capitalize",
                marginBottom: "40px"
              }}
            />
            <List className="list_block" disablePadding>
              <ListItem disablePadding>
                What began as a humble act of support has grown into a
                meaningful annual tradition for us. By choosing to light our
                celebrations with these diyas, we not only bring brightness into
                our clients’ homes but also into the lives of children who
                deserve every chance to shine.
              </ListItem>
            </List>
          </Box>
        </Container>
      </CommonStyledSection>
    </Wrapper>
  );
};

export default Index;
