import { getSubMenu } from "@/api/functions/cms.api";
import assest from "@/json/assest";
import { BannerStyled } from "@/styles/styledComponents/BannerStyled";
import { Box, Container, List, ListItem } from "@mui/material";
import Link from "next/link";
import { useQuery } from "react-query";

const Banner = () => {
  const { data: navItems, isLoading: navItemsLaoding } = useQuery({
    queryKey: ["getSubMenu"],
    queryFn: () => getSubMenu()
  });

  console.log(navItems, "navItems");

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
