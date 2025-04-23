import logoTransparentLight from '../assets/logoTransparentLight.svg';
import logoTransparentDark from '../assets/logoTransparentDark.svg';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 dark:text-white py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
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
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          © 2025 Early Detect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
