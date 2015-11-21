// poster pop-up functionality
$('.dot').on('mouseenter', function(){
	$(this).next('li').stop().fadeIn(300);
});
$('.dot').on('mouseout', function(){
	$(this).next('li').stop().fadeOut(300);
});
// side nav functionality
var nmsPoster = document.getElementsByClassName('nms')[0].getElementsByClassName('poster')[0];
var sideNav = document.getElementsByClassName('side-nav')[0];

function navLock(){
	if( document.body.clientWidth >= {{ site.desktop }} ){
		if( document.body.scrollTop >=  nmsPoster.clientHeight ){
			sideNav.style.position = 'fixed';
			sideNav.style.top = '100px';
		}else{
			sideNav.style.position = 'relative';
			sideNav.style.top = '0px';
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