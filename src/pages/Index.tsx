import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Esraa Mosad | Flutter Developer Portfolio</title>
        <meta 
          name="description" 
          content="Building high-performance Flutter apps with clean architecture & Firebase. Explore my projects and skills in mobile app development." 
        />
        <meta name="keywords" content="Flutter Developer, Mobile App Development, Dart, Firebase, BLoC, Cubit, React, Cross-Platform Development" />
        <meta property="og:title" content="Esraa Mosad | Flutter Developer Portfolio" />
        <meta property="og:description" content="Building high-performance Flutter apps with clean architecture & Firebase." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Esraa Mosad | Flutter Developer Portfolio" />
        <meta name="twitter:description" content="Building high-performance Flutter apps with clean architecture & Firebase." />
        <link rel="canonical" href="https://esraamosad.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
