import React, { useState } from "react";
import "./Vayt.css";

const mangas = [
  { 
    name: "Naruto", 
    seasons: 2,
    pages: [
      "m1.jpg","m5.jpg","m6.jpg","m7.jpg","m8.jpg",
      "m9.jpg","m10.jpg","m2.jpg","m3.jpg","m111.jpg",
    ]
  },
  { 
    name: "One Piece", 
    seasons: 3,
    pages: [
      "l8.jpg","l7.jpg","l6.jpg","l5.jpg","l4.jpg",
      "l3.jpg","l2.jpg","l1.jpg","l9.jpg","l10.jpg",
    ]
  }
];

const Vayt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedManga, setSelectedManga] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState(null); 

  const toggleBook = () => setIsOpen(prev => !prev);

  const selectManga = (manga) => {
    setSelectedManga(manga);
    setSelectedSeason(1);
    setCurrentPage(0);
  };

  const selectSeason = (season) => {
    setSelectedSeason(season);
    setCurrentPage(0);
  };


  const nextPage = () => {
    if (selectedManga && currentPage < selectedManga.pages.length - 1) {
      const img = document.querySelector(".page-img");
      img.classList.add("turning");
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        img.classList.remove("turning");
      }, 300);
    }
  };


  const prevPage = () => {
    if (selectedManga && currentPage > 0) {
      const img = document.querySelector(".page-img");
      img.classList.add("turning");
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        img.classList.remove("turning");
      }, 300);
    }
  };


  const openFullscreen = (src) => {
    setFullscreenImg(src);
  };


  const closeFullscreen = () => {
    setFullscreenImg(null);
  };

  return (
    <div className="kiniga-containeryyu">
      <button className="toggle-btn" onClick={toggleBook}>
        {isOpen ? "Закрыть книгу" : "Открыть книгу"}
      </button>

      <div className={`book ${isOpen ? "open" : "closed"}`}>
        {isOpen && (
          <>
            {!selectedManga ? (
              <div className="manga-selection">
                <h2>📚 Выбери мангу:</h2>
                {mangas.map((manga, index) => (
                  <button key={index} onClick={() => selectManga(manga)}>
                    {manga.name}
                  </button>
                ))}
              </div>
            ) : (
              <div className="reading-area">
                <h2>{selectedManga.name} — Сезон {selectedSeason}</h2>
                
                <div className="season-buttons">
                  {[...Array(selectedManga.seasons)].map((_, i) => (
                    <button key={i} onClick={() => selectSeason(i + 1)}>
                      Сезон {i + 1}
                    </button>
                  ))}
                </div>

                <div className="page-area">
                  <img 
                    src={selectedManga.pages[currentPage]} 
                    alt="manga page" 
                    className="page-img" 
                    onClick={() => openFullscreen(selectedManga.pages[currentPage])} // 🆕
                  />
                </div>

                <div className="navigation">
                  <button onClick={prevPage} disabled={currentPage === 0}>
                    ⬅ Назад
                  </button>
                  <p>{currentPage + 1} / {selectedManga.pages.length}</p>
                  <button 
                    onClick={nextPage} 
                    disabled={currentPage === selectedManga.pages.length - 1}
                  >
                    Вперёд ➡
                  </button>
                </div>

                <button className="back-btn" onClick={() => setSelectedManga(null)}>
                  🔙 Назад к выбору манги
                </button>
              </div>
            )}
          </>
        )}
      </div>


      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img src={fullscreenImg} alt="Fullscreen" className="fullscreen-img" />
          <button className="close-fullscreen" onClick={closeFullscreen}>✖</button>
        </div>
      )}
    </div>
  );
};

export default Vayt;
