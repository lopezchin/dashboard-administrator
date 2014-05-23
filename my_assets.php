<!-- Includes all libs -->
<?php include 'layouts/header.php'; ?>

		<!-- Main Sidebar -->
			<?php include 'layouts/sidebar.php'; ?>
			<!-- // Main Sidebar -->

		<!-- Main Content -->

		<div class="section section--top">
				<div class="pull-left mr-15px">
					<h1 class="h3 section__title">
						<i class="fa fa-group mr-5px"></i>
						<span>My Assets</span>
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
					  <li><a href="#">All</a></li>
					</ol>

					<div class="pull-right">
					<form class="form-inline">
						<div class="form-group">
							<div class="selectpicker-lg">
								<select class="selectpicker">
									<option>-- Bulk Action --</option>
								</select>
							</div>
						</div>
						<div class="form-group mr-15px">
							<button class="btn btn-default">Apply</button>
						</div>
						<div class="form-group">
							<div class="selectpicker-lg">
								<select class="selectpicker">
									<option>-- Filter by Groups --</option>
								</select>
							</div>
						</div>
						<div class="form-group mr-15px">
							<button class="btn btn-default">Filter</button>
						</div>
						<div class="form-group">
							<div class="selectpicker-sm">
								<select class="selectpicker">
									<option>10</option>
									<option>25</option>
									<option>50</option>
									<option>100</option>
								</select>
							</div>
						</div>
						
					</form>

					</div>
				</div>

			<div class="t-content">
				<div class="section">
					<table class="table table-pretty table-striped table-hover border-top" id="sample_1">
						<thead class="table-pretty-head">
							<tr>
								<th style="width:8px;"><input type="checkbox" class="group-checkable" data-set="#sample_1 .checkboxes" /></th>
								<th>User ID <a href="#"><i class="fa fa-sort"></i></a></th>
								<th>Email <a href="#"><i class="fa fa-sort"></i></a></th>
								<th>First Name <a href="#"><i class="fa fa-sort"></i></a></th>
								<th>Last Name <a href="#"><i class="fa fa-sort"></i></a></th>
								<th>Role <a href="#"><i class="fa fa-sort"></i></a></th>
								<th>Last Station <a href="#"><i class="fa fa-sort"></i></a></th>
						</thead>
						<tbody>
							<tr>
								<td><input type="checkbox" class="checkboxes" value="1" /></td>
								<td>01</td>
								<td><a href="">johndoe@gmail.com</a></td>
								<td>John</td>
								<td>Doe</td>
								<td><a href="">Client</a></a></td>
								<td>Lorem Ipsum</td>
							</tr>
							<tr>
								<td><input type="checkbox" class="checkboxes" value="1" /></td>
								<td>02</td>
								<td><a href="">johndoe@gmail.com</a></td>
								<td>John</td>
								<td>Doe</td>
								<td><a href="">Client</a></a></td>
								<td>Lorem Ipsum</td>
							</tr>
							<tr>
								<td><input type="checkbox" class="checkboxes" value="1" /></td>
								<td>03</td>
								<td><a href="">johndoe@gmail.com</a></td>
								<td>John</td>
								<td>Doe</td>
								<td><a href="">Client</a></a></td>
								<td>Lorem Ipsum</td>
							</tr>
							<tr>
								<td><input type="checkbox" class="checkboxes" value="1" /></td>
								<td>04</td>
								<td><a href="">johndoe@gmail.com</a></td>
								<td>John</td>
								<td>Doe</td>
								<td><a href="">Client</a></a></td>
								<td>Lorem Ipsum</td>
							</tr>
							<tr>
								<td><input type="checkbox" class="checkboxes" value="1" /></td>
								<td>05</td>
								<td><a href="">johndoe@gmail.com</a></td>
								<td>John</td>
								<td>Doe</td>
								<td><a href="">Client</a></a></td>
								<td>Lorem Ipsum</td>
							</tr>
							<tr>
								<td><input type="checkbox" class="checkboxes" value="1" /></td>
								<td>06</td>
								<td><a href="">johndoe@gmail.com</a></td>
								<td>John</td>
								<td>Doe</td>
								<td><a href="">Client</a></a></td>
								<td>Lorem Ipsum</td>
							</tr>
							<tr>
								<td><input type="checkbox" class="checkboxes" value="1" /></td>
								<td>07</td>
								<td><a href="">johndoe@gmail.com</a></td>
								<td>John</td>
								<td>Doe</td>
								<td><a href="">Client</a></a></td>
								<td>Lorem Ipsum</td>
							</tr>
							<tr>
								<td><input type="checkbox" class="checkboxes" value="1" /></td>
								<td>08</td>
								<td><a href="">johndoe@gmail.com</a></td>
								<td>John</td>
								<td>Doe</td>
								<td><a href="">Client</a></a></td>
								<td>Lorem Ipsum</td>
							</tr>
							<tr>
								<td><input type="checkbox" class="checkboxes" value="1" /></td>
								<td>09</td>
								<td><a href="">johndoe@gmail.com</a></td>
								<td>John</td>
								<td>Doe</td>
								<td><a href="">Client</a></a></td>
								<td>Lorem Ipsum</td>
							</tr>
							<tr>
								<td><input type="checkbox" class="checkboxes" value="1" /></td>
								<td>10</td>
								<td><a href="">johndoe@gmail.com</a></td>
								<td>John</td>
								<td>Doe</td>
								<td><a href="">Client</a></a></td>
								<td>Lorem Ipsum</td>
							</tr>
						</tbody>
						<thead>
							<tr>
								<th style="width:8px;"><input type="checkbox" class="group-checkable" data-set="#sample_1 .checkboxes" /></th>
								<th>User ID <a href="#"><i class="fa fa-sort"></i></a></th>
								<th>Email <a href="#"><i class="fa fa-sort"></i></a></th>
								<th>First Name <a href="#"><i class="fa fa-sort"></i></a></th>
								<th>Last Name <a href="#"><i class="fa fa-sort"></i></a></th>
								<th>Role <a href="#"><i class="fa fa-sort"></i></a></th>
								<th>Last Station <a href="#"><i class="fa fa-sort"></i></a></th>
							</tr>
						</thead>
					</table>
					<div class="pull-left">
						<div class="table-results">
							Showing 1 to 10 of 25 entries
						</div>
					</div>
					<div class="pull-right">
						<ul class="pagination">
							<li class="prev disabled"><a href="#"><i class="fa fa-fast-backward"></i></a></li>
							<li class="prev disabled"><a href="#"><i class="fa fa-backward"></i></a></li>
							<li class="active"><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#"><i class="fa fa-forward"></i></a></li>
							<li><a href="#"><i class="fa fa-fast-forward"></i></a></li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Main Footer -->

<?php include 'layouts/footer.php'; ?>

