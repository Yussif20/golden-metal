import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';

// Placeholder image (replace with actual image in src/assets/)
import visionImage from '../assets/gallery/gallery1.jpg';
import i18n from '../i18n';

function Project() {
  const { t } = useTranslation();

  return (
    <section
      className={`bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 text-center ${
        i18n.language === 'ar' ? 'lg:text-right' : 'lg:text-left'
      }`}
    >
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white text-center mb-6">
            {t('project')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-12">
            {t('project_subtitle')}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-yellow-400 mb-4">
                {t('project_vision')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {t('project_vision_desc')}
              </p>
            </div>
            {/* Current Project Section */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
              <img
                src={visionImage}
                alt="Current project showcase"
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-yellow-400 mb-2">
                  {t('project_current')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {t('project_current_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Project;
