/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/order */
import { ClientsStyled } from "@/styles/styledComponents/ClientsStyled";
import palette from "@/themes/palette";
import { Box, Container, Grid } from "@mui/material";
import CommonHeader from "../CommonHeader/CommonHeader";
import { useQuery } from "react-query";
import { ClientDetails } from "@/api/functions/cms.api";
import { baseUrlMedia, mediaUrl } from "@/api/endpoints";

const Clients = () => {
  const { data: clientDetails } = useQuery({
    queryKey: ["getClientDetails"],
    queryFn: ClientDetails
  });

  console.log(clientDetails,"clientDetails")
  return (
    <ClientsStyled
      id="client"
      className="cmn_gap"
      sx={{ bgcolor: palette.common.white }}
    >
      <Container fixed>
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

        <Box>
          <Grid container spacing={2}>
            {clientDetails?.map((item, index) => (
              <Grid item xs={6} md={2} key={index} alignItems="center">
                <img
                  src={ mediaUrl(`client/${item.client_image}`)}
                  alt="clients"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ClientsStyled>
  );
};

export default Clients;
