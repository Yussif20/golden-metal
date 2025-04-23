import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';

// Placeholder images (replace with actual images in src/assets/)
import team1 from '../assets/about/team1.jpg';
import team2 from '../assets/about/team2.jpg';
import team3 from '../assets/about/team3.jpg';

function About() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      src: team1,
      alt: 'Team member 1',
      name: t('team_member_1_name'),
      role: t('team_member_1_role'),
    },
    {
      src: team2,
      alt: 'Team member 2',
      name: t('team_member_2_name'),
      role: t('team_member_2_role'),
    },
    {
      src: team3,
      alt: 'Team member 3',
      name: t('team_member_3_name'),
      role: t('team_member_3_role'),
    },
  ];

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
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-yellow-400 mb-4">
                {t('about_history')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {t('about_history_desc')}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-yellow-400 mb-4">
                {t('about_mission')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {t('about_mission_desc')}
              </p>
            </div>
          </div>
          {/* Team Showcase */}
          <h2 className="text-3xl font-semibold text-blue-900 dark:text-yellow-400 text-center mb-8">
            {t('about_team')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={member.src}
                  alt={member.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-yellow-400 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {member.role}
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

export default About;
