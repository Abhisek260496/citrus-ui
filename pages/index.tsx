import Banner from "@/components/Banner/Banner";
import Clients from "@/components/ClientsSection/Clients";
import Exclusive from "@/components/ExclusiveSection/Exclusive";
import PowerFull from "@/components/PowerfullSection/PowerFull";
import SmartSolution from "@/components/SmartSolution/SmartSolution";
import UpdatedNews from "@/components/UpdatedNews/UpdatedNews";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <PowerFull />
      <Exclusive />
      <SmartSolution />
      <Clients />
      <UpdatedNews />
    </Wrapper>
  );
}
