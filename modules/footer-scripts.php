// products controls
var products = document.getElementsByClassName('products')[0];
var prodMenu = document.getElementsByClassName('menu-prod')[0];

// $('.products').click(function(){
products.addEventListener('click',function(){
	if( prodMenu.style.display == 'none' ){
		productsOpen;
	}else{
		productsClose;
	}
});
// repeatable code
function productsOpen(){
	// $('.products').addClass('focus');
	products.classList.add('focus');
	$('.menu-prod').slideDown();
}
function productsClose(){
	// $('.products').removeClass('focus');
	products.classList.remove('focus');
	$('.menu-prod').slideUp();
}