import assest from "@/json/assest";
import { WorkWithUsBannerStyle } from "@/styles/styledComponents/WorkWithUsBannerStyle";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function WorkWithUsBanner() {
  return (
    <WorkWithUsBannerStyle>
      <figure className="workWithUsBnr">
        <Image
          src={assest.workWithUsBnrImg}
          width={1200}
          height={2000}
          alt="workWithUsBnrImg"
        />
      </figure>

      <Box className="bnrTextBox">
        <Typography variant="h1">WORK WITH US</Typography>
        <Typography variant="body1" className="subText">
          Join the Minds Powering the Future of Tech
        </Typography>
      </Box>
    </WorkWithUsBannerStyle>
  );
}

export default WorkWithUsBanner;
