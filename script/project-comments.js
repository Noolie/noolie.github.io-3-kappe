var _ = function(x){
    return document.querySelector(x);
}

_('.comments').children[1].innerHTML = _('.container').children.length - 1 + ' comments';

var openComments = function(event){
    var target = event.target;
    if(target == this) return;
    clearInterval(slideInt);
    _('.comment-section').classList.add('is-active-comments');
}

var closeComments = function(event){
    var target = event.target;
    if(target.classList.contains('close-button') == true || target.tagName == 'I' || this == target) this.classList.remove('is-active-comments');
}

_('.comment-section').addEventListener('click', closeComments);
_('.comments').addEventListener('click', openComments);