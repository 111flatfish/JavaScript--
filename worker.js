// JavaScript Document
onmessage = function(evt){
//	worker文件里面也要声明接收和发送信息的方法
	var  d = evt.data;		
	postMessage(d);
};