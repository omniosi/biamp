
            function topClose()
            {
                menuClose();
                acctClose();
                solutionsClose();
                productsNavClose();
                trainingClose();
                companyClose();
                searchClose();
            };


            function footerClose()
            {
                langClose();
                productsClose();
            }


            // mobile menu controls
            var dropIcon = document.getElementsByClassName('drop-menu-icon')[0];
            var menu = document.getElementsByClassName('main-menu')[0].getElementsByTagName('ul')[0];
            var menuOne = document.getElementsByClassName('menu-one')[0];
            var menuTwo = document.getElementsByClassName('menu-two')[0];
            var menuThree = document.getElementsByClassName('menu-three')[0];
            var menuFour = document.getElementsByClassName('menu-four')[0];
            var menuAcct = document.getElementsByClassName('menu-acct')[0];


            // search controls
            var searchIcon = document.getElementsByClassName('search')[0].getElementsByTagName('a')[0].getElementsByClassName('icon')[0];
            var searchBox = document.getElementsByClassName('search')[0].getElementsByTagName('form')[0];
            var searchField = document.getElementsByClassName('search')[0].getElementsByTagName('form')[0].getElementsByTagName('input')[0];
            $('.search').find('.icon').click(function (e)
            {
                e.stopPropagation();
                topClose();
                footerClose();
                if (searchBox.style.display == 'none')
                {
                    searchOpen();
                }
                else
                {
                    searchClose();
                }
            });

            searchField.addEventListener("click", function (e)
            {
                e.stopPropagation();
                this.value = "";
                this.style.color = "rgb(88,85,86)";
            });

            function searchOpen()
            {
                $('.icon-search-icon').parent().addClass('focus');
                $('.search').find('form').slideDown(100);
            }

            function searchClose()
            {
                $('.icon-search-icon').parent().removeClass('focus');
                $('.search').find('form').slideUp(100, function ()
                {
                    $(this).find('input').val('Search Biamp').css('color', 'rgb(200,199,199)');
                });
            }


            // mobile menu controls
            dropIcon.addEventListener("click", function (e)
            {
                e.stopPropagation();
                topClose();
                footerClose();
                if (menu.style.display == 'none' && menuOne.style.display == 'none' && menuAcct.style.display == 'none')
                {
                    menuOpen();
                }
                else
                {
                    menuClose();
                }
            });

            function menuOpen()
            {
                dropIcon.classList.add('close');
                $('.main-menu').find('ul').slideDown();
            }

            function menuClose() {
                if (window.innerWidth <= 1420)
                {
                    dropIcon.classList.remove('close');
                    $('.main-menu').find('ul').slideUp(100);
                    solutionsClose();
                }
            }


            // mobile submenu controls
            if (window.innerWidth <= 1420)
            {
                $('.mega-menu').find('h1').click(function (e)
                {
                    e.stopPropagation();
                    if ($(this).next('ul').css('display') == 'none') 
                    {
                        $('.mega-menu').not('.menu-acct').find('ul').slideUp();
                        $(this).next('ul').slideDown();
                    } 
                    else 
                    {
                        $(this).next('ul').slideUp();
                    }
                });

                $('.mega-menu').find('.menu-back').click(function (e) 
                {
                    e.stopPropagation();
                    solutionsSubClose();
                    acctSubClose();
                });
            }


            // solutions controls
            $('.solutions-nav').click(function (e)
            {
                e.stopPropagation();
                topClose();
                footerClose();
                if (menuOne.style.display == 'none')
                {
                    solutionsOpen();
                }
                else
                {
                    solutionsClose();
                }
            });

            function solutionsOpen()
            {
                if (window.innerWidth <= 1420)
                {
                    $('.main-menu').find('ul').hide('slide', { direction: 'left' }, 250);
                    $('.menu-one').show('slide', { direction: 'right' }, 250);
                }
                else
                {
                    $('.solutions-nav').addClass('focus');
                    $('.menu-one').slideDown();
                }
            }

            function solutionsSubClose()
            {
                $('.main-menu').find('ul').show('slide', { direction: 'left' }, 250);
                $('.menu-one').hide('slide', { direction: 'right' }, 250);
            }

            function solutionsClose()
            {
                $('.solutions-nav').removeClass('focus');
                $('.menu-one').slideUp(100);
            }


            // products controls
            $('.products-nav').click(function (e)
            {
                e.stopPropagation();
                topClose();
                footerClose();
                if (menuTwo.style.display == 'none')
                {
                    productsNavOpen();
                }
                else
                {
                    productsNavClose();
                }
            });

            function productsNavOpen()
            {
                if (window.innerWidth <= 1420)
                {
                    $('.main-menu').find('ul').hide('slide', { direction: 'left' }, 250);
                    $('.menu-two').show('slide', { direction: 'right' }, 250);
                }
                else
                {
                    $('.products-nav').addClass('focus');
                    $('.menu-two').slideDown();
                }
            }

            function productsSubClose()
            {
                $('.main-menu').find('ul').show('slide', { direction: 'left' }, 250);
                $('.menu-two').hide('slide', { direction: 'right' }, 250);
            }

            function productsNavClose()
            {
                $('.products-nav').removeClass('focus');
                $('.menu-two').slideUp(100);
            }


            // training controls
            $('.training-nav').click(function (e)
            {
                e.stopPropagation();
                topClose();
                footerClose();
                if (menuThree.style.display == 'none')
                {
                    trainingOpen();
                }
                else
                {
                    trainingClose();
                }
            });

            function trainingOpen()
            {
                if (window.innerWidth <= 1420)
                {
                    $('.main-menu').find('ul').hide('slide', { direction: 'left' }, 250);
                    $('.menu-three').show('slide', { direction: 'right' }, 250);
                }
                else
                {
                    $('.training-nav').addClass('focus');
                    $('.menu-three').slideDown();
                }
            }

            function trainingSubClose()
            {
                $('.main-menu').find('ul').show('slide', { direction: 'left' }, 250);
                $('.menu-three').hide('slide', { direction: 'right' }, 250);
            }

            function trainingClose()
            {
                $('.training-nav').removeClass('focus');
                $('.menu-three').slideUp(100);
            }


            // company controls
            $('.company-nav').click(function (e)
            {
                e.stopPropagation();
                topClose();
                footerClose();
                if (menuFour.style.display == 'none')
                {
                    companyOpen();
                }
                else
                {
                    companyClose();
                }
            });

            function companyOpen()
            {
                if (window.innerWidth <= 1420)
                {
                    $('.main-menu').find('ul').hide('slide', { direction: 'left' }, 250);
                    $('.menu-four').show('slide', { direction: 'right' }, 250);
                }
                else
                {
                    $('.company-nav').addClass('focus');
                    $('.menu-four').slideDown();
                }
            }

            function companySubClose()
            {
                $('.main-menu').find('ul').show('slide', { direction: 'left' }, 250);
                $('.menu-four').hide('slide', { direction: 'right' }, 250);
            }

            function companyClose()
            {
                $('.company-nav').removeClass('focus');
                $('.menu-four').slideUp(100);
            }


            // account controls
            $('.user-account').click(function (e)
            {
                e.stopPropagation();
                topClose();
                footerClose();
                if (menuAcct.style.display == 'none')
                {
                    acctOpen();
                }
                else
                {
                    acctClose();
                }
            });

            function acctOpen()
            {
                if (window.innerWidth <= 1420)
                {
                    $('.main-menu').find('ul').hide('slide', { direction: 'left' }, 250);
                    $('.menu-acct').show('slide', { direction: 'right' }, 250);
                }
                else
                {
                    $('.user-account').parent().addClass('focus');
                    $('.menu-acct').slideDown();
                }
            }

            function acctSubClose()
            {
                $('.main-menu').find('ul').show('slide', { direction: 'left' }, 250);
                $('.menu-acct').hide('slide', { direction: 'right' }, 250);
            }

            function acctClose()
            {
                $('.user-account').parent().removeClass('focus');
                $('.menu-acct').slideUp(100);
            }


            // footer products controls
            var footerProducts = document.getElementsByClassName('footer')[0].getElementsByClassName('products')[0];
            var footerProdMenu = document.getElementsByClassName('menu-prod')[0];

            footerProducts.addEventListener('click', function (e)
            {
                e.stopPropagation();
                topClose();
                footerClose();
                if (footerProdMenu.style.display == 'none')
                {
                    productsOpen();
                }
                else
                {
                    productsClose();
                }
                return false;
            });

            function productsOpen()
            {
                if (window.innerWidth <= 1420)
                {
                    $('.footer').hide('slide', { direction: 'left' }, 250);
                    $('.menu-prod').show('slide', { direction: 'right' }, 250);
                }
                else
                {
                    footerProducts.classList.add('focus');
                    $('.menu-prod').slideDown();
                }
            }

            function productsClose()
            {
                if (window.innerWidth <= 1420)
                {
                    $('.footer').show('slide', { direction: 'left' }, 250);
                    $('.menu-prod').hide('slide', { direction: 'right' }, 250);
                }
                else
                {
                    footerProducts.classList.remove('focus');
                    $('.menu-prod').slideUp();
                }
            }


            // footer language controls
            var lang = document.getElementsByClassName('language')[0];
            var langMenu = document.getElementsByClassName('menu-lang')[0];

            lang.addEventListener('click', function (e)
            {
                e.stopPropagation();
                topClose();
                footerClose();
                if (langMenu.style.display == 'none')
                {
                    langOpen();
                }
                else
                {
                    langClose();
                }
            });

            function langOpen()
            {
                if (window.innerWidth <= 1420)
                {
                    $('.footer').hide('slide', { direction: 'left' }, 250);
                    $('.menu-lang').show('slide', { direction: 'right' }, 250);
                }
                else
                {
                    lang.classList.add('focus');
                    $('.menu-lang').slideDown();
                    return false;
                }
            }

            function langClose()
            {
                if (window.innerWidth <= 1420)
                {
                    $('.footer').show('slide', { direction: 'left' }, 250);
                    $('.menu-lang').hide('slide', { direction: 'right' }, 250);
                }
                else
                {
                    lang.classList.remove('focus');
                    $('.menu-lang').slideUp();
                }
            }

            $('.footer-menu-back').click(function (e)
            {
                e.stopPropagation();
                footerClose();
            });

