import Hero from '../components/Hero';
import Awards from '../components/Awards';
import BlogSection from '../components/BlogSection';
import HelpSection from '../components/HelpSection';
import CTA from '../components/CTA';

import AnimatedSection from '../utils/AnimatedSection';

function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Awards />
      </AnimatedSection>
      {/*<AnimatedSection>
        <BlogSection />
      </AnimatedSection> */}
      {/* <AnimatedSection>
        <HelpSection />
      </AnimatedSection> */}
      {/* <AnimatedSection>
        <CTA />
      </AnimatedSection> */}
    </div>
  );
}

export default Home;
