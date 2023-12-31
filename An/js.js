let index = 0;
let images = ['./images/1.png', './images/2.jpg', './images/3.jpg', './images/4.png', './images/5.jpg']; // Đường dẫn của các hình ảnh
let tieudes=[
    'TỪ THIỆN LỚP 11A3',
    'PHIM NGẮN “ LAST DAY “',
    'TVC AW POLO',
    'MV - CHẠY VỀ KHÓC VỚI ANH (COVER)',
    'PHỤ NỮ VIỆT NAM',
]
let motas=[
    'Đây là một trong những sản phẩm đầu tay của mình bắt đầu hành trình làm video đầy nhiệt huyết và đam mê. Chúng mình bắt tay thực hiện dự án này nhằm tôn vinh công lao dưỡng dục và dạy dỗ của thầy cô nhân dịp ngày nhà giáo Việt Nam 20/11. Một trong những sản phẩm mình rất tự hào. ',
    'Sản phẩm phim ngắn “Last Day” được thực hiện vào năm 2022. Đây là sản phẩm mình đã đem đi dự thi ở cuộc thi “Làm phim nghiệp dư” được tổ chức giữa các trường THPT trên địa bàn thành phố Biên Hoà. Bộ phim đã giúp mình mang về giải nhì và không ít kinh nghiệm cũng như ngày càng giúp mình tiến tới gần hơn với giấc mơ làm phim. Xem chi tiết <a href="https://www.facebook.com/watch/?v=346100790995722" target="_blank" >tại đây</a>',
    'Sản phẩm TVC đầu tiên mình thực hiện cho một doanh nghiệp thời trang nhỏ với mong muốn được thử sức, va chạm và trau dồi nhiều kinh nghiệm hơn trong lĩnh vực TVC và media.  Xem chi tiết <a href="https://www.facebook.com/watch/?v=7051905811547569" target="_blank" class="">tại đây</a>',
    'Lần đầu mình thử sức ở mảng MV, với vai trò đạo diễn kiêm diễn viên. Sản phẩm đầu tiên của nhóm chúng mình trên Đại học, một trải nghiệm mới mẻ và thú vị giúp mình có nhiều góc nhìn hơn về lĩnh vực làm MV ca nhạc. ',
    'Sản phẩm poster mình thực hiện cho CCC Thủ Đức nhằm tổ chức chương trình về người phụ nữ nhân dịp ngày 20/10. Sản phẩm lần đầu mình kết hợp giữa AI và PS.'
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
