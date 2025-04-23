import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';

// Placeholder images (replace with actual images in src/assets/)
import evaluationImg from '../assets/services/evaluation.png';
import explorationImg from '../assets/services/exploration.jpg';
import remoteSensingImg from '../assets/services/remote_sensing.png';
import geologyImg from '../assets/services/geology.jpeg';
import miningImg from '../assets/services/mining.png';

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      image: evaluationImg,
      alt: 'Project evaluation',
      title: t('service_evaluation'),
      subtitle: t('service_evaluation_desc'),
    },
    {
      image: explorationImg,
      alt: 'Mineral exploration',
      title: t('service_exploration'),
      subtitle: t('service_exploration_desc'),
    },
    {
      image: remoteSensingImg,
      alt: 'Remote sensing and GIS',
      title: t('service_remote_sensing'),
      subtitle: t('service_remote_sensing_desc'),
    },
    {
      image: geologyImg,
      alt: 'Geology and mineralization',
      title: t('service_geology'),
      subtitle: t('service_geology_desc'),
    },
    {
      image: miningImg,
      alt: 'Mining operations',
      title: t('service_mining'),
      subtitle: t('service_mining_desc'),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white text-center mb-6">
            {t('services')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-12">
            {t('services_subtitle')}
          </p>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300`}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-yellow-400 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {service.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Services;
