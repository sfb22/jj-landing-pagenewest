"use client";

import { useState } from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { TermsDialog } from "./terms-dialog";
import { PrivacyDialog } from "./privacy-dialog";
import { LoopsForm } from "./loops-form";

export function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="w-full bg-stone-50 py-14">
        <div className="container max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-12 md:space-y-0">
            {/* Brand Section */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Journey Jotter
              </h3>
              <p className="text-gray-500 max-w-xs">
                Journey Jotter AI makes capturing your travel stories
                effortless—so you can focus on exploring and keep the
                unforgettable, unforgettable.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.tiktok.com/@journeyjotterai?_t=8nWeYQr5PUH&_r=1"
                  aria-label="TikTok"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  <FaTiktok className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/journeyjotterai/"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-16">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Quick Links
                </h4>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                    >
                      Why Choose Us?
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900">Account</h4>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900">Support</h4>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="mailto:contact@journeyjotter.ai"
                      className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                    >
                      contact@journeyjotter.ai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6">
           <LoopsForm title="Join The Waitlist" />
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Journey Jotter. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowTerms(true)}
                className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-300"
              >
                Terms and Conditions
              </button>
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
        <TermsDialog open={showTerms} onOpenChange={setShowTerms} />
        <PrivacyDialog open={showPrivacy} onOpenChange={setShowPrivacy} />
      </footer>
    </>
  );
}
