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
					  <li><a href="#">Run Custom Report</a></li>
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
							<div id="chartContainer2" class="case-container" style="width: 100%; height: 440px;"></div>
						</div>
					</div>
				</div>
				<div class="section section-box">
					<div class="col-sm-10">
						<div class="post">
							<div class='post__section formatted'>
								<h3 class="post__title">Lorem Ipsum</h3>
								<div class="post__content">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, sapiente, amet ullam excepturi magni doloremque consectetur et facilis fugiat reprehenderit optio veritatis quod commodi quasi nihil omnis laboriosam. Excepturi, expedita, omnis magnam ipsam itaque pariatur explicabo blanditiis neque ut fuga! Dolores, dolore, iusto odio eligendi fugiat repellat tempora! Voluptatum, quis.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<script>
			$(function (){
				   var dataSource = [
				    { year: 1950, europe: 546, americas: 332, africa: 227 },
				    { year: 1960, europe: 605, americas: 417, africa: 283 },
				    { year: 1970, europe: 656, americas: 513, africa: 361 },
				    { year: 1980, europe: 694, americas: 614, africa: 471 },
				    { year: 1990, europe: 721, americas: 721, africa: 623 },
				    { year: 2000, europe: 730, americas: 836, africa: 797 },
				    { year: 2010, europe: 728, americas: 935, africa: 982 },
				    { year: 2020, europe: 721, americas: 1027, africa: 1189 },
				    { year: 2030, europe: 704, americas: 1110, africa: 1416 },
				    { year: 2040, europe: 680, americas: 1178, africa: 1665 },
				    { year: 2050, europe: 650, americas: 1231, africa: 1937 }
				];

				$("#chartContainer2").dxChart({
				    dataSource: dataSource,
				    commonSeriesSettings: {
				        argumentField: "year"
				    },
				    series: [
				        { valueField: "europe", name: "Europe" },
				        { valueField: "americas", name: "Americas" },
				        { valueField: "africa", name: "Africa" }
				    ],
				    argumentAxis:{
				        grid:{
				            visible: true
				        }
				    },
				    tooltip:{
				        enabled: true
				    },
				    title: "Historic, Current and Future Population",
				    legend: {
				        verticalAlignment: "bottom",
				        horizontalAlignment: "center"
				    },
				    commonPaneSettings: {
				        border:{
				            visible: true,
				            right: false
				        }       
				    }
				});
			});
		</script>
			<!-- Main Footer -->

<?php include 'layouts/footer.php'; ?>
