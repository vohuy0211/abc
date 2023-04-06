function kiemTra(){
    let a = Number(prompt('Nhập vào số a'));
    let b = Number(prompt("nhập vào số b"));

    if (a % b == 0){
        alert('số a chia hết cho b' )
    }else{
        alert('số a không chia hết cho b')
    }
}
//  
function dieuKien(){
    const old = +prompt('Nhập số tuổi học sinh');

    if(old >= 16){
        alert('Học sinh đủ điều kiện vào lớp 10');
    }else{
        alert('Học sinh không đủ điều kiện vào lớp 10');
    }
}
// 
function soNguyen(){
    const integer = Number(prompt('Nhập số nguyên cần kiểm tra'));
    
    if(integer > 0){
        alert(integer + ' là Số lớn hơn 0')
    }else{
        alert(integer+ 'là số bé hơn 0')
    }
}
// 
function greatest(){
    const a = Number(prompt('Nhập số thứ nhất'));
    const b = Number(prompt('Nhập số thứ hai'));
    const c = Number(prompt('Nhập số thứ ba'));

    if(a > b && a > c){
        alert(a + 'là số lớn nhất');
    }else if(b > a && b > c){
        alert(b + 'là số lớn nhất');
    }else{
        alert(c + 'là số lớn nhất');
    }
}