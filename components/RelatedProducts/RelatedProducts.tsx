/* eslint-disable import/order */
/* eslint-disable sort-imports */
/* eslint-disable @next/next/no-img-element */
import { IEachRelatedProductProps } from "@/types/common.type";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  styled,
  Typography
} from "@mui/material";
import Link from "next/link";
import CommonHeader from "../CommonHeader/CommonHeader";

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
      a {
        color: #fff;
        &:hover {
          color: #ff6106;
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
        span {
          /* display: inline-block; */
          font-weight: 400;
          color: #fff;
        }
        &:not(:last-of-type) {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

const RelatedProductsStyled = styled(Box)``;

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
          <ListItem disablePadding>
            OS -<Typography variant="caption">{os}</Typography>
          </ListItem>
          <ListItem disablePadding>
            Processor -<Typography variant="caption">{processor}</Typography>
          </ListItem>
          <ListItem disablePadding>
            Memory -<Typography variant="caption">{memory}</Typography>
          </ListItem>
          <ListItem disablePadding>
            Storage -<Typography variant="caption">{storage}</Typography>
          </ListItem>
        </List>
      </Box>
    </EachRelatedProductStyled>
  );
};

interface IRelatedProducts {
  productList: IEachRelatedProductProps[];
}

const RelatedProducts = ({ productList }: IRelatedProducts) => {
  return (
    <RelatedProductsStyled className="cmn_gap">
      <Container fixed>
        <CommonHeader
          subTitle="Related"
          mainTitle=" Products"
          sx={{ textAlign: "center", marginBottom: "62px" }}
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
