let index = 0;
let images = ['./images/1.jpg', './images/2.jpg', './images/3.png', './images/4.jpg', './images/5.png']; // Đường dẫn của các hình ảnh
let tieudes=[
    'HOÀNG HÔN RỰC RỠ (TRANH SÁP DẦU)',
    'HOÀNG HÔN MƠ MÀNG (TRANH SÁP DẦU)',
    'GIAN HÀNG COFFEE 3D',
    'CHỤP CẢNH',
    'POSTER NUTRIBOOST',
]
let motas=[
    'Một lời tạm biệt dịu dàng với một ngày đã qua, và là lời chào đón đầy hy vọng cho một ngày mới. Cuộc sống luôn luôn thay đổi, và chúng ta cần phải sẵn sàng đón nhận những thay đổi đó.',
    'Vẻ đẹp của thiên nhiên, một lời nhắc nhở về sự chuyển đổi và thay đổi của cuộc sống. Một cảm giác bình yên và thư thái, một thông điệp tích cực về sự lạc quan và niềm tin.',
    'Cà phê không chỉ đơn giản là một thức uống, mà còn là một cách để bắt đầu một ngày mới, chia sẻ niềm vui với bạn bè, hay đơn giản là tận hưởng những giây phút thư giãn.',
    'cuộc sống luôn luôn tươi đẹp, ngay cả khi chúng ta đang phải đối mặt với những khó khăn. hãy mở lòng và đón nhận những điều mới mẻ.',
    'Thức uống dinh dưỡng kết hợp sữa và nước trái cây thơm ngon, giúp bạn luôn tràn năng lượng cho một ngày làm việc hiệu quả.'

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
