var _ = function(x){
    return document.querySelector(x);
}

/* variable 'gallery' taken from 'contact-gallery.js' */

var filterLinks = _('.links').children;

var filterImage = function(event){
    var target = event.target;
    if(target.tagName != 'LI') return;
    for(var num = 0; num < gallery.length; num++){
        if(gallery[num].classList.contains('is-active-image')) {
            gallery[num].classList.remove('is-active-image');
            gallery[num].removeChild(gallery[num].children[0]);
        }
    }
    if(target.innerHTML == 'all works'){
        for(var img = 0; img < gallery.length; img++){
            gallery[img].classList.remove('filtered-img');
        }
    } else {
        for(var img = 0; img < gallery.length; img++){
            if(target.innerHTML == gallery[img].getAttribute('data-filter')){
                gallery[img].classList.remove('filtered-img');
            } else {
                gallery[img].classList.add('filtered-img');
            }
        }
    }
    for(var link = 0; link < filterLinks.length; link++){
        filterLinks[link].classList.remove('is-active-filter');
    }
    target.classList.add('is-active-filter')
}

_('.links').addEventListener('click', filterImage);