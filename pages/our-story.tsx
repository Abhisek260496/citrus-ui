import { getOurStory } from "@/api/functions/cms.api";
import AimSection from "@/components/AimSection/AimSection";
import IsoVerfied from "@/components/IsoVerified/IsoVerfied";
import KeyPillars from "@/components/KeyPillars/KeyPillars";
import OurStoryBanner from "@/components/OurStoryBanner/OurStoryBanner";
import Processsors from "@/components/Processors/Processsors";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import { useQuery } from "react-query";

const Index = () => {
  const { data: ourStoryContent, isLoading: ourStoryContentLoading } = useQuery(
    {
      queryKey: ["getOurStory"],
      queryFn: () => getOurStory()
    }
  );

  console.log(ourStoryContent?.[0], "ourStoryContent");

  return (
    <Wrapper>
      {ourStoryContentLoading ? (
        <Loader />
      ) : (
        <>
          <OurStoryBanner {...ourStoryContent?.[0]} />
          <Processsors {...ourStoryContent?.[0]} />
          <KeyPillars {...ourStoryContent?.[0]} />
          <AimSection {...ourStoryContent?.[0]} />
          <IsoVerfied {...ourStoryContent?.[0]} />
        </>
      )}
    </Wrapper>
  );
};
export default Index;
