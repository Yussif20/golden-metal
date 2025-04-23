import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoTransparentLight from '../assets/logoTransparentLight.svg';
import logoTransparentDark from '../assets/logoTransparentDark.svg';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/services', label: t('services') },
    { path: '/projects', label: t('projects') },
    { path: '/galleries', label: t('galleries') },
    { path: '/contact', label: t('contact') },
  ];

  return (
    <header className="w-full bg-white dark:bg-gray-800 dark:text-white shadow-sm px-4 lg:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="transform hover:scale-105 transition-transform duration-200"
        >
          <div className="flex items-center mb-2 sm:mb-0">
            <img
              src={logoTransparentLight}
              alt="Golden Metal Logo Light"
              className="h-10 dark:hidden"
            />
            <img
              src={logoTransparentDark}
              alt="Golden Metal Logo Dark"
              className="h-10 hidden dark:block"
            />
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-semibold hover:text-gold transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-gold border-b-2 border-gold'
                  : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className="cursor-pointer text-sm text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() =>
              i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
            }
          >
            {i18n.language === 'ar' ? 'English' : 'العربية'}
          </button>
          <ThemeSwitcher />
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-darkBlue bg-opacity-90 backdrop-blur-md transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-4 py-3 text-lg font-medium hover:text-gold hover:bg-gold hover:bg-opacity-20 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
