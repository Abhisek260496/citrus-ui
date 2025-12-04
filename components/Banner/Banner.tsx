import { getSubMenu } from "@/api/functions/cms.api";
import assest from "@/json/assest";
import { BannerStyled } from "@/styles/styledComponents/BannerStyled";
import { Box, Container, List, ListItem } from "@mui/material";
import Link from "next/link";
import { useQuery } from "react-query";

// const navItems = [
//   {
//     name: "New releases",
//     path: "#new_articles"
//   },
//   {
//     name: "Clients",
//     path: "#client"
//   },
//   {
//     name: "Case study",
//     path: "/case-study"
//   },
//   // {
//   //   name: "Product registration",
//   //   path: "/product-registration"
//   // },
//   // {
//   //   name: "resellers",
//   //   path: "/resellers"
//   // },
//   {
//     name: "e-waste",
//     path: "/e-waste"
//   },
//   {
//     name: "Blog",
//     path: "/blog"
//   },
//   {
//     name: "FAQs",
//     path: "/faqs"
//   }
// ];

const Banner = () => {
  const { data: navItems, isLoading: navItemsLaoding } = useQuery({
    queryKey: ["getSubMenu"],
    queryFn: () => getSubMenu()
  });
  return (
    <BannerStyled>
      <figure>
        <video src={assest?.bannerVideo} autoPlay loop muted />
      </figure>
      <Box className="banner_btm_block">
        <Container fixed>
          {!!navItems && navItems?.length && !navItemsLaoding ? (
            <List>
              {navItems.map((item, index) => (
                <ListItem key={index}>
                  {item.link.startsWith("#") ? (
                    <a href={item.link}>{item.title}</a>
                  ) : (
                    <Link href={item.link}>{item.title}</Link>
                  )}
                </ListItem>
              ))}
            </List>
          ) : null}
        </Container>
      </Box>
    </BannerStyled>
  );
};

export default Banner;
