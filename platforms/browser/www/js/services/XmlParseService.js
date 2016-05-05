function XmlParseService () {

	this.getXMLDocument = function(url) {  
	    var xml;  
	    xml=new XMLHttpRequest();  
	    xml.open("GET", url, false);  
	    xml.send("");  
	    return xml.responseXML; 
	}

	this.parseXMLDocument = function(xml) {
		
		var xmlTitle = xml.getElementsByTagName("__title")[0].innerHTML;
		var xmlTypeId = xml.getElementsByTagName("__exerciseTypeId")[0].innerHTML;
		var xmlData = xml.getElementsByTagName("__data")[0].innerHTML;
		var xmlCorrectAnswer = xml.getElementsByTagName("__correctAnswer")[0].innerHTML;

		var objEx = {
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
		return objExercise;
	}
}

var xmlParseService = new XmlParseService();