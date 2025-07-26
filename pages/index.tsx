import Banner from "@/components/Banner/Banner";
import Exclusive from "@/components/ExclusiveSection/Exclusive";
import PowerFull from "@/components/PowerfullSection/PowerFull";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <PowerFull />
      <Exclusive />
    </Wrapper>
  );
}
