var attachments = [];
var selectedAttachment = [];
var att = '';
var modalAction = '';
var gy = {

	Global: {
		init: function() {
			var _clearSK = this;
			this.oPrettySelect();
			this.oResponsiveNav();
            this.userSelectPicker();
            // this.DatePicker.init();

            $(".js-sidebar-close").click(function (e) {
				$(".content-inner").toggleClass("sidebar-close");
			});
		},

		// Add skin for selectpicker

		oPrettySelect: function() {
			$('.selectpicker').select2({
				minimumResultsForSearch: -1
			});
		},

		// Custom off canvas menu works in tablet only

		oResponsiveNav: function() {
			$('.navbar-toggle').click(function(){
				$(this).toggleClass('navbar-toggle--trigger');
				$('.t-sidebar').toggleClass('t-sidebar--pushed');
				$('#ascrail2001').toggleClass('nicescroll-rails--pushed');
				$('#ascrail2002').toggleClass('nicescroll-rails--pushed');
				$('#ascrail2003').toggleClass('nicescroll-rails--pushed');
				return false;
			});
		}

	},

	Front: {
		init: function() {
			var e = this;
			this.oNiceScrollbar();
			this.oEditor();
			this.oMessageBtn();
			this.oInputNumber();
			this.jsAttachItems();
		},


		oNiceScrollbar: function() {
			$("#post-scroller").niceScroll({
				styler:"fb",
				cursorcolor:"rgba(0,0,0,0.2)", 
				cursorwidth: '4', 
				cursorborderradius: '10px', 
				cursorborder: '', 
				zindex: '1000',
				autohidemode: false
			});
			
			$(".modal").niceScroll({
				autohidemode: false
			});

			$("html, .modal").niceScroll({
				styler:"fb",
				cursorcolor:"#638694 ", 
				cursorwidth: '6', 
				cursorborderradius: '10px', 
				background: '#d4d4d4', 
				cursorborder: '', 
				zindex: '1000'
			});

			$(".timeline-messages-listing, .list-group--scroll").niceScroll({
				styler:"fb",
				cursorcolor:"#95bce4 ", 
				cursorwidth: '7', 
				cursorborderradius: '10px', 
				cursorborder: '', 
				zindex: '1000',
			});


			$(".t-sidebar").niceScroll({
				styler:"fb",
				cursorcolor:"rgba(56,83,94,0.3)", 
				cursorwidth: '4', 
				cursorborderradius: '6px', 
				cursorborder: '', 
				zindex: '1',
				autohidemode: false
			});


			$(".media-attachments").niceScroll({
				styler:"fb",
				cursorcolor:"#d4d4d4", 
				cursorwidth: '6', 
				cursorborderradius: '6px', 
				cursorborder: '', 
				zindex: '2000',
				autohidemode: false
			});

		},
		jsAttachItems: function() {

			$('.js-attached-btn').click(function(){
				$('.js-attached-items').slideDown('fast');
			});

		},
		bootWysiOverrides: {

			  initInsertMedia: function(toolbar) {
			     var self = this;
			     var insertMediaModal = $('#defaultModal');
			 
			    insertMediaModal.on('hide', function() {
			      self.editor.currentView.element.focus();
			    });

				$('body').on('click', '#attach-to-post',function(){

					//remove attachment if already exists
					for(i = 0; i < selectedAttachment.length; i++)
					{
						
						var img = '<img src="'+baseURL+selectedAttachment[i]['meta_data']['file']+'" />';
						self.editor.currentView.element.focus();
						if (caretBookmark) {
		                    self.editor.composer.selection.setBookmark(caretBookmark);
		                    caretBookmark = null;
		                }

						self.editor.composer.commands.exec("insertHTML", img);
						
						
					}
					//remove class is-active
					$('.media__attachment').removeClass('is-active');
					//empty selectedAttachment when closing the modal
					selectedAttachment = [];



				});


			    toolbar.find('a[data-wysihtml5-command=insertMedia]').click(function() {
			      var activeButton = $(this).hasClass("wysihtml5-command-active");

				    if(!activeButton)
				    {
				     	 self.editor.currentView.element.focus(false);
				     	 caretBookmark = self.editor.composer.selection.getBookmark();
					    if($('.media-uploader').length == 0)
						{
							modalAction = 'send-to-editor';

							insertMediaModal.addClass('modal--full');

							$.get(baseURL+'media/modal').done(function(data){
									
									insertMediaModal.html(data);
									insertMediaModal.modal();
									$('.media-library').trigger('click');
									
									
							});
						
						}
						else
						{

							insertMediaModal.modal();
							$('.media-library').trigger('click');
						}

						return false;
					}
					else
					{
						return true;
					}

		
			    });

			    
			   }


			  
			},
		oEditor: function() {
			var _clearSK = this;
			var newURL = window.location.protocol + "//" + window.location.host;// + window.location.pathname;

			var baseURL = (typeof baseURL == 'undefined') ? newURL+'/csk/' : baseURL ;

			var myCustomTemplates = {
			   "media": function(locale, options) {
	            var size = (options && options.size) ? ' btn-'+options.size : '';
	            return "<li>" +
	                "<div class='btn-group'>" +
	                "<a class='btn btn-" + size + " btn-default' data-wysihtml5-command='insertMedia' title='" + locale.media.insert + "' tabindex='-1'><i class='glyphicon glyphicon-folder-open'></i></a>" +
	                "</div>" +
	                "</li>";
			  }
			}

		

			$.extend($.fn.wysihtml5.locale["en"], {
				media: {
					insert: "Insert Media"
					}
				});


			$.extend($.fn.wysihtml5.defaultOptions, {media: true});

			$.extend($.fn.wysihtml5.Constructor.prototype, this.bootWysiOverrides);


			$('.wysiwyg-textarea').wysihtml5({
				"font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
				"emphasis": true, //Italics, bold, etc. Default true
				"lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
				"html": true, //Button which allows you to edit the generated HTML. Default false
				"link": true, //Button to insert a link. Default true
				"image": true, //Button to insert an image. Default true,
				"color": true, //Button to change color of font  
				customTemplates: myCustomTemplates,
				"stylesheets": baseURL+"assets/global/js/libs/bootstrap-wysihtml5/lib/css/bootstrap3-wysiwyg5-color.css"
			});
		},

		oMessageBtn: function() {
			$('.btn-message-submit').click(function(){
				$(this).addClass('disabled');
				$('.message-submit').show();
			});
		},

		oInputNumber: function() {

			$(".numbers-row .numbers-sorting-listing").append('<div class="inc number-sorting"><span class="hide">+</span><i class="fa fa-sort-up"></i></div><div class="dec number-sorting"><span class="hide">-</span><i class="fa fa-sort-down"></i></div>');
				

			  $(".number-sorting").on("click", function() {

			    var $button = $(this);
			    var oldValue = $button.parent().parent().find("input").val();

			    if ($button.text() == "+") {
			  	  var newVal = parseFloat(oldValue) + 1;
			  	} else {
				   // Don't allow decrementing below zero
			      if (oldValue > 0) {
			        var newVal = parseFloat(oldValue) - 1;
				    } else {
			        newVal = 0;
			      }
				  }

			    $button.parent().parent().find("input").val(newVal);

			  });
		}
	},

	customDropdownCheckbox: {
		init: function() {
			var e = this;
			this.oCheckboxDropdown();
		},

		oCheckboxDropdown: function() {
			$('.dropdown-menu').on('click', function(e) {
			    if($(this).hasClass('dropdown-menu--extended')) {
			        e.stopPropagation();
			    }
			});
		}
	},



//	DatePicker: {
//		init: function() {
//			var e = this;
//			this.oDatePicker();
//			},
//
//		oDatePicker: function() {
//			//alert('test');
//			//$('.datepicker').datetimepicker({pickTime: true});
//			$('.datepicker').datetimepicker({
//				language: 'en',
//			   	pickTime: true
//			});
//
//			$('#datetimepicker2').datetimepicker({
//			  language: 'en',
//			  pick12HourFormat: true
//			});
//		}
//	},


	jsMenuItem: {
		init: function() {
			var e = this;
			this.oMenuDraggable();
			},

		oMenuDraggable: function() {
			$('.js-menu-remove').click(function(){
				$(this).parent.parent('.js-menu-item').hide();
			});

			$('.js-menu-item').hover(function(){
				$(this).find('.js-menu-remove').toggleClass('js-menu-remove--ease');
			});


		}
	},


	Admin: {
		init: function(){
		},
		confirmDelete: function(){
		
			$('body').on('click', '#delete-single-entry', function(e){
				e.preventDefault();
			
				var footer = '';
				var title = '';
				var body = '';
				
				footer 	= '<button type="button" data-value="0" class="confirmBtn btn btn-default" data-dismiss="modal">Cancel</button>';
				footer 	+= '<button type="button" data-value="1" class="btn btn-primary confirmBtn" data-dismiss="modal">Continue</button>';

				title 	= 'Delete';
				body 	= 'Are you sure you want to delete?';

				gy.Admin.alertBox(title, body, footer);
				
				var flag = false;
				$('body').on('click', '.confirmBtn', function(e){
					e.preventDefault();
					
					var _self = $(this);
					if(_self.data('value') == 1)
					{
						flag = true;
					}
					
					return false;
				
				});
				
				return flag;
			})
			
			
			
				
			
		},
		alertBox: function( title, body, footer){
			$('#defaultModal .modal-footer').html(footer);
			$('#defaultModal .modal-body').html(body);
			$('#defaultModal .modal-title').html(title);
			$('#defaultModal').modal();

		},
		xActivate: function(self, _url, _title){
			var footer 	= '';
			var title 	= '';
			var body 	= '';
			var status 	= $(self).val();

			if(status == -1)
				return;

			var checked = $('input[name^="cid[]"]:checked');
			if(checked.length == 0) 
			{
				footer 	= '<button type="button" class="confirmBtn btn btn-primary" data-dismiss="modal">Close</button>';

				title 	= 'Message';
				body 	= 'No '+_title+' selected';

				gy.Admin.alertBox(title, body, footer);
				return;
			}

			var data = [];
			checked.each(function() {
			  data.push($(this).val());
			});

			$.ajax({
				type: 'post',
				url: baseURL+_url,
				dataType: 'json',
				data: {
					cid: data,
					status: status,
				},
				success: function(response)
				{
					tableHelper.ajaxTableHelper();
				}
			});

		},
		xdelete: function( _url, _title ){
			

			// $('body').on('click', objEl, function(e){
			// 	e.preventDefault();

				var footer 	= '';
				var title 	= '';
				var body 	= '';

				var checked = $('input[name^="cid[]"]:checked');
				if(checked.length == 0) 
				{
					footer 	= '<button type="button" class="confirmBtn btn btn-primary" data-dismiss="modal">Close</button>';

					title 	= 'Message';
					body 	= 'No '+_title+' selected';

					gy.Admin.alertBox(title, body, footer);
					return;
				}

				footer 	= '<button type="button" data-value="0" class="confirmBtn btn btn-default" data-dismiss="modal">Cancel</button>';
				footer 	+= '<button type="button" data-value="1" class="btn btn-primary confirmBtn" data-dismiss="modal">Continue</button>';

				title 	= 'Delete '+ _title;
				body 	= 'Are you sure you want to delete?';

				gy.Admin.alertBox(title, body, footer);

				$('body').on('click', '.confirmBtn', function(){

					if($(this).data('value'))
					{

						var data = [];
						checked.each(function() {
						  data.push($(this).val());
						});

						$.ajax({
							type: 'post',
							url: baseURL+_url,
							dataType: 'json',
							data: {
								cid: data
							},
							success: function(response)
							{
								tableHelper.ajaxTableHelper();
							}
						});
					}
				});

				return false;
			//});
		},

		
	},
	Media: {
		init: function()
		{
			this.setPostThumbnail();
			this.attachmentDetails();
			this.attach();
			this.saveAttachment();
			//Get Library
			this.library();
			this.loadMore();
			this.search();
			this.fileUpload();
		},
		fileUpload: function()
		{	
			

			var _clearSK = this;

			//clear the uploaded files
			$('body').on('click', '.upload-files', function(){
				$('.table tbody.files').html('');
			});

			//remove attribute disable to reload the uploaded files
			$('body').on('click', '.fileupload-buttonbar .start', function(){
				$('#load-more-media').removeAttr('disabled');
			});
		},
		saveAttachment: function() {
			$('body').on('change', '#attachment-form :input', function(){
				var _form 	= $(this).closest('form');
				var action 	= _form.attr('action');
				var Inputdata 	= _form.serialize();
				$('.settings-save-status .spinner').show();
				
				$.post(action,  Inputdata).done(function( data ){
					$('.settings-save-status .spinner').hide();
					$('.settings-save-status .saved').show().delay(3000).fadeOut();
				});				
				
			});
		},
		setPostThumbnail: function()
		{


			var _clearSK = this;
			$('body').on('click', '.set-post-thumbnail', function(){
				
				globalJs.Overlay.layOpen('.t-content');
				
				modalAction = 'send-post-thumbnail';

				if($(this).hasClass('panel__image-remove')) {

					var self = $(this);
					
					//$('.panel__image').html('');
					//$(this).toggleClass('panel__image-remove');
					//$(this).text('Set Featured Media');
					var _post_id = $('#post_id').val();
					
					$.post(baseURL+'admin/delete-attachment', 
						{
							post_id: _post_id
						},
					function(data){
						_clearSK.getPostAttachment();
					});
					
					globalJs.Overlay.layClose();

				} else {
					
					
					var $modal = $('#defaultModal');
					$modal.addClass('modal--full');
					
					//check if media upload is not exits
					if($('.media-uploader').length == 0)
					{
						$.get(baseURL+'media/modal').done(function(data){
								
								$modal.html(data);
								$modal.modal();
								$('.media-library').trigger('click');
								
								
						});
					
					}
					else
					{
						$modal.modal();
						$('.media-library').trigger('click');
					}
					
					
					
					globalJs.Overlay.layClose();
					$('.media-library').trigger('click');
					
					
					
				}
			});
		},
		library: function(){
			var _clearSK = this;
			$('body').on('click', '.media-library', function(){
				var length = $('.media__attachment').length;
				if( length == 0 )
				{
					_clearSK.getMediaLibrary();
				}
				
			});

		},
		search: function(){
			var _clearSK = this;
			$('body').on('keyup', '#search-media', function(){
				if($(this).val().length < 3 && $(this).val() != '' )
					return false;
				
				_clearSK.getMediaLibrary();
			});
		},
		loadMore:function(){
			var _clearSK = this;
			$('body').on('click', '#load-more-media', function(){
				_clearSK.getMediaLibrary();
			});
		},
		getMediaLibrary: function(){
			var _s 		= $('#search-media').val();
			var _totalAttachments	= $('.media__attachment').length;
			
			_totalAttachments = (typeof _totalAttachments == undefined || _s != '') ? 0 : _totalAttachments;
		
				
			$.post(baseURL+'media/library',{s:_s, totalAttachments: _totalAttachments}, function(data) {
	
				if( _s != '')
				{
					attachments = [];
				}
	
				for(var i = 0; i < data.row.length; i++)
				{
					attachments.push(data.row[i]);
				}
				


				var media = '';
				
				
				if(attachments.length != 0)
				{ 
					var x = _totalAttachments;
				
					for(var z = x; z < attachments.length; z++)
					{					
						
						media += '<li class="media__attachment">';
						media += '<div class="media__preview">';
						media += '<div class="media__thumbnail">';
						media += '<img src="'+baseURL+attachments[z]['meta_data']['sizes']['post-thumbnail'] +'" alt="" class="media__thumbnail">';
						media += '</div>';
						media += '</div>';
						media += '</li>';
					}
					
				}
				
				if( _s.length != 0 )
				{
					$('.media-listings__inner > .media-attachments').html(media);
				}
				else
				{
					$('.media-listings__inner > .media-attachments').append(media);
				}
				
				
				if( data.totalRows <= $('.media__attachment').length  )
				{
					$('#load-more-media').attr('disabled', 'disabled');
				}
				

			},'json');
		},
		attachmentDetails: function(){

			$('body').on('click', '.modal-body > .media__attachment', function(){
				var _self = $(this);
				var index = _self.index();
				var slctd = attachments[index];

				if( _self.hasClass('is-active') )
				{

					for(var i = selectedAttachment.length - 1; i >= 0; i--) {
					    if(selectedAttachment[i].id === slctd.id) {
					       selectedAttachment.splice(i, 1);
					    }
					}
					
				}
				else
				{
					

					if(modalAction != 'send-to-editor')
					{
						selectedAttachment = attachments[index];
						$('.media__attachment').removeClass('is-active');
					}
					else
					{
					
						var item = $.grep(selectedAttachment, function(item, index) {

						    return item.id == slctd.id;
						});

						if(item.length == 0)
						{
							selectedAttachment.push(slctd);
						}
					}

					

					$.post(baseURL+'media/attachment',slctd, function(data) {
						$('.media-attachment-details').html(data);
					});
				}
				_self.toggleClass('is-active');
			});

		},

		attach: function(){
			var _clearSK = this;

			
			

			if(modalAction == 'send-to-editor')
				return;


			$('body').on('click', '#attach-to-post', function(){
				
				//remove post attachment url title and url cause we will use post id
				$('#attachment_title').remove();
				$('#attachment').remove()
					
				var _post_id = $('#post_id').val();
				
				$.post(baseURL+'media/attach', {
					post_id: _post_id, 
					attachment: selectedAttachment['id'], 
					type: 'post',
					title: ''
					},function(){
						_clearSK.getPostAttachment();		
					});
				
				
				
				
			});

			$('body').on('click', '#url-attach-to-post', function(){
				//remove post attachement_id cause we will use url
				$('#attachment').remove();

				var title 	= $('#attachment_title');
				var url 	= $('#attachment_url');
				var isValidUrl = url.val().match(/^(http:|)\/\/(?:.*?)\.?(youtube|player\.vimeo)\.com\/(watch\?[^#]*v=(\w+)|video\/(\d+)).+$/);
				//remove validation error
				$('.invalid-url').remove();
				//check if url is youtube or vimeo
				if(!isValidUrl)
				{
					$('<span class="alert-danger fade in invalid-url">Error: invalid url</span>').insertAfter(url);
					return false;
				}
				
				var _post_id = $('#post_id').val();
				
				$.post(baseURL+'media/attach', {
					post_id: _post_id, 
					attachment: url.val(), 
					type: 'url',
					title: title.val()
					},function(){
						_clearSK.getPostAttachment();		
					});
					
				
				
				$('#defaultModal').modal('hide');
				
			});
		},
		getPostAttachment: function()
		{
			if(modalAction == 'send-to-editor')
				return;

			var _post_id = $('#post_id').val();
			$.get(baseURL+'admin/post-attachment', { post_id: _post_id, size: 'post-thumbnail'}, function(data){
				$('.panel__image').html(data);
			});
		}


	},

	Menu:{
		init: function(){

			this.addToMenu();

			//deprecated
			this.menuType();
			this.modalItem();

		},
		//add item to menu
		addToMenu: function(){
			$('body').on('click', '.add-to-menu', function(){

				var checked = $('input[name^="_menu_item_object_id"]:checked');
				var menu 	= $('select[name^="term_taxonomy_id"] :selected').val();
				var data = [];

				checked.each(function() {
				  data.push($(this).val());
				});

				$.post(baseURL+'admin/menu-item/create', {
					term_taxonomy_id: menu,
					post_id: menu,
					post_title: item_title,
					_menu_item_type: item_type,
					_menu_item_url: item_type,
				}).done(function(data){
					console.log(data);
				});
		
			});
		},
		//deprecated
		//Display modal menu item type
		modalItem: function(){
			var self = this;
			var menuItemTypeModal = $('#defaultModal');
			menuItemTypeModal.addClass('modal--full');
			


			$('body').on('click', '#select-menu-item', function(){

				var _post_type = $('#_menu_item_type :selected').val();

				//load modal
				$.get(baseURL+'admin/menu-item/modal', {post_type:_post_type }).done(function(data){
					menuItemTypeModal.html(data);
					menuItemTypeModal.modal();
				});
				
			});

			//Get selected menu item
			menuItemTypeModal.on('click', '.item_type', function(){
				var self = $(this);
				var title = self.text();
				var id = self.data('id');
				$('#_menu_item_object_title').val(title);
				$('#_menu_item_object_id').val(id);
			});

		},

		menuType: function()
		{
			
			$('body').on('change', '#_menu_item_type', function(){
				var self = $(this);

				$.post(baseURL+'admin/menu-item/tmpl-item',{ item_type: self.val() })
				.done(function(data){
					$('#tmpl-item').html(data);
				});

			});
			
			$('#_menu_item_type').trigger('change');
		}
	},









}
