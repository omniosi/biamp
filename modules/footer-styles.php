/* -- footer -- */
.footer{
	/*position: absolute;*/
	/*bottom: 0;*/
	/*z-index: 800;*/
	position: relative;
	background: #4f4e4e;
	color: #fff;
	font-family: "Gotham SSm A", "Gotham SSm B", "Montserrat", Arial, sans-serif;
	font-weight: 400;
	font-style: normal;
	/*display:block;*/
	width: 100%;
	padding: 20px;
}
.footer a{
	color: #fff;
	/*color: #C8C7C7;*/
	padding: 10px;
}
/*.footer a:hover{ color: #fff; }*/
.footer .share{
	margin-bottom: 20px;
}
.footer .title{
	font-family: 'Bebas Neue', 'Oswald', Arial, sans-serif;
	text-transform: uppercase;
	font-size: 1em;
	letter-spacing: 0.05em;
	padding-right: 10px;
	position: relative;
	top: 10px;
}
.footer .share ul li,
.footer .share ul{
	display:inline-block;
	vertical-align: top;
	font-size: 30px;
	/*margin-top: 4px;*/
}
.footer ul li a.focus,
.footer ul li a:hover{
	color: #D9272E;
	text-decoration: none;
}
.footer .share,
.footer .footer-menu{
	text-align: center;
}
.footer-menu li{
	margin-bottom: 10px;
	display: inline-block;
	margin-right: 2%;
}
.footer-menu li a{
	/*width: 100%;*/
	/*display:block;*/
	/*border-bottom: 1px solid #494647;*/
	padding: 0;
	font-size: 0.85em;
}
.footer .footer-menu li a.focus,
.footer .footer-menu li a:hover{
	/*border-bottom: 1px solid #D9272E;*/
	/*color: #fff;*/
}
.footer-menu li a .icon:after{
	content: "\e802";
}
.footer-menu li a.focus .icon:after{
	content: "\e803";
}
.footer-menu li a.products,
.footer-menu li a.blog{
	display:none;
}
.mega-menu.btm{
	/*position: static;*/
	position: absolute;
	bottom: 0;
	top: auto;
	/*padding: 20px;*/
	padding: 0 20px;
	overflow-y: auto;
	max-height: 347px;
}
.mega-menu.btm .footer-menu-back{
	position: fixed;
	top: auto;
	z-index: 800;
}
.mega-menu.btm .two-col{
	padding: 0 20px 0;
}
.mega-menu.btm .two-col p{
	position: absolute;
	top: 50%;
	margin-top: -12px;
}
.mega-menu.btm .four-col{
	border:none;
	padding: 0;
}
.mega-menu.btm ul li{
	text-transform: capitalize;
	font-size: 16px;
	margin-bottom: 0;
	border-bottom: 1px solid #494647;
}
.mega-menu.btm ul li a{
	padding: 20px 0;
	display:block;
}
.mega-menu.btm ul li a:before{
	font-family: "icomoon-bia";
	content:"\e805";
	padding-bottom: 1em;
	/*width: 1em;*/
	/*height:40px;*/
	font-size: 25px;
	position: absolute;
	right: 40px;
	line-height: 18px;
}