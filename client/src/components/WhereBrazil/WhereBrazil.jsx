import React from 'react';
import Bounce from '../Bounce/Bounce';
import Slide from '../Slide/Slide';
import ColorBar from '../Colorbar/Colorbar';

const WhereBrazil = () => {
  return (
    <div>
    <section className="flex flex-col lg:max-w-7xl mx-auto items-center px-4 md:px-8 lg:px-16  bg-white">
     <h1 className='text-3xl font-poppins text-centre mt-6 lg:mt-40 mb-6 font-bold'>Where we operate in BAHRAIN:</h1>
          <p className='text-gray-500 lg:mb-32 font-poppins '>GVS Cargo & Logistics is constantly growing in its area of ​​operation, whether through the opening of new branches or important and strategic partnerships with the most renowned companies on each continent. In this way, it offers all its customers a fast, safe and personalized service, whether for imports, exports or obtaining all solutions for customs clearance.</p>
    
      <Bounce />
      
     
      
     
    </section>
    <Slide />
    <ColorBar />
    </div>
  );
};

export default WhereBrazil;
