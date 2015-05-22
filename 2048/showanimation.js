function showNumberWithAnimation(i,j,number){
	var numberCell=$('#number-cell-'+i+'-'+j);
	$(numberCell).css('background-color',getNumberBackGroundColor(number));
	$(numberCell).css('color',getNumberColor(number));
	$(numberCell).text(number);
	$(numberCell).animate({
		width:"100px",
		height:"100px",
		top:getPosTop(i,j),
		left:getPosLeft(i,j)
	},100);
}