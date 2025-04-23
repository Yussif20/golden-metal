import Hero from '../components/Hero';
import Awards from '../components/Awards';
import Solutions from '../components/Solutions';
import Showcase from '../components/Showcase';
import Values from '../components/Values';
import Impact from '../components/Impact';

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
      <AnimatedSection>
        <Showcase />
      </AnimatedSection>
      <AnimatedSection>
        <Solutions />
      </AnimatedSection>
      <AnimatedSection>
        <Impact />
      </AnimatedSection>
      <AnimatedSection>
        <Values />
      </AnimatedSection>
    </div>
  );
}

export default Home;
