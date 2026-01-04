import { SupportSectionWrap } from "@/styles/styledComponents/SupportSectionWrap";
import ShieldOutlinedIcon from "@/ui/Icons/ShieldOutlinedIcon";
import ShoppingCartOutlinedIcon from "@/ui/Icons/ShoppingCartOutlinedIcon";
import SupportIcon from "@/ui/Icons/SupportIcon";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const supportList = [
  {
    id: 1,
    title: "Technical Support",
    icon: <SupportIcon />,
    link: "/techincal-support"
  },
  {
    id: 2,
    title: "Warranty Support",
    icon: <ShieldOutlinedIcon />,
    link: "/warranty-support"
  },
  {
    id: 3,
    title: "Sales Support",
    icon: <ShoppingCartOutlinedIcon />,
    link: "/sales-support"
  }
];

function SupportSection() {
  return (
    <SupportSectionWrap className="cmn_gap">
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {supportList.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Box className="supportCard">
                <Box className="supportIcon">{item.icon}</Box>
                <Typography className="supportTitle">
                  <Link href={item?.link} style={{ color: "inherit" }}>
                    {item.title}
                  </Link>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SupportSectionWrap>
  );
}

export default SupportSection;
