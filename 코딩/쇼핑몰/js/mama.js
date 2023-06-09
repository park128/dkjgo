// 페이드 슬라이드 //
$(document).ready(function(){

    var slideIndex1 = 0;

    setInterval(function(){
        if(slideIndex1 > 2){
            slideIndex1 = 0;
        }

        $(".typo").removeClass("active");

        $(".typo").eq(slideIndex1).addClass("active");

    
        slideIndex1++;
    
    },6000);
    

});

// mbti 세로 슬라이드 //
$(function(){

    var slideIndex2 = 0;
    var a = $(".kakao_wrap").height();

    setInterval( function(){
        
        $(".kakao_list").css({"top" : -a * slideIndex2});
        
        slideIndex2++;

        // slideIndex = slideIndex + 1
        // 만약에 slideIndex 가 3보다 커지면 기능이 작동
        // slideIndex 가 0이 된다.
        
        if(slideIndex2 > 3){
            slideIndex2 = 0;
        };

    } , 3000);


});

// ul 버튼 //
$(function(){

    var indexNum = 0;

    setInterval(function(){

        if(indexNum > 2){
            indexNum = 0;
        }

        $(".path_box > .path").removeClass("active");
        $(".path_box > .path").eq(indexNum).addClass("active");


        indexNum++;
    },6000);
})

// 전체 화면 ul //

$(function(){
    var $menu = $('#top_menu ul li'),
        $contents = $('#contents > div');

    $menu.click(function(x){
        x.preventDefault();
        var idx =$(this).index();
        var section = $contents.eq(idx)
        var sectionDistance = section.offset().top;
        
        //A.scrollTop() 스크롤양을 확인
        // $('html').stop().animate({속성:값});
        $('html,body').stop().animate({scrollTop:sectionDistance});
    
    });

    // 윈도우 스크롤이 생기면
        // $contents를 마다 할 일
            // 각각의 화면 상단에서의 거리 sectionDistance보다 사용자의 스크롤양이 많은지 적은지 확인
            // 많다는 조건이 참이면 각 요소마다 순번을 변수명 idx에 저장
            // 그 순번에 해당하는 메뉴에만 클래스명 on 추가
    // 

    $(window).scroll(function(){
        $contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()){
                var idx = $(this).index();
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
        });
    });
});

$(function(){
    var $mbti = $('#mbti ul li');
    var idx;
    // var $mbti2 = $(div.mbti_area:nth-child(idx));

    // console.log($mbti2)
    $mbti.click(function(){
        idx=$(this).index()
        $mbti.removeClass('on');
        $mbti.eq(idx).addClass('on');
        console.log(idx)
    })
})
