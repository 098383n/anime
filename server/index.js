import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const BOT_TOKEN = "7442969242:AAEV926shu53YgtxGGxkO0-oHB6BzlsGJ4E";
const CHAT_ID = "1874581050";

app.post("/api/send", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Message required" });
    }

    const text = `💬 Новое сообщение:\n${message.trim()}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });

    const data = await resp.json();
    if (!data.ok) {
      console.error("Telegram API error:", data);
      return res.status(500).json({ error: "Telegram API error" });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Сервер запущен на http://localhost:${PORT}`));

