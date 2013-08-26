$(document).ready(function(){

	$('.partner.status.louis').mouseover(function(){
	 	$('#louisPic').attr('src', 'img/eleanor-calder.jpg');
	}).mouseout(function(){
	  	$('#louisPic').attr('src', 'img/louis.jpg');
	});

	$('.partner.status.zayn').mouseover(function(){
	 	$('#zaynPic').attr('src', 'img/perrie-edwards.jpg');
	}).mouseout(function(){
	  	$('#zaynPic').attr('src', 'img/zayn.jpg');
	});

	$('.partner.status.niall').mouseover(function(){
	 	$('#niallPic').attr('src', 'img/zoe-whelan.jpg');
	}).mouseout(function(){
	  	$('#niallPic').attr('src', 'img/niall.jpg');
	});

});


