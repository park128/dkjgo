var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 250,
    slideMargin = 40,
    nextBtn = document.querySelector('.next');

makeClone();

// <li> 수 만큼 앞 뒤 복사하는 작업

function makeClone(){
    for(var i = 0; i<slideCount; i++){
        // a.cloneNode(), a.cloneNode(true)
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.appendChild(b)
        slides.appendChild(cloneSlide);
    }
    for(var i = slideCount -1; i>=0; i--){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a.prepend(b)
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function(){
        slides.classList.add('animated');
    },100);
    
}

function updateWidth(){
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}
function setInitialPos(){
    var initialTranslateValue = - (slideWidth + slideMargin)*slideCount;
    // slides {transform:translateX(-1410px);}
    slides.style.transform = 'translateX(' + initialTranslateValue+'px)';
}

nextBtn.addEventListener('click',function(){
    moveSlide(currentIdx + 1);
});

function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    if(currentIdx == slideCount || currentIdx == -slideCount){

        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        },500);
        setTimeout(function(){
            slides.classList.add('animated');
        },600);
    }
}