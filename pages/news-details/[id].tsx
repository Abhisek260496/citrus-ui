import { newsMediaUrl } from "@/api/endpoints";
import { getNews } from "@/api/functions/cms.api";
import Wrapper from "@/layout/wrapper/Wrapper";
import { NewsDetailStyled } from "@/styles/styledComponents/NewsDetailStyled";
import CalenderIcon from "@/ui/Icons/CalenderIcon";
import Loader from "@/ui/Loader/Loder";
import { Box, Container, Typography } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: news, isLoading: newsLoading } = useQuery({
    queryKey: ["getNews", id],
    queryFn: () => getNews(id as string)
  });

  console.log(news, "news");

  return (
    <Wrapper>
      {newsLoading ? (
        <Loader />
      ) : (
        <NewsDetailStyled>
          <Container fixed>
            <figure>
              <Image
                src={newsMediaUrl(news?.news_image as string)}
                alt={news?.news_slug as string}
                width={1600}
                height={400}
              />
            </figure>

            <Box className="updated_content">
              <Typography className="date">
                <Typography variant="caption">
                  <CalenderIcon />
                </Typography>
                {moment(news?.news_created_at).format("MMM DD, YYYY")}
              </Typography>
              <Typography variant="h5">{news?.news_title}</Typography>
              <Box
                className="news_content"
                component="div"
                dangerouslySetInnerHTML={{
                  __html: news?.news_description as string
                }}
              />
            </Box>
          </Container>
        </NewsDetailStyled>
      )}
    </Wrapper>
  );
};

export default Index;
