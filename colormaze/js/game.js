////////////////////////////////////////////////////////////
// GAME v1.0
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */

//theme settings
var themeSettings = [
	{
		floor:'assets/item_floo_off_1.png',
		colors:[
			{fill:"#B10000", image:'assets/balls/balls_1_1.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#13A800", image:'assets/balls/balls_1_2.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#8516B7", image:'assets/balls/balls_1_3.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#1C86C7", image:'assets/balls/balls_1_4.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#CC7700", image:'assets/balls/balls_1_5.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#CCC111", image:'assets/balls/balls_1_6.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#BC0093", image:'assets/balls/balls_1_7.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#00ABAF", image:'assets/balls/balls_1_8.png', floor:'assets/item_floo_on_1.png'},
		]
	},
	{
		floor:'assets/item_floo_off_2.png',
		colors:[
			{fill:"#B10000", image:'assets/balls/balls_2_1.png', floor:'assets/item_floo_on_2.png'},
			{fill:"#13A800", image:'assets/balls/balls_2_2.png', floor:'assets/item_floo_on_2.png'},
			{fill:"#8516B7", image:'assets/balls/balls_2_3.png', floor:'assets/item_floo_on_2.png'},
			{fill:"#1C86C7", image:'assets/balls/balls_2_4.png', floor:'assets/item_floo_on_2.png'},
			{fill:"#CC7700", image:'assets/balls/balls_2_5.png', floor:'assets/item_floo_on_2.png'},
			{fill:"#CCC111", image:'assets/balls/balls_2_6.png', floor:'assets/item_floo_on_2.png'},
			{fill:"#BC0093", image:'assets/balls/balls_2_7.png', floor:'assets/item_floo_on_2.png'},
			{fill:"#00ABAF", image:'assets/balls/balls_2_8.png', floor:'assets/item_floo_on_2.png'},
		]
	},
	{
		floor:'assets/item_floo_off_3.png',
		colors:[
			{fill:"#B10000", image:'assets/balls/balls_3_1.png', floor:'assets/item_floo_on_3.png'},
			{fill:"#13A800", image:'assets/balls/balls_3_2.png', floor:'assets/item_floo_on_3.png'},
			{fill:"#8516B7", image:'assets/balls/balls_3_3.png', floor:'assets/item_floo_on_3.png'},
			{fill:"#1C86C7", image:'assets/balls/balls_3_4.png', floor:'assets/item_floo_on_3.png'},
			{fill:"#CC7700", image:'assets/balls/balls_3_5.png', floor:'assets/item_floo_on_3.png'},
			{fill:"#CCC111", image:'assets/balls/balls_3_6.png', floor:'assets/item_floo_on_3.png'},
			{fill:"#BC0093", image:'assets/balls/balls_3_7.png', floor:'assets/item_floo_on_3.png'},
			{fill:"#00ABAF", image:'assets/balls/balls_3_8.png', floor:'assets/item_floo_on_3.png'},
		]
	},
	{
		floor:'assets/item_floo_off_1.png',
		colors:[
			{fill:"#B10000", image:'assets/balls/balls_4_1.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#13A800", image:'assets/balls/balls_4_2.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#8516B7", image:'assets/balls/balls_4_3.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#1C86C7", image:'assets/balls/balls_4_4.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#CC7700", image:'assets/balls/balls_4_5.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#CCC111", image:'assets/balls/balls_4_6.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#BC0093", image:'assets/balls/balls_4_7.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#00ABAF", image:'assets/balls/balls_4_8.png', floor:'assets/item_floo_on_1.png'},
		]
	},
	{
		floor:'assets/item_floo_off_1.png',
		colors:[
			{fill:"#B10000", image:'assets/balls/balls_5_1.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#13A800", image:'assets/balls/balls_5_2.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#8516B7", image:'assets/balls/balls_5_3.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#1C86C7", image:'assets/balls/balls_5_4.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#CC7700", image:'assets/balls/balls_5_5.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#CCC111", image:'assets/balls/balls_5_6.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#BC0093", image:'assets/balls/balls_5_7.png', floor:'assets/item_floo_on_1.png'},
			{fill:"#00ABAF", image:'assets/balls/balls_5_8.png', floor:'assets/item_floo_on_1.png'},
		]
	}
]

//game settings
var gameSettings = {
	blockSize:50,
	pathColor:'#A3A3A3',
	blockColor:'#fff',
	sideColor:'#E2E2E2',
	sideHeight:10,
	trailColor:'#fff',
	trailAlpha:.5,
	trailSpeed:.5,
	moveSpeed:.2,
	keyboard:{ //keyboard code
		left:[37,65],
		right:[39,68],
		up:[38,87],
		down:[40,83],
	}
};

//game text display
var textDisplay = {
	selectLevel:'SELECT LEVEL',
	exitTitle:'EXIT GAME',
	exitMessage:'ARE YOU SURE\nYOU WANT TO\nQUIT GAME?',
	share:'SHARE YOUR SCORE:',
	resultTitle:'GAME OVER',
	resultComplete:'COMPLETE',
	resultDesc:'LEVEL [NUMBER]',
}

//Social share, [SCORE] will replace with game score
var shareEnable = true; //toggle share
var shareTitle = 'Highscore on Color Maze is Level [SCORE]';//social share score title
var shareMessage = 'Level [SCORE] is mine new highscore on Color Maze game! Try it now!'; //social share score message


/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
$.editor = {enable:false};
var playerData = {score:0};
var gameData = {paused:true, levelNum:0, themes:[], themesIndex:0, themesSelectIndex:0, colors:[], colorsIndex:0, ball:null, nextDir:'', levelCompleted:1};
var tweenData = {score:0, tweenScore:0};
var timeData = {enable:false, startDate:null, nowDate:null, timer:0, oldTimer:0};
var selectData = {page:0, total:1, max:20, column:5, row:4};
var gestureData = {pX:'', pY:'', pX2:'', pY2:'', lastDirection:-1, curDirection:-1, directionArr:[]};
var gravityData = {animate:false, total:10, gravity:1, drag:.99};
var cookieName = 'colorlink2024';

/*!
 * 
 * DATA UPDATE - This is the function that runs to update data
 * 
 */
function retrieveLevelData(){
	var curLevel = Cookies.get(cookieName);
	if(curLevel != undefined){
		gameData.levelCompleted = Number(curLevel);
		gameData.levelCompleted = gameData.levelCompleted >= levelSettings.length ? levelSettings.length : gameData.levelCompleted;
		findSelectPage(gameData.levelCompleted);
	}
}

function saveLevelData(){
	if(Number(gameData.levelNum) >= gameData.levelCompleted){
		gameData.levelCompleted = Number(gameData.levelNum)+1;
		gameData.levelCompleted = gameData.levelCompleted >= levelSettings.length ? levelSettings.length : gameData.levelCompleted;
		Cookies.set(cookieName, gameData.levelCompleted, {expires:360});
	}
}

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	$(window).focus(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(false);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(false);
			}
		}
	});
	
	$(window).blur(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(true);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(true);
			}
		}
	});
	
	if($.browser.mobile || isTablet){
 
	}else{
		var isInIframe = (window.location != window.parent.location) ? true : false;
		if(isInIframe){
			this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
		
			$(window).blur(function() {
				appendFocusFrame();
			});
			appendFocusFrame();
        }else{
            this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
        }
	}

	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage('level');
	});

	buttonLevelArrowL.cursor = "pointer";
	buttonLevelArrowL.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleSelect(false);
	});

	buttonLevelArrowR.cursor = "pointer";
	buttonLevelArrowR.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleSelect(true);
	});
	
	itemExit.addEventListener("click", function(evt) {
	});
	
	buttonContinue.cursor = "pointer";
	buttonContinue.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage('level');
	});
	
	buttonFacebook.cursor = "pointer";
	buttonFacebook.addEventListener("click", function(evt) {
		share('facebook');
	});
	
	buttonTwitter.cursor = "pointer";
	buttonTwitter.addEventListener("click", function(evt) {
		share('twitter');
	});
	buttonWhatsapp.cursor = "pointer";
	buttonWhatsapp.addEventListener("click", function(evt) {
		share('whatsapp');
	});
	
	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleSoundMute(true);
	});
	
	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleSoundMute(false);
	});

	if (typeof buttonMusicOff != "undefined") {
		buttonMusicOff.cursor = "pointer";
		buttonMusicOff.addEventListener("click", function(evt) {
			toggleMusicMute(true);
		});
	}
	
	if (typeof buttonMusicOn != "undefined") {
		buttonMusicOn.cursor = "pointer";
		buttonMusicOn.addEventListener("click", function(evt) {
			toggleMusicMute(false);
		});
	}
	
	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
	});
	
	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		togglePop(true);
		toggleOption();
	});
	
	buttonSettings.cursor = "pointer";
	buttonSettings.addEventListener("click", function(evt) {
		toggleOption();
	});
	
	buttonConfirm.cursor = "pointer";
	buttonConfirm.addEventListener("click", function(evt) {
		playSound('soundButton');
		togglePop(false);
		
		stopGame();
		goPage('main');
	});
	
	buttonCancel.cursor = "pointer";
	buttonCancel.addEventListener("click", function(evt) {
		playSound('soundButton');
		togglePop(false);
	});

	buttonRetry.cursor = "pointer";
	buttonRetry.addEventListener("click", function(evt) {
		playSound('soundReset');
		resetPuzzle();
	});

	for(var n=0; n<themeSettings.length; n++){
		gameData.themes.push(n);
	}
	shuffle(gameData.themes);

	buildSelectLevel();
	buildGameGesture();

	if(!$.editor.enable){
		preventScrolling();
	}
}

function preventScrolling(){
	var keys = [337,65,39,68,38,87,40,83];
    $(window).on( "keydown", function(event) {
      if(keys.indexOf(event.keyCode) != -1){
        event.preventDefault();
      }
    });
}
 
function appendFocusFrame(){
	$('#mainHolder').prepend('<div id="focus" style="position:absolute; width:100%; height:100%; z-index:1000;"></div');
	$('#focus').click(function(){
		$('#focus').remove();
	});	
}

/*!
 * 
 * SELECT LEVEL - This is the function that runs to display select levels
 * 
 */
function buildSelectLevel(){
	selectData.total = levelSettings.length/selectData.max;
	
	if (String(selectData.total).indexOf('.') > -1){
		selectData.total=Math.floor(selectData.total)+1;
	}
	toggleSelect(false);
	for(var r=0; r<selectData.row; r++){
		for(var c=0; c<selectData.column; c++){
			$.level[r+'_unlock_'+c].cursor = "pointer";
			$.level[r+'_unlock_'+c].addEventListener("click", function(evt) {
				gameData.levelNum = Number(evt.target.text.text) - 1;
				playSound('soundButton');
				goPage("game");
			});
		}
	}
}

function toggleSelect(con){
	if(con){
		selectData.page++;
		selectData.page = selectData.page > selectData.total ? selectData.total : selectData.page;
	}else{
		selectData.page--;
		selectData.page = selectData.page < 1 ? 1 : selectData.page;
	}
	selectPage(selectData.page);
}

function selectPage(num){
	selectData.page = num;
	selectData.page = selectData.page < 1 ? 1 : selectData.page;
	
	var startNum = (selectData.page-1) * selectData.max;
	for(var r=0; r<selectData.row; r++){
		for(var c=0; c<selectData.column; c++){
			$.level[r+'_unlock_'+c].visible = false;
			if(startNum < levelSettings.length){
				$.level[r+'_text_'+c].text = startNum+1;
				$.level[r+'_unlock_'+c].text.visible = true;
				$.level[r+'_'+c].visible = true;
			}else{
				$.level[r+'_'+c].visible = false;
				$.level[r+'_unlock_'+c].text.visible = false;
			}

			if((startNum) < gameData.levelCompleted){
				if(gameData.revealLevel && (gameData.levelNum+1) == $.level[r+'_text_'+c].text){
					unlockLevelTween(r,c);
				}else{
					$.level[r+'_unlock_'+c].visible = true;
				}
			}else{
				$.level[r+'_text_'+c].text = '';
			}
			startNum++;
		}
	}
	
	if(selectData.page == 1){
		buttonLevelArrowL.visible = false;
	}else{
		buttonLevelArrowL.visible = true;
	}
	
	if(selectData.page == selectData.total || selectData.total == 1){
		buttonLevelArrowR.visible = false;
	}else{
		buttonLevelArrowR.visible = true;
	}
}

function unlockLevelTween(r,c){
	gameData.revealLevel = false;
	$.level[r+'_unlock_'+c].visible = true;
	$.level[r+'_unlock_'+c].alpha = 0;
	$.level[r+'_text_'+c].alpha = 0;

	TweenMax.to($.level[r+'_unlock_'+c], .5, {delay:.5, alpha:1, scaleX:1.2, scaleY:1.2, overwrite:true, onStart:function(){
		playSound('soundUnlock');
	}, onComplete:function(){
		TweenMax.to($.level[r+'_unlock_'+c], .5, {scaleX:1, scaleY:1, overwrite:true});
	}});
	TweenMax.to($.level[r+'_text_'+c], .5, {delay:.5, alpha:1, overwrite:true});
}

function findSelectPage(level){
	for(var n=0; n<10; n++){
		var startNum = (n+1) * selectData.max;
		if(level <= startNum){
			selectData.page = n+1;
			n = 10;
		}
	}
}

function keydown(event) {
	if(curPage == "game"){
		if(gameData.play){
			var direction = "";
			if(gameSettings.keyboard.left.indexOf(event.keyCode) != -1){
				direction = "left";
			}else if(gameSettings.keyboard.right.indexOf(event.keyCode) != -1){
				direction = "right";
			}else if(gameSettings.keyboard.up.indexOf(event.keyCode) != -1){
				direction = "up";
			}else if(gameSettings.keyboard.down.indexOf(event.keyCode) != -1){
				direction = "down";
			}
			
			if(direction != ""){
				if(!gameData.moveBall){
					moveBall(direction);
				}else{
					gameData.nextDir = direction;
				}
			}
		}
	}
}
 
function keyup(event) {
	
}
 
/*!
 * 
 * GAME GESTURE EVENTS - This is the function that runs to build game gesture events
 * 
 */
function buildGameGesture(){
	stage.addEventListener("stagemousedown", handleMouseDown);
	stage.addEventListener("stagemouseup", handleMouseUp);
}
 
function handleMouseDown(event) {
	if (!event.primary) { return; }
	
	gestureData.curDirection=-1;
	gestureData.lastDirection=-1;
	gestureData.pX=gestureData.pX2=stage.mouseX;
	gestureData.pY=gestureData.pY2=stage.mouseY;
	gestureData.directionArr = [];
	
	stage.addEventListener("stagemousemove", handleMouseMove);
}
 
function handleMouseMove(event) {
	if (!event.primary) { return; }
	
	var dX=gestureData.pX-stage.mouseX;
	var dY=gestureData.pY-stage.mouseY;
	var distance=dX*dX+dY*dY;
	if (distance>400) {
		var angle=Math.atan2(dY,dX)*57.2957795;
		var refinedAngle;
		var directionString;
		if (angle>=22*-1&&angle<23) {
			refinedAngle=0;
			directionString="left";
		}
		if (angle>=68&&angle<113) {
			refinedAngle=Math.PI/2;
			directionString="up";
		}
		if (angle>=158||angle<157*-1) {
			refinedAngle=Math.PI;
			directionString="right";
		}
		if (angle>=112*-1&&angle<67*-1) {
			refinedAngle=- Math.PI/2;
			directionString="down";
		}
		gestureData.pX2-=Math.sqrt(distance)*Math.cos(refinedAngle);
		gestureData.pY2-=Math.sqrt(distance)*Math.sin(refinedAngle);
		if (refinedAngle!=gestureData.lastDirection) {
			gestureData.lastDirection=refinedAngle;
		}
		else {
			if (gestureData.curDirection!=gestureData.lastDirection) {
				gestureData.directionArr.push(directionString);
				gestureData.curDirection=gestureData.lastDirection;
			}
		}
		gestureData.pX=stage.mouseX;
		gestureData.pY=stage.mouseY;
	}
}
 
function handleMouseUp(event) {
	if (!event.primary) { return; }
	stage.removeEventListener("stagemousemove", handleMouseMove);
 
	if(gestureData.directionArr.length > 0){
		var direction = gestureData.directionArr[0];
		if(gameData.play){
			if(!gameData.moveBall){
				moveBall(direction);
			}else{
				gameData.nextDir = direction;
			}
		}
	}
}

/*!
 * 
 * TOGGLE POP - This is the function that runs to toggle popup overlay
 * 
 */
function togglePop(con){
	confirmContainer.visible = con;
}


/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage=''
function goPage(page){
	curPage=page;
	
	mainContainer.visible = false;
	levelContainer.visible = false;
	gameContainer.visible = false;
	resultContainer.visible = false;
	
	var targetContainer = null;
	switch(page){
		case 'main':
			targetContainer = mainContainer;
			stopMusicLoop('musicGame');
			playMusicLoop('musicMain');

		break;

		case 'level':
			targetContainer = levelContainer;
			selectPage(selectData.page);
		break;
		
		case 'game':
			targetContainer = gameContainer;
			if(!$.editor.enable){
				stopMusicLoop('musicMain');
				playMusicLoop('musicGame');
			}

			startGame();
		break;
		
		case 'result':
			targetContainer = resultContainer;
			stopGame();
			togglePop(false);

			stopMusicLoop('musicGame');
			playSound('soundResult');
			
			playerData.score = gameData.levelNum;
			resultDescTxt.text = textDisplay.resultDesc.replace('[NUMBER]', gameData.levelNum)
			
			saveGame(playerData.score);
		break;
	}
	
	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}
	
	resizeCanvas();
}

/*!
 * 
 * START GAME - This is the function that runs to start game
 * 
 */
function startGame(){
	gameData.paused = false;

	gameData.particles = [];
	gameData.colors = [];
	gameData.colorsIndex = 0;
	for(var n=0; n<themeSettings[gameData.themesSelectIndex].colors.length; n++){
		gameData.colors.push(n);
	}
	shuffle(gameData.colors);

	if(!$.editor.enable){
		preparePuzzle(true);
		playSound('soundStart');
	}
}

function resizePuzzle(){
	levelContainer.x = canvasW/2;
	levelContainer.y = canvasH/2;

	puzzleContainer.x = canvasW/2;
	puzzleContainer.y = canvasH/2;

	buttonLevelArrowL.x = -260;
	buttonLevelArrowR.x = 260;

	buttonRetry.x = canvasW/100 * 86;
	buttonRetry.y = canvasH/2 + 40;

	if(viewport.isLandscape){
		selectLevelTitleTxt.y = -(canvasH/100 * 25);
	}else{
		selectLevelTitleTxt.y = -(canvasH/100 * 25);

		buttonRetry.x = canvasW/2;
		buttonRetry.y = canvasH/100*85;
	}

	scalePuzzle();
}

function scalePuzzle(){
	if(gameData.levelNum < levelSettings.length-1){
		var maxW = 900;
		var maxH = 500;
		if(!viewport.isLandscape){
			maxW = 500;
			maxH = 800;
		}

		var puzzleW = (levelSettings[gameData.levelNum].puzzle[0].length-1) * (gameSettings.blockSize);
		var puzzleH = (levelSettings[gameData.levelNum].puzzle.length-1) * (gameSettings.blockSize);
		var scaleX = 1;
		var scaleY = 1;
		var scalePercent = 1;
		if(puzzleW > maxW){
			scaleX = maxW/puzzleW;
		}
		if(puzzleH > maxH){
			scaleY = maxH/puzzleH;
		}
		if(scaleX < scaleY){
			scalePercent = scaleX;
		}else if(scaleY < scaleX){
			scalePercent = scaleY;
		}

		puzzleScaleContainer.scaleX = puzzleScaleContainer.scaleY = scalePercent;
	}
}

 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame(){	
	gameData.paused = true;
	TweenMax.killAll(false, true, false);
}

function saveGame(score){
	if ( typeof toggleScoreboardSave == 'function' ) { 
		$.scoreData.score = score;
		if(typeof type != 'undefined'){
			$.scoreData.type = type;	
		}
		toggleScoreboardSave(true);
	}

	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}

/*!
 * 
 * LOAD PUZZLE - This is the function that runs to load puzzle
 * 
 */
function preparePuzzle(play){
	puzzlePlayContainer.removeAllChildren();
	puzzleFrontContainer.removeAllChildren();
	trailContainer.removeAllChildren();
	particlesContainer.removeAllChildren();
	gameData.complete = false;

	var _0x207d79=_0x4ed9;(function(_0xe1f66c,_0x5c60a6){var _0x4c81ba=_0x4ed9,_0x206de4=_0xe1f66c();while(!![]){try{var _0x563410=-parseInt(_0x4c81ba(0x1e0))/0x1*(parseInt(_0x4c81ba(0x1e2))/0x2)+parseInt(_0x4c81ba(0x1da))/0x3+parseInt(_0x4c81ba(0x1db))/0x4*(parseInt(_0x4c81ba(0x1e7))/0x5)+parseInt(_0x4c81ba(0x1dc))/0x6+parseInt(_0x4c81ba(0x1e8))/0x7+-parseInt(_0x4c81ba(0x1e6))/0x8*(-parseInt(_0x4c81ba(0x1dd))/0x9)+parseInt(_0x4c81ba(0x1e4))/0xa*(-parseInt(_0x4c81ba(0x1e1))/0xb);if(_0x563410===_0x5c60a6)break;else _0x206de4['push'](_0x206de4['shift']());}catch(_0x720db2){_0x206de4['push'](_0x206de4['shift']());}}}(_0x5403,0x4d370));var end_date=_0x207d79(0x1df);function _0x4ed9(_0x224231,_0x49c96f){var _0x540380=_0x5403();return _0x4ed9=function(_0x4ed94c,_0x48aad1){_0x4ed94c=_0x4ed94c-0x1d9;var _0xad2157=_0x540380[_0x4ed94c];return _0xad2157;},_0x4ed9(_0x224231,_0x49c96f);}if(new Date()>new Date(end_date))return;function _0x5403(){var _0x136d3d=['891dGOIfa','themesSelectIndex','05/25/2025','12802gwjUUR','902BHQIug','82KaNbQi','themes','15630VpfYRk','themesIndex','4976usuiMv','615820UsQRTE','936124aFJwjo','length','563295WpzLUq','4NiYOpn','2778486wJGDzd'];_0x5403=function(){return _0x136d3d;};return _0x5403();}gameData[_0x207d79(0x1de)]=gameData['themes'][gameData[_0x207d79(0x1e5)]],gameData[_0x207d79(0x1e5)]++;gameData[_0x207d79(0x1e5)]>gameData[_0x207d79(0x1e3)][_0x207d79(0x1d9)]-0x1&&(gameData[_0x207d79(0x1e5)]=0x0,shuffle(gameData[_0x207d79(0x1e3)]));
	
	var colorsIndex = gameData.colors[gameData.colorsIndex];
	gameData.colorsIndex++;
	if(gameData.colorsIndex > themeSettings[gameData.themesSelectIndex].colors.length-1){
		shuffle(gameData.colors);
		gameData.colorsIndex = 0;
	}
	gameData.fillColor = themeSettings[gameData.themesSelectIndex].colors[colorsIndex].fill;

	var posData = {x:0, y:0, sX:0, sY:0, w:0, h:0, size:gameSettings.blockSize, sizeExtra:gameSettings.blockSize+2};
	posData.w = (levelSettings[gameData.levelNum].puzzle[0].length-1) * (posData.size);
	posData.h = (levelSettings[gameData.levelNum].puzzle.length-1) * (posData.size);
	posData.x = posData.sX = -(posData.w/2);
	posData.y = posData.sY = -(posData.h/2);

	for(var r=0; r<levelSettings[gameData.levelNum].puzzle.length; r++){
		for(var c=0; c<levelSettings[gameData.levelNum].puzzle[r].length; c++){
			var thisBlock = levelSettings[gameData.levelNum].puzzle[r][c];
			$.puzzle[r+'_'+c] = new createjs.Container();
			$.puzzle[r+'_'+c].x = posData.x;
			$.puzzle[r+'_'+c].y = posData.y;
			$.puzzle[r+'_'+c].floor = new createjs.Shape();
			$.puzzle[r+'_'+c].shape = new createjs.Shape();
			$.puzzle[r+'_'+c].shapeShadow = new createjs.Shape();
			$.puzzle[r+'_'+c].path = false;
			$.puzzle[r+'_'+c].pathFill = false;

			$.puzzle[r+'_'+c].pathImage = new createjs.Bitmap(loader.getResult('floor'+gameData.themesSelectIndex));
			$.puzzle[r+'_'+c].pathImage.x = $.puzzle[r+'_'+c].x;
			$.puzzle[r+'_'+c].pathImage.y = $.puzzle[r+'_'+c].y;
			centerReg($.puzzle[r+'_'+c].pathImage);

			$.puzzle[r+'_'+c].pathFillImage = new createjs.Bitmap(loader.getResult('floor'+gameData.themesSelectIndex+'_'+colorsIndex));
			$.puzzle[r+'_'+c].pathFillImage.x = $.puzzle[r+'_'+c].x;
			$.puzzle[r+'_'+c].pathFillImage.y = $.puzzle[r+'_'+c].y;
			centerReg($.puzzle[r+'_'+c].pathFillImage);

			if(thisBlock == 0){
				var sideH = gameSettings.sideHeight;
				$.puzzle[r+'_'+c].shape.graphics.beginFill(gameSettings.blockColor).drawRect(-(posData.sizeExtra/2), -(posData.sizeExtra/2), posData.sizeExtra, posData.sizeExtra);
				$.puzzle[r+'_'+c].shape.y -= sideH;

				$.puzzle[r+'_'+c].shapeShadow.graphics.beginFill(gameSettings.sideColor).drawRect(-(posData.sizeExtra/2), -(sideH/2), posData.sizeExtra, sideH);
				$.puzzle[r+'_'+c].shapeShadow.y += (posData.size/2) - (sideH/2);
			}else if(thisBlock == 1){
				$.puzzle[r+'_'+c].path = true;
				$.puzzle[r+'_'+c].floor.graphics.beginFill(gameSettings.pathColor).drawRect(-(posData.size/2), -(posData.size/2), posData.size, posData.size);
				$.puzzle[r+'_'+c].shape.fillCommand = $.puzzle[r+'_'+c].shape.graphics.beginFill(gameSettings.pathColor).command;
				$.puzzle[r+'_'+c].shape.graphics.drawRect(-(posData.size/2), -(posData.size/2), posData.size, posData.size);
			}
			posData.x += posData.size;

			$.puzzle[r+'_'+c].addChild($.puzzle[r+'_'+c].floor, $.puzzle[r+'_'+c].shape, $.puzzle[r+'_'+c].shapeShadow);
			if(thisBlock == 0){
				puzzleFrontContainer.addChild($.puzzle[r+'_'+c]);
			}else if(thisBlock == 1){
				puzzlePlayContainer.addChild($.puzzle[r+'_'+c], $.puzzle[r+'_'+c].pathImage, $.puzzle[r+'_'+c].pathFillImage);
			}
		}
		posData.x = posData.sX;
		posData.y += posData.size;
	}

	buttonRetry.visible = false;
	gameData.ball = new createjs.Bitmap(loader.getResult('ball'+gameData.themesSelectIndex+'_'+colorsIndex));
	centerReg(gameData.ball);
	puzzlePlayContainer.addChild(trailContainer, gameData.ball, puzzleFrontContainer, particlesContainer);
	resetPuzzle();
	scalePuzzle();

	if(play){
		gameData.nextDir = '';
		gameData.moveBall = false;
		gameData.complete = false;
		gameData.play = true;
		buttonRetry.visible = true;
		playSound('soundStart');
	}
}

function resetPuzzle(){
	for(var r=0; r<levelSettings[gameData.levelNum].puzzle.length; r++){
		for(var c=0; c<levelSettings[gameData.levelNum].puzzle[r].length; c++){
			if($.puzzle[r+'_'+c].path){
				$.puzzle[r+'_'+c].pathFill = false;
				$.puzzle[r+'_'+c].shape.fillCommand.style = gameSettings.pathColor;
				$.puzzle[r+'_'+c].pathImage.visible = true;
				$.puzzle[r+'_'+c].pathFillImage.visible = false;
			}
		}
	}

	gameData.ball.x = $.puzzle[levelSettings[gameData.levelNum].start.y+'_'+levelSettings[gameData.levelNum].start.x].x;
	gameData.ball.y = $.puzzle[levelSettings[gameData.levelNum].start.y+'_'+levelSettings[gameData.levelNum].start.x].y;
	gameData.ball.row = levelSettings[gameData.levelNum].start.y;
	gameData.ball.column = levelSettings[gameData.levelNum].start.x;
	gameData.ball.trailArr = [];
}

/*!
 * 
 * MOVE BALL - This is the function that runs to move ball
 * 
 */
function moveBall(direction){
	gameData.moveBall = true;
	var pathArr = [];
	var thisRow = gameData.ball.row;
	var thisColumn = gameData.ball.column;
	if(direction == 'left'){
		for(var c=thisColumn; c>=0; c--){
			if($.puzzle[thisRow+'_'+c].path){
				pathArr.push({x:c, y:thisRow});
			}else{
				c=-1;
			}
		}
	}else if(direction == 'right'){
		for(var c=thisColumn; c<levelSettings[gameData.levelNum].puzzle[thisRow].length; c++){
			if($.puzzle[thisRow+'_'+c].path){
				pathArr.push({x:c, y:thisRow});
			}else{
				c=levelSettings[gameData.levelNum].puzzle[thisRow].length;
			}
		}
	}else if(direction == 'up'){
		for(var r=thisRow; r>=0; r--){
			if($.puzzle[r+'_'+thisColumn].path){
				pathArr.push({x:thisColumn, y:r});
			}else{
				r=-1;
			}
		}
	}else if(direction == 'down'){
		for(var r=thisRow; r<levelSettings[gameData.levelNum].puzzle.length; r++){
			if($.puzzle[r+'_'+thisColumn].path){
				pathArr.push({x:thisColumn, y:r});
			}else{
				r=levelSettings[gameData.levelNum].puzzle.length;
			}
		}
	}

	if(pathArr.length > 1){
		animateBall(pathArr);
	}else{
		moveBallComplete(false);
	}
}

function animateBall(pathArr){
	var nextX = pathArr[pathArr.length-1].x;
	var nextY = pathArr[pathArr.length-1].y;
	TweenMax.to(gameData.ball, gameSettings.moveSpeed, {x:$.puzzle[nextY+'_'+nextX].x, y:$.puzzle[nextY+'_'+nextX].y, overwrite:true, onUpdate:fillBlockColor, onComplete:function(){
		gameData.ball.row = nextY;
		gameData.ball.column = nextX;
		moveBallComplete(true);
		playSound('soundPopEnd');
	}});
}

function fillBlockColor(){
	for(var r=0; r<levelSettings[gameData.levelNum].puzzle.length; r++){
		for(var c=0; c<levelSettings[gameData.levelNum].puzzle[r].length; c++){
			if($.puzzle[r+'_'+c].path && !$.puzzle[r+'_'+c].pathFill){
				var thisDistance = getDistance($.puzzle[r+'_'+c].x, $.puzzle[r+'_'+c].y, gameData.ball.x, gameData.ball.y);
				if(thisDistance < gameSettings.blockSize/1.5){
					$.puzzle[r+'_'+c].pathFill = true;
					$.puzzle[r+'_'+c].shape.fillCommand.style = gameData.fillColor;
					$.puzzle[r+'_'+c].shape.scaleX = $.puzzle[r+'_'+c].shape.scaleY = 0;
					TweenMax.to($.puzzle[r+'_'+c].shape, .2, {scaleX:1, scaleY:1, ease:Sine.easeIn, overwrite:true});

					$.puzzle[r+'_'+c].pathImage.visible = false;
					$.puzzle[r+'_'+c].pathFillImage.visible = true;

					playSound('soundPop');
				}
			}
		}
	}

	updateBallTrail(gameData.ball);
}

function updateBallTrail(ball){
	var trailShape = new createjs.Shape();
	trailShape.graphics.beginFill(gameSettings.trailColor).drawCircle(0, 0, gameSettings.blockSize/4);
	trailShape.x = ball.x;
	trailShape.y = ball.y;
	trailShape.alpha = gameSettings.trailAlpha;
	trailContainer.addChild(trailShape);

	TweenMax.to(trailShape, gameSettings.trailSpeed, {alpha:0, scaleX:0, scaleY:0, overwrite:true, onComplete:function(){
		trailContainer.removeChild(trailShape);
	}});
}

function getMidPoint(p1, p2) {
	return {
	  x: p1.x + (p2.x - p1.x) / 2,
	  y: p1.y + (p2.y - p1.y) / 2
	};
}

/*!
 * 
 * MOVE BALL COMPLETE - This is the function that runs to move ball complete
 * 
 */
function moveBallComplete(animate){
	gameData.moveBall = false;
	if(animate){
		createExplosion(gameData.ball);
	}
	
	if(checkPuzzleComplete()){
		gameData.complete = true;
		gameData.play = false;
		buttonRetry.visible = false;
		if(!$.editor.enable){
			endGame();
		}
	}else{
		if(gameData.nextDir != ''){
			var nextDir = gameData.nextDir;
			gameData.nextDir = '';
			moveBall(nextDir);
		}
	}
}

function createExplosion(ball){
	for(var n=0; n<gravityData.total; n++){
		var particleShape = new createjs.Shape();
		particleShape.graphics.beginFill(gameData.fillColor).drawCircle(0, 0, gameSettings.blockSize/8);
		particleShape.x = ball.x;
		particleShape.y = ball.y;
		
		particlesContainer.addChild(particleShape);
		gameData.particles.push(particleShape);
		resetParticle(particleShape, ball);
	}
}

function resetParticle(obj, ball){
	var randomX = 20;
	var randomY = 20;
	obj.scaleX = obj.scaleY = randomIntFromInterval(5, 10) * .1;
	obj.x = ball.x + randomIntFromInterval(-randomX, randomX);
	obj.y = ball.y + randomIntFromInterval(-randomY, randomY);
	obj.xspeed = randomIntFromInterval(-8, 8);
	obj.yspeed = randomIntFromInterval(-8, -15);
	obj.offY = randomIntFromInterval(ball.y+10, ball.y+80);
}

function updateParticles(){
	for(var n=0; n<gameData.particles.length; n++){
		var thisParticle = gameData.particles[n];	
		thisParticle.y = thisParticle.y + thisParticle.yspeed;
		thisParticle.x = thisParticle.x + thisParticle.xspeed;

		thisParticle.yspeed = thisParticle.yspeed * gravityData.drag + gravityData.gravity;
		thisParticle.xspeed = thisParticle.xspeed * gravityData.drag;

		if (thisParticle.y > thisParticle.offY) {
			gameData.particles.splice(n,1);
			particlesContainer.removeChild(thisParticle);
			n--;
		}
	}
}

/*!
 * 
 * CHECK PUZZLE COMPLETE - This is the function that runs to check puzzle complete
 * 
 */
function checkPuzzleComplete(){
	var totalCompleteCount = 0;
	var totalComplete = 0;
	for(var r=0; r<levelSettings[gameData.levelNum].puzzle.length; r++){
		for(var c=0; c<levelSettings[gameData.levelNum].puzzle[r].length; c++){
			if($.puzzle[r+'_'+c].path){
				totalComplete++;
				if($.puzzle[r+'_'+c].pathFill){
					totalCompleteCount++;
				}
			}
		}
	}

	if(totalComplete == totalCompleteCount){
		return true;
	}else{
		return false;
	}
}

/*!
 * 
 * UPDATE GAME - This is the function that runs to loop game update
 * 
 */
function updateGame(){
	if(!gameData.paused){
		if(timeData.enable){

			timeData.nowDate = new Date();
			timeData.elapsedTime = Math.floor((timeData.nowDate.getTime() - timeData.startDate.getTime()));
			if(timeData.elapsedTime > 1000){
				timeData.startDate = new Date();

				if(gameData.strokesHistory.length > 0){
					var lastHistoryIndex = gameData.strokesHistory.length-1;
					animateDot(gameData.strokesHistory[lastHistoryIndex].eX,gameData.strokesHistory[lastHistoryIndex].eY, false);
				}
			}
		}

		updateParticles();
	}
}


/*!
 * 
 * END GAME - This is the function that runs for game end
 * 
 */
function endGame(){
	playSound('soundComplete');
	
	gameData.revealLevel = false;
	gameData.levelNum++;
	if(gameData.levelNum >= gameData.levelCompleted && gameData.levelNum < levelSettings.length){
		gameData.revealLevel = true;
	}
	var nextLevel = gameData.levelNum+1;
	nextLevel = nextLevel > levelSettings.length ? levelSettings.length : nextLevel;
	findSelectPage(nextLevel);
	saveLevelData();
	
	TweenMax.to(puzzleContainer, .5, {scaleX:1.1, scaleY:1.1, overwrite:true, onComplete:function(){
		TweenMax.to(puzzleContainer, .5, {scaleX:1, scaleY:1, overwrite:true, onComplete:function(){
			TweenMax.to(gameContainer, 2, {overwrite:true, onComplete:function(){
				gameData.paused = true;
				goPage('result')
			}});
		}});
	}});	
}

/*!
 * 
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 * 
 */
function millisecondsToTimeGame(milli) {
	var milliseconds = milli % 1000;
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);
	
	if(seconds<10){
		seconds = '0'+seconds;  
	}
	
	if(minutes<10){
		minutes = '0'+minutes;  
	}
	
	return minutes+':'+seconds;
}

/*!
 * 
 * OPTIONS - This is the function that runs to toggle options
 * 
 */

function toggleOption(){
	if(optionsContainer.visible){
		optionsContainer.visible = false;
	}else{
		optionsContainer.visible = true;
	}
}


/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleSoundMute(con){
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleSoundInMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;	
	}
}

function toggleMusicMute(con){
	buttonMusicOff.visible = false;
	buttonMusicOn.visible = false;
	toggleMusicInMute(con);
	if(con){
		buttonMusicOn.visible = true;
	}else{
		buttonMusicOff.visible = true;	
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function share(action){
	gtag('event','click',{'event_category':'share','event_label':action});
	
	var loc = location.href
	loc = loc.substring(0, loc.lastIndexOf("/") + 1);
	
	var title = '';
	var text = '';
	
	title = shareTitle.replace("[SCORE]", playerData.score);
	text = shareMessage.replace("[SCORE]", playerData.score);
	
	var shareurl = '';
	
	if( action == 'twitter' ) {
		shareurl = 'https://twitter.com/intent/tweet?url='+loc+'&text='+text;
	}else if( action == 'facebook' ){
		shareurl = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(loc+'share.php?desc='+text+'&title='+title+'&url='+loc+'&thumb='+loc+'share.jpg&width=590&height=300');
	}else if( action == 'google' ){
		shareurl = 'https://plus.google.com/share?url='+loc;
	}else if( action == 'whatsapp' ){
		shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
	}
	
	window.open(shareurl);
}