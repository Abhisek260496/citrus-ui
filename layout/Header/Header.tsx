/* eslint-disable react/no-unused-prop-types */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

import { getAllProducts } from "@/api/functions/cms.api";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import assest from "@/json/assest";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import {
  DrawerStyle,
  HeaderWrap
} from "@/styles/styledComponents/HeaderWrapper";
import CustomButton from "@/ui/Buttons/CustomButton";
import CrossIcon from "@/ui/Icons/CrossIcon";
import ExpandMoreIcon from "@/ui/Icons/ExpandMoreIcon";
import HambarMenuIcon from "@/ui/Icons/HambarMenuIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const drawerWidth = 320;

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
export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: getAllProducts
  });

  const productItems = React.useMemo(() => {
    if (!productsLoading && products?.length) {
      return products?.map((item) => {
        return {
          ...{
            name: item?.product_title,
            route: `/products/${item?.product_slug}/${item?.product_id}`
          }
        };
      });
    } else {
      return [];
    }
  }, [products, productsLoading]);

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

  const drawer = (
    <DrawerStyle>
      <IconButton className="crossBtn" onClick={handleDrawerToggle}>
        <CrossIcon />
      </IconButton>
      <Box sx={{ textAlign: "center" }} className="drawerInnerContent">
        <Link href="/" className="drawerHeaderLogo">
          <Image src={assest.logo} width={133} height={40} alt="logo" />
        </Link>
        <Divider />
        <Box className="listUtrWrap">
          <List disablePadding className="navList">
            {navItems.map((item, index) => {
              if (item.name === "Products") {
                return (
                  <ListItem key={index} disablePadding>
                    <Accordion
                      disableGutters
                      elevation={0}
                      square
                      className={
                        router.pathname.startsWith("/products")
                          ? "activeAccordion"
                          : ""
                      }
                    >
                      {/* Accordion Header */}
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="products-content"
                        id="products-header"
                        className="accordionSummary"
                      >
                        <Typography component="span" className="accordionTitle">
                          Products
                        </Typography>
                      </AccordionSummary>

                      {/* Accordion Content */}
                      <AccordionDetails className="accordionDetails">
                        <List disablePadding>
                          {productItems?.map((product, idx) => (
                            <ListItem key={idx} disablePadding>
                              <Button
                                component={Link}
                                href={product.route}
                                disableRipple
                                className="productListItem"
                              >
                                {product.name}
                              </Button>
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
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

          <CustomButton
            variant="contained"
            color="primary"
            startIcon={<MailIcon />}
            className="emilBtn"
          >
            sales@citrusindia.com
          </CustomButton>
        </Box>
      </Box>
    </DrawerStyle>
  );

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className={`headerContainer ${isScrolled ? "fixedHeader" : ""}`}
      >
        <Container fixed>
          <Toolbar sx={{ p: "0 !important" }}>
            {/* Logo */}
            <Link href="/" className="headerLogo">
              <Image
                src={assest.citrus_current_logo}
                width={133}
                height={40}
                alt="logo"
              />
            </Link>

            {/* Desktop Menu */}
            <List disablePadding className="navbar">
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
                        {productItems?.map((product, idx) => (
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
              {/* <CustomButton
                variant="contained"
                color="primary"
                startIcon={<MailIcon />}
                className="emilBtn"
              >
                sales@citrusindia.com
              </CustomButton> */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="menuBtn"
              >
                <HambarMenuIcon />
              </IconButton>
            </Box>
            {/* Mobile Menu Button */}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", xl: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius: "15px 0 0 15px",
              overflow: "visible"
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
