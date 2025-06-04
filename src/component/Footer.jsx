import React from 'react';
import { FaFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer class="bg-[#3b2f2f] text-[#eaeaea] py-10 px-4 ">
  <div class="max-w-7xl mx-auto flex justify-between   gap-10">
    
    
    <div className='w-56'> 
      <h2 class="text-2xl font-bold text-[#fefae0]">Historical Artifacts Tracker</h2>
      <p class="mt-4 text-sm text-[#eaeaea]">
        Discover, preserve, and track the world's historical treasures. From ancient scrolls to forgotten artifacts — all in one place.
      </p>
    </div>

    <div>
      <h3 class="text-xl font-semibold text-[#f5f5f5] mb-4">Quick Links</h3>
    
        <div className="text-[#f5f5f5] flex-col flex gap-5 text-sm font-bold">
          <NavLink className="hover:text-[#d4af37]">Home</NavLink>
          <NavLink className="hover:text-[#d4af37]">All Artifacts</NavLink>
          <NavLink className="hover:text-[#d4af37]">Add Artifacts</NavLink>
        </div>
 
    </div>
      <div>
      <h3 class="text-xl font-semibold text-[#f5f5f5] mb-4">Legal</h3>
    
        <div className="text-[#f5f5f5] flex-col flex gap-5 text-sm font-bold">
   


          <NavLink className="hover:text-[#d4af37]">Terms of use</NavLink>
          <NavLink className="hover:text-[#d4af37]">Privacy policy</NavLink>
          <NavLink className="hover:text-[#d4af37]">Cookie policy</NavLink>
        </div>
 
    </div>

    
    <div>
      <h3 class="text-xl font-semibold text-[#f5f5f5] mb-4">Contact</h3>
      <p class="text-sm">📧 Email: support@artifactstracker.com</p>
      <p class="text-sm mt-2">📍 Location: Dhaka, Bangladesh</p>
      <div className="mt-4 flex space-x-4">
      {/* Facebook */}
      <div className="relative group inline-block">
        <a href="#" className="text-[#eaeaea] hover:text-[#d4af37] transition text-xl">
          <FaFacebook />
        </a>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                         hidden group-hover:block bg-[#2f2e2e] text-white text-xs 
                         py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap">
          Facebook
        </span>
      </div>

      {/* Twitter */}
      <div className="relative group inline-block">
        <a href="#" className="text-[#eaeaea] hover:text-[#d4af37] transition text-xl">
          <FaSquareXTwitter />
        </a>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                         hidden group-hover:block bg-[#2f2e2e] text-white text-xs 
                         py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap">
          Twitter
        </span>
      </div>

      {/* Instagram */}
      <div className="relative group inline-block">
        <a href="#" className="text-[#eaeaea] hover:text-[#d4af37] transition text-xl">
          <FaSquareInstagram />
        </a>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                         hidden group-hover:block bg-[#2f2e2e] text-white text-xs 
                         py-1 px-2 rounded shadow-lg z-10 whitespace-nowrap">
          Instagram
        </span>
      </div>
    </div>
    </div>
  </div>

  <div class="mt-10 border-t border-[#ddd] pt-6 text-center text-sm text-[#eaeaea]">
    &copy; 2025 Historical Artifacts Tracker. All rights reserved.
  </div>
</footer>

        </div>
    );
};

export default Footer;