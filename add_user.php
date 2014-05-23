<!-- Includes all libs -->
<?php include 'layouts/header.php'; ?>

		<!-- Main Sidebar -->
			<?php include 'layouts/sidebar.php'; ?>
			<!-- // Main Sidebar -->

		<!-- Main Content -->

			<div class="section section--top">
				<div class="pull-left mr-15px">
					<h1 class="h3 section__title">
						<i class="fa fa-cog mr-5px"></i>
						<span>Edit Account</span>
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
					  <li><a href="#">Add User</a></li>
					</ol>

					<div class="pull-right">
						<a href="#" class="btn btn-default">
							<i class="fa fa-angle-left"></i>
							<span>Back</span>
						</a>
					</div>
				</div>

			<div class="t-content">
				<form action="">
					<div class="section">
						<div class="row">
							<div class="col-lg-12">
								<div class="panel">
									<div class="panel__heading">
										<h1 class="h4">New User Registration</h1>
									</div>
									<div class="panel__content">
										<div class="row">
											<div class="section">
												<div class="col-lg-7">
													<div class="mt-15px mb-15px" role="form">

														<div class="form-group">
															<label for="" class="control-label">Email</label>
															<input type="email" class="form-control" id="" autofocus placeholder="test@gmail.com">
															
														</div>
														<div class="form-group">
															<label for="" class="control-label">First Name</label>
															<input type="text" class="form-control" id="" autofocus placeholder="John">
															
														</div>
														<div class="form-group">
															<label for="" class="control-label">Last Name</label>
															<input type="text" class="form-control" id="" placeholder="Doe">
														</div>

														<div class="form-group">
															<label for="" class="control-label">Role</label>
															<div class="selectpicker-full">
																<select class="selectpicker">
																	<option>Select Category</option>
																	<option>Admin</option>
																	<option>Client</option>
																	<option>Supplier</option>
																</select>
															</div>
														</div>

														<div class="form-group">
															<label for="" class="control-label">Active</label>
															<div class="selectpicker-full">
																<select class="selectpicker">
																	<option>Select Category</option>
																	<option>Inactive</option>
																	<option>Active</option>
																</select>
															</div>
														</div>

														<div class="form-group">
															<label for="" class="control-label">Password</label>
															<input type="password" class="form-control" id="" placeholder="************">
														</div>

														<div class="form-group">
															<label for="" class="control-label">Password Confirmation</label>
															<input type="password" class="form-control" id="" placeholder="************">
														</div>
														<div class="form-group">
															<button class="btn btn-default">Update</button> <span> or </span>
															<a href="#" class="btnbtn-default">Back to user listing</a>
														</div>


													</div>
												</div>
											</div>
											<!-- / Settings Form -->
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>


<?php include 'layouts/footer.php'; ?>
