import CoreToEveryThing from '@/components/CoreToEveryThing/CoreToEveryThing'
import EonSlimBanner from '@/components/EonSlimBanner/EonSlimBanner'
import assest from '@/json/assest'
import Wrapper from '@/layout/wrapper/Wrapper'


const Index = () => {
  return (
    <Wrapper>
        <EonSlimBanner/>
        <CoreToEveryThing bgImg={assest?.core_to_everything_eon_slim}/>
    </Wrapper>
  )
}

export default Index