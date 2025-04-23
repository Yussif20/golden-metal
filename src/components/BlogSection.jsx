import { useTranslation } from 'react-i18next';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

function BlogSection() {
  const { t } = useTranslation();

  const blogs = [
    {
      image: blog1,
      title: t('blog_title_1'),
      text: t('blog_text_1'),
      link: '/blog/1',
    },
    {
      image: blog2,
      title: t('blog_title_2'),
      text: t('blog_text_2'),
      link: '/blog/2',
    },
    {
      image: blog3,
      title: t('blog_title_3'),
      text: t('blog_text_3'),
      link: '/blog/3',
    },
  ];

  return (
    <section className="bg-darkBlue text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold animate-fade-in">
            {t('blog_section_title')}
          </h2>
          <a
            href="/blog"
            className="bg-gold text-darkBlue px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            {t('blog_section_button')}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white text-darkBlue rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.text}</p>
                <a
                  href={blog.link}
                  className="text-gold font-medium hover:underline transition-colors duration-300"
                >
                  {t('blog_read_more')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
