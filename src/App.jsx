import { About } from "./components/About"
import { Billboard } from "./components/Billboard"
import { ProblemSolution } from "./components/ProblemSolution"
import { Programs } from "./components/Programs"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Products } from "./components/Products"
import { Packages } from "./components/Packages"
import './Fonts/ClashDisplay-Variable.ttf'
import { Blog } from "./components/Blog"

export function App(){
  
  return(
    <>
      <Navbar />
      <Billboard />
      <Hero />
      <About />
      <ProblemSolution />
      <Blog/>
      <Products />
      <Programs />
      <Packages />
      <Footer />
    </>
  )
}
  
  
