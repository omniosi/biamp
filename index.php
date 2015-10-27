<!DOCTYPE html>
<html>
<head>
	<?php include('modules/head.php'); ?>
	<style type="text/css">
		<?php include('modules/global-styles.php'); ?>
		<?php include('modules/top-menu-styles.php'); ?>
		<?php include('modules/footer-styles.php'); ?>
		/*desktop*/
		@media (min-width:1420px){
			<?php include('modules/top-menu-desktop-styles.php'); ?>
			<?php include('modules/footer-desktop-styles.php'); ?>
		}
	</style>
</head>
<body>
	<?php include('modules/top-menu.php'); ?>
	<?php include('modules/footer.php'); ?>

	<?php include('modules/external-scripts.php'); ?>
	<script type="text/javascript">
		$(document).ready(function(){
			<?php include('modules/top-menu-scripts.php'); ?>
			<?php include('modules/footer-scripts.php'); ?>
		});
	</script>
	</body>
</html>