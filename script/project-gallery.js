var _ = function(x){
    return document.querySelector(x);
}

var galleryCount = _('.images').children;
var curGalImg = 0;

var openGallery = function(event){
    var target = event.target;
    clearInterval(slideInt);
    if(target.tagName != 'IMG') return;
    curGalImg = Number(target.getAttribute('data-gal-number'));
    _('.fullsize-gallery').classList.add('is-active-gallery');
    _('.gall-cont').children[0].src = target.src;
}

var moveToLeft = function(){
    curGalImg -= 1;
    if(curGalImg < 0) curGalImg = _('.images').children.length - 1;
    _('.gall-cont').children[0].src = _('.images').children[curGalImg].src;
}

var moveToRight = function(){
    curGalImg += 1;
    if(curGalImg > _('.images').children.length - 1) curGalImg = 0;
    _('.gall-cont').children[0].src = _('.images').children[curGalImg].src;
}

var closeGallery = function(event){
    var target = event.target;
    if(target == this || target.classList.contains('close-gall-butt') || target == _('.close-gall-butt').children[0]) _('.fullsize-gallery').classList.remove('is-active-gallery');
}

_('.gall-cont').addEventListener('click', moveToRight);
_('.gall-butt-right').addEventListener('click', moveToRight);
_('.gall-butt-left').addEventListener('click', moveToLeft);
_('.fullsize-gallery').addEventListener('click', closeGallery);
_('.images').addEventListener('click', openGallery);