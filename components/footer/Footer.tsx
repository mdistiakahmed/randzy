import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Randzy Solutions
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Innovative software engineering from Bangladesh, delivering global
              technology solutions.
            </p>
            {/* <div className="flex space-x-4">
              <Link 
                href="https://linkedin.com/company/randzy" 
                target="_blank" 
                aria-label="LinkedIn"
                className="text-blue-500 hover:text-blue-300 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link 
                href="https://github.com/randzy" 
                target="_blank" 
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
            </div> 
            */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors text-sm block"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors text-sm block"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors text-sm block"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors text-sm block"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Web Development</li>
              <li className="text-gray-300 text-sm">Mobile Solutions</li>
              <li className="text-gray-300 text-sm">Cloud Engineering</li>
              <li className="text-gray-300 text-sm">Tech Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Contact Info
            </h3>
            <address className="not-italic space-y-2">
              <p className="text-gray-300 text-sm">📍 Dhaka, Bangladesh</p>
              <p className="text-gray-300 text-sm">✉️ randzyx62@gmail.com</p>
              <p className="text-gray-300 text-sm">🌐 www.randzy.com</p>
            </address>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date("2024-12-14T13:17:30+06:00").getFullYear()} Randzy
            Solutions. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Randzy | Innovative Software Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
