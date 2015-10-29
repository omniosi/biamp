/*home styles*/
.main{
	padding-top: 80px;
}
.main .billboard{
	/*position: absolute;*/
	top: 80px;
	/*bottom: 80px;*/
	height: 360px;
	background: url('img/animation.png') 50% 50% no-repeat;
	background-size: cover;
	width: 100%;
}
.main .billboard img{
	width: 100%;
}
.main .poster{
	width: 100%;
	height: auto;
	height: 600px;
	background: url('img/solutions-hdr.jpg') 50% 50% no-repeat;
	background-size: cover;
}
.main .poster h1{
	font-size: 100px;
	line-height: 1.25em;
	color: #fff;
	margin-left: 6%;
	padding-top: 100px;
	width: 45%;
	text-transform: uppercase;
}
.main .art-menu{
	/*height: 225px;*/
	padding: 20px;
	background: #f4f4f4;
}
.main .art-menu ul{
	text-align: center;
	background: url(img/menu-line-arrows.svg) no-repeat;
	background-position: 0	73px;
	background-size: 816px 12px;
	width: 816px;
	height: 155px;
	position: relative;
	left: 50%;
	margin-left: -408px;
}
.main .art-menu ul li{
	display: inline-block;
	vertical-align: top;
	margin: 0 20px;
}
.main .art-menu ul li a{
	display: block;
	background: url(img/solutions-art-menu.svg) no-repeat;
	background-position: 0	0;
	background-size: 816px 180px;
	width: 135px;
	height: 155px;
	padding-top: 50%;
	color: #808284;
}
.main .art-menu ul li a:hover{
	background-position: -140px	0;
	text-indent: -9999px;
}
.main .art-menu ul li a.support:hover{ background-position: -280px	0; }
.main .art-menu ul li a.new:hover{ background-position: -420px	0; }
.main .art-menu ul li a.events:hover{ background-position: -560px	0; }