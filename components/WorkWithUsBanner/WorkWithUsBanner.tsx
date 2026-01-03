import { getWorks } from "@/api/functions/cms.api";
import assest from "@/json/assest";
import { WorkWithUsBannerStyle } from "@/styles/styledComponents/WorkWithUsBannerStyle";
import Loader from "@/ui/Loader/Loder";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useQuery } from "react-query";

function WorkWithUsBanner() {
  const { data: workData, isLoading: workDataLoading } = useQuery({
    queryKey: ["getWorks"],
    queryFn: () => getWorks()
  });

  return (
    <>
      {workDataLoading && <Loader />}
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
          <Typography variant="h1">{workData?.meta_title}</Typography>
          <Typography variant="body1" className="subText">
            {workData?.sub_title}
          </Typography>
        </Box>
      </WorkWithUsBannerStyle>
    </>
  );
}

export default WorkWithUsBanner;
