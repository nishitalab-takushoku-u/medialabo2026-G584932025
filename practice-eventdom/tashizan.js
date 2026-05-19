let b = document.querySelector('button#calc')
b.addEventListener('click',greeting)

function greeting(){

    let i = document.querySelector('input[name="left');

    let i2 = document.querySelector('input[name="right');

    let sum = Number(i.value) + Number(i2.value);

    let p = document.querySelector('span[id = "answer"]');

    p.textContent = sum;
}