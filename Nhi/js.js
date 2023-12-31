let index = 0;
let images = ['./images/1.png', './images/2.png', './images/3.png', './images/4.png', './images/5.png','./images/6.png','./images/7.png','./images/8.png']; // Đường dẫn của các hình ảnh
let tieudes=[
    'CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM',
    'CHÚC MỪNG NĂM QUÝ MÃO 2023',
    'LỄ TÌNH NHÂN 14/2',
    'QUỐC TẾ PHỤ NỮ 8/3',
    'ẢNH BÌA FACEBOOK ĐOÀN THANH NIÊN PTITHCM',
    'NGÀY CỦA MẸ',
    'ẢNH ĐẠI DIỆN CHO VIDEO YOUTUBE CÁ NHÂN',
    'QUỐC TẾ THIẾU NHI 1/6'
]
let motas=[
    '20/10 là một ngày đặc biệt nhằm tôn vinh người phụ nữ Việt Nam. Dù dòng chảy thời gian có trôi xa đến mấy, hình ảnh người phụ nữ Việt Nam "anh hùng - bất khuất - trung hậu - đảm đang" vẫn vẹn nguyên.',
    'Năm hết Tết đến, rước lộc vào nhà, quà cáp bao la, mọi nhà no đủ, vàng bạc đầy tủ, gia chủ phát tài, già trẻ gái trai sum vầy hạnh phúc.',
    'Chúc tất cả các cặp đôi có một ngày Lễ Tình Nhân thật ngọt ngào, ấm áp và tràn đầy sự hạnh phúc',
    'Nhân ngày 8/3, ngày tuyệt vời nhất của một nửa thế giới, xin gửi những lời chúc tốt đẹp nhất đến toàn thể các bà, các mẹ, các chị em.',
    'Lấy tông đỏ thẩm làm màu sắc chủ đạo, em muốn truyền tải thông điệp "Vạn sự như ý, tỉ sự như mơ, triệu triệu bất ngờ, không chờ cũng đến".',
    'Ngày của Mẹ là một dịp đặc biệt để tôn vinh và tri ân những người mẹ đáng kính trên khắp thế giới. Đây là ngày để chúng ta nhớ đến những nỗ lực và hy sinh mà mẹ đã dành cho gia đình và con cái.',
    'Nhật ký cuộc sống sinh viên xa nhà khi xa nhà ở thành phố. Thiết kế mang hơi thở trẻ trung, năng động với gam màu đa sắc tươi sáng, với nụ cười tích cực của nhân vật chính được đặt ngay trung tâm :33',
    'Trẻ em như búp trên cành Biết ăn ngủ biết học hành là ngoan.'
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
