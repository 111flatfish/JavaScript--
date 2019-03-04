// JavaScript Document

function parseJSON(responseText){
			var users = "";
			if(responseText.constructor == Array)
				{
					for(var i = 0 ; i < responseText.length ; i++){
						document.write(responseText[i]);
					}
					
				}
		}
		
//		如果是以JSON-P的格式将JSON以动态脚本的形式插入js中，就必须要用回调函数包装，必须先声明回调函数
		parseJSON([
			{"title":[{"lang":"cn"},"XPath语言基础"],"author":"w3c","date":"2014","price":30.5},
			{"title":[{"lang":"en"},"精通XPath"],"author":"css2","date":"2014","price":50}
			
		]);