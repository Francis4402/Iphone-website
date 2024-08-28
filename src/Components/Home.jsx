import Features from "./Features"
import Footer from "./Footer"
import Hero from "./Hero"
import Highlights from "./Highlights"
import HowItWorks from "./HowItWorks"
import Model from "./Model"


const Home = () => {
  return (
    <div>
        <Hero/>
        <Highlights/>
        <Model/>
        <Features/>
        <HowItWorks/>
        <Footer/>
    </div>
  )
}

export default Home