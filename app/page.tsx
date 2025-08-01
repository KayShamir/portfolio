import Hero from "./component/hero"
import FeatureCarousel from "./component/feature-carousel"
import PortfolioGrid from "./component/portfolio-grid"
import Timeline from "./component/timeline"
import Marquee from "./component/marquee"

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services">
        <FeatureCarousel />
      </div>
      <div id="portfolio">
        <PortfolioGrid />
      </div>
      <Marquee/>
      <div id="journey">
        <Timeline />
      </div>
    </>
  )
}
