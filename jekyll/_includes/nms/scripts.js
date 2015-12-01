// poster pop-up functionality
$('.dot.one').hover(popon,popoff);
$('.dot.two').hover(popon,popoff);
$('.dot.three').hover(popon,popoff);
$('.dot.four').hover(popon,popoff);
$('.dot.five').hover(popon,popoff);
$('.dot.six').hover(popon,popoff);
function popon(){
	// $(this).removeClass('pulse');
	$(this).next('li').stop().fadeIn(200);
}
function popoff(){
	// $(this).addClass('pulse');
	$(this).next('li').stop().fadeOut(200);
}
// side nav functionality
var
	nmsPoster = document.getElementsByClassName('nms')[0].getElementsByClassName('poster')[0],
	nmsSecOne = document.getElementsByClassName('nms')[0].getElementsByClassName('section')[0],
	nmsSecTwo = document.getElementsByClassName('nms')[0].getElementsByClassName('section')[1];
	nmsSecTwoA = document.getElementsByClassName('nms')[0].getElementsByClassName('section')[1].getElementsByClassName('full')[0];
	nmsSecThree = document.getElementsByClassName('nms')[0].getElementsByClassName('section')[2];
	nmsSecFour = document.getElementsByClassName('nms')[0].getElementsByClassName('section')[3];
	nmsSecFive = document.getElementsByClassName('nms')[0].getElementsByClassName('section')[4];
var sideNav = document.getElementsByClassName('side-nav')[0];
var limit = Math.max(
	document.body.scrollHeight,
	document.body.offsetHeight,
	document.documentElement.clientHeight,
	document.documentElement.scrollHeight,
	document.documentElement.offsetHeight
	// ) - window.innerHeight;
	);
var
	s1top = nmsPoster.clientHeight + nmsSecOne.clientHeight,
	s2top = nmsPoster.clientHeight + nmsSecOne.clientHeight + nmsSecTwo.clientHeight - (nmsSecTwoA.clientHeight * 1.5),
	s3top = nmsPoster.clientHeight + nmsSecOne.clientHeight + nmsSecTwo.clientHeight,
	s4top = nmsPoster.clientHeight + nmsSecOne.clientHeight + nmsSecTwo.clientHeight + nmsSecThree.clientHeight,
	s5top = nmsPoster.clientHeight + nmsSecOne.clientHeight + nmsSecTwo.clientHeight + nmsSecThree.clientHeight + nmsSecFour.clientHeight,
	sEnd = nmsPoster.clientHeight + nmsSecOne.clientHeight + nmsSecTwo.clientHeight + nmsSecThree.clientHeight + nmsSecFour.clientHeight + nmsSecFive.clientHeight;

// - side nav scroll positioning
function navLock(){
	if( document.body.clientWidth >= {{ site.desktop }} ){
		// if( document.body.scrollTop >=  nmsPoster.clientHeight ){
		if( document.body.scrollTop >=  (window.innerHeight - (sideNav.clientHeight/2)) ){
			sideNav.style.position = 'fixed';
			// sideNav.style.top = '100px';
			sideNav.style.top = '50%';
			sideNav.style.marginTop = '-90px';
			sideNav.style.paddingTop = '0px';
			sideNav.style.bottom = 'auto'
		}else{
			sideNav.style.position = 'absolute';
			sideNav.style.top = 'auto';
			sideNav.style.marginTop = '100px';
			sideNav.style.paddingTop = '0px';
			sideNav.style.bottom = 'auto'
		}
		if( document.body.scrollTop >= s1top && document.body.scrollTop < s2top){
			sideNav.getElementsByTagName('li')[0].classList.add('focus');
		}else{
			sideNav.getElementsByTagName('li')[0].classList.remove('focus');
		}
		document.body.scrollTop >= s2top && document.body.scrollTop < s3top ? sideNav.getElementsByTagName('li')[1].classList.add('focus'):sideNav.getElementsByTagName('li')[1].classList.remove('focus');
		document.body.scrollTop >= s3top && document.body.scrollTop < s4top ? sideNav.getElementsByTagName('li')[2].classList.add('focus'):sideNav.getElementsByTagName('li')[2].classList.remove('focus');
		document.body.scrollTop >= s4top && document.body.scrollTop < s5top ? sideNav.getElementsByTagName('li')[3].classList.add('focus'):sideNav.getElementsByTagName('li')[3].classList.remove('focus');
		document.body.scrollTop >= s5top && document.body.scrollTop < sEnd ? sideNav.getElementsByTagName('li')[4].classList.add('focus'):sideNav.getElementsByTagName('li')[4].classList.remove('focus');
		document.body.scrollTop + window.innerHeight >= document.body.clientHeight ?
			(
				sideNav.getElementsByTagName('li')[3].classList.remove('focus'),
				sideNav.getElementsByTagName('li')[4].classList.add('focus')
			):(
				sideNav.getElementsByTagName('li')[4].classList.remove('focus')
			);
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
	$('html,body').animate({scrollTop: s1top});
});
sideNav.getElementsByTagName('li')[1].addEventListener('click', function(){ $('html,body').animate({scrollTop: s2top}); });
sideNav.getElementsByTagName('li')[2].addEventListener('click', function(){ $('html,body').animate({scrollTop: s3top}); });
sideNav.getElementsByTagName('li')[3].addEventListener('click', function(){ $('html,body').animate({scrollTop: s4top}); });
sideNav.getElementsByTagName('li')[4].addEventListener('click', function(){ $('html,body').animate({scrollTop: s5top}); });
