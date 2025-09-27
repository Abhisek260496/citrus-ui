import assest from "@/json/assest";
import { BannerStyled } from "@/styles/styledComponents/BannerStyled";
import { Box, Container, List, ListItem } from "@mui/material";
import Link from "next/link";

const navItems = [
  {
    name: "New releases",
    path: "#new_articles"
  },
  {
    name: "Clients",
    path: "#client"
  },
  {
    name: "Case study",
    path: "/case-study"
  },
  {
    name: "Product registration",
    path: "/product-registration"
  },
  {
    name: "resellers",
    path: "/resellers"
  },
  {
    name: "e-waste",
    path: "/e-waste"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "FAQs",
    path: "/faqs"
  }
];

const Banner = () => {
  return (
    <BannerStyled>
      <figure>
        {/* <Image
          src={assest?.bannerImage}
          alt="banner"
          width={1600}
          height={724}
        /> */}
        <video src={assest?.bannerVideo} autoPlay loop muted />
      </figure>
      <Box className="banner_btm_block">
        <Container fixed>
          <List>
            {navItems.map((item, index) => (
              <ListItem key={index}>
                {item.path.startsWith("#") ? (
                  <a href={item.path}>{item.name}</a>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </BannerStyled>
  );
};

export default Banner;
