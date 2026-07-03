const page1 = document.getElementById("page1");

const page2 = document.getElementById("page2");

const page3 = document.getElementById("page3");

const page4 = document.getElementById("page4");

const page5 = document.getElementById("page5");

const page6 = document.getElementById("page6");
document.getElementById("startBtn").onclick = function () {

    page1.style.display = "none";

    page2.style.display = "block";

};

document.getElementById("nextBtn").onclick = function () {

    page2.style.display = "none";

    page3.style.display = "block";

};

document.getElementById("yesBtn").onclick = function () {

    page3.style.display = "none";

    page4.style.display = "block";

};

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

});

document.getElementById("dateBtn").onclick = function(){

    const date=document.getElementById("date").value;

    if(date==""){

        alert("日付を選んでね😊");
        return;

    }

    page4.style.display="none";
    page5.style.display="block";

}

const choices=document.querySelectorAll(".choice");

choices.forEach(function(button){

    button.addEventListener("click",function(){

        button.classList.toggle("selected");

    });

});

document.getElementById("finishBtn").onclick=function(){

    page5.style.display="none";
    page6.style.display="block";

}

document.getElementById("finishMessageBtn").onclick=function(){

    alert("ありがとう❣");

}

document.getElementById("finishMessageBtn").onclick = function(){

    confetti({
        particleCount:180,
        spread:100,
        scalar: 2.2,
        origin:{ y:0.6 }
    });

    setTimeout(function(){

        alert("ありがとう！！");

    },1000);

}

function createHeart(){

    const hearts = document.getElementById("hearts");

    const heart = document.createElement("div");

    heart.className = "heart";

    const icons = ["💖","🌸","✨","💕","🩷","🍙"];

    heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80vh";
    heart.style.fontSize = (18 + Math.random() * 22) + "px";

    hearts.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },3000);

}


setInterval(createHeart, 200);