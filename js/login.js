$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
        
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
    
	$("input").focus(function(){
		$(this).css("background-color","#EF820D"); });
	$("input").blur(function(){
		$(this).css("background-color","grey"); });
	$("input").blur(function(){
		$(this).css("color","black"); });
	$(".login").mouseenter(function(){
		$("#btn2").fadeIn();});
});