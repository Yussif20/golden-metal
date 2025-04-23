import { useTranslation } from 'react-i18next';
import miningVideo from '../assets/mining-video.mp4';
import { Link } from 'react-router-dom';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[90vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline // Improves mobile compatibility
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => console.error('Video failed to load:', e)} // Debug errors
      >
        <source src={miningVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-3xl mb-8 opacity-90">
            {t('hero_subtext')}
          </p>
          <Link
            to="/services"
            className="inline-block bg-gold text-darkBlue px-8 py-4 text-lg font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
          >
            {t('hero_button')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
