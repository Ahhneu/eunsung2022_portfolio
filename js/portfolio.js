$(function(){
    
    $('.graphic ul li').eq(0).click(function (e) {
        e.preventDefault();
        $('.popup').eq(0).show();
    })
    $('.graphic ul li').eq(1).click(function (e) {
        e.preventDefault();
        $('.popup').eq(1).show();
    })
    $('.graphic ul li').eq(2).click(function(e){
        e.preventDefault();
        $('.popup').eq(2).show();
    })
    $('.graphic ul li').eq(3).click(function (e) {
        e.preventDefault();
        $('.popup').eq(3).show();
    })
    $('.graphic ul li').eq(4).click(function (e) {
        e.preventDefault();
        $('.popup').eq(4).show();
    })
    $('.graphic ul li').eq(5).click(function (e) {
        e.preventDefault();
        $('.popup').eq(5).show();
    })
    $('.graphic ul li').eq(6).click(function (e) {
        e.preventDefault();
        $('.popup').eq(6).show();
    })
    $('.graphic ul li').eq(7).click(function (e) {
        e.preventDefault();
        $('.popup').eq(7).show();
    })

    $('.popup').click(function(e){
        e.preventDefault();
        $('.popup').hide();
    })

   
    $('.edit ul li').eq(0).click(function(e){
        e.preventDefault();
        $('.editpopup').eq(0).show();
    })
    $('.edit ul li').eq(1).click(function (e) {
        e.preventDefault();
        $('.editpopup').eq(1).show();
    })
    $('.edit ul li').eq(2).click(function (e) {
        e.preventDefault();
        $('.editpopup').eq(2).show();
    })
    $('.edit ul li').eq(3).click(function (e) {
        e.preventDefault();
        $('.editpopup').eq(3).show();
    })
    $('.editpopup').click(function (e) {
        e.preventDefault();
        $('.editpopup').hide();
    })
})