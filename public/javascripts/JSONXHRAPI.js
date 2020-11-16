//XHR 
var XHR = new XMLHttpRequest();
var NoteJSON;

XHR.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
        NoteJSON = JSON.parse(this.responseText);
    }
};

XHR.open("GET", "/users", true);

XHR.send();

function WriteData(){
    var htmlData = "";

    for (var i = 0; i < NoteJSON.length; i++) {
        htmlData += "<li><b>" + NoteJSON[i].NoteTitle + "</b></br>" + NoteJSON[i].NoteContent + "</li></br>";  
    }

    document.getElementById("displayData").innerHTML = htmlData;
};