// =========================
// Smooth Cursor Fire
// =========================

const glow = document.getElementById("cursorGlow");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;


document.addEventListener("mousemove", (e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});



function moveGlow(){

    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;


    if(glow){

        glow.style.left = glowX + "px";
        glow.style.top = glowY + "px";

    }


    requestAnimationFrame(moveGlow);

}


moveGlow();




// =========================
// Particles
// =========================


const particles = document.getElementById("particles");


if(particles){

for(let i = 0; i < 180; i++){


let p=document.createElement("div");


p.style.position="absolute";

p.style.width="4px";

p.style.height="4px";

p.style.borderRadius="50%";

p.style.background="#00ff66";

p.style.boxShadow="0 0 15px #00ff66";


p.style.left=Math.random()*100+"vw";

p.style.top=Math.random()*100+"vh";


particles.appendChild(p);



p.animate([

{
transform:"translateY(0px)",
opacity:.2
},

{
transform:"translateY(-200px)",
opacity:1
}

],{

duration:4000+Math.random()*5000,

iterations:Infinity,

direction:"alternate"

});


}

}




// =========================
// LOGIN
// =========================


const loginBtn=document.getElementById("loginBtn");

const loginBox=document.getElementById("loginBox");


if(loginBtn && loginBox){


loginBtn.onclick=()=>{

loginBox.style.display="flex";

};



loginBox.onclick=(e)=>{


if(e.target===loginBox){

loginBox.style.display="none";

}


};


}




// =========================
// Smooth Scroll
// =========================


document.querySelectorAll('a[href^="#"]').forEach(link=>{


link.addEventListener("click",function(e){


e.preventDefault();


let target=document.querySelector(this.getAttribute("href"));


if(target){

target.scrollIntoView({

behavior:"smooth"

});

}


});


});






// =========================
// Reveal Animation
// =========================


const observer=new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.animate([

{
opacity:0,
transform:"translateY(50px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:700,

fill:"forwards"

});


}


});


});



document.querySelectorAll(".card,.stat,.title,.heroLeft,.heroRight")
.forEach(el=>observer.observe(el));






// =========================
// Logo 3D Effect
// =========================


const logo=document.querySelector(".logo3d");


if(logo){


document.addEventListener("mousemove",(e)=>{


let x=(e.clientX/window.innerWidth-.5)*20;

let y=(e.clientY/window.innerHeight-.5)*20;



logo.style.transform=

`rotateY(${x}deg) rotateX(${-y}deg)`;


});


}