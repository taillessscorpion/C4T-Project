function bgbuttonhover() {
    bgbutton.classList.replace("fButtonnone", "fButtonhover");
    bgbutton.removeEventListener("mouseenter", bgbuttonhover);
    bgbutton.addEventListener("mouseleave", bgbuttonout);
    bgbutton.addEventListener("click", bgbuttonactive);
    bgbutton.addEventListener("click", modalcontrols);
}
function bgbuttonout() {
    bgbutton.classList.replace("fButtonhover", "fButtonnone");
    bgbutton.addEventListener("mouseenter", bgbuttonhover);
    bgbutton.removeEventListener("mouseleave", bgbuttonout);
    bgbutton.removeEventListener("click", bgbuttonactive);
    bgbutton.removeEventListener("click", modalcontrols);
}
function bgbuttonactive() {
    bgbutton.classList.replace("fButtonhover", "fButtonactive");
    modalguide.classList.replace("modal-hide", "modalG-active");
    if (fakemodalguide.classList.length < 2) {fakemodalguide.classList.add("guideActiveAnimation");}
    else {fakemodalguide.classList.replace("guideInactiveAnimation", "guideActiveAnimation");};
    ggbutton.classList.add("tag-rotate180");
    bgbutton.removeEventListener("mouseleave", bgbuttonout);
    bgbutton.removeEventListener("click", bgbuttonactive);
    bgbutton.addEventListener("click", bgbuttoninactive);
    bhsbutton.removeEventListener("mouseenter", bhsbuttonhover);
    bunlbutton.removeEventListener("mouseenter", bunlbuttonhover);
    bsetbutton.removeEventListener("mouseenter", bsetbuttonhover);
    ggbutton.src = "icon/guideReflex.png";
}
function bgbuttoninactive() {
    bgbutton.classList.replace("fButtonactive", "fButtonhover");
    modalguide.classList.replace("modalG-active", "modal-hide");
    fakemodalguide.classList.replace("guideActiveAnimation", "guideInactiveAnimation");
    ggbutton.classList.remove("tag-rotate180");
    bgbutton.removeEventListener("click", bgbuttoninactive);
    bgbutton.addEventListener("mouseleave", bgbuttonout);
    bgbutton.addEventListener("click", bgbuttonactive);
    bhsbutton.addEventListener("mouseenter", bhsbuttonhover);
    bunlbutton.addEventListener("mouseenter", bunlbuttonhover);
    bsetbutton.addEventListener("mouseenter", bsetbuttonhover);
    ggbutton.src = "icon/guide.png";
}
function bhsbuttonhover() {
    bhsbutton.classList.replace("fButtonnone", "fButtonhover");
    bhsbutton.removeEventListener("mouseenter", bhsbuttonhover);
    bhsbutton.addEventListener("mouseleave", bhsbuttonout);
    bhsbutton.addEventListener("mousedown", bhsbuttonactive);
}
function bhsbuttonout() {
    bhsbutton.classList.replace("fButtonhover", "fButtonnone");
    bhsbutton.addEventListener("mouseenter", bhsbuttonhover);
    bhsbutton.removeEventListener("mouseleave", bhsbuttonout);
    bhsbutton.removeEventListener("mousedown", bhsbuttonactive);
}
function bhsbuttonactive() {
    bhsbutton.classList.replace("fButtonhover", "fButtonactive");
    modalhighscore.classList.replace("modal-hide", "modalH-active");
    if (fakemodalhighscore.classList.length < 2) {fakemodalhighscore.classList.add("highscoreActiveAnimation");}
    else {fakemodalhighscore.classList.replace("highscoreInactiveAnimation", "highscoreActiveAnimation");};
    bhsbutton.removeEventListener("mouseleave", bhsbuttonout);
    bhsbutton.removeEventListener("mousedown", bhsbuttonactive);
    bhsbutton.addEventListener("mousedown", bhsbuttoninactive);
    bgbutton.removeEventListener("mouseenter", bgbuttonhover);
    bunlbutton.removeEventListener("mouseenter", bunlbuttonhover);
    bsetbutton.removeEventListener("mouseenter", bsetbuttonhover);
}
function bhsbuttoninactive() {
    bhsbutton.classList.replace("fButtonactive", "fButtonhover");
    modalhighscore.classList.replace("modalH-active", "modal-hide");
    fakemodalhighscore.classList.replace("highscoreActiveAnimation", "highscoreInactiveAnimation");
    bhsbutton.removeEventListener("mousedown", bhsbuttoninactive);
    bhsbutton.addEventListener("mouseleave", bhsbuttonout);
    bhsbutton.addEventListener("mousedown", bhsbuttonactive);
    bgbutton.addEventListener("mouseenter", bgbuttonhover);
    bunlbutton.addEventListener("mouseenter", bunlbuttonhover);
    bsetbutton.addEventListener("mouseenter", bsetbuttonhover);
}
function bunlbuttonhover() {
    bunlbutton.classList.replace("fButtonnone", "fButtonhover");
    bunlbutton.removeEventListener("mouseenter", bunlbuttonhover);
    bunlbutton.addEventListener("mouseleave", bunlbuttonout);
    bunlbutton.addEventListener("mousedown", bunlbuttonactive);
}
function bunlbuttonout() {
    bunlbutton.classList.replace("fButtonhover", "fButtonnone");
    bunlbutton.addEventListener("mouseenter", bunlbuttonhover);
    bunlbutton.removeEventListener("mouseleave", bunlbuttonout);
    bunlbutton.removeEventListener("mousedown", bunlbuttonactive);
}
function bunlbuttonactive() {
    bunlbutton.classList.replace("fButtonhover", "fButtonactive");
    modalunlock.classList.replace("modal-hide", "modalU-active");
    if (fakemodalunlock.classList.length < 2) {fakemodalunlock.classList.add("unlockActiveAnimation");}
    else {fakemodalunlock.classList.replace("unlockInactiveAnimation", "unlockActiveAnimation");};
    bunlbutton.removeEventListener("mouseleave", bunlbuttonout);
    bunlbutton.removeEventListener("mousedown", bunlbuttonactive);
    bunlbutton.addEventListener("mousedown", bunlbuttoninactive);
    bgbutton.removeEventListener("mouseenter", bgbuttonhover);
    bhsbutton.removeEventListener("mouseenter", bhsbuttonhover);
    bsetbutton.removeEventListener("mouseenter", bsetbuttonhover);
    unlbutton.src = "icon/unlock.png";
    unlbuttonF.src = "icon/lock.png";
}
function bunlbuttoninactive() {
    bunlbutton.classList.replace("fButtonactive", "fButtonhover");
    modalunlock.classList.replace("modalU-active", "modal-hide");
    fakemodalunlock.classList.replace("unlockActiveAnimation", "unlockInactiveAnimation");
    bunlbutton.removeEventListener("mousedown", bunlbuttoninactive);
    bunlbutton.addEventListener("mouseleave", bunlbuttonout);
    bunlbutton.addEventListener("mousedown", bunlbuttonactive);
    bgbutton.addEventListener("mouseenter", bgbuttonhover);
    bhsbutton.addEventListener("mouseenter", bhsbuttonhover);
    bsetbutton.addEventListener("mouseenter", bsetbuttonhover);
    unlbutton.src = "icon/lock.png";
    unlbuttonF.src = "icon/unlock.png";
}
function bsetbuttonhover() {
    bsetbutton.classList.replace("fButtonnone", "fButtonhover");
    bsetbutton.removeEventListener("mouseenter", bsetbuttonhover);
    bsetbutton.addEventListener("mouseleave", bsetbuttonout);
    bsetbutton.addEventListener("click", bsetbuttonactive);
}
function bsetbuttonout() {
    bsetbutton.classList.replace("fButtonhover", "fButtonnone");
    bsetbutton.addEventListener("mouseenter", bsetbuttonhover);
    bsetbutton.removeEventListener("mouseleave", bsetbuttonout);
    bsetbutton.removeEventListener("click", bsetbuttonactive);
}
function bsetbuttonactive() {
    bsetbutton.classList.replace("fButtonhover", "fButtonactive");
    modalsetting.classList.replace("modal-hide", "modalS-active");
    if (fakemodalsetting.classList.length < 2) {fakemodalsetting.classList.add("settingActiveAnimation");}
    else {fakemodalsetting.classList.replace("settingInactiveAnimation", "settingActiveAnimation");};
    bsetbutton.removeEventListener("mouseleave", bsetbuttonout);
    bsetbutton.removeEventListener("click", bsetbuttonactive);
    bsetbutton.addEventListener("click", bsetbuttoninactive);
    bgbutton.removeEventListener("mouseenter", bgbuttonhover);
    bhsbutton.removeEventListener("mouseenter", bhsbuttonhover);
    bunlbutton.removeEventListener("mouseenter", bunlbuttonhover);
    function bsetbuttonactiveLang() {
        contentCheckLang(paraph[0], "Cursor effect", "Hiệu ứng trỏ chuột");
        contentCheckLang(paraph[1], "Congratulation effect", "Hiệu ứng chiến thắng");
        contentCheckLang(paraph[2], "Background effect", "Hiệu ứng nền");
        contentCheckLang(paraph[3], "Game language", "Ngôn ngữ");
        contentCheckLang(paraph[4], "Save game", "Lưu bảo vệ");
        if(languageBtn.checked == true) {
            checkBox[0].dataset.on = "On";
            checkBox[0].dataset.off = "Off";
            checkBox[1].dataset.on = "On";
            checkBox[1].dataset.off = "Off";
            checkBox[2].dataset.on = "On";
            checkBox[2].dataset.off = "Off";
            checkBox[4].dataset.on = "Auto";
            checkBox[4].dataset.off = "Non";

        }
        else {
            checkBox[0].dataset.on = "Bật";
            checkBox[0].dataset.off = "Tắt";
            checkBox[1].dataset.on = "Bật";
            checkBox[1].dataset.off = "Tắt";
            checkBox[2].dataset.on = "Bật";
            checkBox[2].dataset.off = "Tăt";
            checkBox[4].dataset.on = "Tự động";
            checkBox[4].dataset.off = "Không dùng";
        };
    }
    bsetbuttonactiveLang();
    languageBtn.addEventListener("click", bsetbuttonactiveLang);
}
function bsetbuttoninactive() {
    bsetbutton.classList.replace("fButtonactive", "fButtonhover");
    modalsetting.classList.replace("modalS-active", "modal-hide");
    fakemodalsetting.classList.replace("settingActiveAnimation", "settingInactiveAnimation");
    bsetbutton.removeEventListener("click", bsetbuttoninactive);
    bsetbutton.addEventListener("mouseleave", bsetbuttonout);
    bsetbutton.addEventListener("click", bsetbuttonactive);
    bgbutton.addEventListener("mouseenter", bgbuttonhover);
    bhsbutton.addEventListener("mouseenter", bhsbuttonhover);
    bunlbutton.addEventListener("mouseenter", bunlbuttonhover);
}
function bsvolumeHover() {
    bsvolume.removeEventListener("mouseenter", bsvolumeHover);
    bsvolume.addEventListener("mouseleave", bsvolumeOut);
    bsvolume.addEventListener("mousedown", bsvolumeActive);
    recentsvolume.classList.remove("showvolumeNone");
    recentsvolume.classList.remove("showvolumeActive");
    recentsvolume.classList.add("showvolumeHover");
}
function bsvolumeOut() {
    bsvolume.removeEventListener("mouseleave", bsvolumeOut);
    bsvolume.removeEventListener("mousedown", bsvolumeActive);
    bsvolume.addEventListener("mouseenter", bsvolumeHover);
    recentsvolume.classList.remove("showvolumeHover");
    recentsvolume.classList.remove("showvolumeActive");
    recentsvolume.classList.add("showvolumeNone");
}
function bsvolumeActive() {
    bsvolume.removeEventListener("mouseenter", bsvolumeHover);
    bsvolume.addEventListener("mouseleave", bsvolumeOut);
    bsvolume.addEventListener("mouseup", bsvolumeHover);
    recentsvolume.classList.remove("showvolumeNone");
    recentsvolume.classList.remove("showvolumeHover");
    recentsvolume.classList.add("showvolumeActive");
}
function bmvolumeHover() {
    bmvolume.removeEventListener("mouseenter", bmvolumeHover);
    bmvolume.addEventListener("mouseleave", bmvolumeOut);
    bmvolume.addEventListener("mousedown", bmvolumeActive);
    recentmvolume.classList.remove("showvolumeNone");
    recentmvolume.classList.remove("showvolumeActive");
    recentmvolume.classList.add("showvolumeHover");
}
function bmvolumeOut() {
    bmvolume.removeEventListener("mouseleave", bmvolumeOut);
    bmvolume.removeEventListener("mousedown", bmvolumeActive);
    bmvolume.addEventListener("mouseenter", bmvolumeHover);
    recentmvolume.classList.remove("showvolumeHover");
    recentmvolume.classList.remove("showvolumeActive");
    recentmvolume.classList.add("showvolumeNone");
}
function bmvolumeActive() {
    bmvolume.removeEventListener("mouseenter", bmvolumeHover);
    bmvolume.addEventListener("mouseleave", bmvolumeOut);
    bmvolume.addEventListener("mouseup", bmvolumeHover);
    recentmvolume.classList.remove("showvolumeNone");
    recentmvolume.classList.remove("showvolumeHover");
    recentmvolume.classList.add("showvolumeActive");
}

bgbutton.addEventListener("mouseenter", bgbuttonhover);
bhsbutton.addEventListener("mouseenter", bhsbuttonhover);
bunlbutton.addEventListener("mouseenter", bunlbuttonhover);
bsetbutton.addEventListener("mouseenter", bsetbuttonhover);
bsvolume.addEventListener("mouseenter", bsvolumeHover);
bmvolume.addEventListener("mouseenter", bmvolumeHover);


var cursorEffectBtn = document.getElementById("cursorEffectBtn");
var congratEffectBtn = document.getElementById("congratEffectBtn");
var backgroundEffectBtn = document.getElementById("backgroundEffectBtn");
var languageBtn = document.getElementById("languageBtn");
var saveGameBtn = document.getElementById("saveGameBtn");
function checkCursorEffect() {
    if(cursorEffectBtn.checked == true) {cursorEffectActive();}
    else {cursorEffectInactive();}
}
checkCursorEffect();
cursorEffectBtn.addEventListener("click", checkCursorEffect);
function setWinCongrats() {
    if(score < 15) {clickColorWin = "rgb(200, 200, 200)";}
    else {
        if(classkey == "bgcolorW") {clickColorWin = "rgb(255, 245, 100)";}
        else if(classkey == "bgcolorR") {clickColorWin = "rgb(255, 0, 0)";}
        else if(classkey == "bgcolorG") {clickColorWin = "rgb(0, 255, 0)";}
        else if(classkey == "bgcolorB") {clickColorWin = "rgb(0, 0, 255)";};
    }
    return(clickColorWin);
}
function checkCongratEffect(index) {
    if (congratEffectBtn.checked == true) {fakeBody.classList.replace("congratEffectInactive", "congratEffectActive" );}
    else {fakeBody.classList.replace("congratEffectActive", "congratEffectInactive" );};
    if (index == 0) {fakeBody.classList.replace("congratEffectActive", "congratEffectInactive" );};
}
// // Main.js will call it when they're defined the game is playing

function convertToHex(rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
            hex = "0" + hex;
    }
    return hex;
};
function setStageBackgroundN() {
    if (score == 0) {
        bgColorStageIndex = convertToHex(150);
        bgColorStage = "#0000" + bgColorStageIndex;
    }
    else if(score < 50) {
        bgColorStageIndex = convertToHex(150 - 3*score);
        bgColorStage = "#0000" + bgColorStageIndex;
    }
    else if(score < 120) {
        bgColorStageIndex = convertToHex(2.1*(score-50));
        bgColorStage = "#" + bgColorStageIndex +"0000";
    }
    else if(score < 200) {
        bgColorStageIndex = convertToHex(150 - 1.85*(score-120));
        bgColorStage = "#" + bgColorStageIndex +"0000";
    }
    else {
        bgColorStage = "#000000";
    };
    return(bgColorStage);
}
function setStageBackgroundE() {
    if (score == 0) {
        bgColorStageIndex = convertToHex(255);
        bgColorStage = "#0000" + bgColorStageIndex;
    }
    else if(score < 50) {
        bgColorStageIndex = convertToHex(Math.floor(255 - 5.1*score));
        bgColorStage = "#0000" + bgColorStageIndex;
    }
    else if(score < 120) {
        bgColorStageIndex = convertToHex(Math.floor(3.64*(score-50)));
        bgColorStage = "#" + bgColorStageIndex +"0000";
    }
    else if(score < 200) {
        bgColorStageIndex = convertToHex(Math.floor(255 - 3.18*(score-120)));
        bgColorStage = "#" + bgColorStageIndex +"0000";
    }
    else {
        bgColorStage = "#000000";
    };
    return(bgColorStage);
}
function setOldStageBackground() {
    if (score == 0) {
        bgOldColorStage = "#000000";
    }
    else if(score < 50) {
        bgColorStageIndex = convertToHex(Math.floor(255 - 5.1*(score-1)));
        bgOldColorStage = "#0000" + bgColorStageIndex;
    }
    else if(score < 120) {
        bgColorStageIndex = convertToHex(Math.floor(3.64*(score-51)));
        bgOldColorStage = "#" + bgColorStageIndex +"0000";
    }
    else if(score < 200) {
        bgColorStageIndex = convertToHex(Math.floor(255 - 3.18*(score-121)));
        bgOldColorStage = "#" + bgColorStageIndex +"0000";
    }
    else {
        bgColorStageIndex = convertToHex(200);
        bgOldColorStage = "#" + bgColorStageIndex +"0000";
    };
    return(bgOldColorStage);
}

function checkBgPlayEffect() {
    body.style.background = bgOldColorStage;
    clearTimeout(setTimeDoneEffct);
    body.className = "BgPlayingA";
    if (backgroundEffectBtn.checked == true) {
        bgColorStage = setStageBackgroundE();
        bgOldColorStage = setOldStageBackground();
        body.style.background = "linear-gradient(to bottom, "+bgColorStage+", #ffffff, "+bgOldColorStage+")";
    }
    else {
        bgColorStage = setStageBackgroundN();
        body.style.background = bgColorStage;
    };
    body.style.backgroundSize = "100vw 600vh";
    setTimeDoneEffct = setTimeout(function() {
        body.className = "BgPlaying";
        body.style.background = bgColorStage;
    }, 1000);
}

function checkBgPauseEffect() {
    if (backgroundEffectBtn.checked == true) {body.className = "BgWaitingE";}
    else {body.className = "BgWaitingN";};
}
function contentCheckLang(Content, engContent, vietContent) {
    if(languageBtn.checked == true) {Content.textContent = engContent;}
    else {Content.textContent = vietContent;};
}
function voiceCheckLang(engContent, vietContent) {
    if(languageBtn.checked == true) {responsiveVoice.speak(engContent, "US English Female", {pitch: 1.5, rate: 0.95, volume: 1});}
    else {responsiveVoice.speak(vietContent, "Vietnamese Female", {pitch: 1.5, rate: 0.95, volume: 1});};
}