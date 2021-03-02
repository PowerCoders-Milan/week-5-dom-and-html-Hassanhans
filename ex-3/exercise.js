
function insert_Row(){
var tavolo=document.getElementById('sampleTable').insertRow(0);
var sedia = tavolo.insertCell(0);
var chair = tavolo.insertCell(1);
sedia.innerHTML="New Cell1";
chair.innerHTML="New Cell2";
}



/*The innerHTML property is part of the Document Object Model (DOM) 
that allows Javascript code to manipulate a website being displayed. 
Specifically, it allows reading and replacing everything within 
a given DOM element (HTML tag).*/