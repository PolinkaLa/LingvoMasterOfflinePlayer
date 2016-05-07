function XmlParseService () {

	this.getXMLDocument = function(url) {  
	    var xml;  
	    xml=new XMLHttpRequest();  
	    xml.open("GET", url, false);  
	    xml.send("");  
	    return xml.responseXML; 
	}

	this.parseXMLDocument = function(xml) {
		
		var xmlExerciseId = xml.getElementsByTagName("__exerciseId")[0].innerHTML;
		var xmlTitle = xml.getElementsByTagName("__title")[0].innerHTML;
		var xmlTypeId = xml.getElementsByTagName("__exerciseTypeId")[0].innerHTML;
		var xmlData = xml.getElementsByTagName("__data")[0].innerHTML;
		var xmlCorrectAnswer = xml.getElementsByTagName("__correctAnswer")[0].innerHTML;

		var objEx = {
			exerciseId: xmlExerciseId,
			title: xmlTitle,
			typeId: xmlTypeId,
			data: xmlData,
			correctAnswer: xmlCorrectAnswer
		}
		return objEx;
	}

	this.processXML = function(url) {
		var xmlDoc = this.getXMLDocument(url);
		var objExercise = this.parseXMLDocument(xmlDoc);
		//alert(objExercise.exerciseId + " " + objExercise.title)
		//return objExercise;
		bdAccess.open('read', '9105');
	}
}

var xmlParseService = new XmlParseService();