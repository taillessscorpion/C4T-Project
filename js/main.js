// MUSIC AND SOUND
    // LOAD AND PLAY
function playsound(whichsound) {
    whichsound.load();
    whichsound.play();
}
function pausesound() {
    if(playedalready == 1) {timerunout.pause();}
    playedalready = 1;
}
function pptimerun(index) {
    if (timeleft <= 17) {
        if(index == 0) {timerunout.pause();}
        else if(index == 1) {timerunout.play();};
    };
}
function playmusic(whichmusic) {
    whichmusic.load();
    whichmusic.play();
    whichmusic.loop = true;
}
function ppmusic(whichmusic, index) {
    if (index == 0) {playmusic(whichmusic);}
    else {whichmusic.pause();};
}
function musicstage(index) {
    if (score >= 0 && score < 15) {ppmusic(stage1, index);}
    else if (score >= 15 && score < 25) {ppmusic(stage1); ppmusic(stage2, index);}
    else if (score >= 25 && score < 50) {ppmusic(stage2); ppmusic(stage3, index);}
    else if (score >= 50 && score < 85) {ppmusic(stage3); ppmusic(stage4, index);}
    else if (score >= 85 && score < 120) {ppmusic(stage4); ppmusic(stage5, index);}
    else if (score >= 120 && score < 175) {ppmusic(stage5); ppmusic(stage6, index);}
    else if (score >= 175) {ppmusic(stage6); ppmusic(stage7, index);};
}
function stopmusicstage() {
    if (score >= 0 && score < 15) {ppmusic(stage1);}
    else if (score >= 15 && score < 25) {ppmusic(stage2);}
    else if (score >= 25 && score < 50) {ppmusic(stage3);}
    else if (score >= 50 && score < 85) {ppmusic(stage4);}
    else if (score >= 85 && score < 120) {ppmusic(stage5);}
    else if (score >= 120 && score < 175) {ppmusic(stage6);}
    else if (score >= 175) {ppmusic(stage7);};
}

    // VOLUME

function volumechange() {
    clickwin.volume = soundvolumeIn;
    clicklose.volume = soundvolumeIn;
    clickunlock.volume = soundvolumeIn;
    timerunout.volume = soundvolumeIn;
    voicevolume = soundvolumeIn;
    firststart.volume = musicvolumeIn;
    nextstart1.volume = musicvolumeIn;
    nextstart2.volume = musicvolumeIn;
    pause1.volume = musicvolumeIn;
    pause2.volume = musicvolumeIn;
    pause3.volume = musicvolumeIn;
    pause4.volume = musicvolumeIn;
    pause5.volume = musicvolumeIn;
    pause6.volume = musicvolumeIn;
    stage1.volume = musicvolumeIn;
    stage2.volume = musicvolumeIn;
    stage3.volume = musicvolumeIn;
    stage4.volume = musicvolumeIn;
    stage5.volume = musicvolumeIn;
    stage6.volume = musicvolumeIn;
    stage7.volume = musicvolumeIn;
    if(soundvolumeIn == 0) {soundvolume.src = "icon/sound0.png";}
    else if(soundvolumeIn <= 0.25) {soundvolume.src = "icon/sound1.png";}
    else if(soundvolumeIn <= 0.5) {soundvolume.src = "icon/sound2.png";}
    else if(soundvolumeIn <= 0.75) {soundvolume.src = "icon/sound3.png";}
    else if(soundvolumeIn <= 1) {soundvolume.src = "icon/sound4.png";};
    if(musicvolumeIn == 0) {musicvolume.src = "icon/music0.png";}
    else if(musicvolumeIn <= 0.25) {musicvolume.src = "icon/music1.png";}
    else if(musicvolumeIn <= 0.5) {musicvolume.src = "icon/music2.png";}
    else if(musicvolumeIn <= 0.75) {musicvolume.src = "icon/music3.png";}
    else if(musicvolumeIn <= 1) {musicvolume.src = "icon/music4.png";};
}
function soundsetting(index) {
    if(index == 1) {
        if(diffY <= 5) {
            soundvolumeIn += diffY*0.015;
        }
        else if(diffY <= 10) {
            soundvolumeIn += diffY*0.01;
        }
        else {
            soundvolumeIn += 0.05;
        };
        if (soundvolumeIn >= 1) {soundvolumeIn = 1;};
    }
    else if(index == 0) {
            if(diffY <= 5) {
                soundvolumeIn -= diffY*0.015;
            }
            else if(diffY <= 10) {
                soundvolumeIn -= diffY*0.01;
            }
            else {
                soundvolumeIn -= 0.05;
            };
        if (soundvolumeIn <= 0) {soundvolumeIn = 0;};
    }
    volumechange();
    showsvolume.textContent = Math.floor(soundvolumeIn * 100);
}
function movesound(event){
    mousemove = 1;
    directionY = 0; 
    diffY = 0;
    if (event.pageY < oldY) {
        directionY = "top";
        diffY = oldY - event.pageY;
        soundsetting(1);
    } else if (event.pageY > oldY) {
        directionY = "bottom";
        diffY = event.pageY - oldY;
        soundsetting(0);
    }
    oldY = event.pageY;
}
function scrollsound(e) {
    if (e.wheelDeltaY < 0){
        soundvolumeIn += e.wheelDelta / 2400;
        if (soundvolumeIn <= 0) {soundvolumeIn = 0};
    }
    else if (e.wheelDeltaY > 0){
        soundvolumeIn += e.wheelDelta / 2400;
        if (soundvolumeIn >= 1) {soundvolumeIn = 1};
    };
    volumechange();
    showsvolume.textContent = Math.floor(soundvolumeIn * 100);
    bsvolumve.addEventListener("mousedown", downsound);
}
function leavesound() {
    bsvolume.removeEventListener("mouseleave", leavesound);
    bsvolume.removeEventListener("mousemove", movesound);
    bsvolume.removeEventListener("mouseup", upsound);
    bsvolume.removeEventListener("mousedown", downsound);
    bsvolume.removeEventListener("wheel", scrollsound);
    bsvolume.addEventListener("mouseenter", entersound);
}
function upsound() {
    if(mousemove == 0) {
        if(soundvolumeIn != 0) {
            resoundvolume = soundvolumeIn;
            soundvolumeIn = 0;
        }
        else {
            soundvolumeIn = resoundvolume;
        };
    };
    volumechange();
    showsvolume.textContent = Math.floor(soundvolumeIn * 100);
    bsvolume.removeEventListener("mouseup", upsound);
    bsvolume.removeEventListener("mousemove", movesound);
    bsvolumve.addEventListener("wheel", scrollsound);
    bsvolume.addEventListener("mousedown", downsound);
}
function downsound() {
    mousemove = 0;
    bsvolumve.removeEventListener("wheel", scrollsound);
    bsvolume.removeEventListener("mousedown", downsound);
    bsvolume.addEventListener("mousemove", movesound);
    bsvolume.addEventListener("mouseup", upsound);
}
function entersound() {
    bsvolumve.removeEventListener("mouseenter", entersound);
    bsvolumve.addEventListener("mousedown", downsound);
    bsvolumve.addEventListener("mouseleave", leavesound);
    bsvolumve.addEventListener("wheel", scrollsound);
}
function musicsetting(index) {
    if(index == 1) {
        if(musicvolumeIn < 0.9) {
            if(diffY <= 5) {
                musicvolumeIn += diffY*0.015;
            }
            else if(diffY <= 10) {
                musicvolumeIn += diffY*0.01;
            }
            else {
                musicvolumeIn += 0.05;
            };
        }
        else {
            musicvolumeIn = 1;
        };
    }
    else if(index == 0) {
        if(musicvolumeIn > 0.1) {
            if(diffY <= 5) {
                musicvolumeIn -= diffY*0.015;
            }
            else if(diffY <= 10) {
                musicvolumeIn -= diffY*0.01;
            }
            else {
                musicvolumeIn -= 0.05;
            };
        }
        else {
            musicvolumeIn = 0;
        };
    }
    volumechange();
    showmvolume.textContent = Math.floor(musicvolumeIn * 100);
}
function movemusic(event){
    mousemove = 1;
    directionY = 0; 
    diffY = 0;
    if (event.pageY < oldY) {
        directionY = "top"
        diffY = oldY - event.pageY;
        musicsetting(1);
    } else if (event.pageY > oldY) {
        directionY = "bottom";
        diffY = event.pageY - oldY;
        musicsetting(0);
    }
    oldY = event.pageY;
}
function scrollmusic(e) {
    if (e.wheelDeltaY < 0){
        musicvolumeIn += e.wheelDelta / 2400;
        if (musicvolumeIn <= 0) {musicvolumeIn = 0};
    }
    else if (e.wheelDeltaY > 0){
        musicvolumeIn += e.wheelDelta / 2400;
        if (musicvolumeIn >= 1) {musicvolumeIn = 1};
    };
    volumechange();
    showmvolume.textContent = Math.floor(musicvolumeIn * 100);
    bmvolumve.addEventListener("mousedown", downmusic);
}
function leavemusic() {
    bmvolume.removeEventListener("mouseleave", leavemusic);
    bmvolume.removeEventListener("mousemove", movemusic);
    bmvolume.removeEventListener("mouseup", upmusic);
    bmvolumve.removeEventListener("mousedown", downmusic);
    bmvolumve.removeEventListener("wheel", scrollmusic);
    bmvolumve.addEventListener("mouseenter", entermusic);
}
function upmusic() {
    if(mousemove == 0) {
        if(musicvolumeIn != 0) {
            remusicvolume = musicvolumeIn;
            musicvolumeIn = 0;
        }
        else {
            musicvolumeIn = remusicvolume;
        };
    };
    volumechange();
    showmvolume.textContent = Math.floor(musicvolumeIn * 100);
    bmvolumve.removeEventListener("mouseup", upmusic);
    bmvolumve.removeEventListener("mousemove", movemusic);
    bmvolumve.addEventListener("wheel", scrollmusic);
    bmvolumve.addEventListener("mousedown", downmusic);
}
function downmusic() {
    mousemove = 0;
    bmvolumve.removeEventListener("wheel", scrollmusic);
    bmvolumve.removeEventListener("mousedown", downmusic);
    bmvolume.addEventListener("mousemove", movemusic);
    bmvolume.addEventListener("mouseup", upmusic);
}
function entermusic() {
    bmvolumve.removeEventListener("mouseenter", entermusic);
    bmvolumve.addEventListener("mousedown", downmusic);
    bmvolumve.addEventListener("mouseleave", leavemusic);
    bmvolumve.addEventListener("wheel", scrollmusic);
}

// PREPARE

function prepare(whichtop, whichbot) {
    commands.textContent = "";
    commands.classList.remove("alignmid");
    topcommand = `<div class="margintop60px" id="topcom">${whichtop}</div>`;
    botcommand = `<div class="marginbot60px" id="botcom">${whichbot}</div>`;
    commands.insertAdjacentHTML("beforeend", topcommand);
    commands.insertAdjacentHTML("beforeend", botcommand);
}
function getcomment(list, commentIndex) {
    if (list != unlocks) {commentIndex = Math.floor(Math.random() * list.length);};
    comments.textContent = list[commentIndex];
    if (list == unlocks) {responsiveVoice.speak("New unlocked " + comments.textContent, "US English Female", {pitch: 1.2, rate: 0.95, volume: voicevolume});}
    else {responsiveVoice.speak(comments.textContent, "US English Female", {pitch: 1.2, rate: 0.95, volume: voicevolume});};
    if (list != timelose && list != choicelose) {
        if (list == unlocks) {putTimeOut(4000);}
        else {putTimeOut(1500);};
    };
}
function getwincmt() {
    if (score == 1) {getcomment(unlocks, 0); playsound(clickunlock);}
    else if (score == 5) {getcomment(unlocks, 1); playsound(clickunlock);}
    else if (score == 15) {getcomment(unlocks, 2); playsound(clickunlock);}
    else if (score == 50) {getcomment(unlocks, 3); playsound(clickunlock);}
    else if (score == 85) {getcomment(unlocks, 4); playsound(clickunlock);}
    else if (score == 120) {getcomment(unlocks, 5); playsound(clickunlock);}
    else if (score == 150) {getcomment(unlocks, 6); playsound(clickunlock);}
    else if (score == 200) {getcomment(unlocks, 7); playsound(clickunlock);}
    else {
        if (timeleft > timeplay*0.55) {getcomment(muchtime);}
        else if (timeleft > timeplay*0.25) {getcomment(fittingtime);}
        else if (timeleft > timeplay*0.125) {getcomment(fewtime);}
        else {getcomment(poortime);};
        playsound(clickwin);
    };
}
function clearcmt() {
    comments.textContent = "";
}
function putTimeOut(milisecond) {
    timeshowset = setTimeout(clearcmt, milisecond);;
}

// START

function startgame() {
    playornot = 0;
    swapornot = 0;
    score = 0;
    playtime += 1;
    commands.classList.remove("truth");
    commands.classList.remove("fake");
    commands.classList.add("stop");
    STARTupdateProfile();
    nameArea.className = "hideArea";
    startUnlocks();
    clearTimeout(delayRename);
    clearcmt();
    function startgameLang() {
        contentCheckLang(point, "SCORE: " + score, "ĐIỂM: " + score);
        if(languageBtn.checked == true) {
            playscreen = "CLICK TO PLAY";
            pausescreen = "Click again to pause";
        }
        else {
            playscreen = "NHẤP ĐỂ CHƠI";
            pausescreen = "Nhấp lại để dừng";
        };
        prepare(playscreen, pausescreen);
    };
    startgameLang();
    languageBtn.addEventListener("click", startgameLang);
}



// SET UP
function transColorLang(whichcolor) {
    if(whichcolo == "RED") {return("ĐỎ");}
    else if(whichcolo == "BLUE") {return("LAM");}
    else if(whichcolo == "GREEN") {return("LỤC");}
    else if(whichcolo == "WHITE") {return("TRẮNG");};
}
function setupI1(where) {
    commands.classList.add("alignmid");
    key = document.getElementById(where);
    commands.textContent = key.textContent;
    gameplay(moveEnterI1);
}
function setupI2(where) {
    commands.classList.add("alignmid");
    key = document.getElementById(where);
    function setupI2Lang() {
        contentCheckLang(commands, "NOT " + key.textContent, "KHÔNG " + key.textContent);
    };
    setupI2Lang();
    languageBtn.addEventListener("click", setupI2Lang);
    gameplay(moveEnterI2);
}

function setupII1(where, whichcolor, whichclass) {
    if (playornot == 2) {wherechoice = Math.random();};
    key = document.getElementById(where);
    if (swapornot == 1) {takebyid();}
    else {btncont();};
    classkey = whichclass;
    if (wherechoice < 0.5) {
        function setupII11Lang() {
            if(languageBtn.checked == true) {
                var top = "DO " + key.textContent;
                var bot = "BUT " + whichcolor;
                
            }
            else {
                var top = "CHỌN " + key.textContent;
                var bot = "VÀ " + transColorLang(whichcolor);
            };
            prepare(top, bot);
        };
        setupII11Lang();
        languageBtn.addEventListener("click", setupII11Lang);
        
    }
    else {
        function setupII12Lang() {
            if(languageBtn.checked == true) {
                var top = "NOT " + key.textContent;
                var bot = "BUT " + whichcolor;
            }
            else {
                var top = "KHÔNG " + key.textContent;
                var bot = "NHƯNG " + transColorLang(whichcolor);
            };
            prepare(top, bot);
        };
        setupII12Lang();
        languageBtn.addEventListener("click", setupII12Lang);
    }
    if (truthorfake < 0.5) {gameplay(moveEnterII1);}
    else {gameplay(moveEnterII2);}
    
}
function setupII2(where, whichcolor, whichclass) {
    if (playornot == 2) {wherechoice = Math.random();};
    key = document.getElementById(where);
    if (swapornot == 1) {takebyid();}
    else {btncont();};
    classkey = whichclass;
    if (wherechoice < 0.5) {
        function setupII21Lang() {
            if(languageBtn.checked == true) {
                var top = "DO " + key.textContent;
                var bot = "NOT " + whichcolor;
            }
            else {
                var top = "CHỌN " + key.textContent;
                var bot = "KHÔNG " + transColorLang(whichcolor);
            };
            prepare(top, bot);
        };
        setupII21Lang();
        languageBtn.addEventListener("click", setupII21Lang);
    }
    else {
        function setupII22Lang() {
            if(languageBtn.checked == true) {
                var top = "NOT " + key.textContent;
                var bot = "NOT " + whichcolor;
            }
            else {
                var top = "KHÔNG " + key.textContent;
                var bot = "KHÔNG " + transColorLang(whichcolor);
            };
            prepare(top, bot);
        };
        setupII22Lang();
        languageBtn.addEventListener("click", setupII22Lang);
    }
    if (truthorfake < 0.5) {gameplay(moveEnterII2);}
    else {gameplay(moveEnterII1);}
}


    // ADD COLOR

        // SET COLOR
function paintcolor(which, where) {
    if (which == 0) {where.classList.add("bgcolorR");}
    else if (which == 1) {where.classList.add("bgcolorG");}
    else if (which == 2) {where.classList.add("bgcolorB");}
    else if (which == 3){where.classList.add("bgcolorW");}
}
function setcolor() {
    if (playornot == 2) {
        color1 = Math.floor(Math.random() * 4);
        while (true) {
            color2 = Math.floor(Math.random() * 4);
            if (color2 != color1) {break;};
        }
        while(true) {
            color3 = Math.floor(Math.random() * 4);
            if (color3 != color1 && color3 != color2) {break;};
        }
        while(true) {
            color4 = Math.floor(Math.random() * 4);
            if (color4 != color1 && color4 != color2 && color4 != color3) {break;};
        }
    };
    paintcolor(color1, up);
    paintcolor(color2, right);
    paintcolor(color3, down);
    paintcolor(color4, left);
}

        // CHANGE COLOR
function checkcolor(colorcheck, where) {
    while (true) {
        var colorchecker = where.classList.contains("bgcolorR");
        if (colorchecker == true) {colorcheck = "bgcolorR"; return colorcheck;};
        colorchecker = where.classList.contains("bgcolorG");
        if (colorchecker == true) {colorcheck = "bgcolorG"; return colorcheck;};
        colorchecker = where.classList.contains("bgcolorB");
        if (colorchecker == true) {colorcheck = "bgcolorB"; return colorcheck;}
        else {colorcheck = "bgcolorW"; return colorcheck;};
    }
}
function repaintcolor(which) {
    recentUc = checkcolor(recentUc, up);
    recentRc = checkcolor(recentRc, right);
    recentDc = checkcolor(recentDc, down);
    recentLc = checkcolor(recentLc, left);
    if(which == 0) {
        up.classList.replace(recentUc, recentLc);
        right.classList.replace(recentRc, recentUc);
        down.classList.replace(recentDc, recentRc);
        left.classList.replace(recentLc, recentDc);
    }
    else if(which == 1) {
        up.classList.replace(recentUc, recentRc);
        right.classList.replace(recentRc, recentDc);
        down.classList.replace(recentDc, recentLc);
        left.classList.replace(recentLc, recentUc);
    };
}
function wheelscroll(event) {
    if (event.deltaY < 0){
        repaintcolor(0);
    }
    else if (event.deltaY > 0){
        repaintcolor(1);
    }
}

function clearcolor() {
    recentUc = checkcolor(recentUc, up);
    recentRc = checkcolor(recentRc, right);
    recentDc = checkcolor(recentDc, down);
    recentLc = checkcolor(recentLc, left);
    up.classList.remove(recentUc);
    right.classList.remove(recentRc);
    down.classList.remove(recentDc);
    left.classList.remove(recentLc);
}
    //SET BUTTON
function btncont() {
    function btncontLang() {
        contentCheckLang(up, "UP", "TRÊN");
        contentCheckLang(right, "RIGHT", "PHẢI");
        contentCheckLang(down, "DOWN", "DƯỚI");
        contentCheckLang(left, "LEFT", "TRÁI");
    };
    btncontLang();
    languageBtn.addEventListener("click", btncontLang);
}
    // SWAP BUTTON
function recontent(whichID, content) {
    if (content == 0) {contentCheckLang(whichID, "UP", "TRÊN");}
    else if (content == 1) {contentCheckLang(whichID, "RIGHT", "PHẢI");}
    else if (content == 2) {contentCheckLang(whichID, "DOWN", "DƯỚI");}
    else {contentCheckLang(whichID, "LEFT", "TRÁI");};
}
function takebyid() {
    contUP = Math.floor(Math.random()*4);
    while(true) {
        contRIGHT = Math.floor(Math.random()*4);
        if (contRIGHT != contUP) {break;};
    }
    while(true) {
        contDOWN = Math.floor(Math.random()*4);
        if (contDOWN != contUP && contDOWN != contRIGHT) {break;};
    }
    contLEFT = 6 - contUP - contRIGHT - contDOWN;
    recontent(up, contUP);
    recontent(right, contRIGHT);
    recontent(down, contDOWN);
    recontent(left, contLEFT);
}


// MAKE UP()
function makeupI(setupchoice) {
    commands.classList.add("truth");
    truthorfake = 0;
    if (playornot == 2) {choose = Math.random();};
    if (choose < 0.25) {setupchoice("up");}
    else if (choose < 0.5) {setupchoice("right");}
    else if (choose < 0.75) {setupchoice("down");}
    else if (choose <= 1) {setupchoice("left");};
}

function makeupII(setupchoice) {
    if (truthorfake < 0.5) {commands.classList.add("truth");}
    else {commands.classList.add("fake");};
    var where, whichcolor, whichclass;
    if (playornot == 2) {choose = Math.random();};
    if (choose < 0.25) {where = "up";}
    else if (choose < 0.5) {where = "right";}
    else if (choose < 0.75) {where = "down";}
    else if (choose <= 1) {where = "left";};
    if (playornot == 2) {colorchoose = Math.random();};
    if (colorchoose < 0.25) {whichcolor = "RED"; whichclass = "bgcolorR";}
    else if (colorchoose < 0.5) {whichcolor = "GREEN"; whichclass = "bgcolorG";}
    else if (colorchoose < 0.75) {whichcolor = "BLUE"; whichclass = "bgcolorB";}
    else if (colorchoose <= 1) {whichcolor = "WHITE"; whichclass = "bgcolorW";};
    clearcolor();
    setcolor();
    setupchoice(where, whichcolor, whichclass);
}



// AFTER SET

    // CHECK STAGE BY SCORE
function gamestage() {
    if (score < 5) {
        makeupI(setupI1);
        if (playornot == 2) {timeset(60);}
        else {timecountinue();};
    }
    else if (score < 15) {
        if (playornot == 2) {
            randomsetup = Math.random();
            timeset(60);
        }
        else {timecountinue();};
        if (randomsetup < 0.45) {makeupI(setupI1);}
        else {makeupI(setupI2);};
    }
    else if (score < 25) {
        truthorfake = 0;
        makeupII(setupII1);
        if (playornot == 2) {timeset(60);}
        else {timecountinue();};
    }
    else if (score < 50) {
        truthorfake = 0;
        if (playornot == 2) {
            randomsetup = Math.random();
            timeset(60);
        }
        else {timecountinue();};
        if (randomsetup < 0.5) {makeupII(setupII1);}
        else {makeupII(setupII2);};
    }
    else if (score < 85) {
        if (playornot == 2) {
            truthorfake = Math.random();
            randomsetup = Math.random();
            timeset(60);
        }
        else {timecountinue()};
        if (randomsetup < 0.5) {makeupII(setupII1);}
        else {makeupII(setupII2);};
    }
    else {
        if (playornot == 2) {
            swapornot = 1;
            truthorfake = Math.random();
            randomsetup = Math.random();
            if (score < 120) {timeset(60);}
            else if (score < 150) {timeset(50);}
            else if (score < 175) {timeset(45);}
            else if (score < 200) {timeset(42)}
            else {timeset(40)};
        }
        else {timecountinue()};
        if (randomsetup < 0.5) {makeupII(setupII1);}
        else {makeupII(setupII2);};
    };
}
    // SET CONGRATS

    // CHECK WIN OR LOSE
function Win(e) {
    score += 1;
    checkBgPlayEffect();
    positionClickWin = new Array();
    positionClickWin.x = e.pageX;
    positionClickWin.y = e.pageY;
    clickColorWin = setWinCongrats();
    AniClickWin(bgColorStage, bgOldColorStage, clickColorWin, positionClickWin);
    getwincmt();
    contentCheckLang(point, "SCORE: " + score, "ĐIỂM: " + score);
    if (truthorfake < 0.5) {commands.classList.remove("truth");}
    else {commands.classList.remove("fake");};
    pausesound();
    gamestage();
    musicstage(0);
    WINupdateProfile();
    startUnlocks();
    showUnlocks();
    showBrief();
}
function Lose(loseIndex) {
    clearTimeout(setTimeDoneEffct);
    stopplay();
    if (loseIndex == 0) {getcomment(timelose);}
    else {getcomment(choicelose); playsound(clicklose);};
    clearcolor();
    btncont();
    pausesound();
    musicloseRI = Math.floor(Math.random() * 2);
    if (musicloseRI == 0) {stopmusicstage(); musicloseRI = nextstart1;}
    else {stopmusicstage(); musicloseRI = nextstart2;};
    playmusic(musicloseRI);
    hideGameBtn();
    sun.addEventListener("click", showGameBtn);
    body.style.background = "black";
    checkCongratEffect(0);
    congratEffectBtn.removeEventListener("click", checkCongratEffect);
    bgStart();
    sun.addEventListener("click", startgame);
    LOSEupdateProfile();
    delayRename = setTimeout(rename, 500);
}
    // REMOVE EVENTLISTENER
function removeEL(moveEnterChoice) {
    up.removeEventListener("click", moveEnterChoice);
    right.removeEventListener("click", moveEnterChoice);
    down.removeEventListener("click", moveEnterChoice);
    left.removeEventListener("click", moveEnterChoice);
}

    // HOW TO CHECK
function moveEnterI1(e) {
    checkback = e.target;
    timeclear();
    removeEL(moveEnterI1);
    if (checkback == key) {Win(e);}
    else {Lose();};
}
function moveEnterI2(e) {
    checkback = e.target;
    timeclear();
    removeEL(moveEnterI2);
    if (checkback == key) {Lose();}
    else {Win(e);};
}
function moveEnterII1(e) {
    checkback = e.target;
    timeclear();
    removeEL(moveEnterII1);
    if (truthorfake < 0.5) {
        if (wherechoice < 0.5) {
            if (checkback == key) {
                if (checkback.classList.contains(classkey) == true) {Win(e);}
                else {Lose();};
            }
            else {Lose();};
        }
        else {
            if (checkback == key) {Lose();}
            else {
                if (checkback.classList.contains(classkey) == true) {Win(e);}
                else {Lose();};
            };
        };  
    }
    else {
        if (wherechoice < 0.5) {
            if (checkback == key) {Lose();}
            else {
                if (checkback.classList.contains(classkey) == true) {Win(e);}
                else {Lose();};
            };
        }
        else {
            if (checkback == key) {
                if (checkback.classList.contains(classkey) == true) {Win(e);}
                else {Lose();};
            }
            else {Lose();};
        };
    };
}
function moveEnterII2(e) {
    checkback = e.target;
    timeclear();
    removeEL(moveEnterII2);
    if (truthorfake < 0.5) {
        if (wherechoice < 0.5) {
            if (checkback == key) {
                if (checkback.classList.contains(classkey) == true) {Lose();}
                else {Win(e);};
            }
            else {Lose();};
        }
        else {
            if (checkback == key) {Lose();}
            else {
                if (checkback.classList.contains(classkey) == true) {Lose();}
                else {Win(e);};
            };
        };
    }
    else {
        if (wherechoice < 0.5) {
            if (checkback == key) {Lose();}
            else {
                if (checkback.classList.contains(classkey) == true) {Lose();}
                else {Win(e);};
            };
        }
        else {
            if (checkback == key) {
                if (checkback.classList.contains(classkey) == true) {Lose();}
                else {Win(e);};
            }
            else {Lose();};
        };
    };
    
}



    //GAMEPLAY
function gameplay(moveEnterChoice) {
    up.addEventListener("click", moveEnterChoice);
    right.addEventListener("click", moveEnterChoice);
    down.addEventListener("click", moveEnterChoice);
    left.addEventListener("click", moveEnterChoice);
}
// TIME
    // SHOW TIME COUNTDOWN BAR
    function offshowall() {
        document.getElementById("timecontainer").setAttribute("style", "background-color: rgb(255,255,255);");
        document.getElementById("timebar").setAttribute("style", "width:100%; background-color: rgb(255,255,255);");
    }
    function offshowapart() {
        document.getElementById("timecontainer").setAttribute("style", "background-color: rgb(255,255,255);");
        document.getElementById("timebar").setAttribute("style", "width:"+(timeleft*timeindex).toString()+"%; background-color: rgb(255,255,255);");
    }
    function showon(recolor) {
        document.getElementById("timecontainer").setAttribute("style", "background-color: rgb(255,"+(204+recolor/5)+","+(204+recolor/5)+");");
        document.getElementById("timebar").setAttribute("style", "width:"+(timeleft*timeindex).toString()+"%; background-color: rgb(255,"+(recolor*4/5)+","+(recolor*4/5)+");");
    }
        // TIME SET UP
    function runtime() {
        recolor = timeleft*colorindex;
        if (timeplay*0.95 < timeleft) {document.getElementById("timebar").setAttribute("style", "width:100%; background-color: rgb(255,204,204);");}
        else if (timeplay*0.45 < timeleft) {showon(recolor);}
        else if (timeplay*0.425 < timeleft) {offshowapart();}
        else if (timeplay*0.35 < timeleft) {showon(recolor);}
        else if (timeplay*0.325 < timeleft) {offshowapart();}
        else if (timeplay*0.25 < timeleft) {showon(recolor);}
        else if (timeplay*0.225 < timeleft) {offshowapart();}
        else if (timeplay*0.15 < timeleft) {showon(recolor);}
        else if (timeplay*0.125 < timeleft) {offshowapart();}
        else if (timeplay*0.1 < timeleft) {showon(recolor);}
        else if (timeplay*0.075 < timeleft) {offshowapart();}
        else if (timeplay*0.05 < timeleft) {showon(recolor);}
        else if (timeplay*0.025 < timeleft) {offshowapart();}
        else if (0 < timeleft) {showon(recolor);}
        else if (-timeplay*0.025 < timeleft) {offshowapart();}
        else if (-timeplay*0.05 < timeleft) {showon(recolor);}
        else if (-timeplay*0.05 == timeleft) {timeclear(); Lose(0);};
        if (timeleft == 19) {playsound(timerunout); playedalready = 1};
        timeleft -= 1;
    }
    function timeclear() {
        offshowall();
        clearInterval(timecount);
    }
    function timepause() {
        showon(recolor);
        clearInterval(timecount);
    }
    function timeset(decisecond) {
        timeleft = timeplay = decisecond;
        timeindex = 100/timeleft;
        colorindex = 255/timeleft;
        timecount = setInterval(runtime, 100);
    }
    function timecountinue() {timecount = setInterval(runtime, 100);}



// GAMEPAUSE
function stopplay() {
    if (score < 5) {removeEL(moveEnterI1);}
    else if (score < 15) {
        if (randomsetup <= 0.4) {removeEL(moveEnterI1);}
        else {removeEL(moveEnterI2);};
    }
    else if (score < 30) {removeEL(moveEnterII1);}
    else if (score < 50) {
        if (randomsetup <= 0.4) {removeEL(moveEnterII1);}
        else {removeEL(moveEnterII2);};
    };
}
function pausecmt() {
    timeout1 = setTimeout(function(){comments.textContent = ".";}, 100);
    timeout2 = setTimeout(function(){comments.textContent = "..";}, 500);
    timeout3 = setTimeout(function(){comments.textContent = "...";}, 700);
    timeout4 = setTimeout(function(){contentCheckLang(comments, "W", "T");}, 1200);
    timeout5 = setTimeout(function(){contentCheckLang(comments, "Wa", "Tạ");}, 1300);
    timeout6 = setTimeout(function(){contentCheckLang(comments, "Wai", "Tạm");}, 1400);
    timeout7 = setTimeout(function(){contentCheckLang(comments, "Wait", "Tạm d");}, 1500);
    timeout8 = setTimeout(function(){contentCheckLang(comments, "Waiti", "Tạm dừ");}, 1600);
    timeout9 = setTimeout(function(){contentCheckLang(comments, "Waitin", "Tạm dừn");}, 1700);
    timeout10 = setTimeout(function(){contentCheckLang(comments, "Waiting", "Tạm dừng");}, 1800);
    timeout11 = setTimeout(function(){pausecmt();}, 2100);
}
function playcmt() {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timeout5);
    clearTimeout(timeout6);
    clearTimeout(timeout7);
    clearTimeout(timeout8);
    clearTimeout(timeout9);
    clearTimeout(timeout10);
    clearTimeout(timeout11);
}
function hideGameBtn() {
    up.classList.add("modal-hide");
    down.classList.add("modal-hide");
    right.classList.add("modal-hide");
    left.classList.add("modal-hide");
    commands.classList.add("modal-hide");
    UIbox.classList.replace("modal-hide", "uiActive");
}
function showGameBtn() {
    up.classList.remove("modal-hide");
    down.classList.remove("modal-hide");
    right.classList.remove("modal-hide");
    left.classList.remove("modal-hide");
    commands.classList.remove("modal-hide");
    UIbox.classList.replace("uiActive", "modal-hide");
}
function playpause() {
    // STAR TO PLAY
    if (playornot == 0) {
        playornot = 2;
        contentCheckLang(comments, "Let's go", "Bắt đầu");
        responsiveVoice.speak(comments.textContent, "US English Female", {pitch: 1.2, rate: 0.95, volume: voicevolume});
        setTimeout(function(){comments.textContent = "";}, 1500);
        commands.classList.remove("stop");
        gamestage();
        if (playtime == 1) {ppmusic(firststart);}
        else {ppmusic(musicloseRI);};
        commands.addEventListener("wheel", wheelscroll);
        gameBtn[0].addEventListener("wheel", wheelscroll);
        gameBtn[1].addEventListener("wheel", wheelscroll);
        gameBtn[2].addEventListener("wheel", wheelscroll);
        gameBtn[3].addEventListener("wheel", wheelscroll);
        musicstage(0);
        commands.addEventListener("click", playpause);
        checkCongratEffect();
        congratEffectBtn.addEventListener("click", checkCongratEffect);
        backgroundEffectBtn.removeEventListener("click", checkBgPauseEffect);
        checkBgPlayEffect();
    }
    // PAUSE TO PLAY
    else if (playornot == 1) {
        commands.textContent = "";
        comments.textContent = "";
        commands.classList.remove("stop");
        playcmt();
        gamestage();
        musicstage(0);
        ppmusic(musicpauseRI);
        pptimerun(1);
        backgroundEffectBtn.removeEventListener("click", checkBgPauseEffect);
        checkCongratEffect();
        congratEffectBtn.addEventListener("click", checkCongratEffect);
        checkBgPlayEffect();
        playornot = 2;
    }
    // PLAY TO PAUSE
    else if (playornot == 2) {
        timepause();
        stopplay();
        function playpauseLang() {
            if(languageBtn.checked == true) {continuescreen = "CLICK TO CONTINUE";}
            else {continuescreen = "NHẤP ĐỂ TIẾP TỤC";};
            pausescreen = "";
            prepare(continuescreen, pausescreen);
        };
        playpauseLang();
        languageBtn.addEventListener("click", playpauseLang);
        if (truthorfake < 0.5) {commands.classList.replace("truth", "stop");}
        else {commands.classList.replace("fake", "stop");};
        clearcolor();
        btncont();
        pausecmt();
        musicstage();
        pptimerun(0);
        musicpauseRI = Math.floor(Math.random() * 6);
        if (musicpauseRI == 0) {musicpauseRI = pause1;}
        else if (musicpauseRI == 1) {musicpauseRI = pause2;}
        else if (musicpauseRI == 2) {musicpauseRI = pause3;}
        else if (musicpauseRI == 3) {musicpauseRI = pause4;}
        else if (musicpauseRI == 4) {musicpauseRI = pause5;}
        else if (musicpauseRI == 5) {musicpauseRI = pause6;};
        playmusic(musicpauseRI);
        clearTimeout(setTimeDoneEffct);
        checkCongratEffect(0);
        congratEffectBtn.removeEventListener("click", checkCongratEffect);
        checkBgPauseEffect();
        backgroundEffectBtn.addEventListener("click", checkBgPauseEffect);
        playornot = 1;
    };
}



// RUN GAME

function setgame() {
    sun.removeEventListener("click", setgame);
    bsvolume.addEventListener("mouseenter", entersound);
    bmvolume.addEventListener("mouseenter", entermusic);
    responsiveVoice.speak("WELCOME TO NOT BUT GAME", "US English Female", {pitch: 1.2, rate: 0.95, volume: voicevolume});
    contentCheckLang(comments, "Welcome to Not-but game", "Hoan nghênh đến với Not-but game");
    commands.addEventListener("click", playpause);
    playtime = 0;
    showGameBtn();
    startgame();
    playmusic(firststart);
}

checkLoadGame();