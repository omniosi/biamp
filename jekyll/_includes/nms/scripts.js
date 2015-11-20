// $('.dot').on('mouseover', function(){
$('.dot').on('mouseenter', function(){
// $('.dot').on('hover', function(){
// $('.dot').hover(function(){
	// $(this).next('li').show(400);
	$(this).next('li').stop().fadeIn(300);
	// $(this).next('li').fadeIn(300).prev('li').on('mouseout',function(){});
	// $(this).next('li').fadeIn(300, function(){
		// $(this).on('mouseout'.fadeOut(300);
	// });

	// if( $(this).next('li').css('display')=='none' ){
	// 	$(this).next('li').fadeIn(300);
	// }else{
	// 	$(this).next('li').fadeOut(300);
	// }

	// $(this).find('.pop').fadeIn(300);
});
$('.dot').on('mouseout', function(){
	$(this).next('li').stop().fadeOut(300);
});
// $('.pop').on('mouseout', function(){
// 	$(this).fadeOut(300);
// });