// svg 

const content1 = document.querySelector('.content1')
const path1 = document.querySelector('.path2')
const path1Length = path1.getTotalLength()

path1.style.strokeDasharray = path1Length
path1.style.strokeDashoffset = calcDashoffset(window.innerHeight*0.8, content1, path1Length)

function calcDashoffset(scrollY, element, length) {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight
    const value = length - (length * ratio)
    return value < 0 ? 0 : value > length ? length : value
}

function scrollHandler() {
    const scrollY = window.scrollY + (window.innerHeight * 0.8)
    path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length)
}

window.addEventListener('scroll', scrollHandler)

// console.log("ratio")

// navbar js
const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');


toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

// logo
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 19.5}deg)">${char}</span>`
).join("")

// MBTI 스크롤 이벤트

const mainText = document.querySelector('.music_col-3_layout');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',function(){
    const value = window.scrollY;
    console.log("scrollY",value);
    if (value>4400){
        mainText.style.animation = "disappear 1s ease-out forwards";
        mainText.style.display = "block"
    }
    if (value>1){
        navbar.style.animation = "vanishAbove 1s ease-out forwards";
    }
    else {
        navbar.style.animation = "slideBack 0.5s ease-out";
    }
    // if (value>5400){
    //     const aaa = this.document.querySelector('.aaa')
    //     aaa.style.display = "block"
        
    //     const bgGroup = document.querySelector('.svg-bg')
    //     const bgPaths = bgGroup.querySelectorAll('path')
    //     bgPaths.forEach((path, i) => {
    //         const length = path.getTotalLength()
    //         path.style.setProperty('--length', length)
    //         path.style.setProperty('--duration', length + 'ms')
    //         path.style.setProperty('--delay', i * 95 + 'ms')
    //     })
    
    //     const mainGroup = document.querySelector('.svg-main')
    //     const mainPaths = mainGroup.querySelectorAll('path')
    //     mainPaths.forEach((path, i) => {
    //         const length = path.getTotalLength()
    //         path.style.setProperty('--length', length)
    //         path.style.setProperty('--duration', length + 'ms')
    //         path.style.setProperty('--delay', i * 100 + 'ms')
    //     })   
    // }
});