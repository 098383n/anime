import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VaytPage from "./pages/VaytPage";

import Mat4rPage from "./pages/Mat4rPage";
import PolskPage from "./pages/PolskPage";
import MaydPage from "./pages/MaydPage";
import HatrPage from "./pages/HatrPage";
import YasPage from "./pages/YasPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vayt" element={<VaytPage/>} />
        <Route path="/yas" element={<YasPage/>} />
         <Route path="/mat4r" element={<Mat4rPage/>} />
         <Route path="/polsk" element={<PolskPage/>} />
         <Route path="/mayd" element={<MaydPage/>} />
         <Route path="/hatr" element={<HatrPage/>} />
      </Routes>
    </>
  );
}

export default App;
