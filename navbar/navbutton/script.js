// class: navbtn , navlist , navcont

var menu=["google","microsoft","apple"]

document.getElementsByClassName("navbtn")[0].setAttribute("type","image")
document.getElementsByClassName("navbtn")[0].setAttribute("src","navbutton/navbtn.png")
document.getElementsByClassName("navbtn")[0].setAttribute("onclick","expand()")
document.querySelector(".navcont").style.lineHeight="30px"

for(var i of document.getElementsByClassName("navlist"))
{
    i.style.borderTop="1px solid blue"
    i.style.textAlign="center"
}

document.getElementById("menu_google").setAttribute("onclick","show('google')")
document.getElementById("menu_microsoft").setAttribute("onclick","show('microsoft')")
document.getElementById("menu_apple").setAttribute("onclick","show('apple')")

var expandi=0;
function expand ()
{
    if(expandi===0)
    {
        document.getElementsByClassName("navcont")[0].style.display="block"
        expandi=1
    }
    else
    {
        document.getElementsByClassName("navcont")[0].style.display="none"
        expandi=0
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
}

function xblur ()
{
    if(expandi!=0)
    {
        expand()
    }
}