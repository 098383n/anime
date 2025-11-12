import React, { useState } from "react";
import "./Mayd.css";

const Mayd = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setStatus("Пожалуйста, напиши сообщение ✍️");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (data.ok) {
        setStatus("✅ Сообщение отправлено!");
        setMessage("");
      } else {
        setStatus("❌ Ошибка при отправке.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Сервер не отвечает.");
    }
  };

  return (
    <div className="mayd-container">
      <form onSubmit={handleSubmit} className="mayd-form">
        <h2 className="mayd-title">💬 Напиши сообщение</h2>
        <input
          type="text"
          className="mayd-input"
          placeholder="Введи что-то..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="mayd-btn">
          Отправить
        </button>
        {status && <p className="mayd-status">{status}</p>}
      </form>
    </div>
  );
};

export default Mayd;
