import assest from "@/json/assest";
import { CitrusMicrosoftUIWrap } from "@/styles/styledComponents/CitrusMicrosoftUIWrap";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function CitrusMicrosoftUI() {
  return (
    <CitrusMicrosoftUIWrap>
      <Stack
        className="headerStack"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          alignItems="center"
          gap="40px"
          className="headerLeft"
        >
          <Link href="/" passHref>
            <Image
              src={assest.citrusLogoNew}
              width={190}
              height={100}
              alt="citrusLogoNew"
            />
          </Link>
          <Box className="msLogoWrap">
            <Image
              src={assest.msLogoNew}
              width={225}
              height={50}
              alt="msLogoNew"
            />
          </Box>
        </Stack>
        <figure className="msCitrusHeaderRgtFig">
          <Image
            src={assest.msCitrusHeaderRgt}
            width={600}
            height={450}
            alt="msCitrusHeaderRgt"
          />
        </figure>
      </Stack>
      <Box className="msCitrusbnrBlk">
        <figure>
          <Image
            src={assest.msCitrusbnrImg}
            width={1980}
            height={1200}
            alt="msCitrusbnrImg"
          />
        </figure>
      </Box>
      <Box className="heroSec">
        <Container fixed>
          <Typography variant="body1" className="heroDesc">
            In collaboration with Microsoft, Citrus is driving innovation with a
            purpose of crafting reliable and secure computing experiences
            designed to meet evolving business needs. Empowering organizations
            with technology that’s built for today and ready for tomorrow.
          </Typography>

          <Grid container spacing={8} className="heroGridWrap">
            <Grid item xs={12} md={4}>
              <Box className="heroCard">
                <figure>
                  <Image
                    src={assest.mscrt1}
                    width={532}
                    height={532}
                    alt="Windows 11 Pro"
                    className="heroImage"
                  />
                </figure>
                <Image
                  src={assest.win11}
                  width={500}
                  height={45}
                  alt="winiot"
                  className="cmnSmallWindowImg"
                />
                <Typography variant="body1" className="heroCardText">
                  Built for modern productivity, Windows 11 Pro allows better
                  multitasking and support for newer hardware and AI-powered
                  features. Making it suitable for hybrid workspaces,
                  professionals, and newer systems.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className="heroCard">
                <figure>
                  <Image
                    src={assest.win10Img}
                    width={532}
                    height={532}
                    alt="Windows 10 Pro"
                    className="heroImage"
                  />
                </figure>

                <Image
                  src={assest.win10Pro}
                  width={500}
                  height={45}
                  alt="winiot"
                  className="cmnSmallWindowImg"
                />
                <Typography variant="body1" className="heroCardText">
                  Designed for small to medium businesses, Windows 10 Pro is
                  built for professionals who need reliability, security and
                  flexibility. It offers advanced features for data protection,
                  device management and smooth performance whether you’re
                  working in the office or remotely.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className="heroCard">
                <figure>
                  <Image
                    src={assest.iotImg}
                    width={532}
                    height={532}
                    alt="Windows IoT"
                    className="heroImage"
                  />
                </figure>

                <Image
                  src={assest.winiot}
                  width={500}
                  height={45}
                  alt="winiot"
                  className="cmnSmallWindowImg"
                />
                <Typography variant="body1" className="heroCardText">
                  A secure & flexible operating system designed for embedded and
                  edge devices. Windows IoT enables smart, reliable performance
                  across industries, with long-term support, it helps businesses
                  build smart and connected solutions.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="ftrStack">
        <Container fixed>
          <Stack className="ftrInrStack" direction="row" alignItems="center">
            <figure>
              <Image
                src={assest.msCopilotImg}
                width={450}
                height={250}
                alt="msCopilotImg"
              />
            </figure>
            <Box>
              <Typography variant="body1">
                Bringing something truly new to the table, Copilot for Windows
                11 is redefining how we work in the digital age. Seamlessly
                built into the Windows 11 experience, this AI-powered assistant
                helps you write, research, summarize and create with remarkable
                ease. As a proud Microsoft partner, we’re excited to acknowledge
                this transformative tool enabling you to work smarter, faster
                and more creatively than ever before.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </CitrusMicrosoftUIWrap>
  );
}

export default CitrusMicrosoftUI;
