dataLoaded  = localStorage.getItem("gameData");
data = JSON.parse(dataLoaded);
function checkEnter(e) {
    if(e.key == "Enter") {getName();}
}
function getName() {
    inputName.disabled = true;
    playerName = inputName.value;
    if(inputName.value == 0) {playerName = "Anonymized player";};
    inputName.removeEventListener("keydown", checkEnter);
    btnName.removeEventListener("click", getName);
    function getNameLang() {contentCheckLang(btnName, "Change", "Đổi tên");}
    getNameLang();
    languageBtn.addEventListener("click", getNameLang);
    btnName.addEventListener("click", changeName);
}
function changeName() {
    inputName.disabled = false; 
    inputName.addEventListener("keydown", checkEnter);
    btnName.addEventListener("click", getName);
    function changeNameLang() {contentCheckLang(btnName, "Done", "Xong");};
    changeNameLang();
    languageBtn.addEventListener("click", changeNameLang);
    btnName.removeEventListener("click", changeName);
}
function rename() {
    nameArea.className = "showNameArea";
    inputName.disabled = true;
    inputName.value = playerName;
    btnName.addEventListener("click", changeName);
    comments.textContent = "";
}
function createProfile() {
    playerProfile = {
        name: playerName,
        highScore: 0,
        totalScore: 0,
        totalPlayTime: 0,
        averageScore: 0,
        singleRank: 3,
        totalRank: 3,
        Unlocks: []
    }
    return(playerProfile);
}
function addProfile() {
    if(data.profile.length == 0) {
        playerProfile = createProfile();
        data.profile.push(playerProfile);
        return(data.profile.length-1);
    }
    else {
        for(i=0; i < data.profile.length; i++) {
            if(data.profile[i].name == playerName) {
                playerProfile = data.profile[i];
                return(i);
            };
            if (i == data.profile.length-1 && data.profile[i].name != playerName) {
                playerProfile = createProfile();
                data.profile.push(playerProfile);
                return(data.profile.length-1);
            };
        }
    };
}
function getUnlocks(score) {
    if (score < 5) {highUnlocks = [unlocks[0]];}
    else if (score < 15) {highUnlocks = [unlocks[0], unlocks[1]];}
    else if (score < 50) {highUnlocks = [unlocks[0], unlocks[1], unlocks[2]];}
    else if (score < 85) {highUnlocks = [unlocks[0], unlocks[1], unlocks[2], unlocks[3]];}
    else if (score < 120) {highUnlocks = [unlocks[0], unlocks[1], unlocks[2], unlocks[3], unlocks[4]];}
    else if (score < 150) {highUnlocks = [unlocks[0], unlocks[1], unlocks[2], unlocks[3], unlocks[4], unlocks[5]];}
    else if (score < 200) {highUnlocks = [unlocks[0], unlocks[1], unlocks[2], unlocks[3], unlocks[4], unlocks[5], unlocks[6]];}
    else if (score >= 200) {highUnlocks = [unlocks[0], unlocks[1], unlocks[2], unlocks[3], unlocks[4], unlocks[5], unlocks[6], unlocks[7]];};
    return(highUnlocks);
}
function getAverange(score, playtime) {
    average = Math.round(score/playtime * 100)/100;
    return(average);
}
function getQualification(score) {
    sumAverage = 0;
    for(i=0;i<data.profile.length;i++) {sumAverage += data.profile[i].averageScore;};
    sumAverage = sumAverage/data.profile.length;
    if(score < sumAverage*0.5) {return("F");}
    else if(score < sumAverage*0.9) {return("D");}
    else if(score >= sumAverage*0.9 && score <= sumAverage*1.3) {return("C")}
    else if(score < sumAverage*1.7) {return("B")}
    else if(score >= sumAverage*1.7) {return("Ace")};
}
function highScoreCompa() {
    function highScoreLang() {
        contentCheckLang(showSingleScore, "HIGHEST SINGLE SCORE", "ĐIỂM ĐƠN CAO NHẤT");
        contentCheckLang(showName[0], "Player's name", "Tên người chơi");
        contentCheckLang(showScore[0], "High score", "Điểm cao");
        contentCheckLang(showSingleEnd[0], "Play times", "S. lần chơi");
    };
    highScoreLang();
    languageBtn.addEventListener("click", highScoreLang);
    showName[1].textContent = data.single[0].name;
    showName[2].textContent = data.single[1].name;
    showName[3].textContent = data.single[2].name;
    showScore[1].textContent = data.single[0].highScore;
    showScore[2].textContent = data.single[1].highScore;
    showScore[3].textContent = data.single[2].highScore;
    showSingleEnd[1].textContent = data.single[0].totalPlayTime;
    showSingleEnd[2].textContent = data.single[1].totalPlayTime;
    showSingleEnd[3].textContent = data.single[2].totalPlayTime;
}
function totalScoreCompa() {
    function totalScoreLang() {
        contentCheckLang(showTotalScore, "HIGHEST TOTAL SCORE", "TỔNG ĐIỂM CAO NHẤT");
        contentCheckLang(showName[4], "Player's name", "Tên người chơi");
        contentCheckLang(showScore[4], "Total score", "Tổng điểm");
        contentCheckLang(showTotalEnd[0], "Average score", "Điểm tr. bình");
    };
    totalScoreLang();
    languageBtn.addEventListener("click", totalScoreLang);
    showName[5].textContent = data.total[0].name;
    showName[6].textContent = data.total[1].name;
    showName[7].textContent = data.total[2].name;
    showScore[5].textContent = data.total[0].totalScore;
    showScore[6].textContent = data.total[1].totalScore;
    showScore[7].textContent = data.total[2].totalScore;
    showTotalEnd[1].textContent = data.total[0].averageScore;
    showTotalEnd[2].textContent = data.total[1].averageScore;
    showTotalEnd[3].textContent = data.total[2].averageScore;
}
function comparisionHighScore() {
    if(playerProfile.singleRank == 3) {
        if(playerProfile.highScore >= data.single[2].highScore) {
            data.single[2] = playerProfile;
            playerProfile.singleRank = 2;
        }
    }
    if(playerProfile.singleRank == 2) {
        if(playerProfile.highScore >= data.single[1].highScore) {
            data.single[2] = data.single[1];
            data.single[1] = playerProfile;
            playerProfile.singleRank = 1;
        }
    }
    if(playerProfile.singleRank == 1) {
        if(playerProfile.highScore >= data.single[0].highScore) {
            data.single[1] = data.single[0];
            data.single[0] = playerProfile;
            playerProfile.singleRank = 0;
        }
    }
    highScoreCompa();
}
function comparisionTotalScore() {
    if(playerProfile.totalRank == 3) {
        if(playerProfile.totalScore >= data.total[2].totalScore) {
            data.total[2] = playerProfile;
            playerProfile.totalRank = 2;
        }
    }
    if(playerProfile.totalRank == 2) {
        if(playerProfile.totalScore >= data.total[1].totalScore) {
            data.total[2] = data.total[1];
            data.total[1] = playerProfile;
            playerProfile.totalRank = 1;
        }
    }
    if(playerProfile.totalRank == 1) {
        if(playerProfile.totalScore >= data.total[0].totalScore) {
            data.total[1] = data.total[0];
            data.total[0] = playerProfile;
            playerProfile.totalRank = 0;
        }
    }
    totalScoreCompa();
}
function STARTupdateProfile() {
    profilePostion = addProfile();
    playerProfile.totalPlayTime += 1;
    playerProfile.singleRank = 3;
    dataJSON = JSON.stringify(data);
    localStorage.setItem("gameData", dataJSON);
}
function WINupdateProfile() {
    if(score > playerProfile.highScore) {playerProfile.highScore = score;}
    playerProfile.totalScore += 1;
    playerProfile.Unlocks = getUnlocks(score);
    playerProfile.averageScore = getAverange(playerProfile.totalScore, playerProfile.totalPlayTime);
    playerProfile.qualification = getQualification(playerProfile.averageScore);
    data.profile[profilePostion] = playerProfile;
    if(saveGameBtn.checked == true) {
        data.save.profilePostion = profilePostion;
        data.save.playerProfile = playerProfile;
        data.save.score = score;
        data.save.choose = choose;
        data.save.timeplay = timeplay;
        if(score >= 5) {data.save.randomsetup = randomsetup;};
        if (score >= 15) {data.save.classkey = classkey;};
        if(score >= 50) {data.save.truthorfake = truthorfake;};
    }
    comparisionHighScore();
    comparisionTotalScore();
    dataJSON = JSON.stringify(data);
    localStorage.setItem("gameData", dataJSON);
}
function LOSEupdateProfile() {
    data.save = {};
    dataJSON = JSON.stringify(data);
    localStorage.setItem("gameData", dataJSON);
}
function playSavedGame() {
    saveArea.className = "hideArea";
    playSave.removeEventListener("click", playSavedGame);
    playNew.removeEventListener("click", playNewGame);
    playerProfile = data.save.playerProfile;
    score = data.save.score;
    choose = data.save.choose;
    timeplay = data.save.timeplay;
    timeleft = timeplay;
    profilePostion = data.save.profilePostion;
    data.profile[profilePostion] = playerProfile;
    if(score >= 5) {randomsetup = data.save.randomsetup;};
    if (score >= 15) {classkey = data.save.classkey;};
    if(score >= 50) {truthorfake = data.save.truthorfake;};
    
    bsvolume.addEventListener("mouseenter", entersound);
    bmvolume.addEventListener("mouseenter", entermusic);
    responsiveVoice.speak("WELCOME TO NOT BUT GAME", "US English Female", {pitch: 1.2, rate: 0.95, volume: voicevolume});
    commands.addEventListener("click", playpause);
    showGameBtn();
    function playSavedLang() {
        contentCheckLang(comments, "Welcome to Not-but game", "Hoan nghênh đến với Not-but game");
        contentCheckLang(point, "SCORE: " + score, "ĐIỂM: " + score);
    };
    playSavedLang();
    languageBtn.addEventListener("click", playSavedLang);
    
    runtime();
    playornot = 2;
    playpause();
}
function playNewGame() {
    function playNewGameLang() {
        if(languageBtn.checked == true) {
            inputName.placeholder = "Player's name";
            btnName.textContent = "Done";
        }
        else {
            inputName.placeholder = "Tên người chơi";
            btnName.textContent = "Xong";
        };
    };
    playNewGameLang();
    languageBtn.addEventListener("click", playNewGameLang);
    sun.removeEventListener("click", playNewGame);
    playSave.removeEventListener("click", playSavedGame);
    playNew.removeEventListener("click", playNewGame);
    nameArea.className = "showNameArea";
    saveArea.className = "hideArea";
    inputName.addEventListener("keydown", checkEnter);
    btnName.addEventListener("click", getName);
    sun.addEventListener("click", getName);
    sun.addEventListener("click", setgame);
    data.save = {};
    dataJSON = JSON.stringify(data);
    localStorage.setItem("gameData", dataJSON);
}
function checkLoadGame() {
    if(Object.keys(data.save).length === 0) {
        nameArea.className = "showNameArea";
        saveArea.className = "hideArea";
        inputName.addEventListener("keydown", checkEnter);
        btnName.addEventListener("click", getName);
        sun.addEventListener("click", getName);
        sun.addEventListener("click", setgame);
        function checkLoadGameNLang() {
            if(languageBtn.checked == true) {
                inputName.placeholder = "Player's name";
                btnName.textContent = "Done";
            }
            else {
                inputName.placeholder = "Tên người chơi";
                btnName.textContent = "Xong";
            };
        };
        checkLoadGameNLang();
        languageBtn.addEventListener("click", checkLoadGameNLang);
    }
    else if($.isEmptyObject(data.save) == false) {
        nameArea.className = "hideArea";
        saveArea.className = "showSaveArea";
        playSave.addEventListener("click", playSavedGame);
        playNew.addEventListener("click", playNewGame);
        sun.addEventListener("click", playNewGame);
        function checkLoadGameSLang() {
            contentCheckLang(askPlaySave, "Wanna try your saved game?", "Bạn có muốn chơi lại phần đã lưu?");
            contentCheckLang(playSave, "YES", "CÓ");
            contentCheckLang(playNew, "NO", "KHÔNG");
        };
        checkLoadGameSLang();
        languageBtn.addEventListener("click", checkLoadGameSLang);
    }
    bgStart();
    beforeUnlocks();
    startBrief();
    highScoreCompa();
    totalScoreCompa();
}
function transQualifiDetails(input) {
    if(input == "F") {return("a noob");}
    else if(input == "D") {return("poorly");}
    else if(input == "C") {return("above averange");}
    else if(input == "B") {return("so impressive");}
    else if(input == "Ace") {return("one of top best players");}
}
function vietTransQua(eng) {
    if(eng == "a noob") {return("còn rất kém");}
    else if(eng == "poorly") {return("cần nỗ lực hơn");}
    else if(eng == "above averange") {return("có trình độ trung bình");}
    else if(eng == "so impressive") {return("có thành tích khá ấn tượng");}
    else if(eng == "one of top best players") {return("là một trong những người chơi hàng đầu");}
}
function showBrief() {
    modalunlock.removeEventListener("mouseleave", showBrief);
    function showBriefLang() {
        contentCheckLang(showScoreBoard, "SCOREBOARD", "BẢNG ĐIỂM");
        contentCheckLang(showPlayerName, "Brief of " + playerProfile.name, "Thành tích của " + playerProfile.name + ":");
        contentCheckLang(showPlayerHighScore, "Has got "+ playerProfile.highScore +" points as his best.", "Đạt thành tích tốt nhất là "+ playerProfile.highScore +" điểm.");
        contentCheckLang(showPlayerTotalScore, "Got a total of "+ playerProfile.totalScore +" points in "+ playerProfile.totalPlayTime +" times.", "Có tổng số điểm là "+ playerProfile.totalScore +" điểm trong "+ playerProfile.totalPlayTime +" ván.");
        contentCheckLang(showPlayerAverange, "Has an average achievement of "+ playerProfile.averageScore +" points a game.", "Với số điểm trung bình "+ playerProfile.averageScore +" điểm mỗi ván.");
        contentCheckLang(showPlayerQualification, playerProfile.name + " is " + transQualifiDetails(playerProfile.qualification) + ".", playerProfile.name + " " + vietTransQua(transQualifiDetails(playerProfile.qualification)) + ".");
    };
    showBriefLang();
    languageBtn.addEventListener("click", showBriefLang);
    modalunlock.addEventListener("mouseenter", showDetails);
}
function showDetails() {
    modalunlock.removeEventListener("mouseenter", showDetails);
    function showDetailsLang() {
        contentCheckLang(showScoreBoard, "SCOREBOARD", "BẢNG ĐIỂM");
        contentCheckLang(showPlayerName, "Player's name: " + playerProfile.name, "Tên người chơi: " + playerProfile.name);
        contentCheckLang(showPlayerHighScore, "Highscore: "+ playerProfile.highScore +" points", "Điểm cao nhất: " + playerProfile.highScore + " điểm");
        contentCheckLang(showPlayerTotalScore, "Total score: "+ playerProfile.totalScore +" points in: "+ playerProfile.totalPlayTime +" times", "Tổng điểm: "+ playerProfile.totalScore +" điểm trong: "+ playerProfile.totalPlayTime +" ván");
        contentCheckLang(showPlayerAverange, "Average score: "+ playerProfile.averageScore +" points a game", "Điểm trung bình: "+ playerProfile.averageScore +" điểm/ván");
        contentCheckLang(showPlayerQualification, "Rank: " + playerProfile.qualification, "Đánh giá: " + playerProfile.qualification);
    };
    showDetailsLang();
    languageBtn.addEventListener("click", showDetailsLang);
    modalunlock.addEventListener("mouseleave", showBrief);
}
function startBrief() {
    function startBriefLang() {
        contentCheckLang(showScoreBoard, "SCOREBOARD IS LOADING", "BẢNG ĐIỂM ĐANG TẢI");
        contentCheckLang(showPlayerQualification, "Has no information to show.", "Hiện tại không có thông tin để hiển thị.");
    };
    startBriefLang();
    languageBtn.addEventListener("click", startBriefLang);
    
}
function showScoreLeft(target) {
    scoreLeft = target - score;
    if(languageBtn.checked == true) {
        if(scoreLeft == 1) {scoreLeft = " a single more point "}
        else {scoreLeft = scoreLeft + " more points "};
    }
    else {scoreLeft = scoreLeft + " điểm nữa "};
    return(scoreLeft);
}
function beforeUnlocks() {
    function beforeUnlocksLang() {
        contentCheckLang(showUnlock, "START NEW GAME TO GET UNLOCK", "CHƠI ĐỂ MỞ KHÓA");
        contentCheckLang(showUnlock0Content, "Has no information to show.", "Hiện tại không có thông tin để hiển thị.");
    };
    beforeUnlocksLang();
    languageBtn.addEventListener("click", beforeUnlocksLang);
}
function startUnlocks() {
    function startUnlocksLang() {
        contentCheckLang(showUnlock, "UNLOCKS PASSED", "MỞ KHÓA MÀN");
        contentCheckLang(showUnlock0Content, "Get a point to unlock", "Đạt một điểm để mở khóa");
        contentCheckLang(showUnlock1Content, "Get " + showScoreLeft(5) + "to get this unlock", "Đạt " + showScoreLeft(5) + "để mở khóa màn này");
        contentCheckLang(showUnlock2Content, "Get " + showScoreLeft(15) + "to get this  unlock", "Đạt " + showScoreLeft(15) + "để mở khóa màn này");
        contentCheckLang(showUnlock3Content, "Get " + showScoreLeft(50) + "to get this  unlock", "Đạt " + showScoreLeft(50) + "để mở khóa màn này");
        contentCheckLang(showUnlock4Content, "Get " + showScoreLeft(85) + "to get this  unlock", "Đạt " + showScoreLeft(85) + "để mở khóa màn này");
        contentCheckLang(showUnlock5Content, "Get " + showScoreLeft(120) + "to get this  unlock", "Đạt " + showScoreLeft(120) + "để mở khóa màn này");
        contentCheckLang(showUnlock6Content, "Get " + showScoreLeft(150) + "to get this  unlock", "Đạt " + showScoreLeft(150) + "để mở khóa màn này");
        contentCheckLang(showUnlock7Content, "Get " + showScoreLeft(200) + "to get this  unlock", "Đạt " + showScoreLeft(200) + "để mở khóa màn này");
    };
    startUnlocksLang();
    languageBtn.addEventListener("click", startUnlocksLang);
    iconUnlock0.src = "icon/lock.png";
    iconUnlock1.src = "icon/lock.png";
    iconUnlock2.src = "icon/lock.png";
    iconUnlock3.src = "icon/lock.png";
    iconUnlock4.src = "icon/lock.png";
    iconUnlock5.src = "icon/lock.png";
    iconUnlock6.src = "icon/lock.png";
    iconUnlock7.src = "icon/lock.png";
    for(i=0;i<showIconUnlock.length;i++) {
        showIconUnlock[i].style.margin = "0px 4px 0px 0px";
        showIconUnlock[i].classList.remove("modal-hide");
    }
}
function showUnlocks() {
    if(score == 1) {
        showUnlock0Content.textContent = unlocks[0];
        iconUnlock0.src = "icon/unlock.png";
        showIconUnlock[0].style.margin = "0px";
    }
    else if(score == 5) {
        showUnlock1Content.textContent = unlocks[1];
        iconUnlock1.src = "icon/unlock.png";
        showIconUnlock[1].style.margin = "0px";
    }
    else if(score == 15) {
        showUnlock2Content.textContent = unlocks[2];
        iconUnlock2.src = "icon/unlock.png";
        showIconUnlock[2].style.margin = "0px";
    }
    else if(score == 50) {
        showUnlock3Content.textContent = unlocks[3];
        iconUnlock3.src = "icon/unlock.png";
        showIconUnlock[3].style.margin = "0px";
    }
    else if(score == 85) {
        showUnlock4Content.textContent = unlocks[4];
        iconUnlock4.src = "icon/unlock.png";
        showIconUnlock[4].style.margin = "0px";
    }
    else if(score == 120) {
        showUnlock5Content.textContent = unlocks[5];
        iconUnlock5.src = "icon/unlock.png";
        showIconUnlock[5].style.margin = "0px";
    }
    else if(score == 150) {
        showUnlock6Content.textContent = unlocks[6];
        iconUnlock6.src = "icon/unlock.png";
        showIconUnlock[6].style.margin = "0px";
    }
    else if(score == 200) {
        showUnlock7Content.textContent = unlocks[7];
        iconUnlock7.src = "icon/unlock.png";
        showIconUnlock[7].style.margin = "0px";
    }
}
