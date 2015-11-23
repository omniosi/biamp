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
		}else if( document.body.scrollTop >= 1618){
			sideNav.style.position = 'fixed';
			sideNav.style.top = '100px';
			// sideNav.nth-child(1).classList.add = 'focus';
			sideNav.getElementsByTagName('li')[0].classList.add = 'focus';
		}else{
			sideNav.style.position = 'absolute';
			sideNav.style.top = 'auto';
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