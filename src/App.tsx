import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import MentalHealth from "./pages/MentalHealth/MentalHealth";
import Participation from "./pages/Participation/Participation";
import ContactPage from "./pages/ContactPage/ContactPage";
import Registration from "./pages/Registration/Registration";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/que-hacemos" element={<WhatWeDo />} />
        <Route path="/salud-mental" element={<MentalHealth />} />
        <Route path="/participacion" element={<Participation />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/registro" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
