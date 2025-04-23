import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 10h-2V4h-2v2h-3V4h-2v2H9V4H7v6H5V8H3v12h18V10zM9 12v2H7v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2z" />
        </svg>
      ),
      title: t('service_mining'),
      description: t('service_mining_desc'),
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 17H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM9 8H7v2h2V8zm4 0h-2v2h2V8zm4 0h-2v2h2V8z" />
        </svg>
      ),
      title: t('service_consulting'),
      description: t('service_consulting_desc'),
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      title: t('service_community'),
      description: t('service_community_desc'),
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-yellow-400 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Services;
