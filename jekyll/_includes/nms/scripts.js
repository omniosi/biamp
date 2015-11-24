// poster pop-up functionality
$('.dot').hover(function(){
	$(this).removeClass('pulse');
	$(this).next('li').stop().fadeIn(200);
},function(){
	$(this).addClass('pulse');
	$(this).next('li').stop().fadeOut(200);
});

// side nav functionality
var nmsPoster = document.getElementsByClassName('nms')[0].getElementsByClassName('poster')[0];
var sideNav = document.getElementsByClassName('side-nav')[0];
var s1top = 1618,
		// s2top	 = 2650,
		s2top	 = 2538,
		// s3top = 3984,
		s3top = 2538,
		// s4top = 4664,
		s4top = 3292,
		// s5top = 6785,
		s5top = 4152,
		// sEnd = 7595;
		sEnd = 4406;

// - side nav scroll positioning
function navLock(){
	if( document.body.clientWidth >= {{ site.desktop }} ){
		if( document.body.scrollTop >=  nmsPoster.clientHeight ){
			sideNav.style.position = 'fixed';
			sideNav.style.top = '100px';
			sideNav.style.bottom = 'auto'
		}else{
			sideNav.style.position = 'absolute';
			sideNav.style.top = 'auto';
			sideNav.style.bottom = 'auto'
		}
		// if( document.body.scrollTop >= 1618 && document.body.scrollTop < 2650){
		if( document.body.scrollTop >= s1top && document.body.scrollTop < s2top){
			sideNav.getElementsByTagName('li')[0].classList.add('focus');
		}else{
			sideNav.getElementsByTagName('li')[0].classList.remove('focus');
		}
		document.body.scrollTop >= s2top && document.body.scrollTop < s3top ? sideNav.getElementsByTagName('li')[1].classList.add('focus'):sideNav.getElementsByTagName('li')[1].classList.remove('focus');
		document.body.scrollTop >= s3top && document.body.scrollTop < s4top ? sideNav.getElementsByTagName('li')[2].classList.add('focus'):sideNav.getElementsByTagName('li')[2].classList.remove('focus');
		document.body.scrollTop >= s4top && document.body.scrollTop < s5top ? sideNav.getElementsByTagName('li')[3].classList.add('focus'):sideNav.getElementsByTagName('li')[3].classList.remove('focus');
		document.body.scrollTop >= s5top && document.body.scrollTop < sEnd ? sideNav.getElementsByTagName('li')[4].classList.add('focus'):sideNav.getElementsByTagName('li')[4].classList.remove('focus');
		if( document.body.scrollTop >= sEnd ) {
			sideNav.style.position = 'absolute';
			sideNav.style.top = 'auto'
			// sideNav.style.bottom = '700px'
			sideNav.style.bottom = '300px'
		}
	}
}
// - requestAnimationFrame + customEvent, Resource conscious scroll callback
;(function(){
	var throttle = function(type, name, obj){
		obj = obj || window;
		var running = false;
		var func = function(){
			if(running){ return; }
			running = true;
			requestAnimationFrame(function(){
				obj.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		obj.addEventListener(type,func);
	};
	/* init - you can init any addEventListener */
	throttle("scroll", "optimizedScroll");
})();
// handle event
window.addEventListener("optimizedScroll", function(){
	// console.log("Resource conscious scroll callback!");
	navLock();
});
 // - side-nav jump menu functionality
sideNav.getElementsByTagName('li')[0].addEventListener('click', function(){
	// document.body.scrollTop = s1top;
	$('html,body').animate({scrollTop: s1top});
});
sideNav.getElementsByTagName('li')[1].addEventListener('click', function(){ $('html,body').animate({scrollTop: s2top}); });
sideNav.getElementsByTagName('li')[2].addEventListener('click', function(){ $('html,body').animate({scrollTop: s3top}); });
sideNav.getElementsByTagName('li')[3].addEventListener('click', function(){ $('html,body').animate({scrollTop: s4top}); });
sideNav.getElementsByTagName('li')[4].addEventListener('click', function(){ $('html,body').animate({scrollTop: s5top}); });
