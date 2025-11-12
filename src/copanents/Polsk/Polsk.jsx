import React, { useEffect } from "react";
import "./Polsk.css";

const data = [
  {
    id: "01",
    title: "Происхождение названия",
    text: "Название «Jujutsu Kaisen» можно перевести как «Сражение проклятий» или «Битва заклятий». Оно отражает основную суть истории — борьбу магов с проклятиями.",
    img: "https://wallpapers.com/images/hd/jujutsu-kaisen-desktop-6sgnzve7mydcuoyq.jpg",
  },
  {
    id: "02",
    title: "Автор и успех",
    text: "Мангу создал Геґе Акутами. Уже через год после выхода она стала одной из самых популярных в Японии и получила аниме-адаптацию.",
    img: "https://storage.yandexcloud.net/otakuy-media/post_media/141f4458-74de-11ef-9071-7a8e86ad008b",
  },
  {
    id: "03",
    title: "Сатору Годжо",
    text: "Сатору Годжо — один из самых любимых персонажей фанатов. Он настолько силён, что его сила признана опасной даже среди магов.",
    img: "https://4kwallpapers.com/images/wallpapers/satoru-gojo-8k-3840x2160-15315.jpg",
  },
  {
    id: "04",
    title: "Уникальная магия",
    text: "В мире Jujutsu Kaisen маги используют «проклятую энергию» — силу, рождённую из негативных эмоций людей. Чем сильнее эмоции, тем опаснее проклятие.",
    img: "https://abrakadabra.fun/uploads/posts/2022-01/1641902443_1-abrakadabra-fun-p-magicheskaya-bitva-oboi-na-rabochii-stol-1.jpg",
  },
];

const Polsk = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll(".zigzag-block");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
    
            entry.target.style.transitionDelay = `${index * 0.3}s`;
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    blocks.forEach((block) => observer.observe(block));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="zigzag-section">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`zigzag-block ${index % 2 === 0 ? "left-img" : "right-img"}`}
        >
          <div className="image">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="text">
            <h2>{item.id}</h2>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Polsk;

