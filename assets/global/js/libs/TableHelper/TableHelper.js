
var ajaxUrl = null;


var tableHelper = {

		init:function(url){
			ajaxUrl = url;
			
			tableHelper.search();
			this.pagination();
			this.columnHeader();
			this.numRowsToDisplay();
			this.checkAll();
		},
		numRowsToDisplay:function()
		{

			$('#per_page')
				.removeAttr('onchange')
				.on('change', function(e){
				e.preventDefault();

				$('.pagination li.active').removeClass('active');
				
				tableHelper.ajaxTableHelper();

				return false;
			});
	
			
		},
		pagination: function() {

			var body 	= $('body');
			body.on('click', '.pagination li', function(e){
				e.preventDefault;
				$('.pagination li').removeClass('active');
				$(this).addClass('active');

				tableHelper.ajaxTableHelper();
				return false;
			});


		},
		search: function() {
			$('#s').keyup(function() {
				if($(this).val().length < 2 && $(this).val() != '')
					return;

				tableHelper.ajaxTableHelper();

			});
			
		},
		columnHeader: function()
		{

			var body 	= $('body');
			$('th.column_header a').removeAttr('href');

			body.on('click', 'th.column_header.sorting', function(e){

				e.preventDefault();

				$('th.column_header').removeClass('desort');

				$(this).addClass('desort');

				tableHelper.ajaxTableHelper();

				return false;
			});

		},
		ajaxTableHelper: function()
		{
			var searchEl 		= $('#s');
			var per_pageEl 		= $('#per_page');

			$.ajax({
				url:ajaxUrl,
				type: 'GET',
				dataType:'json',
				data : {
					per_page: per_pageEl.val(),
					s: searchEl.val(),
					orderby: $('.desort').data('groupby'),
					order: $('.desort').data('order'),
					page: $('.pagination li.active').data('page')
				},
				beforeSend:function()
				{	
					var table = $('#table');
					var position = table.position();

					var top = position.top;
					var left = position.left;
					var height = table.height();
					var width = table.width();

					var Overlay = $('<div class="table-overlay"><span class="table-loader"></span></div>');
					Overlay.insertAfter('#table');
					
					Overlay.css({
						'position':'absolute',
						'background':'rgba(255, 255, 255, 0.74)',
						'top':top+'px',
						'left':left+'px',
						'width': width+'px',
						'height': height+'px'
					});


					$('.table-loader').css({
						'margin-top':(height/3)+'px',
						'margin-left' : 'auto',
						'margin-right': 'auto'
					});

				},
				success: function(response)
				{
					$('#table').replaceWith(response.table);
					$('ul.pagination').replaceWith(response.paging);
					$('#pagination_info').replaceWith(response.paging_info);
					$('.table-overlay').remove();
				}
			});

		},
		checkAll: function(){
			$('body').on('click', ':checkbox[name^="cb"]', function () {
			  $(':checkbox[name^="cid"]').prop('checked', this.checked);
			  $('input[name^="cb"]').attr('checked', 'checked');
			});

			$('body').on('click', ':checkbox[name^="cid"]', function(){
				var cbx = $(':checkbox[name^="cid"]');
				var chckdCbx = $(':checkbox[name^="cid"]:checked');
				
				if(chckdCbx.length == cbx.length){
					$(':checkbox[name^="cb"]').prop('checked', true);
				}
				else
				{
					$(':checkbox[name^="cb"]').prop('checked', false);
				}
			});

		}
	
}