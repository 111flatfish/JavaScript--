// JavaScript Document
onmessage = function(evt){
	var data = evt.data;
	var intArray = data.split(";");
	var returnstr ;
	returnstr = "";
	for(var i = 0 ; i < intArray.length; i++){
		if(parseInt(intArray[[i]])%3 == 0 ){
		   		if(returnstr !="")
					returnstr +=";";
			returnstr += intArray[i];
		   }
	}
	postMessage(returnstr);
}