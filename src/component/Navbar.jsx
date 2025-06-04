import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-[#3b2f2f] py-3 px-3 text-white">
      <div className="navbar flex justify-between  ">
        <div className="">
          <h1 className="text-[#fefae0] text-3xl font-bold">Legacy Vault </h1>
        </div>

        <div className="text-[#f5f5f5] flex gap-5 text-sm font-bold">
          <NavLink className="hover:text-[#d4af37]">Home</NavLink>
          <NavLink className="hover:text-[#d4af37]">All Artifacts</NavLink>
          <NavLink className="hover:text-[#d4af37]">Add Artifacts</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <Link className="bg-[#8b5e3c] text-[#f5f5f5] hover:bg-[#a97442] py-1 px-3 rounded-lg text-sm font-bold">
              Login
            </Link>
          </div>

          <div>
            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-[#3b2f2f] rounded-box z-1 mt-3 w-52 p-2 shadow "
                >
                  <NavLink className="flex justify-between ">
                    <h1 className="hover:text-[#d4af37]">User's Name</h1>
                    <span className="badge text-sm">New</span>
                  </NavLink>

                  <NavLink className="hover:text-[#d4af37]">
                    <a>My Artifacts</a>
                  </NavLink>
                  <NavLink className="hover:text-[#d4af37]">
                    <a> Liked Artifacts</a>
                  </NavLink>
                  <NavLink className="hover:text-[#d4af37]">
                    <a>Logout</a>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
