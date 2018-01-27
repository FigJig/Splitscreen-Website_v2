var imageCarousel = document.querySelector('#carousel'); // #ID_NAME_HERE
var episodeImage = document.querySelector('img');
var aboutButton = document.querySelector('#about');
var episodesButton = document.querySelector('#episodes');
var creditsButton = document.querySelector('#credits');
var contactButton = document.querySelector('#contact');

function imageMouseOver(x)
{
    x.style.opacity = "0.9";   
}

function imageMouseOut(x)
{
    x.style.opacity = "1";
}

function iconMouseOver(x)
{
    x.style.opacity = "0.8";    
}

function iconMouseOut(x)
{
    x.style.opacity = "1";
}

function openEpisode(url)
{
    window.open(url, '_blank');
}

function aboutButtonClick()
{
    var title = document.querySelector('#section-title');
    var content = document.querySelector('#section-content-p-1');
    var content2 = document.querySelector('#section-content-p-2');
    title.innerHTML = "<span style ='background-color: black'>&ensp;/ABOUT&ensp;</span>";
    content.innerHTML = "Splitscreen is a series of <strong>documentaries about local independent developers and people involved in the games scene in Melbourne, Australia.</strong> We are looking to give a voice to people who haven’t yet had the platform to do so, to talk about their work and the current games scene in and around Melbourne.";
    content2.innerHTML = "<strong>These are free to watch on YouTube and with permission, to be screened in public spaces.</strong>";
}

function episodesButtonClick()
{
    var title = document.querySelector('#section-title');
    var content = document.querySelector('#section-content-p-1');
    var content2 = document.querySelector('#section-content-p-2');
    title.innerHTML = "<span style ='background-color: black'>&ensp;/EPISODES&ensp;</span>";
    content.innerHTML = "<table><tr><th><img src = 'images/kalonica.jpg' alt = 'Episode 1 thumbail - Kalonica' onclick=\openEpisode('https://www.youtube.com/watch?v=KJXg9rdkTFw')\ onmouseover='imageMouseOver(this)' onmouseout = 'imageMouseOut(this)'></th><th><img src = 'images/louie.jpg' alt = 'Episode 2 thumbail - Louie' onclick=\openEpisode('https://www.youtube.com/watch?v=C8v65B_vcHc')\ onmouseover='imageMouseOver(this)' onmouseout = 'imageMouseOut(this)'></th><th><img src = 'images/route59.jpg' alt = 'Episode 3 thumbail - Route 59' onclick = \openEpisode('https://www.trentmcdavies.com/')\ onmouseover='imageMouseOver(this)' onmouseout = 'imageMouseOut(this)'></th></tr><tr><td onclick=\openEpisode('https://www.youtube.com/watch?v=KJXg9rdkTFw')\>Episode 1: Kalonica Quigley</td><td onclick=\openEpisode('https://www.youtube.com/watch?v=C8v65B_vcHc')\>Episode 2: Louie Roots</td><td onclick = \openEpisode('https://www.trentmcdavies.com/')\>Episode 3: Route 59</td></tr></table>";
    content2.innerHTML = "";
}

function creditsButtonClick()
{
    var title = document.querySelector('#section-title');
    var content = document.querySelector('#section-content-p-1');
    var content2 = document.querySelector('#section-content-p-2');
    title.innerHTML = "<span style ='background-color: black'>&ensp;/CREDITS&ensp;</span>";
    content.innerHTML = "Trent Davies: <a href='https://www.trentmcdavies.com/' target = '_blank'>Website</a>, <a href='https://www.linkedin.com/in/trent-davies/' target = '_blank'>LinkedIn</a>, <a href='https://twitter.com/MustDeath' target = '_blank'>@MustDeath</a><br>Daniel Roberts<br>Adrian Satrianugraha<br><br>with special thanks to Simon Tran for helping out with Episode 3: Route 59.";
    content2.innerHTML = "";
    
    var x = document.getElementsByClassName('menu-button-clicked');
    for(var i = 0; i<x.length; i++)
        {
            x[i].className = 'menu-button-default';
            x[2].className = 'menu-button-clicked';
        }
}

function contactButtonClick()
{
    var title = document.querySelector('#section-title');
    var content = document.querySelector('#section-content-p-1');
    var content2 = document.querySelector('#section-content-p-2');
    title.innerHTML = "<span style ='background-color: black'>&ensp;/CONTACT&ensp;</span>";
    content.innerHTML = "<strong>Any feedback you'd like to give or have an idea to put forward?</strong><br>This is a new venture for us and any help to improve is welcome, big or small. So please don't hestitate to get in touch!<br><br><strong>Email:</strong> <a href = 'mailto:splitscreen.documentary@gmail.com?subject=Email%20Subject'>splitscreen.documentary@gmail.com</a>";
    content2.innerHTML = "";
    
    var x = document.getElementsByClassName('menu-button-clicked');
    for(var i = 0; i<x.length; i++)
        {
            x[i].className = 'menu-button-default';
            x[3].className = 'menu-button-clicked';
        }
}

/*
imageCarousel.onclick = function(){
    var curSrc = imageCarousel.getAttribute('src');
    if (curSrc === 'images/Splitscreen_logoFULL_Kalonica.png')
    {
        imageCarousel.setAttribute('src','images/bar_sk_title3.png');
    } else {
        imageCarousel.setAttribute('src', 'images/Splitscreen_logoFULL_Kalonica.png');
    }
}

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