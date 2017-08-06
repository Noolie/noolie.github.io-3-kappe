var _ = function(x){
    return document.querySelector(x);
}

var navResize = function(){
    _('.nav').classList.remove('nav-size');
    _('.content').classList.remove('content-size');
    if(_('.main').scrollWidth != window.innerWidth) return;
    _('.content').classList.add('content-size');
    _('.nav').classList.add('nav-size');
}

window.addEventListener('click', navResize);