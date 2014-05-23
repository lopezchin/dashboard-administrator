<!-- Includes all libs -->
<?php include 'layouts/header.php'; ?>

		<!-- Main Sidebar -->
			<?php include 'layouts/sidebar.php'; ?>
			<!-- // Main Sidebar -->

		<!-- Main Content -->

			<div class="section section--top">
				<div class="pull-left mr-15px">
					<h1 class="h3 section__title">
						<i class="fa fa-list"></i>
						<span>Report</span>
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
					  <li><a href="#">View Maintenance</a></li>
					</ol>

					<div class="pull-right">
						<a href="#" class="btn btn-default">
							<i class="fa fa-angle-left"></i>
							<span>Back</span>
						</a>
					</div>
				</div>

			<div class="t-content">
				<div class="section section-border">
					<div class="col-sm-10">
						<div class="post post-block">
							<div id="chartContainer1" class="case-container" style="width: 100%; height: 440px;"></div>
						</div>
					</div>
				</div>
				<div class="section section-box">
					<div class="col-sm-10">
						<div class="post">
							<div class='post__section formatted'>
								<h3 class="post__title">Lorem Ipsum</h3>
								<div class="post__content">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, sapiente, amet ullam excepturi magni doloremque consectetur et facilis fugiat 
									reprehenderit optio veritatis quod commodi quasi nihil omnis laboriosam. Excepturi, expedita, omnis magnam ipsam itaque pariatur explicabo blanditiis 
									neque ut fuga! Dolores, dolore, iusto odio eligendi fugiat repellat tempora! Voluptatum, quis.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Main Footer -->
			<script>
				$(function ()  
					{
					   var dataSource = [
					    {region: "System Status", val: 4119626293},
					    {region: "Back log", val: 1012956064},
					    {region: "Rating", val: 1344124520}
					];

					$("#chartContainer1").dxPieChart({
					    dataSource: dataSource,
					    title: "Maintenance",
						tooltip: {
							enabled: true,
							format:"millions",
							percentPrecision: 2,
							customizeText: function() { 
								return this.valueText + " - " + this.percentText;
							}
						},
						legend: {
							horizontalAlignment: "right",
							verticalAlignment: "top",
							margin: 0
						},
						series: [{
							type: "doughnut",
							argumentField: "region",
							label: {
								visible: true,
								format: "millions",
								connector: {
									visible: true
								}
							}
						}]
					});
					}
				);
			</script>

<?php include 'layouts/footer.php'; ?>
