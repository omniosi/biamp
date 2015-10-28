// footer products controls
var footerProducts = document.getElementsByClassName('footer')[0].getElementsByClassName('products')[0];
var footerProdMenu = document.getElementsByClassName('menu-prod')[0];

footerProducts.addEventListener('click',function(){
	if( footerProdMenu.style.display == 'none' ){
		productsOpen();
	}else{
		productsClose();
	}
});
function productsOpen(){
	langClose();
	if (window.innerWidth <= 1420){
		$('.footer').hide('slide',{direction:'left'},250);
		$('.menu-prod').show('slide',{direction:'right'},250);
	}else{
		footerProducts.classList.add('focus');
		$('.menu-prod').slideDown();
	}
}
function productsClose(){
	if (window.innerWidth <= 1420){
		$('.footer').show('slide',{direction:'left'},250);
		$('.menu-prod').hide('slide',{direction:'right'},250);
	}else{
		footerProducts.classList.remove('focus');
		$('.menu-prod').slideUp();
	}
}
// footer language controls
var lang = document.getElementsByClassName('language')[0];
var langMenu = document.getElementsByClassName('menu-lang')[0];

lang.addEventListener('click',function(){
	if( langMenu.style.display == 'none' ){
		langOpen();
	}else{
		langClose();
	}
});
function langOpen(){
	productsClose();
	if (window.innerWidth <= 1420){
		$('.footer').hide('slide',{direction:'left'},250);
		$('.menu-lang').show('slide',{direction:'right'},250);
	}else{
		lang.classList.add('focus');
		$('.menu-lang').slideDown();
	}
}
function langClose(){
	if (window.innerWidth <= 1420){
		$('.footer').show('slide',{direction:'left'},250);
		$('.menu-lang').hide('slide',{direction:'right'},250);
	}else{
		lang.classList.remove('focus');
		$('.menu-lang').slideUp();
	}
}
// $('.mega-menu.btm').find('.menu-back').click(function(){
$('.footer-menu-back').click(function(){
	langClose();
	productsClose();
});
