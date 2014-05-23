<!-- Includes all libs -->
<?php include 'layouts/header.php'; ?>

		<!-- Main Sidebar -->
			<?php include 'layouts/sidebar.php'; ?>
			<!-- // Main Sidebar -->

		<!-- Main Content -->

			<div class="section section--top">
				<div class="pull-left mr-15px">
					<h1 class="h3 section__title">
						<i class="fa fa-map-marker mr-5px"></i>
						<span>Locate</span>
					</h1>
				</div>

				<div class="pull-right search">
					<form class="form-inline form-rounded" role="form">
						
						<div class="dataTables_filter" id="sample_1_filter">
							<div class="form-group">
								<i class="fa fa-search"></i>
								<input type="text" aria-controls="sample_1" class="form-control" id="exampleInputEmail2" placeholder="Search Members">
							</div>
						</div>
					</form>
				</div>
			</div>

			<div class="section section-breadcrumb">
					<ol class="breadcrumb">
					  <li><a href="#">My Assets</a></li>
					  <li><a href="#">Locate</a></li>
					</ol>

					<div class="pull-right">
						<a href="#" class="btn btn-default">
							<i class="fa fa-angle-left"></i>
							<span>Back</span>
						</a>
					</div>
				</div>

			<div class="t-content">
				<div class="section-map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d398858.4031550906!2d145.58355459419317!3d-38.64701150128268!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1400500684317" width="100%" height="650" frameborder="0" style="border:0"></iframe>
				</div>
			</div>

			<!-- Main Footer -->

<?php include 'layouts/footer.php'; ?>
