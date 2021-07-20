// let num = [1,2,3,4,5];
// console.log(num);
//
// let strArr = ['O.Henry','Ch.Bronte', 'M.Twain', 'A.Sewell','J.Swift'];
// console.log(strArr);
//
// let item = ['Monday','Sunday', 33, 17, true];
// console.log(item);
//
// let emptyArr = [];
// emptyArr[15]='full box';
// console.log(emptyArr)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i <10; i++) {
    document.write(`<div>Three men in the boat</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Good mood: ${i}</div>`);

}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//     let i = 0;
// while (i<20) {
//     document.write(
//         `<div>
//             <h1>Black beauty</h1>
//
// </div>`)
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//     let i = 0;
//     while (i<20){
//         document.write(
//             `<div>
//                 <h1>The Secret Garden: ${i}</h1>
//
// </div>`)
//         i++;
//     }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numArr = [1,2,3,4,5,6,7,8,9,10];
console.log (numArr);

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strArr = ['one','two','three','four','five','six','seven','eight','nine','ten'];
console.log(strArr);

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixArr = [33,17,58,'hello','good day', 'true', 'false',8,'octen','jule'];
console.log(mixArr);

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи