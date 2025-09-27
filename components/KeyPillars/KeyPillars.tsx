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

const FlipCard = styled(ListItem)`
  perspective: 1000px;
  width: 50%;
  padding: 0;
  padding-left: 145px;

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

  .flip-card-inner {
    position: relative;
    width: 210px;
    min-height: 310px;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    min-height: 310px;
    backface-visibility: hidden;
    border: 3.5px solid #7ce3fe;
    border-radius: 50px;
    padding: 37px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .flip-card-front {
    /* background: white; */
    h6{
      text-align: center;
      margin-top: 20px;
    }
  }

  .flip-card-back {
    /* background: #7ce3fe; */
    transform: rotateY(180deg);
    color: #fff;
    p{
      font-size: 16px;
    }
  }

  .pillars_water_mark {
    position: absolute;
    right: -190px;
    bottom: -50px;
    max-width: max-content;
    z-index: -1;
  }
`;

interface IEachKeyPillar {
  icon: string;
  title: string;
  content: string;
}

const EachKeyPillar = ({ icon, title, content }: IEachKeyPillar) => {
  return (
    <FlipCard>
      <div className="flip-card-inner">
        {/* Front Side */}
        <Box className="flip-card-front">
          <Image
            src={assest?.pillars_water_mark}
            alt="pillars_water_mark"
            width={445}
            height={160}
            className="pillars_water_mark"
          />
          <img src={icon} alt="icon" />
          <Typography variant="h6">{title}</Typography>
        </Box>

        {/* Back Side */}
        <Box className="flip-card-back">
          <Typography variant="body1">{content}</Typography>
        </Box>
      </div>
    </FlipCard>
  );
};

const pillarsList: IEachKeyPillar[] = [
  {
    icon: assest?.pillar_icon1,
    title: "Longer product life",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aperiam expedita eaque suscipit iste nam eos nostrum quia corrupti excepturi?"
  },
  {
    icon: assest?.pillar_icon2,
    title: "Commercial grade",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aperiam expedita eaque suscipit iste nam eos nostrum quia corrupti excepturi?"
  },
  {
    icon: assest?.pillar_icon3,
    title: "Elegant Designs",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aperiam expedita eaque suscipit iste nam eos nostrum quia corrupti excepturi?"
  },
  {
    icon: assest?.pillar_icon4,
    title: "3-YEARS WARRANTY POLICY",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aperiam expedita eaque suscipit iste nam eos nostrum quia corrupti excepturi?"
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
