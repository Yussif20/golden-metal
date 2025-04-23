import { useTranslation } from 'react-i18next';
import ctaImage from '../assets/cta.jpg';

function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative h-80 overflow-hidden">
      <img
        src={ctaImage}
        alt="CTA"
        className="absolute inset-0 w-full h-full object-cover transform scale-110"
      />
      <div className="absolute inset-0 bg-darkBlue bg-opacity-75 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 text-center text-white animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta_text')}
          </h2>
          <a
            href="/contact"
            className="inline-block bg-gold text-darkBlue px-8 py-4 text-lg font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            {t('cta_button')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
