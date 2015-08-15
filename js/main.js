var http = new XMLHttpRequest();

http.onreadystatechange = function () {
  if (http.readyState === 4 && http.status === 200) {
    var xml = http.responseXML;
    var data = xml.getElementsByTagName('xml')[0];
    var reasons = data.getElementsByTagName('why');
    console.log(reasons);
    for (var i = 0; i < reasons.length; i++) {
      var reasonElem = reasons[i];
      var reason = reasonElem.getAttribute('reason');
      console.log(reason);
      var why = document.getElementsByClassName('why')[0];
      var li = document.createElement('li');
      li.textContent = reason;
      why.appendChild(li);
    }
  }
};

http.open('GET', 'why.xml', true);
http.send();
