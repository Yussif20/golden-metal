import { useTranslation } from 'react-i18next';
import awardImage from '../assets/award.jpg';

function Awards() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <h2 className="text-4xl font-bold text-gold md:w-1/3 animate-fade-in-left">
            {t('awards_title')}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 md:w-2/3 mt-4 md:mt-0 animate-fade-in-right">
            {t('awards_description')}
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-2xl">
          <img
            src={awardImage}
            alt="Award"
            className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Awards;
