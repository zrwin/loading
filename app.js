const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const spin = document.querySelector(".spin");
const spinner = document.querySelector(".spinner");
window.addEventListener("load",()=>{
    startBtn.addEventListener("click",()=>{
        spin.style.animation = "ghumo 0.6s linear 1s infinite";
       
    });
    stopBtn.addEventListener("click",()=>{
        spin.style.animation ="";
        
    });
});

