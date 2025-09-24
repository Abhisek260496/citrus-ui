import assest from "@/json/assest";
import { EwasteUIWrap } from "@/styles/styledComponents/EwasteUIWrap";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

function EwasteUI() {
  return (
    <EwasteUIWrap>
      {/* <Stack
        className="EwasteUIHeader"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
      >
        <Link href="/">
          <Image src={assest.citrusLogoNew} width={190} height={100} alt="" />
        </Link>

        <IconButton>
          <HambarIcon />
        </IconButton>
      </Stack> */}
      <Box className="bnrWrap">
        <figure>
          <Image
            src={assest.eWasteBnrImg}
            width={1980}
            height={1200}
            alt="eWasteBnrImg"
          />
        </figure>

        <Box className="bnrContentWrap">
          <Box className="bnrHeader">
            <Typography variant="h1">
              An Effective Way To Manage Your E-waste
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="ewasteInfoSection">
        <Container fixed>
          <Typography variant="h2">
            E-Waste Management and Handling Rules
          </Typography>

          <Typography variant="body1" className="ewasteInfoText">
            The E-waste (Management) Rules, 2016 was issued by MINISTRY OF
            ENVIRONMENT, FOREST AND CLIMATE CHANGE, in the regards to the
            E-waste generated in India by the various producers of these wastes
            such as manufacturer, producer, consumer, bulk consumer, collection
            centers, dealers, e-retailer, refurbisher, dismantler and recycler
            involved in manufacture, sale, transfer, purchase, collection,
            storage and processing of e-waste or electrical and electronic
            equipment listed in Schedule I In these said rules, responsibility
            of any producer of electrical or electronic equipment, for
            channelization of e-waste to ensure environmentally sound management
            of such waste.
          </Typography>
        </Container>
      </Box>

      <Box className="ewasteInfoSection">
        <Box className="ewasteInfoContent">
          <Box className="ewasteInfoLeft">
            <Typography variant="h3" className="ewasteInfoHeading">
              What is E-waste ?
            </Typography>
            <figure>
              <Image
                src={assest.wasteBinImg}
                width={600}
                height={500}
                alt="E-waste Bin"
              />
            </figure>
          </Box>

          <Box className="ewasteInfoRight">
            <Typography variant="body1" className="ewasteInfoText">
              E-waste is a popular, informal name for electronic products
              nearing the end of their “useful life”. It is loosely applied to
              consumer and electronic & IT equipment that is near or at the end
              of its useful life.
            </Typography>

            <Typography variant="h4" className="ewasteSubHeading">
              What should you do with my electronic discards?
            </Typography>

            <Typography variant="body2" className="ewasteInfoText">
              The mantra of “Reduce, Reuse, Recycle” applies here.
            </Typography>

            <Typography variant="body2" className="ewasteInfoText">
              Reduce your generation of e-waste through smart procurement and
              good maintenance.
            </Typography>

            <Typography variant="body2" className="ewasteInfoText">
              Reuse still functioning electronic equipment by donating or
              selling it to someone who can still use it.
            </Typography>

            <Typography variant="body2" className="ewasteInfoText">
              Recycle those products that cannot be repaired should NOT be
              disposed of with regular garbage instead it should be given to the
              proper E-waste recycler & dismantlers.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="electronicWrap">
        <Container fixed>
          <Typography variant="h2">
            What should you do with my electronic discards?
          </Typography>

          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <Box>
                <Typography variant="h3">Protects the environment</Typography>
                <Typography variant="body1">
                  Recycling the waste from electronics saves space in the
                  landfills and prevents the environmental pollution caused by
                  the toxins. Recycling also reduces the need for landfills in
                  the first place.
                </Typography>
                <Typography variant="body1">
                  As per studies, 98% of components in an electronic device are
                  recyclable. Metals extracted through mining require much
                  difficulty and effort. Apart from mining, the cost to refine
                  metals and transform them to a usable form is also very high.
                  Through the extraction and reuse of metal from old electronic
                  gadgets, the need to manufacture and refine raw metals
                  decreases.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h3">
                  Recycling is good for the economy
                </Typography>
                <Typography variant="body1">
                  Goods made from recycled materials use less water, create less
                  pollution, and use less energy. Recycling also reduces the
                  production costs of goods by avoiding manufacturing components
                  from scratch.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h3">Reuse of resources</Typography>
                <Typography variant="body1">
                  Electronics contain a lot of components that can be
                  re-utilized sometimes without any processing, saving resources
                  and energy required for initial manufacturing. Many big
                  companies have their own recycling facility where they dispose
                  of electronics for future reuse, and this is something all
                  companies should strive for.
                </Typography>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box>
                <Typography variant="h3">Save Landfill Space</Typography>
                <Typography variant="body1">
                  Electronic waste is being thrown into landfills at an
                  increasing rate each year. Throwing e-waste into landfills
                  creates many environmental issues. For example, the metals
                  used in electronic gadgets such as iron, aluminum, and gold
                  erode and release harmful toxins in the soil. Similarly, the
                  plastic in these gadgets can release poisonous toxins into the
                  soil, killing plants and microorganisms and polluting water
                  sources.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h3">Increase in Employment</Typography>
                <Typography variant="body1">
                  Only experts can deal with electronic waste properly.
                  Distinguishing between reusable and non-reusable materials
                  requires knowledge and skill, creating many jobs in the
                  recycling field. More education about electronics recycling
                  means more people recycle and more jobs are created.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="chlPartner">
        <Container fixed>
          <Typography variant="h2">Channel Partners</Typography>
          <Stack
            direction="row"
            gap={15}
            justifyContent="center"
            alignItems="center"
            className="partnerLogos"
          >
            <figure>
              <Image
                src={assest.logisticsSmallImg}
                width={290}
                height={155}
                alt="Logistics Partner"
              />
            </figure>
            <figure>
              <Image
                src={assest.simramImg}
                width={290}
                height={155}
                alt="Simram Partner"
              />
            </figure>
          </Stack>
        </Container>
      </Box>

      <Box className="awarenessWrap">
        <Typography variant="h2">Awareness Program</Typography>

        <Typography variant="body1" className="introText">
          Every customer/producer must be aware on handling of E-waste and
          channelize it to approved E-waste recycler/dismantler or Producers as
          per E-waste management rules 2016. Lack of awareness among various
          stakeholders about the ill effects of the end-of-life products
          (e-waste), is a major concern in our country. For reducing the adverse
          impact on environment and health we need to initiate sustainable
          mechanism to create awareness among the stakeholders.
        </Typography>

        <Typography variant="body1" className="introText">
          M/s. Citrus will launch awareness programme on Environmental Hazards
          of Electronic Waste for Producers. We are planning to provide
          financial support for conducting various awareness programmes by
          Academic Institutions, Industry Associations, and professional
          organizations for organizing workshops/ seminars for schools/
          colleges/ Resident Welfare Associations (RWAs)/ Bulk Consumers/
          Regulatory bodies, media engagement etc. so that they can provide
          information regarding our buy-back programme and distribute campaign
          material for wide circulation on ill-effects associated with e-waste.
        </Typography>

        <Grid container spacing={6} mt={4}>
          <Grid item md={6} xs={12}>
            <Typography variant="h3">Seminars/ Workshops</Typography>
            <Typography variant="body1">
              We will conduct awareness programs, seminars, and workshops at
              specific intervals and invite various stakeholders, school,
              college, institutions, retailers, dealers, bulk consumers etc. To
              attend the same and spread awareness about the hazardous elements
              in electronics goods, we will also educate our stakeholders,
              school, college, institutions, retailers, dealers, and bulk
              consumers about benefits of recycling electronic goods.
            </Typography>
          </Grid>

          <Grid item md={6} xs={12}>
            <Typography variant="h3">Advertisement</Typography>
            <Typography variant="body1">
              We will spread awareness through various means of social media and
              actively conduct “Below the line” advertising like newspaper,
              Inserts, Pamphlets, Banners, etc.
            </Typography>

            <Typography variant="h3" mt={4}>
              User Guide / Booklet / Brochures
            </Typography>
            <Typography variant="body1">
              It will inform all consumers/producers on handling of e-waste and
              collection and recycling arrangements with proper guidelines as
              per E-waste management rules 2016.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className="dosDontsWrap">
        <Typography variant="h2" className="sectionTitle">
          Do’s & Don’ts
        </Typography>

        <Grid container spacing={6} mt={2}>
          <Grid item xs={12}>
            <Typography variant="h3" className="subHeading">
              DO’s
            </Typography>
            <ul className="listWrap">
              <li>
                Always look for information on the catalogue with your product
                for end-of-life equipment handling.
              </li>
              <li>
                Ensure that only Authorized Recyclers/Dismantler handle your
                electronic products.
              </li>
              <li>
                Always call at our toll-free No’s to Dispose products that have
                reached end-of-life.
              </li>
              <li>
                Always drop your used electronic products, batteries, or any
                accessories when they reach the end of their life at your
                nearest Authorized E-Waste Collection Points.
              </li>
              <li>
                Always disconnect the battery from product and ensure that any
                face of the glass is protected from breakage.
              </li>
            </ul>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3" className="subHeading">
              Don’ts
            </Typography>
            <ul className="listWrap">
              <li>Do not dismantle your electronic Products on your own.</li>
              <li>
                Do not throw electronics in bins having “Do not Dispose” sign.
              </li>
              <li>
                Do not give e-waste to informal and unorganized sectors like
                Local Scrap Dealer/Rag Pickers.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </EwasteUIWrap>
  );
}

export default EwasteUI;
