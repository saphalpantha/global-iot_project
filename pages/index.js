import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import News from "../components/News/News";
import OurService from "../components/Services/OurService";
import Testimonials from "../components/Testimonials/Testimonials";
import Us from "../components/WhyUs/Us";

export default function Home() {
  return (
    <>

    <Header/>
    <Hero/>
    <OurService/>
    <About/>
    <Us/>
    <News/>
    {/* <Testimonials/> */}
    <Footer/>
    </>
  )
}
