import Categories from "../components/Categories"
import CTA from "../components/CTA"
import FeatureProviders from "../components/FeatureProviders"
import HeroSection from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import Offers from "../components/Offers"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <HowItWorks />
      <FeatureProviders />
      <Testimonials />
      <Offers />
      <CTA />
    </div>
  )
}

export default Home
