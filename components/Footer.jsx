import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      {/* Email Section */}
      <div className="w-max flex items-center gap-2 mx-auto text-gray-800 text-md">
        <p>faizzmi74@gmail.com</p>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-8 sm:mx-[10%] mt-8 pt-6">
        <p className="text-sm text-gray-600">© 2025 Faiz Azmi. All rights reserved</p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              className="text-gray-800 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/faizazmi7/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/faizzmi"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
