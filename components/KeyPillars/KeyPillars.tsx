/* eslint-disable @next/next/no-img-element */
import { ourStoryMediaUrl } from "@/api/endpoints";
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
    h6 {
      text-align: center;
      margin-top: 20px;
    }
  }

  .flip-card-back {
    /* background: #7ce3fe; */
    transform: rotateY(180deg);
    color: #fff;
    p {
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
  title?: string;
  content?: string;
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
          <img src={ourStoryMediaUrl(icon)} alt="icon" />
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

interface IKeyPillarsProps {
  block_two_title?: string;
  block_two_sub_title?: string;
  block_two_sub_title_one?: string;
  block_two_sub_icon_one?: string | null;
  block_two_sub_itext_one?: string;
  block_two_sub_title_two?: string;
  block_two_sub_icon_two?: string | null;
  block_two_sub_itext_two?: string;
  block_two_sub_title_three?: string;
  block_two_sub_icon_three?: string | null;
  block_two_sub_itext_three?: string;
  block_two_sub_title_four?: string;
  block_two_sub_icon_four?: string | null;
  block_two_sub_itext_four?: string;
}

const KeyPillars = ({ ...props }: IKeyPillarsProps) => {
  return (
    <KeyPillarsStyled>
      <Container fixed>
        <CommonHeader
          mainTitle={props?.block_two_sub_title}
          subTitle={props?.block_two_title}
          sx={{ marginBottom: "100px" }}
        />
        <List disablePadding>
          <EachKeyPillar
            icon={String(props?.block_two_sub_icon_one)}
            title={props?.block_two_sub_title_one}
            content={props?.block_two_sub_itext_one}
          />
          <EachKeyPillar
            icon={String(props?.block_two_sub_icon_two)}
            title={props?.block_two_sub_title_two}
            content={props?.block_two_sub_itext_two}
          />
          <EachKeyPillar
            icon={String(props?.block_two_sub_icon_three)}
            title={props?.block_two_sub_title_three}
            content={props?.block_two_sub_itext_three}
          />
          <EachKeyPillar
            icon={String(props?.block_two_sub_icon_four)}
            title={props?.block_two_sub_title_four}
            content={props?.block_two_sub_itext_four}
          />
        </List>
      </Container>
    </KeyPillarsStyled>
  );
};

export default KeyPillars;
