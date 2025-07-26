/* eslint-disable react/no-unused-prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import assest from "@/json/assest";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import palette from "@/themes/palette";
import CustomButton from "@/ui/Buttons/CustomButton";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const drawerWidth = 240;

const HeaderWrap = styled(Box)`
  background: ${palette?.background?.paper};
  box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.07);
  .MuiToolbar-root {
    min-height: auto;
  }
  .hdr_rgt {
    margin-left: auto;
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 20px 0;
    transition: all 0.4s;
  }

  .headerLogo {
    width: 250px;
    display: inline-block;
    transition: all 0.4s;
  }
  .navbar {
    margin-left: 18px;
    display: flex;
    align-items: center;
    li {
      margin-right: 30px;
      width: auto;
      color: ${palette?.common?.black};
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      a {
        color: ${palette?.text?.primary};
        &:hover {
          color: ${palette?.primary?.main};
        }

        &.active {
          color: ${palette?.primary?.main};
        }
      }
    }
  }
`;

export default function Header() {
  const navItems = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Superchargers",
      route: "/superchargers"
    }
  ];

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  console.log(userData, "userData");

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem disablePadding>
            <Link href={item?.route} key={item.name}>
              {item.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  //for adding class to header while scroll
  // const [scroll, setScroll] = React.useState(false);

  // const detectScroll = React.useCallback(() => {
  //   setScroll(window.scrollY > 100);
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", detectScroll);
  //   return () => {
  //     window.removeEventListener("scroll", detectScroll);
  //   };
  // }, []);

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Container fixed>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" className="headerLogo">
              <Image src={assest.logo} width={133} height={40} alt="logo" />
            </Link>
            <Box className="hdr_rgt">
              {isLoggedIn ? (
                <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={handleLogout}
                >
                  Logout
                </CustomButton>
              ) : (
                <CustomButton variant="contained" color="primary">
                  Brochure
                </CustomButton>
              )}
            </Box>
            <List
              disablePadding
              sx={{ display: { xs: "none", sm: "block" } }}
              className="navbar"
            >
              {navItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <Link
                    href={item?.route}
                    className={router.pathname === item.route ? "active" : ""}
                  >
                    {item?.name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </HeaderWrap>
  );
}
