$(function(){
    //서브페이지 1 슬라이드
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });
    //서브페이지 2 슬라이드
    let placeSI=0;
    let plcInter = setInterval(plcGo,5000);

    function plcGo(){
        if(placeSI<2){
            placeSI++;
        }else{
            placeSI=0;
        }
        plcRolling();
    }

    function plcRolling(){
        $('.img_box ul').animate({left : (placeSI * -50)+'%'},500)
    }
})