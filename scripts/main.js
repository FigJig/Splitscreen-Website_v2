var myHeading = document.querySelector('h1');
var myVariable = 'Explore the Melbourne Independent Games Scene';
var myHTML = document.querySelector('html');
var imageCarousel = document.querySelector('#carousel'); // #ID_NAME_HERE
var episodeImage = document.querySelector('img');
//var myButton = document.querySelector('button');

myHeading.textContent = myVariable;

function imageMouseOver(x)
{
    x.style.opacity = "0.9";   
}

function imageMouseOut(x)
{
    x.style.opacity = "1";
}

function multiply (num1,num2) {
    var result = num1 * num2;
    return result;
}

//multiply(10,5);

imageCarousel.onclick = function(){
    var curSrc = imageCarousel.getAttribute('src');
    if (curSrc === 'images/Splitscreen_logoFULL_Kalonica.png')
    {
        imageCarousel.setAttribute('src','images/bar_sk_title3.png');
    } else {
        imageCarousel.setAttribute('src', 'images/Splitscreen_logoFULL_Kalonica.png');
    }
}

/*
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Welcome ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome ' + storedName;
}

myButton.onclick = function ()
{
    setUserName();
}
*/