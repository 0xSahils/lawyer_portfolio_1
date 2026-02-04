import { TopBar } from "@/components/law-firm/top-bar"
import { Header } from "@/components/law-firm/header"
import { Hero } from "@/components/law-firm/hero"
import { Features } from "@/components/law-firm/features"
import { AboutSection } from "@/components/law-firm/about-section"
import { PracticeAreas } from "@/components/law-firm/practice-areas"
import { ExperienceSection } from "@/components/law-firm/experience-section"
import { AchievementsSection } from "@/components/law-firm/achievements-section"
import { CasesSection } from "@/components/law-firm/cases-section"
import { GallerySection } from "@/components/law-firm/gallery-section"
import { QuickBookingSection } from "@/components/law-firm/quick-booking-section"
import { ContributionSection } from "@/components/law-firm/contribution-section"
import { BlogsSection } from "@/components/law-firm/blogs-section"
import { TestimonialsSection } from "@/components/law-firm/testimonials-section"
import { InstagramSection } from "@/components/law-firm/instagram-section"
import { ContactSection } from "@/components/law-firm/contact-section"
import { Footer } from "@/components/law-firm/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <Features />
      <AboutSection />
      <PracticeAreas />
      <ExperienceSection />
      <AchievementsSection />
      <CasesSection />
      <GallerySection />
      <QuickBookingSection />
      <ContributionSection />
      <BlogsSection />
      <TestimonialsSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
