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
		if( document.body.scrollTop >= 1618 && document.body.scrollTop < 2650){
			sideNav.getElementsByTagName('li')[0].classList.add('focus');
		}else{
			sideNav.getElementsByTagName('li')[0].classList.remove('focus');
		}
		document.body.scrollTop >= 2650 && document.body.scrollTop < 3984 ? sideNav.getElementsByTagName('li')[1].classList.add('focus'):sideNav.getElementsByTagName('li')[1].classList.remove('focus');
		document.body.scrollTop >= 3984 && document.body.scrollTop < 4782 ? sideNav.getElementsByTagName('li')[2].classList.add('focus'):sideNav.getElementsByTagName('li')[2].classList.remove('focus');
		document.body.scrollTop >= 4782 && document.body.scrollTop < 6785 ? sideNav.getElementsByTagName('li')[3].classList.add('focus'):sideNav.getElementsByTagName('li')[3].classList.remove('focus');
		document.body.scrollTop >= 6785 && document.body.scrollTop < 7710 ? sideNav.getElementsByTagName('li')[4].classList.add('focus'):sideNav.getElementsByTagName('li')[4].classList.remove('focus');
		if( document.body.scrollTop >= 7710 ) {
			sideNav.style.position = 'absolute';
			sideNav.style.top = 'auto'
			sideNav.style.bottom = '700px'
		}
	}
}

// requestAnimationFrame + customEvent
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