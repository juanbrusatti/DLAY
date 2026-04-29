import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TeamSection from "@/components/team-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import StatsSection from "@/components/stats-section"
import PageTransition from "@/components/page-transition"
import VisitTracker from "@/components/visit-tracker"
import SmoothScroll from "@/components/smooth-scroll"

export default function Home() {
  return (
      <main className="min-h-screen relative overflow-hidden">
        <VisitTracker />
        <PageTransition />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative z-10">
            <Header />
            <HeroSection />
            <StatsSection />
            <ProjectsSection />
            <AboutSection />
            <TeamSection />
            <ContactSection />
            <Footer />
          </div>
        </SmoothScroll>
      </main>
  )
}
