const dataUsers = [
    {
        id: '1',
        firstName:'Huy',
        lastName:'Võ',
        username:'HuyVo0211',
        avt_image: "./image/Avata1.jpg",
    },
    {
        id : '2',
        avt_image : "./image/Avata2.jpg",
        firstName : "Ivy",
        lastName : "Cal",
        username : "Ivy.Cal@"
    },
    {
        id : '3',
    avt_image : "./image/Avata3.jpg",
    firstName : "Walter",
    lastName : "Beau",
    username : "Walter.Beau@"
    },
    {
        id : '4',
    avt_image : "./image/Avata4.jpg",
    firstName : "Jame",
    lastName : "Dani",
    username : "Jame.Dani"
    },
    {
        id : '5',
    avt_image : "./image/Avata5.jpg",
    firstName : "Alin",
    lastName : "Code",
    username : "Alin.Code"
    }
]

// gọi renderData khi JS được chạy vào
renderData(dataUsers)

function renderData(data){
    console.log(11111, data);
    // B1. lấy được element cần thay đổi content
    const table = document.querySelector('table')
    const tbody = table.querySelector(('tbody')) 
    // đây là thẻ muốn thay đổi nội dung bên trong
    // B2. Đặt biến content để thay đổi nội dung sau khi hiển thị
    contentTbody = "";
    
    // Bước thay đổi content theo dữ liệu đã cho
    // B2.1 Lặp qua từng phần tử trong data để mỗi lần lặp thềm vào 1 row(tr)
    // forEach() là method lặp qua từng phần tử trong mảng và lấy được element, index , array đúng theo thứ tự 
   data.forEach((user, index , array) => {
        contentTbody += `<tr>
        <td>${index + 1}</tđ>
        <td><img src = "${user.avt_image}"></tđ>
        <td>${user.firstName}</tđ>
        <td>${user.lastName}</tđ>
        <td>${user.username}</tđ>
        <td>
            <button onclick="hanleEdit('${user.id}')">Edit</button>
            <button onclick="hanleDelete('${user.id}')" class="font_Color">Delete</button>
        </td>
        
        </tr>`
   });
//    b3. Gắn nội dung đã được thay đổi vào element HTML
    tbody.innerHTML = contentTbody;
}

// function được gọi khi click button Search
// cách 1 . 
function handleSearch(){
    // Lấy giá trị input Search
    const valueSearch = document.querySelector('#input-search').value;
    // console.log("Kiểm tra search" , valueSearch);
    //b2.khai báo biến để lấy dữ liệu sau khi lọc
    const dataSearch = [];
    dataUsers.forEach((item) => {
        // console.log(item.firstName);
        if(
            item.firstName.toLowerCase().includes(valueSearch.toLowerCase())||
            item.username == valueSearch
        ) {
            dataSearch.push(item)
        }
    });
    console.log("", dataSearch);
    renderData(dataSearch);
}
function hanleDelete(id){
console.log(id);
dataUsers.forEach((user , index) => {
    if(user.id === id){
        dataUsers.splice(index,1);
    }
});
renderData(dataUsers)
}
// 
function handleToggle (element) {
    // lấy element để đổi thông tin 
    // lấy element cần chỉnh sửa 
    const form = document.querySelector("#form");
    // đạt điều kiện kiểm tra ẩn hiện 
    if (!form.style.display || form.style.display === "none"){
        form.style.display = "block"
    }else {
        form.style.display ="none";
    }
}
// 
function handleSubmit(id){
    const Avatar = document.querySelector('#avatar');
    const FirstName = document.querySelector('#first-name');
    const LastName = document.querySelector('#last-name');
    const UserName = document.querySelector('#User-name');
    // console.log(
    //     1,Avatar,2,FirstName,3,LastName,4, UserName
    // );
    const user_1 = {
        avt_image : Avatar.value,
        firstName : FirstName.value,
        lastName : LastName.value,
        username : UserName.value,
    }
    console.log(user_1);
    dataUsers.push(user_1)
    renderData(dataUsers)
    // xoá dữ liệu sau input
    
}
//
document.querySelector('#item').addEventListener('Click' , function(e){
    const Avatar = document.querySelector('#avatar');
    const FirstName = document.querySelector('#first-name');
    const LastName = document.querySelector('#last-name');
    const UserName = document.querySelector('#User-name');
    e.preventDefault()
})
// function handleEdit(id){
//     let userFind; 
//     const Avatar = document.querySelector('#avatar');
//     const FirstName = document.querySelector('#first-name');
//     const LastName = document.querySelector('#last-name');
//     const UserName = document.querySelector('#User-name');  
//     dataUsers.forEach((user) => {
//         if (user.id == id){
//             userFind = user;
//             return;
//         }
//     });
// }
