var _ = function(x){
    return document.querySelector(x);
}

var openSmallNav = function(){
    _('.small-device-menu').classList.toggle('open-small-device');
}

var changeSmallContent = function(event){
    var target = event.target;
    
    if(target.tagName != 'LI') return;
    
    /* variables curSection and sectionList are taken from navigation-slider.js */
    
    curSection = Number(target.getAttribute('data-nav-number'));
    
    for(var smallSec = 0; smallSec < _('.small-device-menu').children[0].children.length; smallSec++){
        _('.small-device-menu').children[0].children[smallSec].classList.remove('is-active-small-nav');
    }
    target.classList.add('is-active-small-nav');
    
    for(var section = 0; section < sectionList.length; section++){
        sectionList[section].classList.remove('is-active-section');
    }
    sectionList[curSection].classList.add('is-active-section');
    
}

var removeSmallNavBar = function(event){
    var target = event.target;
    
    if(!target.hasAttribute('data-small-nav-holder')) _('.small-device-menu').classList.remove('open-small-device');
}

window.addEventListener('click', removeSmallNavBar);
_('.small-device-menu').addEventListener('click', changeSmallContent);
_('.small-device-nav').addEventListener('click', openSmallNav);