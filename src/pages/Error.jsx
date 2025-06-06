import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex justify-center h-screen items-center">
          <div>
              <Player
                    autoplay
                    loop
                    src="/error.json"
                    style={{ height: "300px", width: "300px" }}
                  ></Player>

                 <div className='flex  justify-center'>
                     <Link to="/" className=' p-3 hover:bg-green-400 transition-all duration-300 bg-green-300 rounded-3xl  shadow-2xl font-bold text-black  '>
                    Return to home
                  </Link>
                 </div>
          </div>
        </div>
    );
};

export default Error;