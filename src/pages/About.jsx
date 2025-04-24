import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';
import i18n from '../i18n';

function About() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Overview */}
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white text-center mb-6">
            {t('about')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-12">
            {t('about_subtitle')}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div
              className={`flex flex-col justify-center text-center ${
                i18n.language === 'ar' ? 'lg:text-right' : 'lg:text-left'
              }`}
            >
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-yellow-400 mb-4">
                {t('about_history')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {t('about_history_desc')}
              </p>
            </div>
            <div
              className={`flex flex-col justify-center text-center ${
                i18n.language === 'ar' ? 'lg:text-right' : 'lg:text-left'
              }`}
            >
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-yellow-400 mb-4">
                {t('about_mission')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {t('about_mission_desc')}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default About;
