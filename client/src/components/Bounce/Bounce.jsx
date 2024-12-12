import React from 'react';
import './Bounce.css'; // Import the CSS file for custom animations
import one from "./one.png"
import two from "./two.png"
import three from "./three.png"
import four from "./four.png"
import five from "./five.png"
import six from "./six.png"
import seven from "./seven.png"
import eight from "./eight.png"

const Bounce = () => {
  const projects = [
    { title: 'PICKUP AND DELIVERY', src: one },
    { title: 'STUFFING & CONTAINER', src: two },
    { title: 'SWAPNING & CONTAINER', src: three},
    { title: 'BOARDING COMP.', src: four },
    { title: 'PERISHABLE GOODS', src: five},
    { title: 'IMO GOODS', src: six },
    { title: 'CARGO CONSOLIDATION', src: seven },
    { title: 'INTERNATIONAL DESTINATIONS', src: eight },
  ];

  return (
    <section className="text-center max-w-5xl mx-auto py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-500 mb-8">
        Our Services Include:
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={project.src}
              alt={project.title}
              className="h-24 w-24 mb-4 animate-zoom object-contain" // Apply the animation class
            />
            <p className="text-yellow-400 lg:w-[800px] font-bold text-center">{project.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bounce;
