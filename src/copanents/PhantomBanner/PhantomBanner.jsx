import React, { useState, useEffect } from "react";
import "./PhantomBanner.css";
import { Link } from "react-router-dom";

const PhantomBanner = () => {
  const items = ["0.png", "dr1.png", "dr2.png", "dr4.png", "ds.png"];

  const sideImages = [
    {
      img: "p1.png",
      text: "The global pre-registration for Jujutsu Kaisen’s first official IP-licensed mobile game, Jujutsu Kaisen Phantom Parade, is officially available now. Gather your friends to form a Phantom Parade team and stand a chance to earn up to Cube*1100!",
      link: "/hatr",
    },
    {
      img: "p2.png",
      text: "Unleash 100 million Black Flashes worldwide to receive Cube*500 upon launch!",
      link: "/vayt",
    },
    {
      img: "p3.png",
      text: "The Phantom Parade Early Gacha web event has begun. Participate in the event for a chance to earn SSR Character, SSR Recollection Bits, and up to 1,000 Cubes.",
      link: "/Yas",
    },
    {
      img: "p5.png",
      text: "The event venue will feature recreated scenes from the game, offering participants an immersive experience where they can take photos and participate in a stamp-collection challenge. Players can also watch the event live via the live stream channel on the official event page.",
      link: "/polsk",
    },
    {
      img: "p4.png",
      text: "Sign in for 5 consecutive to unlock up to Cube*700!",
      link: "/mayd",
    },
  ];

  const [clicked, setClicked] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (i) => {
    setClicked((prev) => (prev === i ? null : i));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sideImages.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="PhantomBanner">
      <div className="containeri">
        <div className="PhantomBanner__wrapper">
          <h1>Event</h1>

          <div className="images-block">

            <div className="main-images">
              {items.map((img, i) => (
                <div
                  key={i}
                  className={`srt ${clicked === i ? "clicked" : ""}`}
                  onClick={() => handleClick(i)}
                >
                  <img src={`./${img}`} alt="" />
                  <span
                    className="overlay"
                    style={{ animationDelay: `${i * 5}s` }}
                  ></span>
                </div>
              ))}
            </div>

            <div className="side-images-animated">
              {sideImages.map((item, i) => (
                <div
                  key={i}
                  className={`slide ${activeIndex === i ? "slide-active" : ""}`}
                  style={{ animationDelay: `${i * 5}s` }}
                >
                  <img src={`./${item.img}`} alt={`slide-${i}`} />
                  <div className="slide-footer">
                    <p>{item.text}</p>
                    <Link to={item.link}>
                      <button className="event-button">Click to participate</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhantomBanner;
