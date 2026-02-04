import {
  getFooterCompanyLinks,
  getFooterQuickLinks,
  getFooterSocialLinks
} from "@/api/functions/cms.api";
import assest from "@/json/assest";
import palette from "@/themes/palette";
import CustomButton from "@/ui/Buttons/CustomButton";
import CallIcon from "@/ui/Icons/CallIcon";
import LocationIcon from "@/ui/Icons/LocationIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import NextArrowIcon from "@/ui/Icons/NextArrow";
import CustomInput from "@/ui/Inputs/CustomInput";
import styled from "@emotion/styled";
import { List, ListItem, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const FooterWrap = styled(Box)`
  padding: 45px 0;
  background-color: #201e1d;
`;

const Footer = () => {
  const { data: navItems, isLoading: navItemsLoading } = useQuery({
    queryKey: ["getAllQuickLinks"],
    queryFn: () => getFooterQuickLinks()
  });

  const { data: companyItems, isLoading: companyItemsLoading } = useQuery({
    queryKey: ["getAllCompanyLinks"],
    queryFn: () => getFooterCompanyLinks()
  });

  const { data: socialFooterItems, isLoading: socialItemsLoading } = useQuery({
    queryKey: ["getFooterSocialLinks"],
    queryFn: () => getFooterSocialLinks()
  });

  console.log(socialFooterItems, "socialFooterItems");

  const socialItems = [
    {
      name: "Facebook",
      img: assest.fb,
      route: `${socialFooterItems?.social_link_one}`
    },
    {
      name: "Instagram",
      img: assest.insta,
      route: `${socialFooterItems?.social_link_two}`
    },
    {
      name: "Twitter",
      img: assest.twiter,
      route: `${socialFooterItems?.social_link_three}`
    },
    {
      name: "Linkedin",
      img: assest.linkedin,
      route: `${socialFooterItems?.social_link_four}`
    },
    {
      name: "Youtube",
      img: assest.youtube,
      route: `${socialFooterItems?.social_link_five}`
    }
  ];
  const router = useRouter();
  return (
    <FooterWrap>
      <Container fixed>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          <Box sx={{ width: { xs: "100%", md: "393px" } }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Poppins",
                fontSize: "22px",
                mb: "30px",
                textTransform: "capitalize"
              }}
            >
              Contact us
            </Typography>
            <List
              sx={{
                "& .MuiListItem-root": {
                  display: "flex",
                  alignItems: "start",
                  padding: "0px",
                  marginBottom: "35px",
                  "& :last-of-type": {
                    marginBottom: "0px"
                  },
                  "& i": {
                    marginRight: "10px",
                    width: "46px",
                    height: "46px",
                    flexShrink: "0",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: palette.text.primary,
                    borderRadius: "10px"
                  },
                  "& p": {
                    color: "#A1A1A1",
                    fontFamily: "Poppins",
                    fontSize: "14px"
                  },
                  "& a , & address": {
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    color: palette.common.white,
                    fontStyle: "normal"
                  },
                  "& a": {
                    "&:hover": {
                      color: palette.text.primary
                    }
                  }
                }
              }}
            >
              <ListItem>
                <i>
                  <CallIcon />
                </i>
                <Box>
                  <Typography>Call us</Typography>
                  <Link
                    href={`tel:${socialFooterItems?.phone?.split(" ").at(-1)}`}
                  >
                    {socialFooterItems?.phone}
                  </Link>
                </Box>
              </ListItem>
              <ListItem>
                <i>
                  <MailIcon />
                </i>
                <Box>
                  <Typography>Mail us</Typography>
                  <Link href={`mailto:${socialFooterItems?.email}`}>
                    {socialFooterItems?.email}
                  </Link>
                </Box>
              </ListItem>
              <ListItem>
                <i>
                  <LocationIcon />
                </i>
                <Box>
                  <Typography>Reach us</Typography>
                  <address>{socialFooterItems?.address}</address>
                </Box>
              </ListItem>
            </List>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "162px" } }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Poppins",
                fontSize: "22px",
                mb: "30px",
                textTransform: "capitalize"
              }}
            >
              Quick links
            </Typography>
            <List
              sx={{
                "& .MuiListItem-root": {
                  display: "flex",
                  alignItems: "start",
                  padding: "0px",
                  marginBottom: "18px",
                  "& :last-of-type": {
                    marginBottom: "0px"
                  },
                  "& a": {
                    textTransform: "capitalize",
                    color: palette.common.white,
                    "&:hover": {
                      color: palette.text.primary
                    }
                  }
                }
              }}
            >
              {!!navItems && navItems?.length && !navItemsLoading ? (
                <>
                  {navItems.map((item, index) => (
                    <ListItem disablePadding key={index}>
                      <Link
                        href={item.link}
                        key={item.title}
                        className={
                          router.pathname === item.link ? "active" : ""
                        }
                      >
                        {item?.title}
                      </Link>
                    </ListItem>
                  ))}
                </>
              ) : null}
            </List>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "170px" } }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Poppins",
                fontSize: "22px",
                mb: "30px",
                textTransform: "capitalize"
              }}
            >
              Company
            </Typography>
            <List
              sx={{
                "& .MuiListItem-root": {
                  display: "flex",
                  alignItems: "start",
                  padding: "0px",
                  marginBottom: "18px",
                  "& :last-of-type": {
                    marginBottom: "0px"
                  },
                  "& a": {
                    color: palette.common.white,
                    textTransform: "capitalize",
                    "&:hover": {
                      color: palette.text.primary
                    }
                  }
                }
              }}
            >
              {!!companyItems &&
              companyItems?.length &&
              !companyItemsLoading ? (
                <>
                  {companyItems.map((item, index) => (
                    <ListItem disablePadding key={index}>
                      <Link
                        href={item.link}
                        key={item.title}
                        className={
                          router.pathname === item.link ? "active" : ""
                        }
                      >
                        {item?.title}
                      </Link>
                    </ListItem>
                  ))}
                </>
              ) : null}
            </List>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "333px" } }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Poppins",
                fontSize: "22px",
                mb: "30px",
                textTransform: "capitalize"
              }}
            >
              Subscription
            </Typography>
            <form
              style={{
                position: "relative"
              }}
            >
              <CustomInput placeholder="Your mail..." fullWidth />
              <CustomButton
                type="submit"
                sx={{
                  minWidth: "auto",
                  width: "50px",
                  height: "50px",
                  padding: "10px",
                  position: "absolute",
                  right: "5px",
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                <NextArrowIcon />
              </CustomButton>
            </form>
            <List
              sx={{
                marginTop: "38px",
                display: "flex",
                alignItems: "center",
                "& .MuiListItem-root": {
                  display: "flex",
                  alignItems: "center",
                  padding: "0px",
                  marginRight: "15px",
                  width: "40px",
                  height: "40px",
                  "& :last-of-type": {
                    marginBottom: "0px"
                  },
                  "& a": {
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    color: palette.common.white,
                    textTransform: "capitalize",
                    borderRadius: "10px",
                    overflow: "hidden",
                    "& img": {
                      width: "100%",
                      height: "100%"
                    }
                  }
                }
              }}
            >
              {!socialItemsLoading ? (
                <>
                  {socialItems.map((item: any, index: number) => (
                    <ListItem disablePadding key={index}>
                      <Link href={item?.route} key={item.name}>
                        <Image
                          src={item?.img}
                          alt={item?.name}
                          width={40}
                          height={40}
                        />
                      </Link>
                    </ListItem>
                  ))}
                </>
              ) : null}
            </List>
          </Box>
        </Stack>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
