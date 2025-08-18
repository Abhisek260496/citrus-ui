import AimSection from "@/components/AimSection/AimSection";
import IsoVerfied from "@/components/IsoVerified/IsoVerfied";
import KeyPillars from "@/components/KeyPillars/KeyPillars";
import OurStoryBanner from "@/components/OurStoryBanner/OurStoryBanner";
import Processsors from "@/components/Processors/Processsors";
import Wrapper from "@/layout/wrapper/Wrapper";

const Index = () => {
  return (
    <Wrapper>
      <OurStoryBanner />
      <Processsors />
      <KeyPillars />
      <AimSection />
      <IsoVerfied />
    </Wrapper>
  );
};
export default Index;
