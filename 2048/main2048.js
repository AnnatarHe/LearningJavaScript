var board = new Array();
var score = 0;
$(document).ready(function(){
	newgame();
});

function newgame(){
	//初始化操作
	init();
	//随机在两个格子生成2或者4
	generateOneNumber();
	generateOneNumber();
}
function init(){
	for (var i =0; i <4; i++) {
		for (var j = 0; j < 4; j++) {
			var gridCell=("#grid-cell-"+i+"-"+j);
			$("#hello").html(gridCell);
			$(gridCell).css( 'top', getPosTop(i,j));
			$(gridCell).css( 'left', getPosLeft(i,j));
		}
	}
	for(var i=0;i<4;i++){
		board[i]=new Array();
		for(var j=0;j<4;j++){
			board[i][j]=0;
		}
	}
	upDateBoardView();
}
function upDateBoardView () {
	$(".number-cell").remove();
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			$("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
			var theNumberCell=$('#number-cell-'+i+'-'+j);
			if (board[i][j]==0) {
				$(theNumberCell).css('width','0px');
				$(theNumberCell).css('height','0px');
				$(theNumberCell).css('top',getPosTop(i,j)+50);
				$(theNumberCell).css('left',getPosLeft(i,j)+50);
			}else{
				$(theNumberCell).css('width','100px');
				$(theNumberCell).css('height','100px');
				$(theNumberCell).css('top',getPosTop(i,j));
				$(theNumberCell).css('left',getPosTop(i,j));
				$(theNumberCell).css('background-color',getNumberBackGroundColor(board[i][j]));
				$(theNumberCell).css('color',getNumberColor(board[i][j]));
				$(theNumberCell).text(board[i][j]);
			}
		}
	}
}
/**
 * 在格子里生成数字
 * @return {boolean} 是否可以获取值
 */
function generateOneNumber () {
	if (noSpace(board)) {
		return false;
	}else{
		//随机一个位置
		var randx=parseInt(Math.floor(Math.random()*4));
		var randy=parseInt(Math.floor(Math.random()*4));
		while(true){
			if (board[randx][randy]==0) {
				break;
			}else{
				var randx=parseInt(Math.floor(Math.random()*4));
				var randy=parseInt(Math.floor(Math.random()*4));
			}
		}
		//随即一个数字
		var randNumber = Math.random()<0.5?2:4;
		//在随机位置生成随机数字
		board[randx][randy]=randNumber;
		showNumberWithAnimation(randx,randy,randNumber);
		return true;
	}	
}
/**
 * 键盘操作
 * @param  {按键} even)
 * @return {按键}                                       是否结束
 */
$(document).keydown(function(even){
	switch(even.keyCode)
	{
		case 37://left
			if(moveLeft()){
				generateOneNumber();
				isgameover();
			}
			break;
		case 38://up
			if(moveUp()){
				generateOneNumber();
				isgameover();
			}
			break;
		case 39://right
			if(moveRight()){
				generateOneNumber();
				isgameover();
			}
			break;
		case 40://down
			if(moveDown()){
				generateOneNumber();
				isgameover();
			}
			break;
	}
});

function moveLeft () {
	if (!canMoveLeft(board))
		return false;
	//真正的MoveLeft函数
	for(var i=0;i<4;i++)
		for(var j=1;j<4;j++)
		{
			if(board[i][j]!=0)
			{
				for(var k=0;k<j;k++)
					if(board[i][k]==0&&noBlockHorizontal(i,k,j,board))
					{
						//产生移动
						continue;
					}else if(board[i][k]==board[i][j]&&noBlockHorizontal(i,k,j,board)){
						//move
						//add
						continue;
					}
			}
		}
}