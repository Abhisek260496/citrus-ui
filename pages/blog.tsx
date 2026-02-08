import { blogMediaUrl, commonMediaUrl } from "@/api/endpoints";
import { getBlogBanner, getBlogs } from "@/api/functions/cms.api";
import { IBlogResponse } from "@/interface/apiresp.interfaces";
import Wrapper from "@/layout/wrapper/Wrapper";
import palette from "@/themes/palette";
import Loader from "@/ui/Loader/Loder";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import moment from "moment";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";

const BlogBanner = styled(Box)`
  position: relative;
  .banner_content {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;

    .MuiContainer-root {
      height: 100%;
    }
    .banner_wrapper {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      .tag_img {
        position: absolute;
        left: 0;
        bottom: 0;
      }
      h1 {
        text-transform: capitalize;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        letter-spacing: 0.0205078em;
        max-width: 840px;
        line-height: 1.4;
      }
    }
  }
  figure {
    height: 800px;
    position: relative;
    &::before {
      content: "";
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#176dff+0,ffffff+100&1+0,0+100 */
      background: linear-gradient(
        to right,
        rgba(23, 109, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const Blogs = styled(Box)`
  background-color: #fff;
`;

const EachBlogComponentStyled = styled(Box)`
  .content {
    margin-top: 20px;
  }
  h6 {
    font-weight: 400;
    font-size: 25px;
    line-height: 1.3;
    letter-spacing: 0.00585938em;
    color: #000;
    min-height: 100px;
    a {
      color: inherit;
      &:hover {
        color: ${palette.text.primary};
      }
    }
  }
`;

const EachBlogComponent = ({ ...props }: IBlogResponse) => {
  return (
    <EachBlogComponentStyled>
      <figure>
        <Image
          src={blogMediaUrl(props?.blog_image)}
          alt="blog_image"
          width={540}
          height={400}
        />
      </figure>
      <Box className="content">
        <Typography variant="h6">
          <Link href={`blog-details/${props.blog_id}`}>
            {props?.blog_title}
          </Link>
        </Typography>
        <Typography>
          {moment(props?.blog_created_at).format("MMM DD, YYYY")}
        </Typography>
      </Box>
    </EachBlogComponentStyled>
  );
};
export default function Home() {
  const { data: blogs, isLoading: blogLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogs()
  });

  const { data: blogBanner, isLoading: blogBannerLoading } = useQuery({
    queryKey: ["getBlogBanner"],
    queryFn: () => getBlogBanner()
  });

  console.log(commonMediaUrl(blogBanner?.banner_image as string), "blogBanner");

  return (
    <Wrapper>
      {blogLoading || blogBannerLoading ? (
        <Loader />
      ) : (
        <>
          <BlogBanner>
            <figure>
              <Image
                src={commonMediaUrl(blogBanner?.banner_image as string)}
                alt="blog_banner"
                width={1920}
                height={800}
              />
            </figure>
            <Box className="banner_content">
              <Container fixed>
                <Box className="banner_wrapper">
                  <Typography variant="h1">{blogBanner?.title}</Typography>
                  <Image
                    className="tag_img"
                    src={commonMediaUrl(
                      blogBanner?.banner_bottom_image as string
                    )}
                    alt="blog_tag"
                    width={330}
                    height={120}
                  />
                </Box>
              </Container>
            </Box>
          </BlogBanner>

          <Blogs className="cmn_gap">
            <Container fixed>
              <Grid container spacing={6}>
                {!!blogs &&
                  blogs?.length &&
                  blogs?.map((blog) => (
                    <Grid item lg={4} md={6} xs={12} key={blog?.blog_id}>
                      <EachBlogComponent {...blog} />
                    </Grid>
                  ))}
              </Grid>
            </Container>
          </Blogs>
        </>
      )}
    </Wrapper>
  );
}
