// class: navbtn , navlist , navcont

var menu=["google","microsoft","apple"]

window.istap=false

window.speed = 10


var nav = document.getElementsByClassName("nav")[0].offsetHeight

document.getElementsByClassName("navbtn")[0].setAttribute("type","image")
document.getElementsByClassName("navbtn")[0].setAttribute("src","navbutton/navbtn.png")
document.getElementsByClassName("navbtn")[0].setAttribute("onclick","expand(true)")
document.querySelector(".navcont").style.lineHeight="30px"
document.getElementById("menu_google").setAttribute("onclick","show('google')")
document.getElementById("menu_microsoft").setAttribute("onclick","show('microsoft')")
document.getElementById("menu_apple").setAttribute("onclick","show('apple')")
document.getElementsByClassName("container")[0].style.position="absolute"
document.getElementsByClassName("container")[0].style.top = "50px"

for(var i of document.getElementsByClassName("navlist"))
{
    i.style.borderTop="1px solid blue"
    i.style.textAlign="center"
}

var expandi=0;
function expand ()
{
    if(expandi===0)
    {
        if(!window.istap)
        {
            ani(true,window.speed)
            expandi=1
        }
        else
        {
            let tmp = window.speed
            window.speed=0;
            ani(true,window.speed)
            window.speed=tmp
            expandi=1
        }
    }
    else
    {
        
        if(!window.istap)
        {
            ani(false,window.speed)
            expandi=0
        }
        else
        {
            var tmp2 = window.speed
            window.speed=0;
            ani(false,window.speed)
            window.speed=tmp2
            expandi=0
        }
    }
}

function show (id)
{
    if (id==menu[0])
    {
        document.getElementById(menu[0]).hidden=false
        document.getElementById(menu[1]).hidden=true
        document.getElementById(menu[2]).hidden=true
    }

    else if (id==menu[1])
    {
        document.getElementById(menu[1]).hidden=false
        document.getElementById(menu[2]).hidden=true
        document.getElementById(menu[0]).hidden=true
    }

    else if (id==menu[2])
    {
        document.getElementById(menu[2]).hidden=false
        document.getElementById(menu[0]).hidden=true
        document.getElementById(menu[1]).hidden=true
    }
    else
    {
        document.getElementById(menu[2]).hidden=true
        document.getElementById(menu[0]).hidden=true
        document.getElementById(menu[1]).hidden=true
    }
    window.istap=true
    setTimeout(function () {window.istap=false},window.speed*100)
}

function xblur ()
{
    if(expandi!=0)
    {
        expand()
    }
}

function ani (hide,sp)
{
    var co = document.getElementsByClassName("container")[0]
    if(hide)
    {
        for(let j = 50; j < nav+25 ;j++) {
            setTimeout( function () {co.style.top = j.toString()+"px"},sp*(j-49))
        }
    }
    else
    {
        var c=1
        for (let k = nav+25; k > 50; k--) {
            setTimeout( function () { co.style.top = k.toString()+"px" },sp*c++)
        }
        console.log(c)
    }
}

function setspeed ()
{
    window.speed=prompt("Speed","10")
}