var _ = function(x){
    return document.querySelector(x);
}

var makesActiveContacts = function(){
    
    _('.direct-contacts').classList.toggle('is-active-contacts');
}

var removeContacts = function(event){
    var target = event.target;
    
    if(!target.hasAttribute('data-con-holder')) _('.direct-contacts').classList.remove('is-active-contacts');
}

window.addEventListener('click', removeContacts);
_('.hire-button').addEventListener('click', makesActiveContacts);