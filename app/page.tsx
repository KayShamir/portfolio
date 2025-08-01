import Hero from "./component/hero"
import WearYourStory from "./component/wear-your-story"
import FeatureCarousel from "./component/feature-carousel"
import PortfolioGrid from "./component/portfolio-grid"
import Timeline from "./component/timeline"
import Marquee from "./component/marquee"
import ContactForm from "./component/contact-form"
import NewsletterSubscribe from "./component/news-letter"
import Footer from "./component/footer"

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
      <div id="journey">
        <Timeline />
      </div>
    </>
  )
}
