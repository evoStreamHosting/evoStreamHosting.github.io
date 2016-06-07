var streamList = ["guardsmanBoB", "Monstercat", "streamerHouse", "SaltyBet"];
var currentStream = streamList[3]; //TODO <--- clicked item on TwitchAPI list, for now, set to Saltybet
var twitchWidth = $("#twitchStream").width();
var twitchHeight = twitchWidth * (9 / 16);
var documentHeight = $(window).height();
var options = {
        width: twitchWidth,
        height: twitchHeight,
        channel: currentStream, 
        muted: true,       
    };//variables


$(document).ready(function (){
    var player = new Twitch.Player("{PLAYER_DIV_ID}", options);
    player.setVolume(0.5);
});


$(window).resize(function(){
    $("#twitchStream").hide();
    options.width = $("#twitchStream").width();
    options.height = options.width * (9 / 16);
    $("#twitchStream").show();
})