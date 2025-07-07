////////////////////////////////////////////////////////////
// EDIT PUZZLE
////////////////////////////////////////////////////////////
var edit = {show:true, option:'', isLandscape:true, shapeBlock:'#999', shapeSurface:'#ccff00', shapeStroke:'#000', shapeStrokeSize:5, shapeCicle:'#666'};

/*!
 * 
 * EDIT READY
 * 
 */
$(function() {
	$.editor.enable = true;
});

function loadEditPage(){
	optionsContainer.removeChild(buttonExit);
	
	$.get('editTools.html', function(data){
		$('body').prepend(data);
		$('#editWrapper').show();
		toggleEditOption();
		buildEditButtons();
		buttonSettings.visible = false;
	});		
}

/*!
 * 
 * BUILD EDIT BUTTONS - This is the function that runs to build edit buttons
 * 
 */
function buildEditButtons(){
	$('#toggleShowOption').click(function(){
		toggleShowOption();
	});
	
	$("#viewport").change(function() {
		if($(this).val() != ''){
			if($(this).val() == 'true'){
				viewport.isLandscape = edit.isLandscape = true;	
			}else{
				viewport.isLandscape = edit.isLandscape = false;
			}
			
			changeViewport(viewport.isLandscape);
			resizeGameFunc();
		}
	});
	
	//puzzles list
	gameData.levelNum = 0;
	buildPuzzleDropdown();
	
	$('#togglePanel').click(function(){
		togglePanel();
	});
	
	$("#puzzlesList").change(function() {
		if($(this).val() != ''){
			gameData.levelNum = $(this).val();
			loadPuzzleData();
		}
	});
	
	$('#prevPuzzle').click(function(){
		togglePuzzle(false);
	});
	
	$('#nextPuzzle').click(function(){
		togglePuzzle(true);
	});
	
	$('#addPuzzle').click(function(){
		actionPuzzle('new');
	});
	
	$('#removePuzzle').click(function(){
		actionPuzzle('remove');
	});
	
	$('#movePuzzleUp').click(function(){
		actionPuzzle('moveup');
	});
	
	$('#movePuzzleDown').click(function(){
		actionPuzzle('movedown');
	});
	
	$('#editPuzzle').click(function(){
		toggleEditOption('puzzle', true);
	});

	$('#puzzleBack').click(function(){
		toggleEditOption();
	});

	$('#testPlay').click(function(){
		toggleEditOption('play');
	});

	$('#stopTestPlay').click(function(){
		toggleEditOption('stop');
	});

	//puzzle
	$('#updatePuzzle').click(function(){
		updateEditPuzzle();
	});
	
	//generate
	$('#generateArray').click(function(){
		generateArray();
	});

	togglePuzzle(false);
	togglePuzzle(true);
}

 /*!
 * 
 * TOGGLE DISPLAY OPTION - This is the function that runs to toggle display option
 * 
 */
 
function toggleShowOption(){
	if(edit.show){
		edit.show = false;
		$('#editOption').hide();
		$('#toggleShowOption').val('Show Edit Option');
	}else{
		edit.show = true;
		$('#editOption').show();
		$('#toggleShowOption').val('Hide Edit Option');
	}
}

/*!
 * 
 * TOGGLE EDIT OPTION - This is the function that runs to toggle edit option
 * 
 */
function toggleEditOption(con){
	edit.option = con;
	edit.option = edit.option == undefined ? "default" : edit.option;
	
	$('#editPuzzleWrapper').hide();
	$('#puzzleEditWrapper').hide();
	$('#hiddenEditWrapper').hide();
	$('#playWrapper').hide();

	if(con == 'puzzle'){
		$('#puzzleEditWrapper').show();
		loadPuzzleData();
	}else if(con == 'play'){
		$('#playWrapper').show();
		toggleGamePlay(true);
	}else if(con == 'stop'){
		toggleGamePlay(false);
		toggleEditOption();
	}else{
		$('#editPuzzleWrapper').show();
	}

	loadEditPuzzle();
}


/*!
 * 
 * BUILD PUZZLE DROPDOWN - This is the function that runs to build puzzle dropdown
 * 
 */
function buildPuzzleDropdown(){
	$('#puzzlesList').empty();
	for(n=0;n<levelSettings.length;n++){
		$('#puzzlesList').append($("<option/>", {
			value: n,
			text: 'Puzzle '+(n+1)
		}));
	}
	$('#puzzlesList').val(gameData.levelNum);
	
	loadPuzzleData();
}

/*!
 * 
 * TOGGLE PUZZLE - This is the function that runs to toggle puzzle
 * 
 */
function togglePuzzle(con){
	if(con){
		gameData.levelNum++;
		gameData.levelNum = gameData.levelNum > levelSettings.length - 1 ? 0 : gameData.levelNum;
	}else{
		gameData.levelNum--;
		gameData.levelNum = gameData.levelNum < 0 ? levelSettings.length - 1 : gameData.levelNum;
	}
	
	$('#puzzlesList').prop("selectedIndex", gameData.levelNum);
	loadPuzzleData();
}

/*!
 * 
 * LOAD EDITOR PUZZLE - This is the function that runs to load editor data
 * 
 */
function loadPuzzleData(){
	edit.lastColumn = levelSettings[gameData.levelNum].puzzle[0].length;
	edit.lastRow = levelSettings[gameData.levelNum].puzzle.length;
	$('#puzzleRow').val(levelSettings[gameData.levelNum].puzzle.length);
	$('#puzzleColumn').val(levelSettings[gameData.levelNum].puzzle[0].length);

	$('#puzzlePosX').val(levelSettings[gameData.levelNum].start.x);
	$('#puzzlePosY').val(levelSettings[gameData.levelNum].start.y);
	loadEditPuzzle();
}

/*!
 * 
 * EDITOR ACTION - This is the function that runs to for editor action
 * 
 */
function actionPuzzle(action){
	switch(action){
		case 'new':
			levelSettings.push({
				puzzle:[
					[0,0,0],
					[0,1,0],
					[0,1,0],
					[0,1,0],
					[0,0,0],
				],
				start:{
					x:1,
					y:1
				}
			});
			gameData.levelNum = levelSettings.length - 1;
			buildPuzzleDropdown();
		break;
		
		case 'remove':
			if(levelSettings.length > 1){
				levelSettings.splice(gameData.levelNum, 1);
				gameData.levelNum = 0;
				buildPuzzleDropdown();
			}
		break;
		
		case 'moveup':
			if(gameData.levelNum-1 >= 0){
				swapArray(levelSettings, gameData.levelNum-1, gameData.levelNum);
				gameData.levelNum--;
				buildPuzzleDropdown();
			}
		break;
		
		case 'movedown':
			if(gameData.levelNum+1 < levelSettings.length){
				swapArray(levelSettings, gameData.levelNum+1, gameData.levelNum);
				gameData.levelNum++;
				buildPuzzleDropdown();
			}
		break;
	}
}

/*!
 * 
 * LOAD EDIT PUZZLE - This is the function that runs to load edit puzzle
 * 
 */
function loadEditPuzzle(){
	puzzlePlayContainer.visible = false;
	puzzleEditContainer.visible = false;

	if(edit.option == 'puzzle'){
		puzzleEditContainer.visible = true;
		buildPuzzleEdit();
	}else{
		puzzlePlayContainer.visible = true;
		preparePuzzle();
	}
}

/*!
 * 
 * UPDATE EDIT PUZZLE - This is the function that runs to update edit puzzle
 * 
 */
function updateEditPuzzle(){
	levelSettings[gameData.levelNum].start.x = Number($('#puzzlePosX').val());
	levelSettings[gameData.levelNum].start.y = Number($('#puzzlePosY').val());

	var newRow = Number($('#puzzleRow').val());
	var newColumn = Number($('#puzzleColumn').val());
	if(edit.lastRow != newRow || edit.lastColumn != newColumn){
		levelSettings[gameData.levelNum].puzzle = [];
		for(var r=0; r<newRow; r++){
			levelSettings[gameData.levelNum].puzzle[r] = [];
			for(var c=0; c<newColumn; c++){
				levelSettings[gameData.levelNum].puzzle[r].push(0);
			}
		}
	}

	loadPuzzleData();
}

/*!
 * 
 * BUILD EDIT PUZZLE - This is the function that runs to build edit puzzle
 * 
 */
function buildPuzzleEdit(){
	puzzleEditContainer.removeAllChildren();

	var posData = {x:0, y:0, sX:0, sY:0, w:0, h:0, size:gameSettings.blockSize};
	posData.w = (levelSettings[gameData.levelNum].puzzle[0].length-1) * (posData.size);
	posData.h = (levelSettings[gameData.levelNum].puzzle.length-1) * (posData.size);
	posData.x = posData.sX = -(posData.w/2);
	posData.y = posData.sY = -(posData.h/2);

	for(var r=0; r<levelSettings[gameData.levelNum].puzzle.length; r++){
		for(var c=0; c<levelSettings[gameData.levelNum].puzzle[r].length; c++){
			var thisBlock = levelSettings[gameData.levelNum].puzzle[r][c];
			$.puzzle['edit'+r+'_'+c] = new createjs.Shape();
			$.puzzle['edit'+r+'_'+c].fillCommand = $.puzzle['edit'+r+'_'+c].graphics.beginFill(edit.shapeBlock).command;
			$.puzzle['edit'+r+'_'+c].graphics.setStrokeStyle(edit.shapeStrokeSize).beginStroke(edit.shapeStroke).drawRect(-(posData.size/2), -(posData.size/2), posData.size, posData.size);
			if(thisBlock == 1){
				$.puzzle['edit'+r+'_'+c].fillCommand.style = edit.shapeSurface;
			}
			$.puzzle['edit'+r+'_'+c].x = posData.x;
			$.puzzle['edit'+r+'_'+c].y = posData.y;
			$.puzzle['edit'+r+'_'+c].row = r;
			$.puzzle['edit'+r+'_'+c].column = c;
			posData.x += posData.size;

			$.puzzle['edit'+r+'_'+c].cursor = "pointer";
			$.puzzle['edit'+r+'_'+c].addEventListener("click", function(evt) {
				var thisBlock = levelSettings[gameData.levelNum].puzzle[evt.target.row][evt.target.column];
				levelSettings[gameData.levelNum].puzzle[evt.target.row][evt.target.column] = thisBlock == 1 ? 0 : 1;
				buildPuzzleEdit();
			});
			
			puzzleEditContainer.addChild($.puzzle['edit'+r+'_'+c]);
		}
		posData.x = posData.sX;
		posData.y += posData.size;
	}

	var shapeCircle = new createjs.Shape();
	shapeCircle.graphics.beginFill(edit.shapeCicle).drawCircle(0,0,posData.size/3);
	shapeCircle.x = $.puzzle['edit'+levelSettings[gameData.levelNum].start.y+'_'+levelSettings[gameData.levelNum].start.x].x;
	shapeCircle.y = $.puzzle['edit'+levelSettings[gameData.levelNum].start.y+'_'+levelSettings[gameData.levelNum].start.x].y;
	puzzleEditContainer.addChild(shapeCircle);

	scalePuzzle();
}

/*!
 * 
 * GENERATE ARRAY - This is the function that runs to generate array
 * 
 */
function generateArray(){
	var outputArray = '';
	var space = '					';
	var space2 = '						';
	var space3 = '							';
	var space4 = '								';
	
	outputArray += "[\n";
	for(e=0;e<levelSettings.length;e++){
		var puzzleArray = '';
		for(var l=0; l < levelSettings[e].puzzle.length; l++){
			puzzleArray += space3+"[";
			for(var ln=0; ln < levelSettings[e].puzzle[l].length; ln++){
				puzzleArray += levelSettings[e].puzzle[l][ln]+',';
			}
			puzzleArray += "],\n";
		}

		outputArray += space+"{\n";
		outputArray += space2+"puzzle:[\n";
		outputArray += puzzleArray;
		outputArray += space2+"],\n";
		outputArray += space2+"start:{\n";
		outputArray += space3+"x:"+levelSettings[e].start.x+",\n"
		outputArray += space3+"y:"+levelSettings[e].start.y+"\n"
		outputArray += space2+"}\n";
		outputArray += space+"},\n";
	}
						
	outputArray += '];';
	outputArray = outputArray.replace(/undefined/g,0);
	$('#outputArray').val(outputArray);	
}

/*!
 * 
 * TOGGLE GAME PLAY - This is the function that runs to toggle game play
 * 
 */
function toggleGamePlay(con){
	if(con){
		toggleGameStatus('Game start:');
		stopGame();
		preparePuzzle(true);
	}else{
		stopGame();
		loadPuzzleData();
	}
}

function toggleGameStatus(text){
	$('#gameStatus').html(text);
}