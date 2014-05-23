
			<!-- script for chart -->
			<script src="assets/js/globalize.min.js"></script>
			<script src="assets/js/dx.chartjs.js"></script>

			<script src="assets/admin/js/plugins/select2.js"></script>			
			<script src="assets/admin/js/admin.js"></script>
			<script src="assets/admin/js/plugins/jquery.scrollTo.min.js"></script>
			<script src="assets/admin/js/plugins/jquery.nicescroll.js"></script>
			<script src="assets/admin/js/plugins/bootstrap3-wysihtml5.js"></script>

			<script>
				$(window).load(function(){
					gy.Global.init();
					gy.Front.init();
					gy.sideBarDrop.init();
				})
			</script>
			
			<script type='text/javascript'>//<![CDATA[ 
				$(function(){
				(function($) {
				    $.fn.countTo = function(options) {
				        // merge the default plugin settings with the custom options
				        options = $.extend({}, $.fn.countTo.defaults, options || {});

				        // how many times to update the value, and how much to increment the value on each update
				        var loops = Math.ceil(options.speed / options.refreshInterval),
				            increment = (options.to - options.from) / loops;

				        return $(this).each(function() {
				            var _this = this,
				                loopCount = 0,
				                value = options.from,
				                interval = setInterval(updateTimer, options.refreshInterval);

				            function updateTimer() {
				                value += increment;
				                loopCount++;
				                $(_this).html(value.toFixed(options.decimals));

				                if (typeof(options.onUpdate) == 'function') {
				                    options.onUpdate.call(_this, value);
				                }

				                if (loopCount >= loops) {
				                    clearInterval(interval);
				                    value = options.to;

				                    if (typeof(options.onComplete) == 'function') {
				                        options.onComplete.call(_this, value);
				                    }
				                }
				            }
				        });
				    };

				    $.fn.countTo.defaults = {
				        from: 0,  // the number the element should start at
				        to: 100,  // the number the element should end at
				        speed: 1000,  // how long it should take to count between the target numbers
				        refreshInterval: 100,  // how often the element should be updated
				        decimals: 0,  // the number of decimal places to show
				        onUpdate: null,  // callback method for every time the element is updated,
				        onComplete: null,  // callback method for when the element finishes updating
				    };
				})(jQuery);

				jQuery(function($) {
				        $('.counter__views--month').countTo({
				            from: 0,
				            to: 84685,
				            speed: 1000,
				            refreshInterval: 50,
				            onComplete: function(value) {
				                console.debug(this);
				            }
				        });

				         $('.counter__views--today').countTo({
				            from: 0,
				            to: 21685,
				            speed: 1200,
				            refreshInterval: 50,
				            onComplete: function(value) {
				                console.debug(this);
				            }
				        });

				         $('.counter__views--last-week').countTo({
				            from: 0,
				            to: 1685,
				            speed: 1500,
				            refreshInterval: 50,
				            onComplete: function(value) {
				                console.debug(this);
				            }
				        });
				    });
				});//]]>  

				</script>

		<footer class="t-footer">
			<p>© 2014 All rights reserved.</p>
		</footer>

	</body>
</html>