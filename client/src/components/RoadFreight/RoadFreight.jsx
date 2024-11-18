import React from 'react';
import Bounce from '../Bounce/Bounce';
import Slide from '../Slide/Slide';
import ColorBar from '../Colorbar/Colorbar';

function RoadFreight() {
  return (
    <div>
      <div className="flex flex-col items-start max-w-6xl lg:mt-32 mx-auto  p-4 lg:p-8 bg-white">
        <div className="mb-2 flex flex-col lg:flex-row mt-6 items-start justify-between w-full">
          <div className="flex-1 mb-4 lg:mb-0">
            <h2 className="text-3xl text-black lg:ml-48 lg:mt-4 font-bold mb-1">
              Road Freight
            </h2>
            <div className="h-1 lg:w-56 lg:ml-36 bg-yellow-500"></div>
          </div>
          <div className="w-full lg:w-1/2 ml-4 lg:ml-0">
            <p className="text-md mt-4 font-semibold text-Graytext">
              <strong>GVS Cargo & Logistics</strong> is widely consolidated to offer you its entire infrastructure in road freight transport services, regardless of its size, value, distance to be covered, quantity or type of product, including special cargo, perishable products or even dangerous cargo, through its own transport or in partnerships with the most traditional and competent companies in the market.
            </p>
            <p className="text-md mt-4 font-semibold text-Graytext">
            We also offer full support at border crossings, as well as detailed monitoring of each stage of your cargo, which can be tracked in real time on our Portal. This is much more than a differential of our Company; it is respect and dedication to each client who relies on our services.
            </p>
          </div>
        </div>
      </div>
      <Bounce />
      <div className='mb-10 mt-10'>
        <Slide />
      </div>
     
        <ColorBar />
      
    </div>
  );
}

export default RoadFreight;
