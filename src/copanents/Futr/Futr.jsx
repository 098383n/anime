import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './Futr.css'
const videos = [
  "https://www.youtube.com/embed/utCMROP1czE",
  "https://www.youtube.com/embed/OyHtomaqql4",
  "https://www.youtube.com/embed/CTYbDXJR26c",
];


const Futr = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((index + 1) % videos.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((index - 1 + videos.length) % videos.length);
  };

  return (
    <div className="slider-container">
      <button onClick={prev} className="nav-btn left">
        <ChevronLeft size={36} />
      </button>

      <div className="slider-frame">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.iframe
            key={videos[index]}
            src={videos[index]}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="slider-video"
            custom={direction}
            initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <button onClick={next} className="nav-btn right">
        <ChevronRight size={36} />
      </button>
    </div>
  );
};

export default Futr;
