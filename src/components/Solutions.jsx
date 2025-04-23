import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';

// Placeholder images (replace with actual images in src/assets/)
import miningSolutionsImg from '../assets/solutions/mining_solutions.jpg';
import innovationHubImg from '../assets/solutions/innovation_hub.jpg';
import sustainabilityImg from '../assets/solutions/sustainability.jpg';

function Solutions() {
  const { t } = useTranslation();

  const solutions = [
    {
      image: miningSolutionsImg,
      alt: 'Mining solutions',
      title: t('solution_mining'),
      description: t('solution_mining_desc'),
      link: '/services',
    },
    {
      image: innovationHubImg,
      alt: 'Innovation hub',
      title: t('solution_innovation'),
      description: t('solution_innovation_desc'),
      link: '/project',
    },
    {
      image: sustainabilityImg,
      alt: 'Sustainability initiatives',
      title: t('solution_sustainability'),
      description: t('solution_sustainability_desc'),
      link: '/about',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white text-center mb-6">
            {t('solutions')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            {t('solutions_subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={solution.image}
                  alt={solution.alt}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-yellow-400 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                    {solution.description}
                  </p>
                  <a
                    href={solution.link}
                    className="inline-block text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-600 font-medium transition-colors duration-300"
                  >
                    {t('read_more')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Solutions;
