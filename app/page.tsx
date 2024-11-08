import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Services from "./components/services";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}






