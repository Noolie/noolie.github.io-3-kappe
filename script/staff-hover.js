var _ = function(x){
    return document.querySelector(x);
}

var hoverStaff = function(event){
    var target = event.target;
    if(target.tagName != 'IMG') return;
    target.parentElement.children[0].classList.add('is-active-staff');
}

var removeHoverStaff = function(event){
    var target = event.target;
    if(!target.classList.contains('is-active-staff')) return;
    if(event.relatedTarget.tagName == 'H3' || event.relatedTarget.tagName == 'P') return;
    target.parentElement.children[0].classList.remove('is-active-staff');
}

_('.s-photos').addEventListener('mouseout', removeHoverStaff);
_('.s-photos').addEventListener('mouseover', hoverStaff);