import { About } from "./components/About"
import { Carousel } from "./components/Carousel"
import { Experts } from "./components/Experts"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Products } from "./components/Products"


const  App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Carousel />
    <Products />
    <Experts />
    <Footer />
  </>
  
)

export default App
