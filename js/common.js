$(function(){
   /*  $('.cost button').click(function(){
        console.log('aa')
    }) */

    /* 네비게이션 */
    $('nav ul.hd_bottom>li').mouseover(function(){
        $(this).find('ul.sub').stop().slideDown()
    });
    $('nav ul.hd_bottom>li').mouseout(function(){
        $(this).find('ul.sub').stop().slideUp()
    })

  
    /* 스크롤시 attach  */
    $(document).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc>280){
            $('.attach').addClass('active').fadeIn()
        }else{
            $('.attach').removeClass('active').fadeOut()
        }

    });

    /* 바닥 탑 버튼 누르면 위로 올라가게 */
    $('.up').on('click',function(){
        $('html,body').stop().animate({scrollTop:0},500)
    });

})