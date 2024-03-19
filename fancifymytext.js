/* Bigger Button:
    changes font size in text area to 24px
    pop-up message "Hello World"
*/
function biggerButton(){
    document.getElementById("text").style.fontSize = "24px";
    alert("Hello, world!");
}

/* FancySchmancy Button:  
    change font weight in text area to bold
*/
function fancySchmancy(){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

/* BoringBetty Button:  
    revert FancySchmancy styles
*/
function boringBetty(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "initial";
}

/* Moo Button:  
    uppercase all the text inside
    add suffix of -Moo to the last word of each sentence
*/
function moo(){
    document.getElementById("text").style.textTransform = "uppercase";
    var str = document.getElementById("text").value;
    var parts = str.split("\n");
    for(var i = 0; i < parts.length; i++){
        parts[i] += "-Moo";
    }
    let rtn = parts;
    document.getElementById("text").value = rtn;
}