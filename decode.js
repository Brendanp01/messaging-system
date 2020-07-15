function parse(xmlStr) {
var result = "";
if (window.DOMParser) {
    parser = new DOMParser();
    xml = parser.parseFromString(xmlStr, "text/xml");
    }

else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.loadXML(xmlStr);
  }
	var bgColor = xml.getElementsByTagName("background-color").childNodes[0].nodeValue;
  var message = xml.getElementsByTagName("message").childNodes[0].nodeValue;
}



