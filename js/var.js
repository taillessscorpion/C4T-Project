// MAIN
var body = document.getElementsByTagName("body")[0];
var left = document.getElementById("left");
var right = document.getElementById("right");
var up = document.getElementById("up");
var down = document.getElementById("down");
var commands = document.getElementById("commands");
var comments = document.getElementById("comments");
var point = document.getElementById("point");
var firststart = document.getElementById("firststart");
var nextstart1 = document.getElementById("nextstart1");
var nextstart2 = document.getElementById("nextstart2");
var pause1 = document.getElementById("pause1");
var pause2 = document.getElementById("pause2");
var pause3 = document.getElementById("pause3");
var pause4 = document.getElementById("pause4");
var pause5 = document.getElementById("pause5");
var pause6 = document.getElementById("pause6");
var stage1 = document.getElementById("stage1");
var stage2 = document.getElementById("stage2");
var stage3 = document.getElementById("stage3");
var stage4 = document.getElementById("stage4");
var stage5 = document.getElementById("stage5");
var stage6 = document.getElementById("stage6");
var stage7 = document.getElementById("stage7");
var clickunlock = document.getElementById("clickunlock");
var clickwin = document.getElementById("clickwin");
var clicklose = document.getElementById("clicklose");
var timerunout = document.getElementById("timerunout");
var oldY = 0, mousemove, resoundvolume = 1, remusicvolume = 1;
var soundvolumeIn = 1, musicvolumeIn = 1, voicevolume = 1;
var showsvolume = document.getElementById("recentsvolume");
var showmvolume = document.getElementById("recentmvolume");
var nameArea = document.getElementById("nameArea");
var inputName = document.getElementById("inputName");
var btnName = document.getElementById("btnName");
var topcommand, botcommand;
var gameBtn = document.getElementsByClassName("gameBtn");
var score, playtime;
var key, classkey;
var wherechoice, randomsetup;
var choose, colorchoose;
var checkback;
var playscreen, pausescreen, continuescreen;
var color1, color2, color3, color4;
var recentUc, recentRc, recentDc, recentLc;
var playornot;
var timecount, timeleft, timeplay, timeshowset;
var timeindex, timeindex, colorindex, commentIndex;
var truthorfake, swapornot;
var contUP, contRIGHT, contDOWN, contLEFT;
var musicpauseRI, musicloseRI;
var checkmusicplay, playedalready;
var unlocks = ["TUTORIAL PASSED", "TOO EASY", " ANOTHER LEVEL", "UNSTOPPABLE", "GENIUS", "GODLIKE", "LEGENDARY", "BEST PLAYER EVER"]
    muchtime = ["Wonderful", "Great", "Unbelivable", "Awesome", "Excellent", "Miraculous", "Proudable"],
    fittingtime = ["Well done", "Good job", "So fast", "Nice", "Wow", "Wisely choice"],
    fewtime = ["Keep going", "Moving on", "Keep trying", "Well played"],
    poortime = ["Luckily", "Last second", "Passed it", "Still play"],
    timelose = ["NOT ENOUGH", "FINISHED", "TRY AGAIN", "GAME OVER", "ONE MORE TIME", "UNEXPECTED ENDING"],
    choicelose = ["BAD CHOICE", "CALM DOWN", "SLOW DOWN", "GAME OVER"];
var soundvolume = document.getElementById("soundvolume");
var musicvolume = document.getElementById("musicvolume");
var settingbutton = document.getElementById("setbutton");
var unlockbutton = document.getElementById("unlbutton");
var highscrosebutton = document.getElementById("hsbutton");
var gameguidebutton = document.getElementById("ggbutton");
var bsvolumve = document.getElementById("bsvolume");
var bmvolumve = document.getElementById("bmvolume");
var bgColorStage, bgOldColorStage;





// BUTTON
var bgbutton = document.getElementById("bgbutton");
var bhsbutton = document.getElementById("bhsbutton");
var bunlbutton = document.getElementById("bunlbutton");
var bsetbutton = document.getElementById("bsetbutton");
var hsbuttonF = document.getElementById("hsbuttonF");
var unlbuttonF = document.getElementById("unlbuttonF");
var ggbutton = document.getElementById("ggbutton");
var bsvolume = document.getElementById("bsvolume");
var bmvolume = document.getElementById("bmvolume");
var recentsvolume = document.getElementById("recentsvolume");
var recentmvolume = document.getElementById("recentmvolume");
var modalguide = document.getElementById("modalguide");
var modalhighscore = document.getElementById("modalhighscore");
var modalunlock = document.getElementById("modalunlock");
var modalsetting = document.getElementById("modalsetting");
var fakemodalguide = document.getElementById("fakemodalguide");
var fakemodalhighscore = document.getElementById("fakemodalhighscore");
var fakemodalunlock = document.getElementById("fakemodalunlock");
var fakemodalsetting = document.getElementById("fakemodalsetting");
gameguidebutton.draggable = false;
highscrosebutton.draggable = false;
unlockbutton.draggable = false;
settingbutton.draggable = false;
soundvolume.draggable = false;
musicvolume.draggable = false;
hsbuttonF.draggable = false;
unlbuttonF.draggable = false;
var active0 = false;
var active1 = false;
var active2 = false;
var active3 = false;
var active4 = false;
var active5 = false;
var setTimeDoneEffct;
var saveArea = document.getElementById("saveArea");
var askPlaySave = document.getElementById("askPlaySave");
var playSave = document.getElementById("playSave");
var playNew = document.getElementById("playNew");
var unlbutton = document.getElementById("unlbutton");
var unlbuttonF = document.getElementById("unlbuttonF");
var ggbutton = document.getElementById("ggbutton");
var showIconUnlock = document.getElementsByClassName("showIconUnlock");
var paraph = document.getElementsByTagName("p");
var checkBox = document.getElementsByClassName("checkBox");

// BACKGROUND
var fakeBody = document.getElementById("fakebody");
var sun = document.getElementsByClassName("sun")[0];
var sea = document.getElementsByClassName("sea")[0];
var gameIcon = document.getElementById("gameIcon");
var wave = document.getElementsByClassName("wave");
var UIbox = document.getElementById("ui");
document.getElementsByClassName("sunImg")[0].draggable = false;

// PROFILE AND HIGHSCORE
var playerName, playerProfile;
var showScoreBoard = document.getElementById("showScoreBoard");
var showPlayerName = document.getElementById("showPlayerName");
var showPlayerHighScore = document.getElementById("showPlayerHighScore");
var showPlayerTotalScore = document.getElementById("showPlayerTotalScore");
var showPlayerAverange = document.getElementById("showPlayerAverange");
var showPlayerQualification = document.getElementById("showPlayerQualification");
var showUnlock = document.getElementById("showUnlock");
var showUnlock0Content = document.getElementById("showUnlock0Content");
var iconUnlock0 = document.getElementById("iconUnlock0");
var showUnlock1Content = document.getElementById("showUnlock1Content");
var iconUnlock1 = document.getElementById("iconUnlock1");
var showUnlock2Content = document.getElementById("showUnlock2Content");
var iconUnlock2 = document.getElementById("iconUnlock2");
var showUnlock3Content = document.getElementById("showUnlock3Content");
var iconUnlock3 = document.getElementById("iconUnlock3");
var showUnlock4Content = document.getElementById("showUnlock4Content");
var iconUnlock4 = document.getElementById("iconUnlock4");
var showUnlock5Content = document.getElementById("showUnlock5Content");
var iconUnlock5 = document.getElementById("iconUnlock5");
var showUnlock6Content = document.getElementById("showUnlock6Content");
var iconUnlock6 = document.getElementById("iconUnlock6");
var showUnlock7Content = document.getElementById("showUnlock7Content");
var iconUnlock7 = document.getElementById("iconUnlock7");
var delayRename;
var showSingleScore = document.getElementById("showSingleScore");
var showTotalScore = document.getElementById("showTotalScore");
var showName = document.getElementsByClassName("showName");
var showScore = document.getElementsByClassName("showScore");
var showSingleEnd = document.getElementsByClassName("showSingleEnd");
var showTotalEnd = document.getElementsByClassName("showTotalEnd");

// data = {
//     single: [
//         {
//             name: "1",
//             highScore: 15,
//             totalScore: 0,
//             totalPlayTime: 0,
//             averageScore: 0,
//             singleRank: 0,
//             totalRank: 3,
//             Unlocks: []
//         },
//         {
//             name: "2",
//             highScore: 10,
//             totalScore: 0,
//             totalPlayTime: 0,
//             averageScore: 0,
//             singleRank: 1,
//             totalRank: 3,
//             Unlocks: []
//         },
//         {
//             name: "3",
//             highScore: 5,
//             totalScore: 0,
//             totalPlayTime: 0,
//             averageScore: 0,
//             singleRank: 2,
//             totalRank: 3,
//             Unlocks: []
//         }
//     ],
//     total: [
//         {
//             name: "1",
//             highScore: 15,
//             totalScore: 30,
//             totalPlayTime: 0,
//             averageScore: 0,
//             singleRank: 0,
//             totalRank: 3,
//             Unlocks: []
//         },
//         {
//             name: "2",
//             highScore: 10,
//             totalScore: 20,
//             totalPlayTime: 0,
//             averageScore: 0,
//             singleRank: 1,
//             totalRank: 3,
//             Unlocks: []
//         },
//         {
//             name: "3",
//             highScore: 5,
//             totalScore: 10,
//             totalPlayTime: 0,
//             averageScore: 0,
//             singleRank: 2,
//             totalRank: 3,
//             Unlocks: []
//         }
//     ],
//     save: {},
//     profile: []
// };
// dataJSON = JSON.stringify(data);
// localStorage.setItem("gameData", dataJSON);


// dataLoaded  = localStorage.getItem("gameData");
// data = JSON.parse(dataLoaded);

$(function() {
	$( ".box" ).draggable();
});