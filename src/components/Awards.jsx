import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';

function Awards() {
  const { t } = useTranslation();

  const awards = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: t('award_experience'),
      description: t('award_experience_desc'),
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: t('award_standards'),
      description: t('award_standards_desc'),
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.83.36-1.54.91-2.06l1.07-1.07c.29-.29.45-.67.45-1.08 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.68 1.69z" />
        </svg>
      ),
      title: t('award_technology'),
      description: t('award_technology_desc'),
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      title: t('award_sustainability'),
      description: t('award_sustainability_desc'),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white text-center mb-6">
            {t('awards')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            {t('awards_subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{award.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-yellow-400 mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Awards;
