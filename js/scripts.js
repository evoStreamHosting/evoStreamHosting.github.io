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
var twitchURL = '<script src="http://player.twitch.tv/js/embed/v1.js"></script><div id="{PLAYER_DIV_ID}"></div>FUCKS SAKE YOU SHITTY LITTLE THING. FUCK THIS SHIT!!!!!';

$(document).ready(function (){
    var player = new Twitch.Player("{PLAYER_DIV_ID}", options);
    player.setVolume(0.5);
});


$(window).resize(function(){
    $("#twitchStream").html('');
    options.width = $("#twitchStream").width();
    options.height = options.width * (9 / 16);
    $.ajax({url: "twitchDiv.txt", success: function(result){
            $("#twitchStream").html(result);
        }});
})