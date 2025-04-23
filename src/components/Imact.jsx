import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';

// Placeholder image (replace with actual image in src/assets/)
import impactImg from '../assets/gallery/gallery6.jpg';

function Impact() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={impactImg}
                alt="Mining impact showcase"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            {/* Text Content */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
                {t('impact_title')}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t('impact_subtitle')}
              </p>
              <a
                href="/about"
                className="inline-block px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors duration-300 shadow-md mx-auto lg:mx-0"
              >
                {t('impact_cta')}
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Impact;
