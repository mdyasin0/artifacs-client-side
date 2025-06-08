import React from "react";
import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#3b2f2f] text-[#eaeaea] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:flex-wrap md:justify-between gap-10">
        {/* Section 1 */}
        <div className="flex-1 min-w-[250px] md:max-w-[280px]">
          <h2 className="text-2xl font-bold text-[#fefae0]">
            Historical Artifacts Tracker
          </h2>
          <p className="mt-4 text-sm text-[#eaeaea]">
            Discover, preserve, and track the world's historical treasures. From
            ancient scrolls to forgotten artifacts — all in one place.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-xl font-semibold text-[#f5f5f5] mb-4">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-3 text-sm font-bold text-[#f5f5f5]">
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                isActive
                  ? "text-[#d4af37] border-b-2 border-white pb-1"
                  : "hover:text-[#d4af37]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/AllArtifacts"
              className={({ isActive }) =>
                isActive
                  ? "text-[#d4af37] border-b-2 border-white pb-1"
                  : "hover:text-[#d4af37]"
              }
            >
              All Artifacts
            </NavLink>
            <NavLink
              to="/AddArtifactForm"
              className={({ isActive }) =>
                isActive
                  ? "text-[#d4af37] border-b-2 border-white pb-1"
                  : "hover:text-[#d4af37]"
              }
            >
              Add Artifacts
            </NavLink>
          </nav>
        </div>

        {/* Section 3 */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-xl font-semibold text-[#f5f5f5] mb-4">Legal</h3>
          <nav className="flex flex-col gap-3 text-sm font-bold text-[#f5f5f5]">
            <NavLink to="/TermsOfUse" className="hover:text-[#d4af37]">
              Terms of use
            </NavLink>
            <NavLink to="/PrivacyPolicy" className="hover:text-[#d4af37]">
              Privacy policy
            </NavLink>
            <NavLink to="/CookiePolicy" className="hover:text-[#d4af37]">
              Cookie policy
            </NavLink>
          </nav>
        </div>

        {/* Section 4 */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold text-[#f5f5f5] mb-4">Contact</h3>
          <p className="text-sm">📧 Email: support@artifactstracker.com</p>
          <p className="text-sm mt-2">📍 Location: Dhaka, Bangladesh</p>
          <div className="mt-4 flex space-x-6">
            {/* Facebook */}
            <div className="relative group inline-block">
              <Link
                to="https://www.facebook.com/"
                className="text-[#eaeaea] hover:text-[#d4af37] transition text-2xl"
              >
                <FaFacebook />
              </Link>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                               hidden group-hover:block bg-[#2f2e2e] text-white text-xs 
                               py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap"
              >
                Facebook
              </span>
            </div>

            {/* Twitter */}
            <div className="relative group inline-block">
              <Link
                to="https://x.com/home"
                className="text-[#eaeaea] hover:text-[#d4af37] transition text-2xl"
              >
                <FaSquareXTwitter />
              </Link>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                               hidden group-hover:block bg-[#2f2e2e] text-white text-xs 
                               py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap"
              >
                Twitter
              </span>
            </div>

            {/* Instagram */}
            <div className="relative group inline-block">
              <Link
                to="https://www.instagram.com/"
                className="text-[#eaeaea] hover:text-[#d4af37] transition text-2xl"
              >
                <FaSquareInstagram />
              </Link>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                               hidden group-hover:block bg-[#2f2e2e] text-white text-xs 
                               py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap"
              >
                Instagram
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[#ddd] pt-6 text-center text-sm text-[#eaeaea]">
        &copy; 2025 Historical Artifacts Tracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
