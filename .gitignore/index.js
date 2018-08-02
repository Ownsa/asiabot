const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("AsiaGames");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDYxODEwODM0Mzk0NTc4OTQ0.DkRX2g.qiYbtca2tlEdwozDCJpnYM7tRE8");
