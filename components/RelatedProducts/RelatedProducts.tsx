/* eslint-disable import/order */
/* eslint-disable sort-imports */
/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  styled,
  Typography
} from "@mui/material";
import React from "react";
import CommonHeader from "../CommonHeader/CommonHeader";
import assest from "@/json/assest";
import Link from "next/link";

const EachRelatedProductStyled = styled(Box)`
  background: linear-gradient(
    117.46deg,
    rgba(157, 162, 239, 0.1) -9.7%,
    rgba(1, 2, 20, 0.1) 106.97%
  );
  backdrop-filter: blur(20px);
  border-radius: 20px;
  position: relative;
    &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(135deg, #001545 0%, #00baff 100%);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    z-index: 1;
  }
  .product_fig {
    position: relative;
    z-index: 2;
    background: radial-gradient(
      72.61% 96.21% at 50.11% 50.14%,
      #3578c7 0%,
      #04174b 100%
    );
    border-radius: 20px 20px 0px 0px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    figure {
      height: 200px;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h6 {
      font-weight: 700;
      font-size: 31px;
      a{
        color: #fff;
        &:hover{
            color: #FF6106;
        }
      }
    }
  }
  .product_content {
    padding: 40px 40px 70px 40px;
    ul {
      li {
        font-weight: 700;
        font-size: 22px;
        color: #009fe3;
        display: block;
        span{
            /* display: inline-block; */
            font-weight: 400;
            color: #fff;
        }
        &:not(:last-of-type){
            margin-bottom: 10px;
        }
      }
    }
  }
`;

const RelatedProductsStyled = styled(Box)``;

interface IEachRelatedProductProps {
  image: string;
  title: string;
  os: string;
  processor: string;
  memory: string;
  storage: string;
  route:string
}

const EachRelatedProduct = ({
  image,
  memory,
  os,
  processor,
  storage,
  title,
  route
}: IEachRelatedProductProps) => {
  return (
    <EachRelatedProductStyled>
      <Box className="product_fig">
        <figure>
          <img src={image} alt="" />
        </figure>
        <Typography variant="h6">
            <Link href={route}>{title}</Link>
        </Typography>
      </Box>
      <Box className="product_content">
        <List disablePadding>
          <ListItem disablePadding>OS - 
            <Typography variant="caption">{os}</Typography>
          </ListItem>
          <ListItem disablePadding>Processor - 
             <Typography variant="caption">{processor}</Typography>
          </ListItem>
          <ListItem disablePadding>Memory - 
             <Typography variant="caption">{memory}</Typography>
          </ListItem>
          <ListItem disablePadding>Storage - 
             <Typography variant="caption">{storage}</Typography>
          </ListItem>
        </List>
      </Box>
    </EachRelatedProductStyled>
  );
};

const productList: IEachRelatedProductProps[] = [
  {
    title: "EON 13ProX",
    image: assest?.product1,
    memory: "Supports upto 64GB 3200 MHz",
    os: "Windows 11 Pro/IoT, Linux",
    processor: " Intel Core 13th Gen. i3 1315U/ i5 1335U/ i7 1355U",
    storage: "M.2 NVMe + 2.5″ SATA",
    route:""
  },
  {
    title: "UVA Plus LOH610",
    image: assest?.product2,
    memory: "Supports upto 64GB 3200 MHz",
    os: "Windows 11 Pro/IoT, Linux",
    processor: " Intel Core 13th Gen. i3 1315U/ i5 1335U/ i7 1355U",
    storage: "M.2 NVMe + 2.5″ SATA",
    route:""
  },
  {
    title: "RIG Plus Rugged PC",
    image: assest?.product3,
    memory: "Supports upto 64GB 3200 MHz",
    os: "Windows 11 Pro/IoT, Linux",
    processor: " Intel Core 13th Gen. i3 1315U/ i5 1335U/ i7 1355U",
    storage: "M.2 NVMe + 2.5″ SATA",
    route:""
  }
];

const RelatedProducts = () => {
  return (
    <RelatedProductsStyled className="cmn_gap">
      <Container fixed>
        <CommonHeader
          subTitle="Related"
          mainTitle=" Products"
          sx={{ textAlign: "center", marginBottom:"62px" }}
        />
        <Grid container spacing={2}>
          {productList?.map((item, index) => (
            <Grid item lg={4} md={6} xs={12} key={index}>
              <EachRelatedProduct {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </RelatedProductsStyled>
  );
};

export default RelatedProducts;
