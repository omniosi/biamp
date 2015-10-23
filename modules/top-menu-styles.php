	/* HEADER --------------------------------------------------------- */
	.top-menu{
		position: fixed;
		width: 100%;
		height: 80px;
		z-index: 999;
		background: #4f4e4e;
		letter-spacing: 0.125em;
	}
	.mega-menu a,
	.mega-menu,
	.top-menu a,
	.top-menu{
		font-family: "Gotham SSm A", "Gotham SSm B", "Montserrat", Arial, sans-serif;
		font-weight: 400;
		font-style: normal;
		color: #fff;
	}
	.top-menu .logo{
		padding: 20px;
		text-align: center;
	}
	.search,
	.main-menu{
		position: absolute;
		top: 0;
	}
	.mega-menu,
	.search form,
	.main-menu ul{
		background: #585556;
		padding-top: 10px;
		color: #fff;
	}
	.main-menu{
		font-size: 1em;
		text-transform: uppercase;
		width: 100%;
	}
	.main-menu ul li{
		list-style: none;
	}
	.main-menu ul li a{
		margin: 16px 20px;
		padding: 0 0 7px;
		display: block;
		background: #585556;
	}
	.main-menu ul li a:before{
		font-family: "icomoon-bia";
		content:"\e805";
		padding-bottom: 1em;
		/*width: 1em;*/
		/*height:40px;*/
		font-size: 25px;
		position: absolute;
		right: 20px;
		line-height: 18px;
	}
	.main-menu ul li:last-child a:before{
		content: "";
	}
	.main-menu ul li:last-child a{
		margin: 0 20px 20px;
		padding: 8px 0 5px;
		/*padding-top: 8px;*/
		position: relative;
		top: -12px;
	}
	.main-menu ul li a:focus,
	.main-menu ul li a.focus,
	.main-menu ul li a:hover{
		text-decoration: none;
		padding: 0 0 5px;
		border-bottom: 2px solid rgb(217,39,46);
	}
	.main-menu ul li:last-child a:hover{
		border: none;
		padding: 8px 0 5px;
	}
	.main-menu ul li:last-child a .icon{
		font-size: 45px;
	}
	.search a:hover,
	.search a.focus,
	.main-menu ul li:last-child a.focus,
	.main-menu ul li:last-child a:hover{
		color: #D9272E;
		text-decoration: none;
	}

	/*.drop-menu-icon{ display:block; }*/
	.search,
	.drop-menu-icon{
		width: 80px;
		height: 80px;
		border-right: 1px solid rgb(88,85,86);
		padding: 26px 20px;
		cursor: pointer;
	}
	.drop-menu-icon .three,
	.drop-menu-icon .two,
	.drop-menu-icon .one{
		height: 2px;
		margin-bottom: 10px;
		background: white;
		position: relative;
		transition: opacity 0.25s, top 0.25s, transform 0.25s;
	}
	.drop-menu-icon.close .two,
	.drop-menu-icon.close .one{
		-ms-transform:rotate(45deg);
		transform:rotate(45deg);
		top: 10px;
	}
	.drop-menu-icon.close .two{
		top: -2px;
	}
	.drop-menu-icon.close .three{
		-ms-transform:rotate(-45deg);
		transform:rotate(-45deg);
		top: -14px;
	}
	.search{
		border-right: none;
		border-left: 1px solid rgb(88,85,86);
		right: 0;
		padding: 20px;
		cursor: pointer;
	}
	.search .icon{
		font-size: 40px;
	}
	.search form{
		padding: 15px;
		position: absolute;
		top: 80px;
		right: 0;
	}
	.search form input{
		width: 320px;
		height:40px;
		border-radius: 6px;
		border: none;
		/*color: rgb(88,85,86);*/
		/*color: rgb(200,199,199);*/
		color: #C8C7C7;
		padding-left: 15px;
		font-size: 18px;
	}
	.mega-menu{
		position: absolute;
		top: 80px;
		width: 100%;
		/*padding: 100px 20px 20px;*/
		padding: 83px 20px 20px;
		z-index: 900;
	}
	.mega-menu .two-col{
		width: 100%;
		padding: 0  20px 20px;
		font-size: 20px;
		text-transform: uppercase;
	}
	.mega-menu .two-col p{
		/*width: 75%;*/
	}
	.mega-menu .four-col{
		width: 100%;
		border-top: 1px solid white;
		padding: 20px 20px 0;
		margin-right: 0;
	}
	.mega-menu .four-col h1{
		font-size: 20px;
		margin-bottom: 20px;
		text-transform: uppercase;
		cursor: pointer;
	}
	.mega-menu .four-col ul{
		list-style: none;
		padding-left: 38px;
		font-size: 18px;
		margin-bottom: 40px;
		display:none;
	}
	.mega-menu .four-col ul:last-child{
		margin-bottom: 0;
	}
	.mega-menu .four-col li{
		margin-bottom: 20px;
	}
	/*.mega-menu.menu-one{ top: 132px; }*/
	.mega-menu .menu-back{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		/*height:80px;*/
		height:62px;
		border-bottom: 2px solid #D9272E;
		background: #494647;
	}
	.mega-menu .menu-back .icon-keyboard_arrow_left{
		width: 80px;
		/*height:80px;*/
		height:60px;
		/*padding: 20px 20px 20px 17px;*/
		padding: 10px 20px 10px 17px;
		border-right: 1px solid #4f4e4e;
		font-size: 40px;
		cursor: pointer;
		position: relative;
		/*top: 20px;*/
		top: 10px;
		color: #fff;
	}
	.mega-menu .menu-back .title{
		font-size: 20px;
		text-transform: uppercase;
		color: #C8C7C7;
		padding-left: 20px;
	}
	.menu-acct{
		right: 0;
		padding: 20px;
		color: #C8C7C7;
	}
	.menu-acct ul{
		margin-top: 10px;
		border-bottom: 2px solid #4f4e4e;
	}
	.menu-acct ul li{
		margin-bottom: 10px;
	}
	.menu-acct ul:last-child li:last-child,
	.menu-acct ul:last-child{
		border-bottom: none;
		margin-bottom: 0;
	}
	.menu-acct ul li a{
		color: #C8C7C7;
	}
	.menu-acct ul li a:hover{
		text-decoration: none;
		color: white;
	}