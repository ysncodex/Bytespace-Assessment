import Header from '@/components/Header';
import { CourseFiltersProvider } from '@/components/landing/CourseFilters';
import Hero from '@/components/landing/Hero';
import Partners from '@/components/landing/Partners';
import CourseExplorer from '@/components/landing/CourseExplorer';
import LearningPaths from '@/components/landing/LearningPaths';
import Features from '@/components/landing/Features';
import CreatorCTA from '@/components/landing/CreatorCTA';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <CourseFiltersProvider>
      <a
        href="#main-content"
        className="fixed left-3 top-3 z-[200] -translate-y-[160%] rounded-lg bg-white px-[18px] py-3 text-byteblue focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="scroll-mt-[112px]">
        <Hero />
        <Partners />
        <CourseExplorer />
        <LearningPaths />
        <Features />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </CourseFiltersProvider>
  );
}
