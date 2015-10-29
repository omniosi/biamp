	/* FONTS --------------------------------------------------------- */
@font-face {
	font-family: 'icomoon-bia';
	src:url('fonts/icomoon-bia.eot?qyexfr');
	src:url('fonts/icomoon-bia.eot?qyexfr#iefix') format('embedded-opentype'),
		url('fonts/icomoon-bia.ttf?qyexfr') format('truetype'),
		url('fonts/icomoon-bia.woff?qyexfr') format('woff'),
		url('fonts/icomoon-bia.svg?qyexfr#icomoon-bia') format('svg');
	font-weight: normal;
	font-style: normal;
}
.icon {
	font-family: 'icomoon-bia';
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	/* Better Font Rendering =========== */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.icon-arrow_drop_up:before { content: "\e802"; }
.icon-arrow_drop_down:before { content: "\e803"; }
.icon-keyboard_arrow_left:before { content: "\e804"; }
.icon-navigate_next:before { content: "\e805"; }
.icon-user-account-icon:before { content: "\e800"; }
.icon-search-icon:before { content: "\e801"; }
.icon-linkedin:before { content: "\e900"; }
.icon-youtube:before { content: "\e902"; }
.icon-twitter:before { content: "\e602"; }
.icon-facebook:before { content: "\e603"; }

@font-face {
	font-family: 'Bebas Neue';
	src:url('fonts/bebas_neue/BebasNeue.otf');
	font-weight: normal;
	font-style: normal;
}

	/* GLOBAL STYLES --------------------------------------------------------- */
	*{
		margin: 0;
		padding: 0;
		font-family: "Gotham SSm A", "Gotham SSm B", "Montserrat", Arial, sans-serif;
		font-weight: 400;
		font-style: normal;
		-webkit-box-sizing:border-box;
		box-sizing:border-box;
	}
	a{
		outline: none;
		text-shadow:none;
		text-decoration: none;
		word-wrap: break-word;
	}
	a:focus,
	a:hover{
		/*text-decoration: underline;*/
	}
	li{list-style: none;}
	.col{
		display:inline-block;
		vertical-align: top;
	}
	.two-col{ width: 50%; }
	.four-col{ width: 25%; }
	a.btn{
		border: 1px solid white;
		padding: 10px;
		text-decoration: none;
		text-align: center;
		display: block;
		margin-bottom: 20px;
		text-transform: uppercase;
	}
	a:focus.btn,
	a:hover.btn{
		border: 1px solid #D9272E;
	}