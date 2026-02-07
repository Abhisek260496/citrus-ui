import { ourStoryMediaUrl } from "@/api/endpoints";
import { getCSR } from "@/api/functions/cms.api";
import CommonHeader from "@/components/CommonHeader/CommonHeader";
import CSRBanner from "@/components/CSRBanner/CSRBanner";
import Wrapper from "@/layout/wrapper/Wrapper";
import { CommonStyledSection } from "@/styles/styledComponents/CommonStyledSection";
import Loader from "@/ui/Loader/Loder";
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
import { useQuery } from "react-query";

const Index = () => {
  const { data: csr, isLoading: csrLoading } = useQuery({
    queryKey: ["CSR"],
    queryFn: () => getCSR()
  });

  return (
    <>
      {csrLoading && <Loader />}
      <Wrapper>
        <CSRBanner
          banner_title={csr?.banner_title}
          banner_sub_title={csr?.banner_sub_title}
          banner_content={csr?.banner_content}
          banner_bg_img={csr?.banner_bg_img}
        />
        <CommonStyledSection>
          <Container fixed>
            <Box className="cmn_gap">
              <Typography mb={4}>{csr?.csr_description_one}</Typography>
              <Typography>{csr?.csr_description_two}</Typography>
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
                    src={ourStoryMediaUrl(csr?.block_one_img_one as string)}
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
                    src={ourStoryMediaUrl(csr?.block_one_img_two as string)}
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
                mainTitle={csr?.block_two_title}
                sx={{
                  color: "#231F20",
                  textTransform: "capitalize",
                  marginBottom: "40px"
                }}
              />
              <Box
                className="list_block"
                component="div"
                dangerouslySetInnerHTML={{
                  __html: csr?.block_two_description as string
                }}
              />

              {/* <ListItem disablePadding>
                  Over the years,<span>1,275</span>&nbsp; children have found
                  comfort, care and a place to call home through the Vatsalya.
                </ListItem>
                <ListItem disablePadding>
                  With centers across different parts of Mumbai, the Trust
                  continues to empower children with education, shelter and
                  opportunities to rebuild their future.
                </ListItem> */}
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
                    src={ourStoryMediaUrl(csr?.block_two_sub_img_one as string)}
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
                        src={ourStoryMediaUrl(
                          csr?.block_two_sub_img_two as string
                        )}
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
                        src={ourStoryMediaUrl(
                          csr?.block_two_sub_img_three as string
                        )}
                        alt="vatsalay_img3"
                        width={650}
                        height={300}
                        className="galleryImage"
                      />
                    </figure>
                  </Box>
                </Stack>

                {/* Right (single tall image) */}
                <Box
                  flex={1}
                  width="100%"
                  className="galleryMiddleRightImageBox"
                >
                  <figure
                    style={{ height: "616px" }}
                    className="galleryFigureLarge"
                  >
                    <Image
                      src={ourStoryMediaUrl(
                        csr?.block_two_sub_img_four as string
                      )}
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
                    src={ourStoryMediaUrl(
                      csr?.block_two_sub_img_five as string
                    )}
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
                mainTitle={csr?.block_three_title}
                sx={{
                  color: "#231F20",
                  textTransform: "capitalize",
                  marginBottom: "40px"
                }}
              />
              <List className="list_block" disablePadding>
                <ListItem disablePadding>
                  <Box
                    component="div"
                    dangerouslySetInnerHTML={{
                      __html: csr?.block_three_description as string
                    }}
                  />
                </ListItem>
              </List>
            </Box>
          </Container>
        </CommonStyledSection>
      </Wrapper>
    </>
  );
};

export default Index;
