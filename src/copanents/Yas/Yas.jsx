import React from "react";
import "./Yas.css";

const characters = [
  {
    name: "Сатору Годжо",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7994cefb-d57c-4104-86f2-8fe2958af9d1/dgjkq2q-da9e0538-2b53-43a4-aa2b-4aba6aa4c8a4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83OTk0Y2VmYi1kNTdjLTQxMDQtODZmMi04ZmUyOTU4YWY5ZDEvZGdqa3EycS1kYTllMDUzOC0yYjUzLTQzYTQtYWEyYi00YWJhNmFhNGM4YTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wNn-CBl_y8SdUFta9L3TYJEssqYJWeovAindKrChEqA",
    description: "Сильнейший маг современности, учитель в школе Jujutsu. Известен своей безграничной техникой и чувством юмора.",
    fact: "Годжо — первый человек, унаследовавший и «Безграничное», и «Шесть глаз» за сотни лет."
  },
  {
    name: "Итодори Юдзи",
    image: "https://images4.alphacoders.com/113/1133950.jpg",
    description: "Главный герой, обладающий огромной физической силой и чистым сердцем. Он стал сосудом для Сукуны.",
    fact: "Юдзи съел палец Сукуны, чтобы спасти друзей, не задумываясь о последствиях."
  },
  {
    name: "Фушигуро Мегуми",
    image: "https://wallpapers.com/images/featured/megumi-fushiguro-p7qwmixdvfcbfmf0.jpg",
    description: "Спокойный и рассудительный маг, владеющий техникой Теней. Ученик Годжо.",
    fact: "Мегуми способен вызывать и контролировать шикигами — духов-помощников."
  },
  {
    name: "Нобара Кугисаки",
    image: "https://cdn.bhdw.net/im/jujutsu-kaisen-nobara-kugisaki-wallpaper-90034_w635.webp",
    description: "Сильная и уверенная в себе девушка-мага. Использует магию через куклы и гвозди.",
    fact: "Нобара не боится жертвовать собой, если это поможет друзьям."
  },
];

const Yas = () => {
  return (
    <div className="gallery">
      <h1 className="title">Персонажи Jujutsu Kaisen</h1>
      <div className="cards">
        {characters.map((c, i) => (
          <div key={i} className="card">
            <div className="img-box">
              <img src={c.image} alt={c.name} />
            </div>
            <div className="content">
              <h2>{c.name}</h2>
              <p>{c.description}</p>
              <span className="fact">💡 {c.fact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yas;
