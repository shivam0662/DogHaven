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
		$(this).css("background-color","#861415"); });
	$("input").blur(function(){
		$(this).css("background-color","grey"); });
	$("input").blur(function(){
		$(this).css("color","black"); });

    
  });

  function myval() {
		alert("Thank you for signing up!");
  }