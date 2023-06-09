$(function(){
//메뉴영역

$(".sub").hide();

$(".gnb").mouseenter(function(){
    $(".sub").stop().slideDown();
    $(".header_b").stop().animate({height:"400px"},500)
})//mouseenter

$(".gnb").mouseleave(function(){
    $(".sub").stop().slideUp();
    $(".header_b").stop().animate({height:"103px"},500)
})//mouseleave

// 이미지슬라이드 영역

$(".move").slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    arrows:true,
    slidesToScroll:2
})

// Selection4 이미지 슬라이드

$(".left_move").slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    arrows:false,
    slidesToScroll:2
})//

//section 탭메뉴

$(".section5_inner li").click(function(e){
    e.preventDefault()
    $(".section5_inner li").toggleClass("on")
})//click

//팝업

$(".pop").slideDown()
$(".pop_inner button").click(function(){
    $(".pop").slideUp
})


})//jquery