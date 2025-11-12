import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Kud.css";

const videos = [
  "/20.jpg",
  "/21.jpg",
  "/22.jpg",
  "/23.jpg",
  "/24.jpg",
  "/25.jpg"
];

const Kud = () => {
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
    <div className="no-wrapper">

      <img
        src="/ku1.png"
        alt="Header"
        className="header-img"
      />


      <div className="futr-slider">
        <button onClick={prev} className="futr-btn futr-btn--left">
          <ChevronLeft size={36} />
        </button>

        <div className="futr-video-wrapper">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={videos[index]}
              src={videos[index]}
              alt={`Image ${index + 1}`}
              className="futr-video"
              custom={direction}
              initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        <button onClick={next} className="futr-btn futr-btn--right">
          <ChevronRight size={36} />
        </button>
      </div>


      <div className="slider-text">
        <p>
         Battles will unfold in high quality.
        </p>
      </div>
            <div className="slider-textn">
        <p>
          Format your own team and exorcise powerful cursed Spirits
        </p>
      </div>

    </div>
  );
};

export default Kud;
