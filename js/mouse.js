var circle = $('.cursor');
var drawBall;
function moveCircle(e) { 
	TweenMax.to(circle, 1, {
		css: { 
			left: e.pageX,
			top: e.pageY,
			opacity: 1,
		},
		ease: Elastic.easeOut
	});
}
function hideCircle(e) { 
	TweenMax.to(circle, 1, {
		css: { 
			left: e.pageX,
			top: e.pageY,
			opacity: 0,
		},
	});
}
$(window).on('mousemove', moveCircle);
$(window).on('mouseleave', hideCircle);

function cursorEffectActive() {
	var mousePos = {};
	function getRandomInt(min, max) {
		return Math.round(Math.random() * (max - min + 1)) + min;
	}
	$(window).mousemove(function(e) {
		mousePos.x = e.pageX;
		mousePos.y = e.pageY;
	});
	$(window).mouseleave(function() {
		mousePos.x = -1;
		mousePos.y = -1;
	});
	drawBall = setInterval(function() {
		if(mousePos.x > 0 && mousePos.y > 0){
			if(mousePos.x != mousePos.ox || mousePos.y != mousePos.oy){
				var range = 6;
				var colorR, colorG, colorB;
				var colorRgbIndex = Math.floor(Math.random()*6);
				if (colorRgbIndex == 0) {
					colorR = getRandomInt(230, 255);
					colorG = getRandomInt(0, 35);
					colorB = getRandomInt(0, 35);
				}
				else if (colorRgbIndex == 1) {
					colorR = getRandomInt(230, 255);
					colorG = getRandomInt(230, 255);
					colorB = getRandomInt(0, 35);
				}
				else if (colorRgbIndex == 2) {
					colorR = getRandomInt(0, 35);
					colorG = getRandomInt(230, 255);
					colorB = getRandomInt(0, 35);
				}
				else if (colorRgbIndex == 3) {
					colorR = getRandomInt(0, 35);
					colorG = getRandomInt(230, 255);
					colorB = getRandomInt(230, 255);
				}
				else if (colorRgbIndex == 4) {
					colorR = getRandomInt(0, 35);
					colorG = getRandomInt(0, 35);
					colorB = getRandomInt(230, 255);
				}
				else if (colorRgbIndex == 5) {
					colorR = getRandomInt(230, 255);
					colorG = getRandomInt(0, 35);
					colorB = getRandomInt(230, 255);
				};
				var color = "background: rgb("+colorR+","+colorG+","+colorB+",0.5);";
				var sizeInt = 7;
				size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
				var left = "left: " + getRandomInt(mousePos.x-range, mousePos.x-range) + "px;";
				var top = "top: " + getRandomInt(mousePos.y-range, mousePos.y-range) + "px;";
				if(colorR >= 230) {colorR = 255;};
				if (colorG >= 230) {colorG = 255;};
				if (colorB >= 230) {colorB = 255;};
				var shadowColor = "box-shadow: 0px 0px 4px 4px rgb(255, 255, 255, 0.8);";
				var border = "border: 1px solid rgb("+colorR+","+colorG+","+colorB+");";
				var style = left+top+color+size+shadowColor+border;
				$("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
				mousePos.ox = mousePos.x;
				mousePos.oy = mousePos.y;
			}
		}
	}, 1);
}
function cursorEffectInactive () {
	clearInterval(drawBall);
}