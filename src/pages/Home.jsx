import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/swiper-bundle.css";

const Home = () => {
  return (
    <div className="">
      {/* Hero Slider */}
      <section className="pt-20 pb-20 ">
        <Swiper className=""
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Autoplay,
          ]}
          spaceBetween={50}
          effect="fade"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {[
            <div
              className="hero min-h-screen"
              style={{ backgroundColor: "#faf4ec" }}
            >
              <div className="hero-content flex-col lg:flex-row-reverse bg-[rgba(255,255,255,0.85)] rounded-xl shadow-lg p-6">
                <img
                  src="https://i.ibb.co/BV5nnH8Y/The-Sultanganj-Buddha.jpg"
                  className="max-w-sm mx-auto rounded-lg shadow-2xl border border-[#ddd]"
                />

                <div className="text-start">
                  <h1 className="text-5xl font-bold text-[#2f2e2e]">
                    Sultanganj Buddha!
                  </h1>
                  <p className="py-6 text-[#7a6a53]">
                    This life-sized bronze statue of Buddha exemplifies ancient Indian metal casting techniques and Buddhist art.
                  </p>
                </div>
              </div>
            </div>,
            <div
              className="hero min-h-screen"
              style={{ backgroundColor: "#faf4ec" }}
            >
              <div className="hero-content flex-col lg:flex-row-reverse bg-[rgba(255,255,255,0.85)] rounded-xl shadow-lg p-6">
                <img
                  src="https://i.ibb.co/WNMdxqNP/51714-Terracota-Army.jpg"
                  className="max-w-sm mx-auto rounded-lg shadow-2xl border border-[#ddd]"
                />

                <div className="text-start">
                  <h1 className="text-5xl font-bold text-[#2f2e2e]">
                    Terracotta Army Soldier !
                  </h1>
                  <p className="py-6 text-[#7a6a53]">
                    These life-sized statues were buried with China's first emperor to protect him in the afterlife.
                  </p>
                </div>
              </div>
            </div>,
           <div
              className="hero min-h-screen"
              style={{ backgroundColor: "#faf4ec" }}
            >
              <div className="hero-content flex-col lg:flex-row-reverse bg-[rgba(255,255,255,0.85)] rounded-xl shadow-lg p-6">
                <img
                  src="https://i.ibb.co/39h8cp5r/Rosetta-Stone.jpg"
                  className="max-w-sm mx-auto rounded-lg shadow-2xl border border-[#ddd]"
                />

                <div className="text-start">
                  <h1 className="text-5xl font-bold text-[#2f2e2e]">
                    Rosetta Stone !
                  </h1>
                  <p className="py-6 text-[#7a6a53]">
                    The Rosetta Stone is a granodiorite stele inscribed with a decree issued in Memphis, Egypt, in three scripts: Greek, Demotic, and Hieroglyphic.
                  </p>
                </div>
              </div>
            </div>,
            <div
              className="hero min-h-screen"
              style={{ backgroundColor: "#faf4ec" }}
            >
              <div className="hero-content flex-col lg:flex-row-reverse bg-[rgba(255,255,255,0.85)] rounded-xl shadow-lg p-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                  className="max-w-sm mx-auto rounded-lg shadow-2xl border border-[#ddd]"
                />

                <div className="text-start">
                  <h1 className="text-5xl font-bold text-[#2f2e2e]">
                     Mona Lisa  !
                  </h1>
                  <p className="py-6 text-[#7a6a53]">
                   Portrait by Leonardo da Vinci, believed to depict Lisa Gherardini, wife of Florentine merchant Francesco del Giocondo.
                  </p>
                </div>
              </div>
            </div>,
          ].map((div, index) => (
            <SwiperSlide key={index}>
              <div className="w-6/12  sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[600px] mx-auto rounded-2xl object-cover">
                {div}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;
