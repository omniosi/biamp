<!DOCTYPE html>
<html>
<head>
	<?php include('modules/head.php'); ?>
	<style type="text/css">
		<?php include('modules/global-styles.php'); ?>
		<?php include('modules/top-menu-styles.php'); ?>
		<?php include('modules/home-styles.php'); ?>
		/*<?php include('modules/networked-media-systems/styles.php'); ?>*/
		<?php include('modules/footer-styles.php'); ?>
		/*--tablet--*/
		@media (min-width:700px){
			<?php include('modules/home-tablet-styles.php'); ?>
			/*<?php include('modules/networked-media-systems/tablet-styles.php'); ?>*/
			<?php include('modules/footer-tablet-styles.php'); ?>
		}
		/*--desktop--*/
		@media (min-width:1420px){
			<?php include('modules/top-menu-desktop-styles.php'); ?>
			<?php include('modules/footer-desktop-styles.php'); ?>
			<?php include('modules/home-desktop-styles.php'); ?>
			<?php include('modules/networked-media-systems/desktop-styles.php'); ?>
		}
	</style>
</head>
<body>
	<div class="wrapper">
		<!-- top-menu -->
		<?php include('modules/top-menu.php'); ?>
		<!-- page content -->
		<?php include('modules/networked-media-systems/content.php'); ?>
		<!-- footer -->
		<?php include('modules/footer.php'); ?>

		<!-- external scripts -->
		<?php include('modules/external-scripts.php'); ?>
	</div>
	<script type="text/javascript">
		$(document).ready(function(){
			<?php include('modules/global-scripts.php'); ?>
			<?php include('modules/top-menu-scripts.php'); ?>
			<?php include('modules/networked-media-systems/scripts.php'); ?>
			<?php include('modules/footer-scripts.php'); ?>
		});
	</script>
	</body>
</html>