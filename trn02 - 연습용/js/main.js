$(function(){
/////////////////////////////////





$('.movie .m_pause').on('click', function(){
    $('.movie video').trigger('pause');
});

$('.movie .m_play').on('click', function(){
    $('.movie video').trigger('play');
})



$("#lol").YTPlayer({
    videoURL:'https://youtu.be/mDYqT0_9VR4',
    containment:'.utube',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls: false,
    playOnlyIfVisible: true,
});

$('.utube .u_pause').on('click', function(){
    $('#lol').YTPPause();
})
$('.utube .u_play').on('click', function(){
    $('#lol').YTPPlay();
})


$('.product_slider').slick({
    slidesToShow: 5,
    autoplay: true,
    dots: true,
    arrows: false,
});


$('.tab .t_title>li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
    var idx = $(this).index();
    $('.tab .t_cont>li').eq(idx).addClass('on').siblings().removeClass('on');
});





$('.practice .menu>li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
    var m_in = $(this).index();
    $('.practice .content>li').eq(m_in).addClass('on').siblings().removeClass('on');
})



$('.ham').on('click', function(){
    $(this).toggleClass('is-active');
    $('.gnb nav').toggleClass('on');
})



///////////////////////////////////
});