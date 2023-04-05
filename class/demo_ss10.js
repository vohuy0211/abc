function calculatorRidius(){
    const r = Number(prompt("Nhập bán kính"));
if(r > 0){
    const S = 3.14*r*r
    console.log("Diện tích hình tròn là :" + S)
}
}

// số chẵn số lẻ
function CheckEven(){
    const a = Number(prompt("Nhập số"));
if (a % 2 ==0){
    console.log("Đây là số chẵn");
}else{
    console.log("Đây là số lẻ");
}
}
// if lồng
function food(){
    // Hỏi người dùng mua món ăn gì
    const Food = prompt('Bạn muốn ăn món ăn nào ? "Hủ tiếu","Mỳ quảng"',
    "Hủ tiếu"
    );
    // Gọi tên đặt biến khai báo món
    const Hutieu = "Hủ tiếu";
    const Myquang = "Mỳ quảng";
    const noFood = "Không có"

    // Khai báo món
    const Bo ="Bò"
    const Cha ="Chả"
    const Ga = "Gà"
    const Vit = "Vịt"
    if(Food == Hutieu){
const brand = prompt('Vui lòng chọn món:"Bò","Chả"')
    if(brand == Bo){
        alert('Món này 25 ngàn');
    }else if(brand == Cha){
        alert('Món này 30 ngàn');
    }else{
        alert(noFood)
    }
}
else if (Food == Myquang ){
const Foody = prompt('Vui lòng chọn "Gà","Vịt"')
        if(Foody == Ga){
            alert('Món này 25 ngàn');
        }else if(Foody == Vit){
            alert('Món này 30 ngàn');
        }
    }else
        alert(noFood)
    }
    // 
    function FindayoffMonth(){
        const month = Number(prompt('Nhập vào tháng'));

        switch (month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                alert('Tháng có 31 ngày');
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                alert('Tháng có 30 ngày');
                break;
            case 2:
                alert('Tháng có 28 hoặc 29 ngày');
            default:
                alert('Vui lòng nhập số từ 1 đến 12');
        }
    }
    // 
    function tinhDiem(){
        const Mark = +prompt('Nhập điểm');

        switch (true){
            case Mark >= 8:
            alert('Học sinh giỏi');
            break;
            case Mark >= 7:
            alert('khá');
            break;
            case Mark >= 5:
            alert('Học sinh trung bình');
            break;
            case Mark < 5:
            alert('Học sinh yếu');
            break;
        }
    }
    // 
    function tienDien() {
        const soDien = +prompt('Nhập số kWh đã sử dụng')
        if (soDien <= 50){
            const Bac1 = soDien * 1500
            alert('Số tiền đã sử dụng là ' + Bac1)
        }else if(soDien <=100){
            const Bac2 = soDien * 1700
            alert('Số tiền điện phải trả là' + Bac2)
        }
    }