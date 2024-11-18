import React from 'react'
import Cards from '../Cards/Cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FaMapMarkedAlt,FaGlobeAfrica } from 'react-icons/fa';
import i8 from "./i8.jpg"
import i13 from "./i13.png"
import { useState , useEffect ,useRef } from 'react';
import "./Hero.css"

import OurServices from '../OurServices/OurServices';
import { useTranslation } from 'react-i18next';
import Weperate from '../Weperate/Weperate';

import one from "./one.png"
import two from "./two.png"
import three from "./three.png"
import four from "./four.png"
import five from "./five.png"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css"; // Your CSS file for custom styles
import Slider from 'react-slick';

const images = ["https://klikpajak.id/wp-content/uploads/2018/09/KlikPajak_Blog_Tarif-PPh-Impor-Akan-Naik-Ketahui-Penjelasan-Tarif-dan-Tujuannya.jpg",
   "https://actionfreightinc.com/wp-content/uploads/2017/06/slide-2-plane-front.jpg",
    "https://www.mysupplychaingroup.com/wp-content/uploads/2018/12/mysupplychaingroup-warehouse-2.jpg",
     "https://wscdn-01.kapsarc.org/wp-content/uploads/2020/04/shutterstock_731927092.png", "https://cleanairpower.com/images/banners/banner-2.jpg"];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sliderRef = useRef(null);

  // Preload images
  const preloadImages = (images) => {
    let loadedImages = 0;
    const totalImages = images.length;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          setIsLoaded(true);
        }
      };
    });
  };

  useEffect(() => {
    preloadImages(images);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400, // Reduced for smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out", // Changed for smoother transition
    pauseOnHover: true, // Optional, allows user to pause on hover
    beforeChange: (current, next) => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(next);
      }
    },
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
      { breakpoint: 360, settings: { slidesToShow: 1 } }
    ]
};

  return (
    <div>
<div className="mx-auto  min-h-screen relative">
  {isLoaded ? (
    <Slider ref={sliderRef} {...settings} className="image-container">
      {images.map((src, index) => (
        <div key={index} className="slide-item">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="slide-image fade-in"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
        </div>
      ))}
    </Slider>
  ) : (
    <div></div>
  )}
  
  {/* Centered Text Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-roboto font-bold bg-black bg-opacity-40">
    <h1 className="lg:text-6xl text-5xl py-4">WE SEND FOR YOU!</h1>
    <h2 className="lg:text-2xl text-xl flex items-center mt-4">
      <FontAwesomeIcon icon={faAngleDoubleRight} className="text-lg text-DarkYellow mx-2" />
      Air <FontAwesomeIcon icon={faAngleDoubleRight} className="text-lg text-DarkYellow mx-2" />
      Maritime <FontAwesomeIcon icon={faAngleDoubleRight} className="text-lg text-DarkYellow mx-2" />
      Road
    </h2>
  </div>
</div>

         
     

         <section className="flex max-w-7xl mx-auto flex-col md:flex-row items-center justify-between py-12 px-6 md:px-24 bg-white">
        <div className="max-w-lg md:w-1/2 space-y-4">
          <p className="text-gray-500 font-roboto leading-relaxed">
          Founded by professionals with extensive experience in the
international trade sector, GVS Cargo & Logistics
operates in all segments of foreign trade,
working side by side with its customers as a
service provider, executing
each stage of the logistics
of exports and imports with professionalism and competence, and providing fast and complete solutions
in various types of customs processes and
on all continents.
          </p>
          <a href='/contactUs'>
          <button className="bg-DarkYellow lg:ml-56 lg:mt-10 mt-0 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition duration-300">
            Contact Us
          </button>
          </a>
        </div>
        
        

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-[500px] md:h-[500px] rounded-full overflow-hidden">
            <img src="https://avatars.mds.yandex.net/i?id=5dd83667a01e12c7c3b4639b0b93ad77_l-5869613-images-thumbs&ref=rim&n=13&w=1280&h=800" alt="Shipping Illustration" className="w-full h-full object-cover" />
            
          </div>
        </div>
      </section>
      
      <Cards />
     


      <Weperate />
      <OurServices />
    </div>
  )
}

export default Hero