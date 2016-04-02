function getTemplate(urlString) {
  var result;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', urlString , false);
  xhr.send();
  if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
    result = xhr.status;
  } 
  else {
    result = xhr.responseText;
  }
  return result;
}