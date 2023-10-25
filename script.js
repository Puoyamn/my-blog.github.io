let words = document.querySelectorAll(".word");
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

function changeText() {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    currentWord.style.opacity = "0"; // مخفی کردن کلمه قبلی

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.classList.add("out");
        }, i * 80);
    });

    nextWord.style.opacity = "1"; // نمایش کلمه جدید

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.classList.add("behind");
        setTimeout(() => {
            letter.classList.remove("behind");
            letter.classList.add("in");
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

setInterval(changeText, 3000); 



// ===================================circel skills====================================================



const circel = document.querySelectorAll('.circle');

circel.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsmarked = elem.querySelectorAll('.points');
    for(let i = 0 ; i < percent ; i++){
        pointsmarked[i].classList.add("marked")
    }
})


// ===================================mix portfolio====================================================


var mixer = mixitup('.portfolio-gallery');

// ===================================active menu====================================================


let menuli = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}

activeMenu();
window.addEventListener('scroll', activeMenu);


// ===================================sticky navbar====================================================


const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// ===================================taggle navbar====================================================



    let menuIcone = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".navlist");

    menuIcone.onclick = ()=>{
        menuIcone.classList.toggle("bx-x");
        navlist.classList.toggle("open");
    }



    window.onscroll = ()=>{
        menuIcone.classList.remove("bx-x");
        navlist.classList.remove("open");
    }


    // ===================================taggle navbar====================================================


    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entrt)=>{
            if(FileSystemEntry.isIntersecting){
                entry.target.classList.add("show-items");
            }else{
                entry.target.classList.remove("show-items");
            }
        });
    });
    

const scrollscale = document.querySelectorAll(".scroll-scale");
scrollscale.forEach((el)=>observer.observe(el));

const scrollbottom = document.querySelectorAll(".scroll-bottom");
scrollbottom.forEach((el)=>observer.observe(el));

const scrolltop = document.querySelectorAll(".scroll-top");
scrolltop.forEach((el)=>observer.observe(el));