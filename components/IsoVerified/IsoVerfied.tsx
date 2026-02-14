/* eslint-disable react/jsx-no-useless-fragment */
import { certificatesMediaUrl } from "@/api/endpoints";
import { getCertificates } from "@/api/functions/cms.api";
import assest from "@/json/assest";
import { Box, Container, Grid, styled } from "@mui/material";
import Image from "next/image";
import { useQuery } from "react-query";
import CommonHeader from "../CommonHeader/CommonHeader";

const IsoVerfiedStyled = styled(Box)`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #05080f;
    opacity: 0.5;
    z-index: -2;
  }
  .iso_verified_content {
    max-width: 878px;
    margin: 0 auto;
    text-align: center;
  }
  .iso_verified_img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

const IsoVerfied = () => {
  const { data: certificates } = useQuery({
    queryKey: ["getCertificates"],
    queryFn: () => getCertificates()
  });

  return (
    <IsoVerfiedStyled className="cmn_gap">
      <Image
        src={assest?.iso_verified_img}
        alt="iso_verified_img"
        width={1920}
        height={310}
        className="iso_verified_img"
      />
      <Container fixed>
        <Box className="iso_verified_content">
          <CommonHeader
            mainTitle="Verified"
            subTitle="ISO"
            sx={{ marginBottom: "60px" }}
          />
          <Grid container spacing={2}>
            {certificates?.length ? (
              <>
                {certificates?.map((certificate) => (
                  <Grid item md={4} xs={12} key={certificate?.certificate_id}>
                    <Image
                      src={certificatesMediaUrl(
                        String(certificate?.certificate_image)
                      )}
                      alt="iso_img1"
                      width={424}
                      height={600}
                    />
                  </Grid>
                ))}
              </>
            ) : null}
            {/* <Grid item md={4} xs={12}>
              <Image
                src={ourStoryMediaUrl(String(props?.block_four_image))}
                alt="iso_img1"
                width={424}
                height={600}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Image
                src={ourStoryMediaUrl(String(props?.block_four_image_one))}
                alt="iso_img1"
                width={424}
                height={600}
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <Image
                src={ourStoryMediaUrl(String(props?.block_four_image_two))}
                alt="iso_img2"
                width={424}
                height={600}
              />
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </IsoVerfiedStyled>
  );
};

export default IsoVerfied;
