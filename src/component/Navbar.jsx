import React, { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../Provider/Authprovider";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  

  const handlelogout = () => {
    logout()
      .then(() => {
        alert("Logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#3b2f2f] py-3 px-3 sticky top-0 z-10 text-white">
      <div className="navbar flex justify-between">
        <div>
          <h1 className="text-[#fefae0] text-3xl font-bold">Legacy Vault</h1>
        </div>

        <div className="text-[#f5f5f5] flex gap-5 text-sm font-bold">
          <NavLink to="/Home" className="hover:text-[#d4af37]">Home</NavLink>
          <NavLink to="/all-artifacts" className="hover:text-[#d4af37]">All Artifacts</NavLink>
          <NavLink to="/add-artifact" className="hover:text-[#d4af37]">Add Artifacts</NavLink>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Photo"
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="menu menu-sm dropdown-content px-5 space-y-5 h-screen bg-[#3b2f2f] rounded-box z-1 mt-3 w-52 pt-10 shadow"
                >
                  <p className="flex justify-between">
                    {user?.displayName || "User"}
                    <span className="badge text-sm">New</span>
                  </p>
                  <NavLink className="hover:text-[#d4af37]">My Artifacts</NavLink>
                  <NavLink className="hover:text-[#d4af37]">Liked Artifacts</NavLink>
                  <button onClick={handlelogout} className=" cursor-pointer hover:text-[#d4af37] flex items-center gap-1">
                    Logout
                    <FiLogOut />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-[#8b5e3c] text-[#f5f5f5] hover:bg-[#a97442] py-1 px-3 rounded-lg text-sm font-bold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
