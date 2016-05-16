function XmlConvertService () {

	this.getXMLDocument = function(url) {  
	    var xml;  
	    xml=new XMLHttpRequest();  
	    xml.open("GET", url, false);  
	    xml.send("");  
	    return xml.responseXML; 
	}

	this.convertExerciseXMLDocument = function(xmlDocument) {
		
		var xmlExerciseId = xmlDocument.getElementsByTagName("__exerciseId")[0].innerHTML;
		var xmlTitle = xmlDocument.getElementsByTagName("__title")[0].innerHTML;
		var xmlTypeId = xmlDocument.getElementsByTagName("__exerciseTypeId")[0].innerHTML;
		var xmlData = xmlDocument.getElementsByTagName("__data")[0].innerHTML;
		var xmlCorrectAnswer = xmlDocument.getElementsByTagName("__correctAnswer")[0].innerHTML;

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
		var objExercise = this.convertExerciseXMLDocument(xmlDoc);
		//alert(objExercise.exerciseId + " " + objExercise.title)
		//return objExercise;
		bdAccess.open('write', objExercise);
	}
}

var xmlConvertService = new XmlConvertService();