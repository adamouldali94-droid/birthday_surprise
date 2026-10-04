

// الصفحة الأولى
startBtn.onclick = () => {
    startPage.classList.add("hidden");
    questionPage.classList.remove("hidden");
};

// زر "لا" كيهرب
noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// زر نعم
yesBtn.onclick = () => {

    questionPage.classList.add("hidden");
    countdownPage.classList.remove("hidden");

    let count = 3;

    countNumber.innerHTML = count;

    const timer = setInterval(() => {

        count--;

        if(count > 0){

            countNumber.innerHTML = count;

        }else{

            clearInterval(timer);

            countdownPage.classList.add("hidden");

            mainPage.classList.remove("hidden");

            fireConfetti();

            hearts();

        }

    },1000);

};

// إظهار الرسالة
letterBtn.onclick = () => {

    letter.classList.remove("hidden");

    letter.scrollIntoView({
        behavior:"smooth"
    });

    fireConfetti();

};

// الكونفيتي
function fireConfetti(){

    confetti({

        particleCount:250,
        spread:180,
        origin:{y:0.6}

    });

}

// القلوب
function hearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*25)+"px";

        heart.style.animationDuration=(4+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    },250);

}

// كونفيتي كل 6 ثواني
setInterval(()=>{

    if(!mainPage.classList.contains("hidden")){

        confetti({

            particleCount:70,
            spread:100,
            origin:{
                x:Math.random(),
                y:Math.random()-0.2
            }

        });

    }

},6000);