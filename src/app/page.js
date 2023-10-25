import AnimatedSection from "@/components/AnimatedSection";
import Carousel2 from "@/components/carousel/carousel";
import ServicesHome from "@/components/HomeServices/page";
import HomeMember from "@/components/carousel/story";
import HomeBeforeAfter from "@/components/carousel/before&after";
import HomeBmi from "@/components/carousel/bmi";

export default function Home() {

  return (
    <main >
      <div className="main-wrapper">
        <AnimatedSection animationClass="section-home-banner">
          <Carousel2 />
        </AnimatedSection>
        <AnimatedSection animationClass="animate__fadeInLeft section-home-services">
          <ServicesHome />
        </AnimatedSection>
        <AnimatedSection animationClass="animate__fadeInUp section section-home-news stripe-section animate__fast	500ms">
          <HomeMember />
        </AnimatedSection>
        <AnimatedSection animationClass="section-home-before-after animate__fadeInDown">
          <HomeBeforeAfter />
        </AnimatedSection>
        <HomeBmi />
      </div>
    </main>
  )
}
