import { About } from "./components/About"
import { Billboard } from "./components/Billboard"
import { ProblemSolution } from "./components/ProblemSolution"
import { Programs } from "./components/Programs"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Products } from "./components/Products"
import { Packages } from "./components/Packages"


const  App = () => (
  <>
    <Navbar />
    {/* <Billboard /> */}
    <Hero />
    <About />
    <ProblemSolution />
    <Products />
    <Programs />
    <Packages />
    <Footer />
  </>
  
)

export default App