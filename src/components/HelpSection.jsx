import { useTranslation } from 'react-i18next';
import help1 from '../assets/help1.jpg';
import help2 from '../assets/help2.jpg';
import help3 from '../assets/help3.jpg';

function HelpSection() {
  const { t } = useTranslation();

  const helpCards = [
    {
      image: help1,
      title: t('help_card_1_title'),
      text: t('help_card_1_text'),
    },
    {
      image: help2,
      title: t('help_card_2_title'),
      text: t('help_card_2_text'),
    },
    {
      image: help3,
      title: t('help_card_3_title'),
      text: t('help_card_3_text'),
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-darkBlue mb-12 text-center animate-fade-in">
          {t('help_title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-darkBlue mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
