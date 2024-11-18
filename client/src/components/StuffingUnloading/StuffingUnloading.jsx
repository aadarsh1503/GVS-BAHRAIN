import React from 'react';
import Bounce from '../Bounce/Bounce';
import Slide from '../Slide/Slide';
import ColorBar from '../Colorbar/Colorbar';

function StuffingUnloading() {
  return (
    <div>
      <div className="flex flex-col items-start max-w-6xl lg:mt-32 mx-auto  p-4 lg:p-8 bg-white">
        <div className="mb-2 flex flex-col lg:flex-row mt-6 items-start justify-between w-full">
          <div className="flex-1 mb-4 lg:mb-0">
            <h2 className="text-3xl text-Graytext  lg:ml-24 lg:mt-4 font-bold mb-2">
            CONTAINER STUFFING
            </h2>
            <div className="h-1 lg:w-56 lg:ml-36 bg-yellow-500"></div>
          </div>
          <div className="w-full lg:w-1/2 ml-4 lg:ml-0">
            <p className="text-md mt-4 font-semibold text-Graytext">
              <p> Container stuffing requires technical knowledge regarding weight and volume, as well as the distribution of goods in a way that ensures good use of space, correct shipping and in a profitable manner for the customer.
              Container Unloading
            </p></p>
            <p className="text-md mt-1 font-semibold text-Graytext">
            Container unloading requires skilled labor, equipment and handling appropriate to the type of goods and packaging, ensuring the suitability of the product.
            </p>
          </div>
        </div>
      </div>
      <Bounce />
      <Slide />
 
        <ColorBar />
      
    </div>
  );
}

export default StuffingUnloading;
