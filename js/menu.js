const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')
//evento o metodo click
hamburguer.addEventListener('click',()=>{
    
    menu.classList.toggle("spraed") //define velocidad
})

window.addEventListener('click', e=>{
    if (menu.classList.contains('spread')
    && e.target != menu && e.target != hamburguer
    ){
        console.log('cerrar')
        menu.classList.toggle('spread')
    }
    
})