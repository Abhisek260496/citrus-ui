import Wrapper from "@/layout/wrapper/Wrapper";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Wrapper>
      <Container fixed>
        <Typography variant="h1">hi</Typography>
        <Typography>Hello</Typography>
      </Container>
    </Wrapper>
  );
}
