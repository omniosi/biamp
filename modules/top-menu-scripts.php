		// search controls
		var searchIcon = document.getElementsByClassName('search')[0].getElementsByTagName('a')[0].getElementsByClassName('icon')[0];
		var searchBox = document.getElementsByClassName('search')[0].getElementsByTagName('form')[0];
		var searchField = document.getElementsByClassName('search')[0].getElementsByTagName('form')[0].getElementsByTagName('input')[0];
		$('.search').find('.icon').click(function(){
				menuClose();
				acctClose();
				solutionsClose();
				if (searchBox.style.display == 'none'){
					searchOpen();
				}else{
					searchClose();
				}
		});
		searchField.addEventListener("click", function(){
			this.value = "";
			this.style.color = "rgb(88,85,86)";
		});
		// mobile menu controls
		var dropIcon = document.getElementsByClassName('drop-menu-icon')[0];
		var menu = document.getElementsByClassName('main-menu')[0].getElementsByTagName('ul')[0];
		var menuOne = document.getElementsByClassName('menu-one')[0];
		var menuAcct = document.getElementsByClassName('menu-acct')[0];
		dropIcon.addEventListener("click", function(){
			acctClose();
			searchClose();
			solutionsClose();
			if (menu.style.display == 'none'  && menuOne.style.display == 'none' && menuAcct.style.display == 'none'){
				menuOpen();
			}else{
				menuClose();
			}
		});
		// -- mobile submenu controls
		if (window.innerWidth <= 1420){
			$('.mega-menu').find('h1').click(function(){
				if( $(this).next('ul').css('display') == 'none' ){
					$('.mega-menu').not('.menu-acct').find('ul').slideUp();
					$(this).next('ul').slideDown();
				}else{
					$(this).next('ul').slideUp();
				}
			});
			$('.mega-menu').find('.menu-back').click(function(){
				solutionsSubClose();
				acctSubClose();
			});
		}
		// menu controls
		$('.solutions').click(function(){
			acctClose();
			searchClose();
			if( menuOne.style.display == 'none' ){
				solutionsOpen();
			}else{
				solutionsClose();
			}
		});
		// account controls
		$('.user-account').click(function(){
			searchClose();
			solutionsClose();
			if( menuAcct.style.display == 'none' ){
				acctOpen();
			}else{
				acctClose();
			}
		});
		// repeat use code
		function searchOpen(){
			$('.icon-search-icon').parent().addClass('focus');
			$('.search').find('form').slideDown(100);
		}
		function searchClose(){
			$('.icon-search-icon').parent().removeClass('focus');
			$('.search').find('form').slideUp(100,function(){
				$(this).find('input').val('Search Biamp').css('color', 'rgb(200,199,199)');
			});
		}
		function menuOpen(){
			dropIcon.classList.add('close');
			$('.main-menu').find('ul').slideDown();
		}
		function menuClose(){
			if (window.innerWidth <= 1420){
				dropIcon.classList.remove('close');
				$('.main-menu').find('ul').slideUp(100);
				solutionsClose();
			}
		}
		function acctOpen(){
			if (window.innerWidth <= 1420){
				$('.main-menu').find('ul').hide('slide', {direction:'left'}, 250);
				$('.menu-acct').show('slide', {direction: 'right'}, 250);
			}else{
				$('.user-account').parent().addClass('focus');
				$('.menu-acct').slideDown();
			}
		}
		function acctSubClose(){
				$('.main-menu').find('ul').show('slide', {direction:'left'}, 250);
				$('.menu-acct').hide('slide', {direction: 'right'}, 250);
		}
		function acctClose(){
			$('.user-account').parent().removeClass('focus');
			$('.menu-acct').slideUp(100);
		}
		function solutionsOpen(){
			if (window.innerWidth <= 1420){
				$('.main-menu').find('ul').hide('slide', {direction:'left'}, 250);
				$('.menu-one').show('slide', {direction: 'right'}, 250);
			}else{
				$('.solutions').addClass('focus');
				$('.menu-one').slideDown();
			}
		}
		function solutionsSubClose(){
			$('.main-menu').find('ul').show('slide', {direction:'left'}, 250);
			$('.menu-one').hide('slide', {direction: 'right'}, 250);
		}
		function solutionsClose(){
				$('.solutions').removeClass('focus');
				$('.menu-one').slideUp(100);
		}