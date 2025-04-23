import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';

// Placeholder image (replace with actual image in src/assets/)
import showcaseImg from '../assets/gallery/gallery5.jpg';

function Showcase() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <AnimatedSection>
        <div className="relative w-full h-[80vh] max-h-[600px] overflow-hidden">
          <img
            src={showcaseImg}
            alt="Mining operation showcase"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {t('showcase_title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6 drop-shadow-md">
              {t('showcase_subtitle')}
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors duration-300 shadow-md"
            >
              {t('showcase_cta')}
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Showcase;
