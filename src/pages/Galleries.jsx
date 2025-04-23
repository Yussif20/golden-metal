import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';

// Placeholder images (replace with actual images in src/assets/)
import gallery1 from '../assets/gallery/gallery1.jpg';
import gallery2 from '../assets/gallery/gallery2.jpg';
import gallery3 from '../assets/gallery/gallery3.jpg';
import gallery4 from '../assets/gallery/gallery4.jpg';
import gallery5 from '../assets/gallery/gallery5.jpg';
import gallery6 from '../assets/gallery/gallery6.jpg';

function Galleries() {
  const { t } = useTranslation();

  const galleryItems = [
    {
      src: gallery1,
      alt: 'Mining operation equipment',
      caption: t('gallery_mining'),
      category: 'mining',
    },
    {
      src: gallery2,
      alt: 'Community initiative event',
      caption: t('gallery_community'),
      category: 'community',
    },
    {
      src: gallery3,
      alt: 'Mining site overview',
      caption: t('gallery_mining'),
      category: 'mining',
    },
    {
      src: gallery4,
      alt: 'Community outreach program',
      caption: t('gallery_community'),
      category: 'community',
    },
    {
      src: gallery5,
      alt: 'Advanced mining technology',
      caption: t('gallery_mining'),
      category: 'mining',
    },
    {
      src: gallery6,
      alt: 'Local community support',
      caption: t('gallery_community'),
      category: 'community',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white text-center mb-6">
            {t('galleries')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-12">
            {t('galleries_subtitle')}
          </p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="mb-6 break-inside-avoid rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-white dark:bg-gray-800">
                  <p className="text-sm font-medium text-blue-900 dark:text-yellow-400">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Galleries;
