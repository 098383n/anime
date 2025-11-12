import React from "react";

import './Hart.css'

const Hart = () => {
  return (
    <div className="background">
      <div className="card">

        <img
          src="https://e0.pxfuel.com/wallpapers/715/504/desktop-wallpaper-telegram-blue-logo-blue-neon-lights-creative-blue-abstract-background-telegram-logo-social-network-telegram.jpg"
          alt="Banner"
          className="banner"
        />


        <h2 className="title">Обращаться к админу:</h2>


        <div className="button-container">
          <a
            href="https://t.me/S_9loha"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn telegram"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
              alt="Telegram"
              className="social-img"
            />
            Telegram
          </a>

          <a
            href="https://www.instagram.com/Lohachka/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn instagram"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="social-img"
            />
            Instagram
          </a>
        </div>

        <p className="footer-text">© 2025 Все права защищены | Мой сайт 💻</p>
      </div>
    </div>
  );
};

export default Hart;
