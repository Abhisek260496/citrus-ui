import { ourStoryMediaUrl } from "@/api/endpoints";
import { getEWaste } from "@/api/functions/cms.api";
import { EwasteUIWrap } from "@/styles/styledComponents/EwasteUIWrap";
import Loader from "@/ui/Loader/Loder";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useQuery } from "react-query";

function EwasteUI() {
  const { data: ewasteData, isLoading: ewasteLoading } = useQuery({
    queryKey: ["getEWaste"],
    queryFn: () => getEWaste()
  });

  console.log(ewasteData, "ewasteData");

  return (
    <>
      {ewasteLoading && <Loader />}
      <EwasteUIWrap>
        <Box className="bnrWrap">
          <figure>
            <Image
              src={ourStoryMediaUrl(ewasteData?.banner_bg_img as string)}
              width={1980}
              height={1200}
              alt="eWasteBnrImg"
            />
          </figure>

          <Box className="bnrContentWrap">
            <Box className="bnrHeader">
              <Typography variant="h1">{ewasteData?.banner_title}</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="ewasteInfoSection">
          <Container fixed>
            <Typography variant="h2">{ewasteData?.block_one_title}</Typography>

            <Typography variant="body1" className="ewasteInfoText">
              {ewasteData?.block_one_description}
            </Typography>
          </Container>
        </Box>

        <Box className="ewasteInfoSection">
          <Box className="ewasteInfoContent">
            <Box className="ewasteInfoLeft">
              <Typography
                variant="h3"
                className="ewasteInfoHeading"
                component="div"
                dangerouslySetInnerHTML={{
                  __html: ewasteData?.block_two_title as string
                }}
              />

              <figure>
                <Image
                  src={ourStoryMediaUrl(
                    ewasteData?.block_two_background_img as string
                  )}
                  width={1980}
                  height={1200}
                  alt="E-waste Bin"
                />
              </figure>
              <Box className="ewasteRgtPart">
                <Typography variant="body1" className="ewasteIntroText">
                  {ewasteData?.block_two_description}
                </Typography>

                <Typography variant="h4" className="ewasteSubHeading">
                  {ewasteData?.block_two_sub_title}
                </Typography>

                <Typography variant="body2" className="ewasteMantraText">
                  {ewasteData?.block_two_sub_desc_one}
                </Typography>

                <Typography variant="body2" className="ewasteReduceText">
                  {ewasteData?.block_two_sub_desc_two}
                </Typography>

                <Typography variant="body2" className="ewasteReuseText">
                  {ewasteData?.block_two_sub_desc_three}
                </Typography>

                <Typography variant="body2" className="ewasteRecycleText">
                  {ewasteData?.block_two_sub_desc_four}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="electronicWrap">
          <Container fixed>
            <Typography variant="h2">
              {ewasteData?.block_three_title}
            </Typography>

            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <Box>
                  <Typography variant="h3">
                    {ewasteData?.block_three_sub_title_one}
                  </Typography>
                  <Typography variant="body1">
                    {ewasteData?.block_three_desc_one}
                  </Typography>
                  <Typography variant="body1">
                    {ewasteData?.block_three_desc_two}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h3">
                    {ewasteData?.block_three_sub_title_two}
                  </Typography>
                  <Typography variant="body1">
                    {ewasteData?.block_three_desc_three}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h3">
                    {ewasteData?.block_three_sub_title_three}
                  </Typography>
                  <Typography variant="body1">
                    {ewasteData?.block_three_desc_four}
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <Box>
                  <Typography variant="h3">
                    {ewasteData?.block_three_sub_title_four}
                  </Typography>
                  <Typography variant="body1">
                    {ewasteData?.block_three_desc_five}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h3">
                    {ewasteData?.block_three_sub_title_five}
                  </Typography>
                  <Typography variant="body1">
                    {ewasteData?.block_three_desc_six}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box className="chlPartner">
          <Container fixed>
            <Typography variant="h2">{ewasteData?.block_four_title}</Typography>
            <Stack
              direction="row"
              gap={15}
              justifyContent="center"
              alignItems="center"
              className="partnerLogos"
            >
              <figure>
                <Image
                  src={ourStoryMediaUrl(
                    ewasteData?.block_four_img_one as string
                  )}
                  width={290}
                  height={155}
                  alt="Logistics Partner"
                />
              </figure>
              <figure>
                <Image
                  src={ourStoryMediaUrl(
                    ewasteData?.block_four_img_two as string
                  )}
                  width={290}
                  height={155}
                  alt="Simram Partner"
                />
              </figure>
            </Stack>
          </Container>
        </Box>

        <Box className="awarenessWrap">
          <Typography variant="h2">{ewasteData?.block_five_title}</Typography>

          <Typography variant="body1" className="introText">
            {ewasteData?.block_five_desc_one}
          </Typography>

          <Typography variant="body1" className="introText">
            {ewasteData?.block_five_desc_two}
          </Typography>

          <Grid container spacing={6} mt={4}>
            <Grid item md={6} xs={12}>
              <Typography variant="h3">
                {ewasteData?.block_five_sub_title_one}
              </Typography>
              <Typography variant="body1">
                {ewasteData?.block_five_sub_desc_one}
              </Typography>
            </Grid>

            <Grid item md={6} xs={12}>
              <Typography variant="h3">
                {ewasteData?.block_five_sub_title_two}
              </Typography>
              <Typography variant="body1">
                {ewasteData?.block_five_sub_desc_two}
              </Typography>

              <Typography variant="h3" mt={4}>
                {ewasteData?.block_five_sub_title_three}
              </Typography>
              <Typography variant="body1">
                {ewasteData?.block_five_sub_desc_three}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box className="dosDontsWrap">
          <Typography variant="h2" className="sectionTitle">
            {ewasteData?.block_six_title}
          </Typography>

          <Grid container spacing={6} mt={2}>
            <Grid item xs={12}>
              <Typography variant="h3" className="subHeading">
                {ewasteData?.block_six_sub_title_one}
              </Typography>
              <Box
                className="listWrap"
                component="div"
                dangerouslySetInnerHTML={{
                  __html: ewasteData?.block_six_desc_one as string
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h3" className="subHeading">
                {ewasteData?.block_six_sub_title_two}
              </Typography>
              <Box
                className="listWrap"
                component="div"
                dangerouslySetInnerHTML={{
                  __html: ewasteData?.block_six_desc_two as string
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </EwasteUIWrap>
    </>
  );
}

export default EwasteUI;
