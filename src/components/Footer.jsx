import { useTranslation } from 'react-i18next';
import logoTransparentLight from '../assets/logoTransparentLight.svg';
import logoTransparentDark from '../assets/logoTransparentDark.svg';
import mailIcon from '../assets/icons/email.png';
import phoneIcon from '../assets/icons/phone.png';
import placeIcon from '../assets/icons/place.png';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logoTransparentLight}
              alt="Golden Metal Logo Light"
              className="h-12 dark:hidden mb-4"
            />
            <img
              src={logoTransparentDark}
              alt="Golden Metal Logo Dark"
              className="h-12 hidden dark:block mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 text-sm text-center md:text-left">
              {t('footer_description')}
            </p>
          </div>
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-yellow-400 mb-4">
              {t('footer_links')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-500 transition-colors duration-300"
                >
                  {t('about')}
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-500 transition-colors duration-300"
                >
                  {t('services')}
                </a>
              </li>
              <li>
                <a
                  href="/project"
                  className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-500 transition-colors duration-300"
                >
                  {t('project')}
                </a>
              </li>
              <li>
                <a
                  href="/galleries"
                  className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-500 transition-colors duration-300"
                >
                  {t('galleries')}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-500 transition-colors duration-300"
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-yellow-400 mb-4">
              {t('footer_contact')}
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <a
                href="mailto:info@goldenmetal-co.com"
                className="flex justify-center md:justify-end items-center"
              >
                <img src={mailIcon} alt="Email icon" className="w-5 h-5 mr-2" />
                info@goldenmetal-co.com
              </a>
              <a
                href="tel:+966546797765"
                className="flex justify-center md:justify-end items-center"
              >
                <img
                  src={phoneIcon}
                  alt="Phone icon"
                  className="w-5 h-5 mr-2"
                />
                +966546797765
              </a>
              <p className="flex justify-center md:justify-end items-start">
                <img
                  src={placeIcon}
                  alt="Location icon"
                  className="w-5 h-5 mr-2"
                />
                {t('contact_place')}
              </p>
            </div>
            <div className="flex justify-center md:justify-end space-x-4 mt-6">
              <a
                href="https://facebook.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 transform hover:scale-105"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Golden Metal. {t('footer_rights')}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 dark:hover:text-yellow-500 text-sm transition-colors duration-300"
            >
              {t('footer_privacy')}
            </a>
            <a
              href="/terms"
              className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 dark:hover:text-yellow-500 text-sm transition-colors duration-300"
            >
              {t('footer_terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
