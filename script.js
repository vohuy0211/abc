
// Number là method để chuyển đổi giá trị trong nó từ string sang dạng Number
// function nameFunction()
// bài 1 tính điểm trung bình 3 môn toán lý hoá
    function bai_1() {
        let a = parseInt(prompt('nhập điểm toán'));
        let b = parseInt(prompt('nhập điểm lý'));
        let c = parseInt(prompt('nhập điểm hoá'));
        let average = ((a + b + c)/3);

alert('average = ' + average );
    }
    // Bài 2 Tính nhiệt độ
    function bai_2() {
        let Fahrenheit;
        Fahrenheit = prompt("Enter Fahrenheit:");
        let Celsius = (Fahrenheit - 32)*5 /9;
        document.write("Độ C là:" + Celsius);
    }
    // Bài 3 tính diện tích hình tròn
    function bai_3() {
        let r = prompt("Nhập bán kính");
        const S = 3.14*(r*r);
        document.write("Diện tích hình tròn là:" + S)
    }
    // Bài 4 Tính chu vi hình tròn
    function bai_4() {
        let d = prompt("Nhập đường kính");
        const C = d * 3.14;
        document.write("Chu vi hình tròn là:" + C).toFixed(2);
    } 