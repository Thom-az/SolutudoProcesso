// adicionar hovered class no item do menu selecionado
let list = document.querySelectorAll('.navigation li');
    function LinkAtivo(){
        list.forEach((item)=>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
    }
    list.forEach((item)=>
    item.addEventListener('mouseover',LinkAtivo));

//toggle do menu
let toggle = document.querySelector('.toggle');
let navigation =  document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle('active')
}
