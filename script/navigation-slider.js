var _ = function(x){
    return document.querySelector(x);
}

var curSection = 0;
var sectionList = document.querySelectorAll('.section');
var navList = _('.menu').children;

var navChange = function(event){
    var target = event.target;
    if(target.tagName != 'LI' && target.tagName != 'P') return;
    
    curSection = Number(target.getAttribute('data-nav-number'));
    
    for(var section = 0; section < sectionList.length; section++){
        sectionList[section].classList.remove('is-active-section');
    }
    sectionList[curSection].classList.add('is-active-section');
    
    if(target.tagName == 'LI') {
        for(var navName = 0; navName < navList.length; navName++){
            navList[navName].classList.remove('is-active-nav');
        }
        target.classList.add('is-active-nav');
    } else {
        for(var navName = 0; navName < navList.length; navName++){
            navList[navName].classList.remove('is-active-nav');
        }
        target.parentElement.classList.add('is-active-nav');
    }
}

_('.menu').addEventListener('click', navChange);