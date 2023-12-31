let detailTimLines = document.querySelectorAll('.detailTimeLine');
let duongThang = document.querySelectorAll('.duongThangTimeLine2');

for (let i = 0; i < detailTimLines.length; i++) {
    detailTimLines[i].addEventListener('mouseover', function() {
        for (let j = 0; j <= i; j++) {
            if(i==j){
                duongThang[j].classList.add('animationTimeLine');
            }
            else{
                duongThang[j].classList.add('animationTimeLine1');
            }
        }
    });

    detailTimLines[i].addEventListener('mouseout', function() {
        for (let j = 0; j <= i; j++) {
            duongThang[j].classList.remove('animationTimeLine');
            duongThang[j].classList.remove('animationTimeLine1');
        }
    });
}
// =============================================

let divsanPham = document.querySelector('.sanPhamChungTieuDe');
let textTieude = "DỰ ÁN CHUNG CỦA NHÓM";

function chuchay(text) {
  for (let i = 0; i < text.length; i++) {
      setTimeout(function() {
        divsanPham.innerHTML += text[i];
      }, i*200);
    };
}


chuchay(textTieude);

setInterval(function(){
    divsanPham.innerHTML = '';
    chuchay(textTieude);
},
7000
);

// =======================================

let contro=document.querySelector('.contro');

setInterval(function(){
    contro.classList.toggle('display');
},800)