// JavaScript Document
onmessage = function(evt){
	var intArray = new Array(200);
	for(var i = 0 ; i < intArray.length ; i++){
		intArray[i] = parseInt(Math.random()*200);
		
	}
	var worker  = new Worker("worker4.js");
		worker.postMessage(JSON.stringify(intArray));
	worker.onmessage = function(event){
		postMessage(event.data);
	}
}