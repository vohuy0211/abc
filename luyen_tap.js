// đếm từ 1 đến 100
function dialog(){
    for (i = 0; i < 100; i++) {
        console.log("The number is " + i );
        if (i == 99) {
            alert('đã hoàn thành');
        }
    }
}

// Nhiệt độ
// function temperature(){
//     let i = +prompt('Nhập nhiệt độ');
// while(i < 20){
//     console.log('Yêu cầu người dùng tăng nhiệt độ')
//     break;
// }
// while(i > 100){
//     console.log('Yêu cầu người dùng giảm nhiệt độ' + i);
//     break;
// }
// while(i >= 20 && i<=100){
//     console.log('Nhiệt độ bình thường')
//     break;
// }
// }
function temperature(){
    do{
        let t = Number(prompt('Nhập nhiệt độ'));
        if(t > 30){
            alert("Vui lòng giảm nhiệt độ");
        }else if(t < 18){
            alert("Vui lòng tăng nhiệt độ");
        }else{
            alert("nhiệt độ đã ổn định");
        }
    }while(t > 18 || t < 30)
}
//
function fibonacci(){
    let f = [];

    f[0] = 0;
    f[1] = 1;
    for (i = 2  ; i <= 20; i++) {
        f[i] = f[i - 2] + f[i - 1];
        document.write(f[i] + "<br>");
    }
}
// Hiển thị 20 số đầu của số nguyên tố  
// function prime(){
//     let number = 2;
//     let count = 0;
//     let result = [];

//     while (count < 20) {
//         let isPrime = true;

//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             result.push(number);
//             count++;
//         }
//         number++;
//     }
//     document.write(result);
// }
// Kiểm tra số nguyên tố
// function prime(){
//     let N = Number(prompt('Nhập số cần kiểm tra'));
//     let isPrime = true;
//     for (let i = 2; i < N; i++) {
//         if (N % i == 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         alert("Là số nguyên tố");
//       } else {
//         alert("Không phải là số nguyên tố");
//       }
// }
// Nhập số lượng số nguyên tố cần liệt kê
function prime(){
    const quantity = Number(prompt('Nhập số lượng số nguyên tố cần liệt kê'));
    let N = 3;
    let count = 0;
    let primeString = []
    let isPrime = true;
    while(count < quantity){
        let isPrime = true;
        for(let i = 2 ; i < N ; i++){
            if(N % i == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            count++;
            primeString = primeString + " " + N;
            // // in trên màn hình
            //  primeString.push(N)
                    }
                    N = N + 1;
                }
                console.log('Số nguyên tố trong dãy số là' + primeString);
                // document.write(primeString)

        }
        // 
        function checkNumber(){
            let N = Number(prompt('Nhập số cần tìm ước'));
            let Renege = "";
            
            for(let i = 1 ; i <= N ; i++){
                if(N % i == 0){
                    Renege = Renege + "" + i + ","
                }
            }
            document.write("ước số là" + Renege);


        }
        // 
        function perfectNumber(){
            let N = Number(prompt('Nhập số'));
            let total = 0
            for(i = 0 ; i < N ; i++){
                if(N % i == 0){
                    total = total + i
                }
            }
            if(N == total){
                alert('là số hoàn hảo');
            }else{
                alert('không phải số hoàn hảo');
            }
        }
        // tính tông 30 chia hết cho 7 đầu tiên 
        function numBer_7(){
                let count =0;
                let N=7;
                let sum=0;
               while (count<30) {
                
                  count= count +1;
                  sum =sum+N;
                  N=N+7
                  }    
              alert("Tổng là: " + sum)}
            
        // Bài 7 luyện tập vòng lặp 1 FizzBuzz
        function fizzBuzz(){
            let result = []
            for (let i = 1; i <= 100; i++) {
                if (i % 5 == 0 && i % 3 == 0) {
                    document.getElementById('result').innerHTML += "FizzBuzz" + "<br>";
                } else if (i % 3 == 0) {
                    document.getElementById('result').innerHTML += "Fizz" + "<br>";
                } else if (i % 5 == 0) {
                    document.getElementById('result').innerHTML += "Buzz" + "<br>";
                } else {
                    document.getElementById('result').innerHTML += i + "<br>";
                }
            }
        }
        // tìm số đầu tiên trong dãy fubonacci chia hết cho 5
        function findingNumber(){
            let f = []
            f[0] = 0;
            f[1] = 1;
            for (let i = 2  ; i <= 20; i++) {
                f[i] = f[i - 2] + f[i - 1];
            document.write(f[i]);
            if(f[i] % 5 == 0){
                console.log(f[i])
                document.write("Số đầu tiên trong dãy ibonacci chia hết cho 5 là " + f[i])
                break;
            }
    }
        }
        // tính tổng của 20 số đầu tiên trong dãy fibonacci
        function sumOfNumber(){
            let total = 0
            let f = [];

            f[0] = 0;
            f[1] = 1;
            for (i = 2  ; i <= 20; i++) {
            f[i] = f[i - 2] + f[i - 1];
            total = total + f[i]
            }
                document.write("tổng 20 số đầu tiên trong dãy fubonacci là :" + total );
        }
        // 
        function guess() {
            let a = parseInt(prompt('Nhập số đoán từ :'));
            let b = parseInt(prompt('Đến số'));
            let x=Math.round(Math.random()*(b-a+1))+a;
            document.getElementById('kq').innerText = x;

            for (let i=1;i<=3;i++){
                var c=parseInt(prompt("Nhập vào số bạn muốn đoán từ số "+a+" đến số "+b+" là: "));
                if (c === x){
                    alert("Chúc mừng bạn đã đoán đúng");
                    break;
                }else if (c < x){
                    alert("Số bạn đoán nhỏ hơn số của chương trình mời bạn đoán lại");
                }else if (c > x){
                    alert("Số bạn đoán lớn hơn số của chương trình mời bạn đoán lại");
                }
            }
            console.log(x)
            console.log(c)
            if(c === x){
                confirm("Bạn có muốn chơi lại không");
            }else {
                alert("Bạn đã hết lượt đoán");
            }
        }
        // Tính giai thừa số nguyên dương
        function factorial(){
            let n = parseInt(prompt('Nhập số cần tính giai thừa :'));
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result = result * i;
            }
            document.write(result + "<br>");
        }
        // tam giác vuông
        function triangle(){
            for(i = 1 ; i <= 5 ; i++){
                for(k = 1 ; k <= i ; k++){
                    document.write("*")
                }
                document.write("<br>")
            }
            
        }
        // tam giác vuông 2
        function triangle1(){
            for(i = 5; i > 0 ; i--){
                for(k = 0 ; k < i ; k++){
                    document.write("*")
                }
                document.write("<br>")
            }
        }
        // tam giác vuông 3
        function triangle2(){
            for (let i = 1; i <= 5; i++) {
                for (let j = 1; j <= 5; j++) {
                    if (j<=5-i){
                        document.write("&nbsp&nbsp");
                    } else {
                        document.write("*");
                    }
                }
                document.write("<br>");
            }
        }
        // tam giác vuông
        function triangle3(){
            for (let i = 1; i <= 5; i++) {
                document.write("<br>");
                for (let j = 1; j <= i; j++) {
                    document.write("&nbsp&nbsp")
                }
                for (let n = 5; n >= i; n--) {
                    document.write("*")
                }
            }
            document.write("<br>");
        }
        // for (let i = 1; i <= 5; i++) {
        //     for (let j = 1; j <= i; j++) {
        //         document.write("&nbsp&nbsp")
        //     }
        //     for (let k = 5; k > i; k--) {
        //         document.write("*")
        //     }
        //     document.write("<br>");
        // }
        function bangCuuchuong(){
            let bang;
            bang = "<table border='1' width='1000' cellspacing='1' cellpadding='1x';>"
            for (i = 1; i <= 9; i++) {
                bang += "<tr>";
                for (j = 2; j <= 9; j++) {
                    let result = i * j;
                    bang = bang + "<td>" + j + "x" + i + "=" + result + "</td>";
                }
                // bang = bang + "</tr>";
            }
            // bang = bang + "</table>";
            document.write(bang);
        }
