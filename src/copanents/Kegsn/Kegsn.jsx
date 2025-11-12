import React, { useRef, useEffect } from "react";
import song1 from "../../assets/song1.mp3"; 
import song3 from "../../assets/song4.mp3"; 
import song2 from "../../assets/song2.mp3"; 
import song5 from "../../assets/song5.mp3";
import song6 from "../../assets/song3.mp3";
import song7 from "../../assets/song6.mp3";
import "./Kegsn.css";

const Kegsn = () => {
  const audioRef = useRef(null);
  const sparksRef = useRef([]);

  const gojoPhrases = [
    "Ты не справишься со мной!",
    "Это твой конец...",
    "Ты уже проиграл, просто не понял этого."
  ];

  const sukunaPhrases = [
    "Я — король проклятий...",
    "Слабак. Даже не стоишь моего взгляда.",
    "Падай ниц, человек.",
    "Я разорву тебя в клочья!",
    "Ты не сможешь меня победить."
  ];

  const gojoSongs = [song1, song2, song6];
  const sukunaSongs = [song3, song5, song7];

  const playRandom = (phrases, songs, isSukuna = false) => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    const textElement = document.getElementById("phrase");

    audioRef.current.src = randomSong;
    audioRef.current.play();

    textElement.innerHTML = "";
    textElement.classList.remove("shake");

    if (isSukuna) textElement.classList.add("shake");

    let charIndex = 0;
    const printLetter = () => {
      if (charIndex < randomPhrase.length) {
        const span = document.createElement("span");
        span.textContent = randomPhrase[charIndex];
        span.style.color = getRandomColor();
        span.classList.add("letter");
        textElement.appendChild(span);
        charIndex++;
        setTimeout(printLetter, 70);
      }
    };

    printLetter();
    explodeEffect(); 
  };

  const getRandomColor = () => {
    const colors = ["#FF0000", "#00BFFF"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

 
  const explodeEffect = () => {
    const container = document.querySelector(".spark-container");
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.classList.add("explosion-particle");

      const angle = Math.random() * 2 * Math.PI;
      const distance = 50 + Math.random() * 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      particle.style.setProperty("--x", `${x}px`);
      particle.style.setProperty("--y", `${y}px`);
      particle.style.background = getRandomColor();

      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 700);
    }
  };

  useEffect(() => {
    sparksRef.current = document.querySelectorAll(".spark");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div className="spark-container">
        <h2 id="phrase" className="phrase"></h2>
      </div>
      <audio ref={audioRef} />

      <button
        onClick={() => playRandom(gojoPhrases, gojoSongs, false)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "10px",
          background: "#00BFFF",
          color: "#fff",
          border: "none",
          fontWeight: "bold",
          boxShadow: "0 0 10px #00BFFF",
          marginRight: "15px",
          transition: "transform 0.2s ease"
        }}
        onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
      >
        🔵 Годзё
      </button>


      <button
        onClick={() => playRandom(sukunaPhrases, sukunaSongs, true)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "10px",
          background: "#FF0000",
          color: "#fff",
          border: "none",
          fontWeight: "bold",
          boxShadow: "0 0 10px #FF0000",
          transition: "transform 0.2s ease"
        }}
        onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
      >
        🔴 Сукуна
      </button>
    </div>
  );
};

export default Kegsn;
