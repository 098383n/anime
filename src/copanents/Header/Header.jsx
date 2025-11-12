import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import "../l18"
import "./Header.css";
import song from "../../assets/song.mp3";

const Header = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const languageOptions = [
    { value: "uz", label: "uzbekcha" },
    { value: "en", label: "english" },
    { value: "ru", label: "русский" },
    { value: "ki", label: "中文" }, 
  ];

  const { t, i18n } = useTranslation();

  const changeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop src={song} />
      <CustomCursor />

      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.2,
              rotate: 2,
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0, 0.8, 0] }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "white",
                zIndex: 1,
              }}
            />
            <div className="rain"></div>
            <div className="lightning"></div>
            <motion.h1
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 1] }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{
                fontSize: "6rem",
                color: "#9c27b0",
                textShadow:
                  "0 0 20px #e040fb, 0 0 40px #ab47bc, 0 0 80px #f50057",
                zIndex: 2,
                fontFamily: "'Noto Serif JP', serif",
              }}
            >
              呪術
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <div className="header">
          <div className="container">
            <div className="header__wrapper">
              <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
              </button>

              <div className={`sidebar ${menuOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setMenuOpen(false)}></button>
                <ul>
                  <li onClick={toggleMusic}>{isPlaying ? " 🔊" : " 🔈"}</li>
                  <li>
                    <Select
                      options={languageOptions}
                      value={languageOptions.find(option => option.value === i18n.language)}
                      onChange={changeLanguage}
                      classNamePrefix="custom-select"
                    />
                  </li>
                  <li>📂 </li>
                  <li>🔗 </li>
                </ul>
              </div>

              <div className="img-text">
                <img src="./ju.png" alt="" />
                <motion.h1
                  initial={{ opacity: 0, scale: 0.5, skewX: -30 }}
                  animate={{ opacity: 1, scale: 1, skewX: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#fff",
                    textShadow: "0 0 15px #f50057",
                    margin: 0,
                  }}
                >
                  {t("header_title")}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  style={{
                    fontSize: "1.2rem",
                    color: "#ddd",
                    marginTop: "0.5rem",
                  }}
                >
                  {t("header_subtitle")}
                </motion.p>
              </div>

              <div className="werti">
                <h2>{t("available_platforms")}</h2>
              </div>

              <div className="platforms">
                <div className="row">
                  <a href="" className="btn">
                    <img src="/op.avif" alt="App Store" />
                    <span>{t("download_appstore")}</span>
                  </a>
                  <a href="" className="btn">
                    <img src="/p.jpg" alt="Google Play" />
                    <span>{t("download_playstore")}</span>
                  </a>
                </div>
                <div className="row">
                  <a href="" className="btn">
                    <span>{t("download_apk")}</span>
                  </a>
                  <a href="" className="btn">
                    <img src="/pc.png" alt="PC" />
                    <span>{t("download_pc")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = e.clientY + "px";
        cursorRef.current.style.left = e.clientX + "px";
      }
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default Header;
