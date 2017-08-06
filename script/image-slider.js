var _ = function(x){
    return document.querySelector(x);
}

var slideCount = 0;
var buttons = _('.slide-controls').children;
var slides = _('.slider').children;

var slideInt = setInterval(function(){
    
    if(document.body.offsetWidth < 682) return;
    
    slideCount += 1;
    
    if(slideCount > slides.length - 1) slideCount = 0;
    
    for(var curSlide = 0; curSlide < slides.length; curSlide++){
        slides[curSlide].classList.remove('is-active-slide');
    }
    slides[slideCount].classList.add('is-active-slide');
    
    for(var curButton = 0; curButton < buttons.length; curButton++){
        buttons[curButton].classList.remove('is-active-button');
    }
    buttons[slideCount].classList.add('is-active-button');
    
}, 2000);

var contentChanger = function(event){
    
    var target = event.target;
    
    if(!target.classList.contains('slide-button')) return;
    
    clearInterval(slideInt);
    
    slideCount = Number(target.getAttribute('data-slide-number'));
    
    for(var curSlide = 0; curSlide < slides.length; curSlide++){
        slides[curSlide].classList.remove('is-active-slide');
    }
    slides[slideCount].classList.add('is-active-slide');
    
    for(var curButton = 0; curButton < buttons.length; curButton++){
        buttons[curButton].classList.remove('is-active-button');
    }
    target.classList.add('is-active-button');
    
}

_('.slide-controls').addEventListener('click', contentChanger);