function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function reverseNumberFormat(num) {
	return Number(num.replace(/,/g,''))
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.lenght;i++){
	operator[i].addEventListener('click', function(){

	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.lenght;i++){
	number[i].addEventListener('click', function(){
		var output
	});
}