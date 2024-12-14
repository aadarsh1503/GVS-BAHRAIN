import React from 'react';
import Bounce from '../Bounce/Bounce';
import Slide from '../Slide/Slide';
import ColorBar from '../Colorbar/Colorbar';
import { useEffect } from 'react';

function SeaFreight() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(100, 0);
  }, []); 
  return (
    <div>
      <div className="flex flex-col items-start max-w-6xl lg:mt-32 mx-auto  p-4 lg:p-8 bg-white">
        <div className="mb-2 flex flex-col lg:flex-row mt-6 items-start justify-between w-full">
          <div className="flex-1 mb-4 lg:mb-0">
            <h2 className="text-3xl lg:ml-44 text-gray-700 lg:mt-4 font-bold mb-1">
              Sea Freight
            </h2>
            <div className="h-1 lg:w-56  lg:ml-36 bg-yellow-500"></div>
          </div>
          <div className="w-full lg:w-1/2 font-poppins gap-4 ml-4 lg:ml-0">
            <p className="text-md mt-4 text-Graytext">
             
Always seeking the best service for our customers, where all their needs are met, we offer an agile service in accordance with our rigorous system of excellence in quality, where we establish partnerships with all shipping companies, thus operating on all continents in the consolidation of goods.<br />


            </p>
            <p className='mt-2 mb-2 text-Graytext'>Our team of professionals develops your import or export project, paying attention to every detail for a successful operation, obtaining fast, safe results that meet each of your needs.</p>
            <p className='text-Graytext'><strong>GVS Cargo & Logistics</strong> develops the best transportation option for each type of merchandise, indicating the ideal container for your cargo, including complete monitoring by our professionals, both at the time of shipment at the origin and upon unloading at any destination. </p>
            <p className='mt-2 text-Graytext'>We also offer the best conditions for chartering ships for special cargo and/or IMO (Cargo of dangerous products).</p>
            <p className="text-md mt-4 text-Graytext">
              Also providing a complete and personalized <strong>DOOR TO DOOR</strong> service, with complete security, speed and transparency; GVS Cargo & Logistics collects your merchandise, accommodates it, ships it, tracks it and delivers it anywhere in the world.
            </p>
            <h1 className='mt-4 font-semibold mb-4 text-Graytext'>Our shipping projects include:</h1>
            <p className='text-Graytext'>• Exclusive service for picking up and delivering goods (GVS Cargo & Logistics “Door to Door” System).< br />
• Collection and delivery of containers for stuffing< br />
• Stuffing and unloading of containers< br />
• Exclusive service for direct monitoring of the shipment of your cargo< br />
• Preparation of a safe plan for cargo containing perishable products< br />
• Preparation of a safe plan for cargo containing dangerous goods (IMO)< br />
• Consolidation of any type of cargo< br />
• Complete moves to international destinations</p>
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

export default SeaFreight;
