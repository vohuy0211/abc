// bài 1
function Array_1(){
    const myColor = ["Red", "Green", "White", "Black"];
        document.write(myColor.join());
        console.log(myColor.toString())
}
// bài 2 cách 1
// oninput --> function được gọi khi giá trị trong input thay đổi
// const result_1 = document.querySelector("#result-change");


// function handLeNumber(){
//     let resultString_1 = "";
//     const valueNumber = document.querySelector("#number-change").value;
//     for(let i = 0 ; i < valueNumber.length ; i++){
//         if (valueNumber[i] % 2 == 0 && valueNumber[i + 1] % 2 == 0){
//             resultString_1 += valueNumber[i] + "-"
//         }else {
//             resultString_1 += valueNumber[i];
//         }
//     }
//     // console.log(resultString_1);
//     result_1.innerHTML = resultString_1;
// }
// bài 2 cách 2
const result_2 = document.querySelector("#result-change-2");
function handLeNumber(element){
    const valueInput = element.value;
    let resultString_2 = [];
    for(let i = 0 ;i < valueInput.length ; i++){
        if(valueInput[i] % 2 == 0 && valueInput[i + 1] % 2 == 0){
            resultString_2.push(valueInput[i] + "-");
        }else {
            resultString_2.push(valueInput[i]);
        }
    }
        result_2.innerHTML = resultString_2.join("");
}
// bài 3 In chữ thương sang chữ hoa
    const resultConvertString = document.querySelector("#result-convert-string");
    function convertString(element){
    const str = element.value;
    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let convertStr = '';
    let isUpper = false;

    for(let k = 0 ; k < str.length ; k++){
        for(let i = 0 ; i < UPPER.length ; i++){
            console.log(UPPER.length);
            if(str[k] == UPPER[i]) {
                isUpper = true;
                break;
            }
        }

        if(isUpper) {
            convertStr += str[k].toLowerCase();
        } else{
            convertStr += str[k].toLowerCase();
        }
    }
    resultConvertString.innerHTML = convertStr
}
// tổng hợp kiến thức Array:
// @create
// -push()--> Thêm mới item vào array và trả về chiều dài của mảng
// -unshift(item)--> Thêm mới item vào đầu array và trả về chiều dài của array
// -giá trị của phần tử (element)
// -vị trí của phần tử (index)
// -new Array()
// @read
// -array[i] -->Hiển thị phần tử thứ i trong array
// -dùng for of để lặp qua từng phần tử trong array và lấy được giá trị từng phần tử đó

// -For in --> lấy được vị trí từng phần tử
// @update
// -array[i] = X --> gán phần tử từ i trong array bằng x 
// 
// 
// delete
// -array.pop() --> xoá phần tử cuối của mảng và trả về giá trị phần tử được xoá
// array.shift()--> xoá giá trị đầu của array và trả về giá trị phần tử bị xoá 
// *Một số method thông dụng
// 
// array.map() -->Lặp qua từng phần tử và trả về một mảng mới có chiều dài bằng chiều dài mảng ban đầu
// array.forEach() -->Lặp lại từng phần tử trong mảng
// array.filter() -->so sánh từng phần tử trong mảng và trả về mảng mới có phần tử thoả điều kiện 
// array.find() -->Tìm phần tử thoả điều kiện và trả về phần tử đầu tiên
// array.findIndex()-->trả về vị trí phần tử thoả điều kiện 
// array.sort()-->Sắp xếp phần tử
// array.includes()--> Tìm kiếm phần tử trong mảng thoả điều kiện và trả về boolean
// 
// 
// 
