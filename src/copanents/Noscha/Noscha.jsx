import React, { useState } from 'react'
import './Noscha.css'

const Noscha = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const images = [
    { src: "./03.png", alt: "img-1" },
    { src: "./o1.png", alt: "img-2" },
    { src: "./o2.png", alt: "img-3" },
    { src: "./o4.png", alt: "img-4" }
  ]

  return (
    <div className="noscha">
      <div className="containerf">

        
        <h2 className="noscha__title">Share</h2>
        


        <div className="noscha__wrapper">
          {images.map((img, idx) => (
            <div key={idx} className="loks">
              <img
                src={img.src}
                alt={img.alt}
                width="40"
                onClick={() => setOpenIndex(idx)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}

          {openIndex !== null && (
            <div className="cap__backdrop" onClick={() => setOpenIndex(null)}>
              <div
                className="cap__card show"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="cap__close" onClick={() => setOpenIndex(null)}>
                  ✕
                </button>
                <div className="cap__content">
                  <img src={images[openIndex].src} alt={images[openIndex].alt} className="cap__img" />
                  <div className="cap__text">
                    <h3>©{openIndex + 1}</h3>
                    <p>information after Lohachka</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
                  <p className="noscha__info">
© Gege Akutami/Shueisha, JUJUTSU KAISEN Project ©Sumzap, Inc./TOHO CO., LTD.
All Rights Reserved. Published by BILIBILI HK LIMITED
        </p>
    </div>
    
  )
}

export default Noscha
