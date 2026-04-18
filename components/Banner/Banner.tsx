import { ourStoryMediaUrl } from "@/api/endpoints";
import { bannerVideoApi, getSubMenu } from "@/api/functions/cms.api";
import { BannerStyled } from "@/styles/styledComponents/BannerStyled";
import Loader from "@/ui/Loader/Loder";
import { Box, Container, List, ListItem } from "@mui/material";
import Link from "next/link";
import { useQuery } from "react-query";

const Banner = () => {
  const { data: navItems, isLoading: navItemsLaoding } = useQuery({
    queryKey: ["getSubMenu"],
    queryFn: () => getSubMenu()
  });

  const { data: bannerVideoData, isLoading: bannerVideoDataLoading } = useQuery(
    {
      queryKey: ["bannerVideoApi"],
      queryFn: () => bannerVideoApi()
    }
  );

  console.log(bannerVideoData, "bannerVideoData");

  return (
    <BannerStyled>
      {bannerVideoData && !bannerVideoDataLoading ? (
        <figure>
          <video
            src={ourStoryMediaUrl(String(bannerVideoData?.banner_video))}
            autoPlay
            loop
            muted
          />
        </figure>
      ) : (
        <Loader />
      )}
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
