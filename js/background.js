function bgStart() {
    body.className = "BgStart";
    body.style.background = "linear-gradient(to bottom, #000000, #ff1a1a, #fa5a1a, #ffd96f)";
    body.style.backgroundSize = "100vw 1200vh";
}
function bgStartHover() {
    body.className = "BgStartHover";
    body.style.background = "linear-gradient(to top, #000000, #ff1a1a, #fa5a1a, #ffd96f)";
    body.style.backgroundSize = "100vw 1000vh";
}


function AniClickWin(bgColor, bgOldColor, currentColor, positionClickWin) {
    var ctx = fakeBody.getContext("2d");
    var cH;
    var cW;
    var animations = [];

    function removeAnimation(animation) {
        var index = animations.indexOf(animation);
        if (index > -1) animations.splice(index, 1);
    }

    function calcPageFillRadius(x, y) {
        var l = Math.max(x - 0, cW - x);
        var h = Math.max(y - 0, cH - y);
        return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
    }

    function handleEvent() {
        var targetR = calcPageFillRadius(positionClickWin.x, positionClickWin.y);
        var rippleSize = Math.min(200, (cW * .4));
        var minCoverDuration = 750;
        
        var pageFill = new Circle({
            x: positionClickWin.x,
            y: positionClickWin.y,
            r: 0,
            fill: bgColor
        });
        var fillAnimation = anime({
            targets: pageFill,
            r: targetR,
            duration:  Math.max(targetR / 2 , minCoverDuration ),
            easing: "easeOutQuart",
            complete: function(){
                removeAnimation(fillAnimation);
            }
        });
        
        var ripple = new Circle({
            x: positionClickWin.x,
            y: positionClickWin.y,
            r: 0,
            fill: currentColor,
            stroke: {
                width: 3,
                color: currentColor
            },
            opacity: 1
            });
            var rippleAnimation = anime({
            targets: ripple,
            r: rippleSize,
            opacity: 0,
            easing: "easeOutExpo",
            duration: 900,
            complete: removeAnimation
            });
        
            var particles = [];
            for (var i=0; i<32; i++) {
            var particle = new Circle({
                x: positionClickWin.x,
                y: positionClickWin.y,
                fill: currentColor,
                r: anime.random(24, 48)
            })
            particles.push(particle);
            }
            var particlesAnimation = anime({
            targets: particles,
            x: function(particle){
                return particle.x + anime.random(rippleSize, -rippleSize);
            },
            y: function(particle){
                return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
            },
            r: 0,
            easing: "easeOutExpo",
            duration: anime.random(1000,1300),
            complete: removeAnimation
            });
            animations.push(fillAnimation, rippleAnimation, particlesAnimation);
    }

    function extend(a, b){
        for(var key in b) {
            if(b.hasOwnProperty(key)) {
            a[key] = b[key];
            }
        }
        return a;
    }

    var Circle = function(opts) {
        extend(this, opts);
    }

    Circle.prototype.draw = function() {
        ctx.globalAlpha = this.opacity || 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        if (this.stroke) {
            ctx.strokeStyle = this.stroke.color;
            ctx.lineWidth = this.stroke.width;
            ctx.stroke();
        }
        if (this.fill) {
            ctx.fillStyle = this.fill;
            ctx.fill();
        }
        ctx.closePath();
        ctx.globalAlpha = 1;
    }

    var animate = anime({
        duration: Infinity,
        update: function() {
            ctx.fillStyle = bgOldColor;
            ctx.fillRect(0, 0, cW, cH);
            animations.forEach(function(anim) {
            anim.animatables.forEach(function(animatable) {
                animatable.target.draw();
            });
            });
        }
    });

    var resizeCanvas = function() {
        cW = window.innerWidth;
        cH = window.innerHeight;
        fakeBody.width = cW * devicePixelRatio;
        fakeBody.height = cH * devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    (function init() {
        resizeCanvas();
        if (window.CP) {
        window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000; 
        }
        window.addEventListener("resize", resizeCanvas);
        if (!!window.location.pathname.match(/fullcpgrid/)) {
            startFauxClicking();
        }
        handleInactiveUser();
    })();

    function handleInactiveUser() {
        var inactive = setTimeout(function(){
            fauxClick(cW/2, cH/2);
        }, 2000);
        
        function clearInactiveTimeout() {
            clearTimeout(inactive);
            document.removeEventListener("mousedown", clearInactiveTimeout);
            document.removeEventListener("touchstart", clearInactiveTimeout);
        }
        
        document.addEventListener("mousedown", clearInactiveTimeout);
        document.addEventListener("touchstart", clearInactiveTimeout);
    }

    function startFauxClicking() {
        setTimeout(function(){
            fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
            startFauxClicking();
        }, anime.random(200, 900));
    }

    function fauxClick(x, y) {
        var fauxClick = new Event("mousedown");
        fauxClick.pageX = x;
        fauxClick.pageY = y;
        document.dispatchEvent(fauxClick);
    }
    handleEvent();
}

// // WAITINGE

var colors = new Array(
    [255, 0, 0],
    [255, 64, 0],
    [255, 128, 0],
    [255, 193, 0],
    [255, 255, 0],
    [193, 255, 0],
    [128, 255, 0],
    [64, 255, 0],
    [0, 255, 0],
    [0, 255, 64],
    [0, 255, 128],
    [0, 255, 193],
    [0, 255, 255],
    [0, 193, 255],
    [0, 128, 255],
    [0, 64, 255],
    [0, 0, 255],
    [64, 0, 255],
    [128, 0, 255],
    [193, 0, 255],
    [255, 0, 255],
    [255, 0, 293],
    [255, 0, 128],
    [255, 0, 64]
);

var step = 0;
var colorIndices = [0,1,2,3];
var gradientSpeed = 0.002;

function updateGradient() {
    if ( $===undefined ) return;
    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb("+r1+","+g1+","+b1+")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb("+r2+","+g2+","+b2+")";

    $('.BgWaitingE').css({background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
        
        step += gradientSpeed;
        if ( step >= 1 ) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];
        colorIndices[1] = (colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        
    }
}

setInterval(updateGradient,10);





function changeSizeWave(left, width, opacity) {
    for (i=0; i<6; i++) {
        wave[i].style = "left: "+ left +"%;" + "width: " + width + "px;" + "opacity: " + opacity + ";";
    };
}
sun.addEventListener("mouseenter", function() {
    body.className = "BgStartHover";
    body.style.background = "linear-gradient(to bottom, #000000, #ff1a1a, #fa5a1a, #ffd96f)";
    body.style.backgroundSize = "100vw 1000vh";
    gameIcon.src = "icon/gameIconFull.png";
    sun.classList.replace("sunNormal", "sunHover");
    sea.classList.remove("seaNormal");
    gameIcon.classList.replace("sunImg", "sunHoverImg");
    changeSizeWave(60, 240, 0.1);
});
sun.addEventListener("mouseleave", function() {
    body.className = "BgStart";
    body.style.background = "linear-gradient(to bottom, #56135c, #ff1a1a, #fa5a1a, #ffd96f)";
    body.style.backgroundSize = "100vw 1000vh";
    gameIcon.src = "icon/gameIconTopHalf.png";
    sun.classList.replace("sunHover", "sunNormal");
    sea.classList.add("seaNormal");
    gameIcon.classList.replace("sunHoverImg", "sunImg");
    changeSizeWave(50, 340, 1);
});