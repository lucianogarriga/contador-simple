// const contador = document.getElementById("contar");
// const sumar = document.getElementById("incr");
// const restar = document.getElementById("decr");
// const reset = document.getElementById("reset");

// let numero = 0;

// sumar.addEventListener("click", () => {
//     numero++;
//     contador.innerHTML = numero;
// });

// restar.addEventListener("click", () => {

//     if(numero==0){}
//     else {
//         numero--;
//         contador.innerHTML = numero;
//     }
// });
// reset.addEventListener("click", ()=>{
//     numero = 0;
//     contador.innerHTML = numero;
// })


let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
    boton.addEventListener('click', function(e){

        const estilos = e.currentTarget.classList;

        if (estilos.contains('restar')){
            contador--;
        }
        else if (estilos.contains('sumar')){
            contador++;
        }
        else {
            contador = 0
        }
        valor.textContent = contador;

        if(contador>0){
            valor.style.color = '#fff';
        }
        if(contador<0){
            valor.style.color = '#ba215a'
        }
    })
})
