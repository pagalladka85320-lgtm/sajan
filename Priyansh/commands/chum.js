const fs = require("fs");
module.exports.config = {
  name: "kisss",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Kiss") ||
     react.includes("Chuma") || react.includes("kISs") || react.includes("kIsS") ||
react.includes("kiss") ||
react.includes("KISS") ||     
react.includes("kiSs")) {
    var msg = {
        body: `★━━━━━━━━━━━━━★ 𝐊𝐢𝐬𝐬 𝐲𝐨𝐮 𝐁𝐚𝐛𝐲 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/radhe.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
