.footer{
	position: fixed;
	bottom: 0;
	z-index: 800;
	/*position: relative;*/
	height: 80px;
	padding-left: 40px;
	overflow: hidden;
}
.footer .title{
	font-size: 21px;
}
.footer-menu{
	position: absolute;
	top: 30px;
	right: 20px;
}
.footer-menu li,
.footer-menu li a{
	width: auto;
	display: inline-block;
	margin-right: 0;

}
.footer-menu li a{
	/*padding: 10px 20px 30px;*/
	padding: 0 20px;
	border-right: 1px solid #fff;
	border-bottom: none;
	font-size: 16px;
}
.footer-menu li a.products,
.footer-menu li a.blog{
	display:inline-block;
}
.footer-menu li:last-child a{
	border-right: none;
}
.footer-menu li a{

}
.footer .footer-menu li a.focus,
.footer .footer-menu li a:hover{
	border-bottom: none;
	color: #D9272E;
}
.mega-menu.btm{
	position: fixed;
	bottom: 80px;
	/*bottom: 0px;*/
	padding: 30px 20px;
	overflow-y: visible;
}
.mega-menu.btm ul li{
	margin-bottom: 10px;
	border-bottom: none;
}
.mega-menu.btm ul li a{
	padding: 0;
}
.mega-menu.btm ul li a:before{
	content: "";
}
.mega-menu.menu-prod .two-col{
	width: 25%;
}
.mega-menu.btm .two-col{ font-size: 24px; }
.mega-menu.btm .two-col p{
	position: absolute;
	top: 50%;
	margin-top: -12px;
}
.mega-menu.btm .four-col{
	height: auto;
	width: 10%;
}
.mega-menu.menu-lang .two-col:last-child{
	position: absolute;
	right: 40px;
	width: auto;
}
.mega-menu.menu-lang .two-col:last-child li{
	display: inline-block;
	vertical-align: top;
	text-align: right;
	margin: 0 20px;
}
