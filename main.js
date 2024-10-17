import SECRET from "./secret.js";
const mineflayer = require("mineflayer")
const axios = require('axios');

const bot = mineflayer.createBot({
    auth: "microsoft",
    username: SECRET.username,
    password: SECRET.password,
    host: "5b5t.org",
    version: "1.12.2"
})

bot.on("chat", (username, message) => {
    if (username === bot.username) return
    const embed = {
        title: username,
        description: message,
        color: message.startsWith(">") ? 0x00aa00 : 0x2b2d31,
        timestamp: new Date()
    };
    axios.post("webhook", {embeds: [embed]})
    // TODO: 플레이어 나가기 로그 구현 0xaa0000, 서버 메세지 로그 구현 0x0000aa
})