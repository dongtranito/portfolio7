let index = 0;
let images = ['./images/1.png', './images/2.png', './images/3.jpg', './images/4.png', './images/5.png']; // Đường dẫn của các hình ảnh
let tieudes=[
    'HỢP TÁC SHOPPEE',
    'WEB QUẢN LÝ PHÒNG TRỌ',
    'KỊCH BẢN "HỒI SINH"',
    'DIỄN VIÊN MV',
    'DIỄN VIÊN FILM NGẮN'
]
let motas=[
    'Đây là một video TVC được tôi viết kịch bản và làm diễn viên, quảng cáo cho đại hội siêu sale 12.12 shopee, video được áp dụng nhiều kỹ xảo hay ho',
    'Trang web được viết từ Django một framework của Python, trang web viết ra với mục đích để dự thi cuộc thi khoa và xa hơn là quản lý phòng trọ',
    'Đây là kịch bản được viết kết thúc môn học môn Kịch Bản Đa Phương Tiện theo chuẩn Hollywood, kịch bản xoay quanh nhân vật A người đã xa đà việc học rồi tỉnh ngộ và trở thành một người truyền cảm hứng',
    'MV “Chạy Về Khóc Với Anh” là MV đầu tiên hợp tác với Netflex, trải qua ngày tháng suy nghĩ khó khăn cực nhọc, cuối cùng MV cũng được xuất bản. Xem chi tiết <a href="https://www.youtube.com/watch?v=3-c6GU6wKJ4" target="_blank">tại đây </a>',    
    'Film ngắn “Trần Nghệ Nhân” là bộ film ngắn đầu tiên tôi được thử sức ở diễn viên chính, film nói về một nhân vật Nhân người mà ở quá khứ xuyên không về tương lai. Xem chi tiết <a href="https://www.youtube.com/watch?v=3-c6GU6wKJ4" target="_blank">tại đây </a>'    
]
let tieude=document.querySelector('.sanPham .noiDung .tieude')
let mota=document.querySelector('.sanPham .noiDung .mota')
let imgElement = document.querySelector('.slider .anh img')
let linkAnhPhongTo=document.querySelector('.anhPhongTo img')
let anhPhongTo = document.querySelector('.anhPhongTo')
let dots = document.querySelectorAll('.slider .dots li')

function changeImage() {
    imgElement.src = images[index]
    linkAnhPhongTo.src = images[index]
    imgElement.classList.add('hien')
    setTimeout(() => { 
        imgElement.classList.remove('hien')
    }, 1000);
    let last_active_dot = document.querySelector('.slider .dots li.active')
    last_active_dot.classList.remove('active')
    dots[index].classList.add('active')
    tieude.innerHTML=tieudes[index]
    mota.innerHTML=motas[index]
}


document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % images.length; // Tính toán chỉ số hình ảnh tiếp theo
    changeImage()
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length; // Tính toán chỉ số hình ảnh trước
    changeImage()
})

document.querySelector('.anhPhongTo img').addEventListener('click', function() {  
    anhPhongTo.style.display = 'none'
})

document.querySelector('.anh img').addEventListener('click', function() {
    anhPhongTo.style.display = 'flex'
})


// =======================================
var skillProgresses = document.querySelectorAll('.skill-progress');


function runAnimation() {
  for (var i = 0; i < skillProgresses.length; i++) {
    var skillProgress = skillProgresses[i];
    skillProgress.classList.add('animate'); // Thêm class 'animate'
  }

  setTimeout(
    function(){ 
        for (var i = 0; i < skillProgresses.length; i++) {
            var skillProgress = skillProgresses[i];
            skillProgress.classList.remove('animate')}}
  , 2000);
}
runAnimation()
setInterval(runAnimation, 5000);
