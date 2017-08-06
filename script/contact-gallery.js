var _ = function(x){
    return document.querySelector(x);
}

var gallery = document.querySelectorAll('.image-block');

var hoverImage = function(event){
    var target = event.target;
    if(target.tagName != 'IMG') return;
    
    for(var num = 0; num < gallery.length; num++){
        if(gallery[num].classList.contains('is-active-image')) {
            gallery[num].classList.remove('is-active-image');
            gallery[num].removeChild(gallery[num].children[0]);
        }
    }
    target.parentElement.classList.add('is-active-image');
    
    var div = document.createElement('div');
    div.className = 'contact-us';
    div.innerHTML = "<h2 class='con-head'>cool app design</h2><p class='con-dev'>development, mobile</p><input class='con-inp' type='text'><div class='con-button'><i class='fa fa-arrow-right'></i></div>";
    target.parentElement.insertBefore(div, target);
}


_('.pictures').addEventListener('click', hoverImage);