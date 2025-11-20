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
import { HeaderWrap } from "@/styles/styledComponents/HeaderWrapper";
import CustomButton from "@/ui/Buttons/CustomButton";
import MailIcon from "@/ui/Icons/MailIcon";
import WhatsAppIcon from "@/ui/Icons/WhatsAppIcon";
import { Button, Menu, MenuItem } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const drawerWidth = 240;

export default function Header() {
  const navItems = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Our Story",
      route: "/our-story"
    },
    {
      name: "Citrus + Microsoft",
      route: "/citrus-microsoft"
    },
    {
      name: "Products",
      route: "/products"
    },
    {
      name: "Support",
      route: "/support"
    },
    {
      name: "CSR",
      route: "/csr"
    },
    {
      name: "Work with Us",
      route: "/work-with-us"
    }
  ];

  const productItems = [
    { name: "Xtreme N100", route: "/products/xtreme" },
    { name: "EON Slim", route: "/products/eon-slim" },
    { name: "EON Slim E", route: "/products/eon-slim-e" },
    { name: "EON Slim N3350", route: "/products/eon-slim-n3350" },
    { name: "EON 13Pro", route: "/products/eon13-pro" },
    { name: "EON 13Pro X", route: "/products/eon13-proX" },
    { name: "EON 14Pro", route: "/products/eon-14pro" },
    { name: "UVA Plus LOH610", route: "/products/uva" },
    { name: "NEO NP500", route: "/products/np500" },
    { name: "RIG Plus Rugged", route: "/products/rig-plus" },
    { name: "RIG Slim Rugged", route: "/products/rig" },
    { name: "OPS", route: "/products/ops" }
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
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

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Container fixed>
          <Toolbar sx={{ p: "0 !important" }}>
            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => {}}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Link href="/" className="headerLogo">
              <Image src={assest.logo} width={133} height={40} alt="logo" />
            </Link>

            {/* Desktop Menu */}
            <List
              disablePadding
              sx={{ display: { xs: "none", sm: "block" } }}
              className="navbar"
            >
              {navItems.map((item, index) => {
                if (item.name === "Products") {
                  return (
                    <ListItem key={index} disablePadding>
                      <Button
                        disableRipple
                        aria-controls={open ? "product-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleMenuOpen}
                        className={
                          router.pathname.startsWith("/products")
                            ? "active"
                            : ""
                        }
                        sx={{
                          color: "inherit",
                          textTransform: "none",
                          fontSize: "16px"
                        }}
                      >
                        Products
                      </Button>

                      {/* Dropdown Menu */}
                      <Menu
                        id="product-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button"
                        }}
                        slotProps={{
                          paper: {
                            className: "menu_list"
                          }
                        }}
                      >
                        {productItems.map((product, idx) => (
                          <MenuItem
                            key={idx}
                            onClick={handleMenuClose}
                            component={Link}
                            href={product.route}
                          >
                            {product.name}
                          </MenuItem>
                        ))}
                      </Menu>
                    </ListItem>
                  );
                }

                return (
                  <ListItem key={index} disablePadding>
                    <Link
                      href={item.route}
                      className={router.pathname === item.route ? "active" : ""}
                    >
                      {item.name}
                    </Link>
                  </ListItem>
                );
              })}
            </List>

            {/* Right Side Buttons */}
            <Box className="hdr_rgt">
              <CustomButton
                variant="contained"
                color="primary"
                startIcon={<MailIcon />}
              >
                sales@citrusindia.com
              </CustomButton>
              <Button
                sx={{
                  padding: "0px",
                  minWidth: "0px",
                  marginLeft: "15px",
                  "& .MuiButton-startIcon": {
                    marginLeft: 0,
                    marginRight: 0
                  },
                  "&:hover": { backgroundColor: "transparent" }
                }}
                startIcon={<WhatsAppIcon />}
              />
            </Box>
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
