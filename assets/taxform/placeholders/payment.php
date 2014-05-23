<?php include 'header.php' ?>

<div class="page-heading">
  <div class="container">
    <h1>Payment</h1>
  </div>
</div>
<div class="container">
<div class="section section-l4 ">
	<div class="row ">
		<div class="col-md-6">
			<div class="form-group">
				<label for="" class="label-control">Tax Return for tax year</label>
				<select name="" id="" class="select2 form-control">
					<option value="">2013</option>
				</select>
			</div>
		</div>
		<div class="col-md-6">
			<div class="form-group">
				<label for="" class="label-control">Services</label>
				<ul class="list-stacked list-check">
					<li>Review by tax Accountant</li>
					<li>Process by tax Agent (Submission to ATO)</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="section section-l3">	
	<div class="payment-options">
		<div class="payment-price">$19.99 <span class="'"> - Cost - </span></div>
		<div class="form-group">
			<div class="radio">
				<label class="checkbox-inline">
				  <input type="radio" id="inlineCheckbox1" name="payment" value="option1">Fee from refund
				</label>
			</div>
			<div class="radio">
				<label class="checkbox-inline">
				  <input type="radio" id="inlineCheckbox1" name="payment" value="option2">Pay with PayPal
				</label>
			</div>
			<div class="radio">
				<label class="checkbox-inline">
				  <input type="radio" id="inlineCheckbox1" name="payment" value="option3">Pay with a credit card
				</label>
			</div>
		</div>
		<div class="payment-tagline">Choose a secure payment method</div>
	</div>
</div>

<div class="section section-l3">
	<ul class="tab-list list-inline inline">
		<li><a href="">Billing and Credit Card Details</a></li>
		<li><a href="">Bank Details</a></li>
	</ul>
	<div class="form-group">
		<div class="controls">
		  <input class="span2" type="text" placeholder="text">
		  <input class="span5" type="text" placeholder="text">
		  <input class="span5" type="text" placeholder="text">
		</div>
	</div>
</div>
</div>

<?php include 'footer.php' ?>