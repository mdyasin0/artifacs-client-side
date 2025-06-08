import React, { useContext, useState } from "react";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../Provider/Authprovider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handlelogout = () => {
    logout()
      .then(() => {
        toast.success("Logout successfully");
        setIsMenuOpen(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  return (
    <div className="bg-[#3b2f2f] sticky top-0 z-10 text-white">
      <div className="navbar flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-[#fefae0] text-2xl md:text-3xl font-bold">
          Legacy Vault
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex items-center gap-5 text-sm font-bold text-[#f5f5f5]">
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
          {/* Desktop Avatar */}
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content px-5 space-y-5 bg-[#3b2f2f] rounded-box mt-3 w-52 pt-10 shadow z-50"
              >
                <p className="flex justify-between">
                  {user?.displayName || "User"}
                  <span className="badge text-sm">New</span>
                </p>
                <NavLink to="/MyArtifacts" className="hover:text-[#d4af37]">
                  My Artifacts
                </NavLink>
                <NavLink to="/LikedArtifacts" className="hover:text-[#d4af37]">
                  Liked Artifacts
                </NavLink>
                <button
                  onClick={handlelogout}
                  className="hover:text-[#d4af37] flex items-center gap-1"
                >
                  Logout <FiLogOut />
                </button>
              </div>
            </div>
          )}

          {!user && (
            <Link
              to="/login"
              className="bg-[#8b5e3c] text-[#f5f5f5] hover:bg-[#a97442] py-1 px-3 rounded-lg text-sm font-bold"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3b2f2f] px-6 pb-6 space-y-4 text-sm font-bold">
          <NavLink
            to="/Home"
            onClick={toggleMenu}
            className="block hover:text-[#d4af37]"
          >
            Home
          </NavLink>
          <NavLink
            to="/AllArtifacts"
            onClick={toggleMenu}
            className="block hover:text-[#d4af37]"
          >
            All Artifacts
          </NavLink>
          <NavLink
            to="/AddArtifactForm"
            onClick={toggleMenu}
            className="block hover:text-[#d4af37]"
          >
            Add Artifacts
          </NavLink>

          {/* User Avatar for Mobile */}
          {user ? (
            <>
              <div className="flex justify-center mt-4">
                <button onClick={toggleUserDropdown}>
                  <img
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                </button>
              </div>

              {isUserDropdownOpen && (
                <div className="mt-4 space-y-3 text-center">
                  <p>{user?.displayName || "User"}</p>
                  <NavLink
                    to="/MyArtifacts"
                    onClick={toggleMenu}
                    className="block hover:text-[#d4af37]"
                  >
                    My Artifacts
                  </NavLink>
                  <NavLink
                    to="/LikedArtifacts"
                    onClick={toggleMenu}
                    className="block hover:text-[#d4af37]"
                  >
                    Liked Artifacts
                  </NavLink>
                  <button
                    onClick={handlelogout}
                    className=" w-full mt-2 hover:text-[#d4af37] flex justify-center items-center gap-1"
                  >
                    Logout <FiLogOut />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <Link
                to="/login"
                onClick={toggleMenu}
                className="bg-[#8b5e3c] text-[#f5f5f5] hover:bg-[#a97442] py-1 px-4 rounded-lg text-sm font-bold inline-block"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
