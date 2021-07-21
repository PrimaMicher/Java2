
// - створити функцію яка обчислює та повертає площу прямокутника висотою

// function rect (a,b) {
//     let res=a*b;
//     return res
// }
// console.log(rect (5,10));

// - створити функцію яка обчислює та повертає площу кола


// function circ (radius) {
//     let res1=2*radius*Math.PI;
//     return res1
//
// }
// console.log(Math.PI);
// console.log(circ (10));

// - створити функцію яка обчислює та повертає площу циліндру

// S = 2 π R h + 2 π R 2 = 2 π R(R + h)


function cylin (radius,h) {
    let res2 = 2*Math.PI*radius*h+2*Math.PI*radius*2;
    return res2
}
console.log(cylin(7,15));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function returnMinprintMax () {
    console.log(arguments);
    let min=arguments[0];
    let max=arguments[0];
    for (const item of arguments) {
        if(item>max) max=item;
       if (item<min) min=item;

    }
    console.log('max',max);
    return min;
}
const min = returnMinprintMax(1,2,3,5,5,6)
console.log('min',min);

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

function createDiv (text) {
document.write(`<div>${text}</div>`);

}

createDiv(`studding is the hardest work in the world`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createLi (text){

    document.write(`<li>${text}</li>`);
}
createLi(`July`);
createLi(`July`);
createLi(`July`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function criateli1 (text,num) {

    document.write('<ul>')
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);

    }

    document.write('</ul>');
}

createLi('Monday',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mixArr = [1,5,3,true,false,'Monday','Sunday'];
function create(mixArr) {
    for (let i = 0; i < mixArr.length; i++) {
        const mixArrElement = mixArr[i];
        document.write(`<li>${mixArrElement}</li>`);

    }
}
create(mixArr);