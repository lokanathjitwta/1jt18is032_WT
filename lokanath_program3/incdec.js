var var1 = setInterval(inTimer, 500);
var fs = 5; //font size
var ids = document.getElementById("demo");
function inTimer() {
    ids.innerHTML = 'Ocean Therapy';
    ids.setAttribute('style', "font-size: " + fs + "px; color: red");
    fs += 5;
    if (fs >= 40) {
        clearInterval(var1); //paused
        var2 = setInterval(deTimer, 500);
    }
}
function deTimer() //fs = 50px
{
    fs -= 5;
    ids.innerHTML = 'Is Good for Emotional Health';
    ids.setAttribute('style', "font-size: " + fs + "px; color: blue");
    if (fs == 5) {
        clearInterval(var2); //paused
        var1 = setInterval(inTimer, 500);
    }
}