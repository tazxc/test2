const modal = document.querySelector('.modal')
const btn = document.querySelector('.bag_btn')
const span = document.querySelector('.close_modal')


btn.addEventListener('click', function(){
    modal.style.display = "block"
})

span.addEventListener("click", function(){
    modal.style.display = "none"
})

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none"
    }
}