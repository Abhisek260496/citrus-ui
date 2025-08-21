import Communicative from "@/components/Communicative/Communicative";
import CoreToEveryThing from "@/components/CoreToEveryThing/CoreToEveryThing";
import GraphicCardSec from "@/components/GraphicCardSec/GraphicCardSec";
import IndependentDisplay from "@/components/IndependentDisplay/IndependentDisplay";
import Np500Banner from "@/components/Np500Banner/Np500Banner";
import Wrapper from "@/layout/wrapper/Wrapper";

const Index = () => {
  return (
    <Wrapper>
      <Np500Banner />
      <CoreToEveryThing />
      <IndependentDisplay />
      <GraphicCardSec />
      <Communicative />
    </Wrapper>
  );
};

export default Index;
