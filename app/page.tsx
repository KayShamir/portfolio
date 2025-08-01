import Hero from "./component/hero"
import FeatureCarousel from "./component/feature-carousel"
import PortfolioGrid from "./component/portfolio-grid"
import Timeline from "./component/timeline"
import Marquee from "./component/marquee"
import PyramidTools from "./component/pyramid-tools"
import AboutMe from "./component/about-me"

export default function Home() {
  return (
    <>
      <Hero />
      <div id="about-me">
        <AboutMe/>
      </div>
      <div id="services">
        <FeatureCarousel />
      </div>
      <div id="tools">
        <Marquee/>
        <PyramidTools/>
      </div>
      <div id="portfolio">
        <PortfolioGrid />
      </div>
      <div id="journey">
        <Timeline />
      </div>
    </>
  )
}
