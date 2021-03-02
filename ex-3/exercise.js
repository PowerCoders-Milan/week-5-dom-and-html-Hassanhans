
function insert_Row(){
var a=document.getElementById('sampleTable').insertRow(0);
var b = a.insertCell(0);
var c = a.insertCell(1);
b.innerHTML="New Cell1";
c.innerHTML="New Cell2";
}



/*The innerHTML property is part of the Document Object Model (DOM) 
that allows Javascript code to manipulate a website being displayed. 
Specifically, it allows reading and replacing everything within 
a given DOM element (HTML tag).*/