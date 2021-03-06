// $(document).ready(function() {
//     $("#slider").lightSlider({
//         mode:'slide',    // 이미지가 표시되는 형식 (fade / slide)
//         loop:true,       // 무한반복 할 것인지
//         auto:true,       // 자동 슬라이드
//         keyPress:true,   // 키보드 탐색 허용
//         pager:false,     // 페이지 표시
//         speed:1500,      // 슬라이드 되는 속도
//         pause:3000       // 이미지가 머무는 시간
//     });
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    // autoplay: {
    //   delay: 6000,
    //   disableOnInteraction: false
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
