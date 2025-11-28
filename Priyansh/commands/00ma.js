//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "ma",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ////////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("vaishnavi") ||
     react.includes("devi") || react.includes("MATa") || react.includes("MAtA") ||
react.includes("MA") ||
react.includes("MATA")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★ 𝐉𝐚𝐢 𝐌𝐚𝐭𝐚 𝐃𝐢 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/ma.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🎉", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
