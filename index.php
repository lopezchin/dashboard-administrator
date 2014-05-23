<!-- Includes all libs -->
<?php include 'layouts/header.php'; ?>

			<!-- Main Sidebar -->
			<?php include 'layouts/sidebar.php'; ?>
			<!-- // Main Sidebar -->

			<!-- Main Content -->

			<div class="section section--top">
					<div class="pull-left">
						<h1 class="h3 section__title">
							<i class="fa fa-home"></i> 
							<span>Dashboard</span>
						</h1>
					</div>
					<div class="pull-right search">
						<form class="form-inline form-rounded" role="form">
							<div class="form-group">
								<i class="fa fa-search"></i>
								<input type="search" class="form-control" placeholder="Search..">
							</div>
						</form>
					</div>
				</div>
				<div class="section section-breadcrumb">
					<!-- <ol class="breadcrumb">
					  <li><a href="#">Dashboard</a></li>
					  <li><a href="#"></a></li>
					  <li class="active"></li>
					</ol> -->

					<div class="pull-left">
						<a href="locate.php" class="btn btn-default">
							<i class="fa fa-map-marker"></i>
							<span>Locate</span>
						</a>
					</div>

					<div class="pull-right">
						<a href="add_user.php" class="btn btn-default">
							<i class="fa fa-plus"></i>
							<span>Add User</span>
						</a>
						<a href="my_assets.php" class="btn btn-default">
							<i class="fa fa-list"></i>
							<span>My Assets</span>
						</a>
						<a href="edit_account.php" class="btn btn-default">
							<i class="fa fa-pencil"></i>
							<span>Edit Account</span>
						</a>
					</div>
				</div>
			<div class="t-content">
				<div class="section">
					<div class="post post--block">
						<div class="post__section formatted">
							<div class="pull-left">
								<h3 class="h4 post__title">Welcome to Sealite</h3>
							</div>
							<div class="post__content">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratio.</p>
							</div>
						</div>
					</div>
				</div>
				
			</div>

			<script src="../../assets/admin/js/plugins/select2.js"></script>
			<script src="../../assets/admin/js/admin.js"></script>
			<script src="../../assets/admin/js/plugins/jquery.scrollTo.min.js"></script>
			<script src="../../assets/admin/js/plugins/jquery.nicescroll.js"></script>
			<script src="../../assets/admin/js/plugins/bootstrap3-wysihtml5.js"></script>


<?php include 'layouts/footer.php'; ?>
