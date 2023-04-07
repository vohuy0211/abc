// bài 1 . Luyện tập khởi tạo
// const result = document.querySelector("#numBer_2").value;
// let input = "";
// let a = document.querySelector('#eLement')
// function calculation(element){
//     input = element.value    
//     let Arr = input.split(" ")
//     let tong = [];
//     //    console.log(Arr,0000); 
//     for(i = 0 ; i < Arr.length ; i++){
//         if(Arr[i] >= 10){
//             tong.push(Arr[i])
//         }
//         // console.log(tong);
//         a.innerHTML = tong


//     }
//     let max=Arr[0]
//     for(i = 0 ; i < Arr.length ; i++) {
//         if (Number(Arr[i])>max){
//             max=Number(Arr[i])        }
//     }
//     document.querySelector('#eLement').innerHTML=max
//     // let total = 0;
//     // for(i = 0 ; i < Arr.length ; i++){
//     //     total += Number(Arr[i])
//     // }
//     // // console.log(tong);
//     // const a = document.querySelector('#eLement')
//     // console.log(total)
//     // }
// }
// // bài 2 
// let result_1 = document.querySelector("#enterNumber");
// let some ="";
// let b = document.querySelector("biggest-number")
// function greaTest(element){
//     some = element.value
//     let max 
//     let Arr1 = some.split(" ")
//     for(i = 0 ; i < Arr1.length ; i++){
//          max = Arr1[0]
//         if (Number(Arr1[i]) > max){
//             max=Number(Arr1[i])        
//         }

//     }
//     document.querySelector('#biggest-number').innerHTML=max
// }
// Luyện tập mảng 2 bài 1
let Arr = "";
let view = "";

const rS = document.querySelector('#result');

function Add() {
    const numBerArr = document.querySelector("#creaTe");
    console.log(numBerArr);
    let sum = numBerArr.value
    
    // console.log(Arr);
    view += sum+"<br>"
    console.log(view);
}   
function vieW() {
    const Log = document.querySelector('Bai_1')
    // console.log(Log);
    for(let i = 0 ; i <= view.length -1; i++){
        
    }rS.innerHTML=view
}
