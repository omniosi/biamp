/*home styles*/
.billboard{
	/*position: absolute;*/
	position: relative;
	top: 80px;
	/*bottom: 80px;*/
	height: 360px;
	background: url('img/animation.png') 50% 50% no-repeat;
	background-size: cover;
	width: 100%;
	z-index: 800;
}
.main{
	padding-top: 80px;
	/*position: fixed;*/
	top: 80px;
}
.main .billboard img{
	width: 100%;
}
.main .poster{
	width: 100%;
	height: 330px;
	background: url('img/solutions-hdr.jpg') 50% 50% no-repeat;
	background-size: cover;
	background-position: 74% 63%;
	/*background-size: 350%;*/
	/*background-position: 75% 100%;*/
}
.main .poster h1{
	font-size: 32px;
	line-height: 1.25em;
	text-align: center;
	color: #fff;
	/*margin-left: 20%;*/
	margin-left: -125px;
	/*padding-top: 200px;*/
	padding-top: 150px;
	width: 250px;
	text-transform: uppercase;
	text-shadow: 0 0 10px rgba(0,0,0,0.35),0 0 5px rgba(0,0,0,0.35);
	left: 50%;
	position: relative;
}
.main .art-menu{
	background: #fff;
	display:none;
}
.art-menu ul{
	background: #fff;
	color: #585556;
}
.main .title,
.copy h1,
.art-menu ul li{
	list-style: none;
	border-bottom: 1px solid #585556;
}
.copy h1,
.art-menu ul li a{
	padding: 16px 20px;
	display: block;
	color: #585556;
	font-size: 16px;
	text-transform: uppercase;
}
.copy h1:before,
.art-menu ul li a:before{
	font-family: "icomoon-bia";
	content:"\e805";
	padding-bottom: 1em;
	font-size: 25px;
	position: absolute;
	right: 20px;
	line-height: 18px;
}
.art-menu ul li a:focus,
.art-menu ul li a.focus,
.art-menu ul li a:hover{
	text-decoration: none;
}
.main .title{
	padding: 20px;
	color: #fff;
	background: #585556;
	font-size: 1.125em;
}
.main .title h1{
	font-size: 1.5em;
}
.charts,
.copy p{
	display: none;
}
.section .copy h1{
	/*display: block;*/
}
