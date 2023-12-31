let index = 0;
let images = ['./images/1.png', './images/2.png', './images/3.png', './images/4.jpg', './images/5.png']; // Đường dẫn của các hình ảnh
let tieudes=[
    'BỘ PHIM “TRẦN NGHỆ NHÂN”',
    'CASTING CALL',
    'THÔNG BÁO',
    'POSTER “MV COVER MÃI BÊN NHAU BẠN NHÉ”',
    'QUỐC TẾ PHỤ NỮ',
]
let motas=[
    '“Lần đầu tiên được cộng tác làm phim và cũng là tác phẩm đầu tiên đứng ở vị trí biên kịch. Bộ phim được khai thác chủ yếu về đề tài truyện dân gian và gia đình. Bên cạnh đó bộ phim còn nêu lên tính nghệ thuật, tính truyền cảm và nhiều giá trị nghệ thuật khác”.' ,

    '“Poster tuyển thành viên cho Câu lạc bộ Bóng rổ”.',

    '“Tác phẩm khi làm việc trong Ban truyền thông Liên chi Đoàn Công nghệ đa phương tiện”.',

    '“Phụ trách thiết kế Poster của sản phẩm MV cover Mãi bên nhau bạn nhé”.',

    '“Không có nhiều kinh nghiệm trong việc thiết kế nhưng sẽ cố gắng hết mình để làm tốt nhiệm vụ”.'

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
