/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/order */
import { mediaUrl } from "@/api/endpoints";
import { ClientDetails } from "@/api/functions/cms.api";
import { ClientsStyled } from "@/styles/styledComponents/ClientsStyled";
import palette from "@/themes/palette";
import Loader from "@/ui/Loader/Loder";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { useQuery } from "react-query";
import CommonHeader from "../CommonHeader/CommonHeader";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useMemo } from "react";

const Clients = () => {
  const { data: clientDetails, isLoading: clientDetailsLoading } = useQuery({
    queryKey: ["getClientDetails"],
    queryFn: ClientDetails
  });

  const { slide1, slide2 } = useMemo(() => {
    if (!clientDetails || clientDetailsLoading) {
      return { slide1: [], slide2: [] };
    }

    const middle = Math.floor(clientDetails.length / 2);

    const slide1 = clientDetails.slice(0, middle);
    const slide2 = clientDetails.slice(middle);

    return { slide1, slide2 };
  }, [clientDetails, clientDetailsLoading]);

  console.log(clientDetails, "clientDetails");
  return (
    <ClientsStyled
      id="client"
      className="cmn_gap"
      sx={{ bgcolor: palette.common.white }}
    >
      {/* <Container fixed> */}
      <CommonHeader
        isBgWhite
        mainTitle=" entrusted us"
        subTitle="Clients who"
        sx={{
          textAlign: "center",
          color: palette.text.secondary,
          mb: "64px"
        }}
      />

      {clientDetailsLoading ? (
        <Loader />
      ) : (
        <>
          <Splide
            options={{
              type: "loop",
              drag: "free",
              gap: "1rem",
              perPage: 5,
              autoScroll: { speed: 2 },
              arrows: false,
              pagination: false,
              pauseOnHover: false,
              pauseOnFocus: false
            }}
            extensions={{ AutoScroll }}
          >
            {slide1?.map((item, index) => (
              <SplideSlide key={index}>
                <img
                  src={mediaUrl(`client/${item.client_image}`)}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </SplideSlide>
            ))}
          </Splide>

          <Splide
            options={{
              type: "loop",
              drag: "free",
              gap: "1rem",
              perPage: 5,
              autoScroll: { speed: 2 },
              arrows: false,
              pagination: false,
              pauseOnHover: false,
              pauseOnFocus: false
              // breakpoints: {
              //   1199: {
              //     perPage: 3
              //   },
              //   899: {
              //     perPage: 2
              //   },
              //   599: {
              //     perPage: 1,
              //     gap: "0.75rem"
              //   }
              // }
            }}
            extensions={{ AutoScroll }}
          >
            {slide2?.map((item, index) => (
              <SplideSlide key={index}>
                <img
                  src={mediaUrl(`client/${item.client_image}`)}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </SplideSlide>
            ))}
          </Splide>
        </>
      )}

      {/* <Grid container spacing={2}>
            {clientDetails?.map((item, index) => (
              <Grid item xs={6} md={2} key={index} alignItems="center">
                <img
                  src={mediaUrl(`client/${item.client_image}`)}
                  alt="clients"
                />
              </Grid>
            ))}
          </Grid> */}
      {/* </Container> */}
    </ClientsStyled>
  );
};

export default Clients;
