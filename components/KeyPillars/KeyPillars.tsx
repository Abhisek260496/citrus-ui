/* eslint-disable @next/next/no-img-element */
import assest from "@/json/assest";
import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
  styled
} from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const KeyPillarsStyled = styled(Box)`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 454px;
    height: 454px;
    right: -15%;
    top: -5%;
    background: rgba(0, 159, 227, 0.6);
    filter: blur(200px);
    z-index: 1;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const IEachKeyPillarStyled = styled(ListItem)`
  padding: 0;
  padding-left: 145px;
  width: 50%;
  .pillar_block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 37px 20px;
    border: 3.5px solid #7ce3fe;
    border-radius: 50px;
    width: 210px;
    min-height: 310px;
    position: relative;
    .pillars_water_mark {
      position: absolute;
      right: -190px;
      bottom: -50px;
      max-width: max-content;
      z-index: -1;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      margin-top: 20px;
      text-align: center;
    }
  }
  :nth-of-type(1),
  :nth-of-type(2) {
    margin-bottom: 40px;
  }
  :nth-of-type(2) {
    padding-left: 80px;
  }
  :nth-of-type(3) {
    justify-content: flex-end;
  }
  :nth-of-type(4) {
    padding-left: 325px;
  }
`;

interface IEachKeyPillar {
  icon: string;
  title: string;
}

const EachKeyPillar = ({ icon, title }: IEachKeyPillar) => {
  return (
    <IEachKeyPillarStyled>
      <Box className="pillar_block">
        <Image
          src={assest?.pillars_water_mark}
          alt="pillars_water_mark"
          width={445}
          height={160}
          className="pillars_water_mark"
        />
        <img src={icon} alt="icon" />
        <Typography>{title}</Typography>
      </Box>
    </IEachKeyPillarStyled>
  );
};

const pillarsList = [
  {
    icon: assest?.pillar_icon1,
    title: "Longer product life"
  },
  {
    icon: assest?.pillar_icon2,
    title: "Commercial grade"
  },
  {
    icon: assest?.pillar_icon3,
    title: "Elegant Designs"
  },
  {
    icon: assest?.pillar_icon4,
    title: "3-YEARS WARRANTY POLICY"
  }
];
const KeyPillars = () => {
  return (
    <KeyPillarsStyled>
      <Container fixed>
        <CommonHeader
          mainTitle="pillars"
          subTitle="Key"
          sx={{ marginBottom: "100px" }}
        />
        <List disablePadding>
          {pillarsList?.map((item, index) => {
            return <EachKeyPillar {...item} key={index} />;
          })}
        </List>
      </Container>
    </KeyPillarsStyled>
  );
};

export default KeyPillars;
