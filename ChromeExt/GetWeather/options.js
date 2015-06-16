$(document).ready(function(){
	$("#save").click(function(){
		var city = localStorage.city || 'beijing';
		city=$("#city").val();
	    localStorage.city=$("#city").val();
	    alert("Save Success!");
	});
});
