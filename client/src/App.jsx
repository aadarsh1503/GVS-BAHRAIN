import { Container } from "postcss";
import AirFreightSection from "./components/AirFreightSection/AirFreightSection";
import ColorBar from "./components/Colorbar/Colorbar";
import Commercial from "./components/Commercial/Commercial";
import CustomClearance from "./components/CustomClearance/CustomClearance";
import DGR from "./components/DGR/DGR";
import FCL from "./components/FCL/FCL";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Inspection from "./components/Inspection/Inspection";
import Insurance from "./components/Insurance/Insurance";
import LCL from "./components/LCL/LCL";
import MissionVissionAndValues from "./components/MissionVissionAndValues/MissionVissionAndValues";
import Navbar from "./components/Navbar/Navbar";
import OperateWorld from "./components/OperateWorld/OperateWorld";
import Packaging from "./components/Packaging/Packaging";
import RoadFreight from "./components/RoadFreight/RoadFreight";
import SeaFreight from "./components/SeaFrieght/SeaFrieght";
import Storages from "./components/Storages/Storages";
import StuffingUnloading from "./components/StuffingUnloading/StuffingUnloading";
import WhereBrazil from "./components/WhereBrazil/WhereBrazil";
import AboutSection from "./components/WhoWeAre/WhoWeAre";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Containers from "./components/Container/Container";
import { IconContext } from "react-icons/lib";
import Incoterms from "./components/Incoterms/Incoterms";
import ContactUs from "./components/ContactUs/ContactUs";
import ChatWidget from "./components/ChatWidget/ChatWidget";
import Slide from "./components/Slide/Slide";
import Testimonials from "./components/Testimonials/Testimonials";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader";

function App() {
  return (
    <Router>
    <GlobalLoader />
      <Navbar />
      <ChatWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoWeAre" element={<AboutSection />} />
        <Route path="/whereinBahrain&GCC" element={<WhereBrazil />} />
        <Route path="/OperateWorld" element={<OperateWorld />} />
        <Route path="/missionvisionandvalues" element={<MissionVissionAndValues />} />
        <Route path="/airFreight" element={<AirFreightSection />} />
        <Route path="/seaFreight" element={<SeaFreight />} />
        <Route path="/roadFreight" element={<RoadFreight />} />
        <Route path="/stuffingUnloading" element={<StuffingUnloading />} />
        <Route path ="/lcl" element={<LCL/>}/>
        <Route path ="/fcl" element={<FCL/>}/>
        <Route path="/customClearance" element={<CustomClearance />} />
        <Route path="/dgr" element={<DGR />} />
        <Route path="/inspection" element={<Inspection />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/storage" element={<Storages />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/container" element={<Containers />} />
        <Route path="/incoTerms" element={<Incoterms />} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/testimonials" element={<Testimonials />} />
        
       
        {/* Optional: Add a redirect or a 404 route here if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
