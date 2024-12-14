import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Cards = () => {
  return (
    <div className="grid grid-cols-1 mb-10 font-poppins mt-10 md:grid-cols-3 gap-6 w-full mx-auto max-w-5xl">
      {/* Air Freight Card */}
      <div className="flex flex-col p-3 lg:p-0 items-center rounded-md overflow-hidden">
        <Link to="/airFreight" className="overflow-hidden transition-transform duration-300 hover:scale-110">
          <img
            src="https://cdn.culture.ru/images/d6a11be6-6939-546c-968f-ca2ea9e22ee9"
            alt="Air"
            className="w-full h-56 object-cover"
          />
        
        <div className="bg-DarkYellow p-6 w-full">
          <h3 className="text-xl font-roboto text-gray-600 text-center font-semibold">Air Freight</h3>
          <p className="text-center text-gray-500 text-base mt-2">
            With safety, speed and transparency, GVS Cargo & Logistics collects, accommodates, ships, tracks and delivers anywhere in the world.
          </p>
        </div>
        </Link>
      </div>

      {/* Road Freight Card */}
      <div className="flex flex-col p-3 lg:p-0 items-center rounded-md overflow-hidden">
        <Link to="/roadFreight" className="overflow-hidden transition-transform duration-300 hover:scale-110">
          <img
            src="https://avatars.mds.yandex.net/i?id=6cfadd1edd5c9770f100d2b15852ed04_l-8526247-images-thumbs&ref=rim&n=13&w=2560&h=1707"
            alt="Road"
            className="w-full h-56 object-cover"
          />
       
        <div className="bg-DarkYellow p-6 w-full">
          <h3 className="text-xl font-roboto text-gray-600 text-center font-semibold">Road Freight</h3>
          <p className="text-center text-gray-500 text-base mt-2">
            GVS Cargo & Logistics is widely consolidated to offer you its entire infrastructure in road freight transport services.
          </p>
        </div>
        </Link>
      </div>

      {/* Maritime Freight Card */}
      <div className="flex flex-col p-3 lg:p-0 items-center rounded-md overflow-hidden">
        <Link to="/seaFreight" className="overflow-hidden transition-transform duration-300 hover:scale-110">
          <img
            src="https://avatars.mds.yandex.net/get-ydo/1523397/2a0000016c14ffe64d4a1618c43a5c5efeb5/diploma"
            alt="Maritime"
            className="w-full h-56 object-cover"
          />
        
        <div className="bg-DarkYellow p-6 w-full">
          <h3 className="text-xl font-roboto text-gray-600 text-center font-semibold">Sea Freight</h3>
          <p className="text-center text-gray-500 text-base mt-2">
            We offer the best conditions for chartering ships for special cargo and/or IMO (Cargo of dangerous goods).
          </p>
        </div>
        </Link>
      </div>
      
    </div>
  );
};

export default Cards;
