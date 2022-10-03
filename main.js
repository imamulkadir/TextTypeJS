var count = 0;

var currentText = 0;

var index = 0;

var letter = 0;

var text = ["Thank you for existing ❤️", "You are beautiful ❤️", "You can Do it ❤️"];



setInterval(myType, 100);

function myType(){
    currentText = text[count];
    letter = currentText.slice(0, index++);
    var title = document.querySelector('h1').innerHTML = letter;

    if(letter.length == currentText.length){
        count++;
        index = 0;
    }

    if(count == text.length){
        count = 0;    
    }
}