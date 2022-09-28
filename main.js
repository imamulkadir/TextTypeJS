var title = document.querySelector('h1');

var text = "Thank you for existing ❤️";

var index = 0;

setInterval(fun, 500);

function fun(){
    title.innerHTML = text.slice(0, index++);
    if(index>text.length){
        index = 0;
    }
}