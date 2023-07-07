import Bottom from "./Bottom"
import SecCarousel from "./Carousel"
import Top from "./Top"

const Section_3 = ({id}:{id:string}) => {
  return (
    <div id={id}>
        <Top/>
        <Bottom/>
        <SecCarousel/>
    </div>
  )
}

export default Section_3