import { blogMediaUrl } from "@/api/endpoints";
import { getBlog } from "@/api/functions/cms.api";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const BlogDetailsWrapper = styled(Box)`
  figure {
    height: 600px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .blog_content {
    h1 {
      text-transform: capitalize;
      line-height: 1.3;
      margin-bottom: 20px;
    }
    .dynamic_content {
      p {
        span {
          color: #fff !important;
        }
      }
    }
  }
  .btm_Stack {
    border-top: 2px solid #fff;
  }
  .each_stack_block {
    h4 {
      text-transform: capitalize;
    }
  }
`;

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: blog, isLoading: blogLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlog(id as string),
    enabled: !!id
  });

  return (
    <Wrapper>
      <BlogDetailsWrapper>
        <figure>
          <Image
            src={blogMediaUrl(blog?.blog_image as string)}
            alt="blog_image"
            width={1920}
            height={600}
          />
        </figure>
        <Box className="blog_content cmn_gap">
          <Container fixed>
            <Typography variant="h1">{blog?.blog_title}</Typography>
            <Box
              component="div"
              className="dynamic_content"
              dangerouslySetInnerHTML={{
                __html: blog?.blog_description as string
              }}
            />
          </Container>
        </Box>
        <Box className="btm_Stack_wrapper">
          <Container fixed>
            <Box className="btm_Stack cmn_gap">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="start"
              >
                <Box className="each_stack_block">
                  <Typography variant="h4">Written By</Typography>
                  <Typography>Citrus</Typography>
                </Box>
                <Box className="each_stack_block">
                  <Typography variant="h4">Published on</Typography>
                  <Typography>
                    {" "}
                    {moment(blog?.blog_created_at).format("MMM DD, YYYY")}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Container>
        </Box>
      </BlogDetailsWrapper>
    </Wrapper>
  );
};

export default Index;
