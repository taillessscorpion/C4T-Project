// $(document).ready(function() {
//     var active0 = false;
//     var active1 = false;
//     var active2 = false;
//     var active3 = false;
//     var active4 = false;

//     $('#bgbutton').on('click', function() {

//     if (!active0) $(document).find('#startguide').css({'transform': 'translate(30px,-580px)'});
//     else $(document).find('#startguide').css({'transform': 'translate(-100px,-100px)'});

//     if (!active1) $('#startguide').find('.out1').css({'z-index': '990', 'transform': 'translate(0px,70px)'});
//     else $('#startguide').find('.out1').css({'color': 'transparent', 'z-index': 'transparent', 'transform': 'none'}); 

//     if (!active2) $('#startguide').find('.out2').css({'z-index': '990', 'transform': 'translate(0px,120px)'});
//     else $('#startguide').find('.out2').css({'color': 'transparent', 'z-index': 'transparent', 'transform': 'none'});

//     if (!active3) $('#startguide').find('.out3').css({'z-index': '990', 'transform': 'translate(0px,170px)'});
//     else $('#startguide').find('.out3').css({'color': 'transparent', 'z-index': 'transparent', 'transform': 'none'});

//     if (!active4) $('#startguide').find('.out4').css({'z-index': '990', 'transform': 'translate(0px,220px)'});
//     else $('#startguide').find('.out4').css({'color': 'transparent', 'z-index': 'transparent', 'transform': 'none'});

//     active0 = !active0;
//     active1 = !active1;
//     active2 = !active2;
//     active3 = !active3;
//     active4 = !active4;
//     });
// });


function modalcontrols() {

if (!active0) $(document).find('#startguide').css({'z-index': '999', 'transform': 'translate(30px,-600px)'});
else $('#startguide').find('.out5').css({'color': 'transparent', 'z-index': '-99', 'transform': 'none'});

if (!active1) $('#startguide').find('.out1').css({'z-index': '999', 'transform': 'translate(280px,40px)'});
else $('#startguide').find('.out4').css({'color': 'transparent', 'z-index': '-99', 'transform': 'none'}); 

if (!active2) $('#startguide').find('.out2').css({'z-index': '999', 'transform': 'translate(280px,115px)'});
else $('#startguide').find('.out3').css({'color': 'transparent', 'z-index': '-99', 'transform': 'none'});

if (!active3) $('#startguide').find('.out3').css({'z-index': '999', 'transform': 'translate(280px,190px)'});
else $('#startguide').find('.out2').css({'color': 'transparent', 'z-index': '-99', 'transform': 'none'});

if (!active4) $('#startguide').find('.out4').css({'z-index': '999', 'transform': 'translate(280px,265px)'});
else $('#startguide').find('.out1').css({'color': 'transparent', 'z-index': '-99', 'transform': 'none'});

if (!active4) $('#startguide').find('.out5').css({'z-index': '999', 'transform': 'translate(280px,340px)'});
else $(document).find('#startguide').css({'transform': 'translate(-100px,-100px)'});

active0 = !active0;
active1 = !active1;
active2 = !active2;
active3 = !active3;
active4 = !active4;
active5 = !active5;
}


var ruleBasic = document.getElementById("ruleBasic");
var ruleUnlock = document.getElementById("ruleUnlock");
var guideVolume = document.getElementById("guideVolume");
var guideSetting = document.getElementById("guideSetting");
var guideScoreBoard = document.getElementById("guideScoreBoard");
var child = document.getElementsByClassName("child");
var whichShow = 0, whichShowOld;
function scrollGuide(e) {
    if(e != undefined) {
        whichShow += e.wheelDelta/400;
        wheelmuch = e.wheelDelta;
    };
    console.log(whichShow);
    if(whichShow < 0) {whichShow = 4;}
    else if(whichShow > 4) {whichShow = 0;};
    if(wheelmuch < 0) {
        if(whichShow == 0) {
            ruleBasic.className= "fullModal tag-showDown";
            guideScoreBoard.className= "fullModal tag-hideDown";
            ruleUnlock.className= "fullModal tag-hideDown";
            guideVolume.className= "fullModal tag-hideDown";
            guideSetting.className= "fullModal tag-hideDown";
            child[0].classList.replace("childNone", "childChoose");
            child[4].classList.replace("childChoose", "childNone");
            child[1].classList.replace("childChoose", "childNone");
            child[2].classList.replace("childChoose", "childNone");
            child[3].classList.replace("childChoose", "childNone");
        }
        else if(whichShow <= 1) {
            ruleUnlock.className= "fullModal tag-showDown";
            guideScoreBoard.className= "fullModal tag-hideDown";
            guideVolume.className= "fullModal tag-hideDown";
            ruleBasic.className= "fullModal tag-hideDown";
            guideSetting.className= "fullModal tag-hideDown";
            child[1].classList.replace("childNone", "childChoose");
            child[0].classList.replace("childChoose", "childNone");
            child[2].classList.replace("childChoose", "childNone");
            child[2].classList.replace("childChoose", "childNone");
            child[3].classList.replace("childChoose", "childNone");
        }
        else if(whichShow <= 2) {
            guideVolume.className= "fullModal tag-showDown";
            guideScoreBoard.className= "fullModal tag-hideDown";
            ruleUnlock.className= "fullModal tag-hideDown";
            ruleBasic.className= "fullModal tag-hideDown";
            guideSetting.className= "fullModal tag-hideDown";
            child[2].classList.replace("childNone", "childChoose");
            child[1].classList.replace("childChoose", "childNone");
            child[3].classList.replace("childChoose", "childNone");
            child[4].classList.replace("childChoose", "childNone");
            child[0].classList.replace("childChoose", "childNone");
        }
        else if(whichShow <= 3) {
            guideSetting.className= "fullModal tag-showDown";
            guideScoreBoard.className= "fullModal tag-hideDown";
            ruleUnlock.className= "fullModal tag-hideDown";
            guideVolume.className= "fullModal tag-hideDown";
            ruleBasic.className= "fullModal tag-hideDown";
            child[3].classList.replace("childNone", "childChoose");
            child[2].classList.replace("childChoose", "childNone");
            child[4].classList.replace("childChoose", "childNone");
            child[1].classList.replace("childChoose", "childNone");
            child[0].classList.replace("childChoose", "childNone");
        }
        else if(whichShow <= 4) {
            guideScoreBoard.className= "fullModal tag-showDown";
            ruleUnlock.className= "fullModal tag-hideDown";
            guideVolume.className= "fullModal tag-hideDown";
            ruleBasic.className= "fullModal tag-hideDown";
            guideSetting.className= "fullModal tag-hideDown";
            child[4].classList.replace("childNone", "childChoose");
            child[3].classList.replace("childChoose", "childNone");
            child[0].classList.replace("childChoose", "childNone");
            child[2].classList.replace("childChoose", "childNone");
            child[1].classList.replace("childChoose", "childNone");
        };
    }
    if(wheelmuch > 0) {
        if(whichShow == 0) {
            ruleBasic.className= "fullModal tag-showUp";
            ruleUnlock.className= "fullModal tag-hideUp";
            guideScoreBoard.className= "fullModal tag-hideUp";
            guideSetting.className= "fullModal tag-hideUp";
            guideVolume.className= "fullModal tag-hideUp";
            child[0].classList.replace("childNone", "childChoose");
            child[1].classList.replace("childChoose", "childNone");
            child[4].classList.replace("childChoose", "childNone");
            child[2].classList.replace("childChoose", "childNone");
            child[3].classList.replace("childChoose", "childNone");
        }
        else if(whichShow <= 1) {
            ruleUnlock.className= "fullModal tag-showUp";
            guideScoreBoard.className= "fullModal tag-hideUp";
            guideSetting.className= "fullModal tag-hideUp";
            guideVolume.className= "fullModal tag-hideUp";
            ruleBasic.className= "fullModal tag-hideUp";
            child[1].classList.replace("childNone", "childChoose");
            child[2].classList.replace("childChoose", "childNone");
            child[0].classList.replace("childChoose", "childNone");
            child[4].classList.replace("childChoose", "childNone");
            child[3].classList.replace("childChoose", "childNone");
        }
        else if(whichShow <= 2) {
            guideVolume.className= "fullModal tag-showUp";
            ruleUnlock.className= "fullModal tag-hideUp";
            guideScoreBoard.className= "fullModal tag-hideUp";
            guideSetting.className= "fullModal tag-hideUp";
            ruleBasic.className= "fullModal tag-hideUp";
            child[2].classList.replace("childNone", "childChoose");
            child[3].classList.replace("childChoose", "childNone");
            child[1].classList.replace("childChoose", "childNone");
            child[2].classList.replace("childChoose", "childNone");
            child[4].classList.replace("childChoose", "childNone");
        }
        else if(whichShow <= 3) {
            guideSetting.className= "fullModal tag-showUp";
            ruleUnlock.className= "fullModal tag-hideUp";
            guideScoreBoard.className= "fullModal tag-hideUp";
            guideVolume.className= "fullModal tag-hideUp";
            ruleBasic.className= "fullModal tag-hideUp";
            child[3].classList.replace("childNone", "childChoose");
            child[4].classList.replace("childChoose", "childNone");
            child[2].classList.replace("childChoose", "childNone");
            child[1].classList.replace("childChoose", "childNone");
            child[0].classList.replace("childChoose", "childNone");
        }
        else if(whichShow <= 4) {
            guideScoreBoard.className= "fullModal tag-showUp";
            ruleUnlock.className= "fullModal tag-hideUp";
            guideSetting.className= "fullModal tag-hideUp";
            guideVolume.className= "fullModal tag-hideUp";
            ruleBasic.className= "fullModal tag-hideUp";
            child[4].classList.replace("childNone", "childChoose");
            child[0].classList.replace("childChoose", "childNone");
            child[3].classList.replace("childChoose", "childNone");
            child[2].classList.replace("childChoose", "childNone");
            child[1].classList.replace("childChoose", "childNone");
        };
    }
}
    modalguide.addEventListener("wheel", scrollGuide);
function checkGuide(e) {
    whichShowOld = whichShow;
    if(e.target == child[0]) {whichShow = 0;}
    else if(e.target == child[1]) {whichShow = 1;}
    else if(e.target == child[2]) {whichShow = 2;}
    else if(e.target == child[3]) {whichShow = 3;}
    else if(e.target == child[4]) {whichShow = 4;}
    wheelmuch = whichShowOld - whichShow;
    scrollGuide();
}
for(i=0;i<child.length;i++) {
    child[i].addEventListener("mouseenter", checkGuide);
}
