const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#result')


btn.addEventListener('click', Suma);

function Suma(){
    let n1 = parseInt(input1.value)
    let n2 = parseInt(input2.value)
    result.innerText = "Resultado: " + (n1 + n2)

}