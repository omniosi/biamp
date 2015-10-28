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
	footerProducts.classList.add('focus');
	$('.menu-prod').slideDown();
}
function productsClose(){
	footerProducts.classList.remove('focus');
	$('.menu-prod').slideUp();
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
	lang.classList.add('focus');
	$('.menu-lang').slideDown();
}
function langClose(){
	lang.classList.remove('focus');
	$('.menu-lang').slideUp();
}
