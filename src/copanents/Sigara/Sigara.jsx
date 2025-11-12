import React from 'react';
import "./Sigara.css";

const Sigara = () => {
  return (
    <div className="sigara">
      <div className="containerx">
        <div className="sigara__wrapper">
          <h1>OFFICIAL X</h1>

          <img 
            src="./img.png" 
            alt="Banner" 
            className="sigara__image" 
          />

          <div className="oika">
            <h1>Follow and get the latest news</h1>
          </div>

          <div className="loa">
            {[
              "1.avif", "1.jpg", "4.jpg", "3.jpg", "5.jpg", 
              "2.png", "8.jpg", "9.jpg", "6.png"
            ].map((imgSrc, index) => (
              <div className="vet" key={index}>
                <img src={`./${imgSrc}`} alt={`icon-${index}`} className="social-icon" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sigara;
