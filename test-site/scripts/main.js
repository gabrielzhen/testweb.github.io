let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/firefox-icon.jpg')
    {myImage.setAttribute('src', 'images/firefox2.jpg');}
    else
    {myImage.setAttribute('src', 'images/firefox-icon.jpg');}
}

let myButton=document.querySelector('button')
myButton.onclick=function(){
    setUserName();
}

let myHeading=document.querySelector('h1')
function setUserName(){
    let myName=prompt('输入你的名字');
    if (!myName || myName===null){ setUserName();}
    else {    localStorage.setItem('name',myName);
    myHeading.textContent='欢迎您的访问'+myName;}
}
if (!localStorage.getItem('name'))
    {setUserName();}
else
    {
        myHeading.textContent='欢迎您的访问'+localStorage.getItem('name');
    }

