var gyMain = {
    Global: {
        init: function() {
            var _clearSK = this;
            this.oDatePicker();
            this.oPrettySelect();
            this.oNiceScrollbar();
            this.oMessageBtn();
            this.oInputNumber();
            this.oCheckboxDropdown();
            this.oMenuDraggable();
            this.searchstopPropagation();
            this.validateForm();
            this.avatarUpload();
            this.ckEditorCustomButton();
        },

        validateForm:function(){
   
			$("form").validationEngine('attach', {
				relative: true,
				overflownDIV:"#divOverflown",
				promptPosition:"bottomLeft"
			});
        },

        ckEditorCustomButton:function(){
     		
        	if ( $('#CKEditorFull').length ) {

        		var editorFull = CKEDITOR.replaceClass = 'CKEditorFull';

				var eFull = CKEDITOR.instances[editorFull];
    			if (eFull) { eFull.destroy(true); }

				CKEDITOR.replace( editorFull,
					{
						extraPlugins : 'media',
						toolbar :
						[
							['NumberedList', 'BulletedList', '-', 'Link', 'Unlink'],
							['Maximize', 'About','ShowBlocks','-','-','Media'],
							[ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ],
							[ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ],
					        [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ],
					        [ 'Link','Unlink','Anchor' ] ,
					        [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ],
					        [ 'Styles','Format','Font','FontSize' ] ,
					        [ 'TextColor','BGColor' ],
						]
					});

				
			}


			if( $('#CKEditorBasic').length )
			{

				var editorBasic = CKEDITOR.replaceClass = 'CKEditorBasic';

				var eBasic = CKEDITOR.instances[editorBasic];
    			if (eBasic) { eBasic.destroy(true); }

				CKEDITOR.replace( editorBasic,
					{
						extraPlugins : 'media',
						toolbar :
						[
							['Media', 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink','-','About', '-', 'Image'],

						]
					});
			}

			if( $('#CKEditorLimit').length )
			{
				var editorBasic = CKEDITOR.replaceClass = 'CKEditorLimit';

				CKEDITOR.replace( editorBasic,
					{
						toolbar :
						[
							['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink','-','About', '-', 'Image'],

						]
					});
			}

			

        },

        avatarUpload: function()
        {

			// $("input[name^='avatar']:file").change(function(){
			
			// });
        	// $('.fileinput-button').click(function( e ){

        	// 	var spanEl = $(this).find('span');
        	// 	var browseText = spanEl.text();
        	// 	spanEl.text(browseText.replace('Browse', 'Upload'));


        	// });
        },
        /**Add skin for selectpicker*/

        oPrettySelect: function() {
            

            
            var selectNoResult  = $('.selectpicker--no-result');
            var selectCountry   = $('.selectpicker--country');


            if(selectNoResult.length != 0)
            {

                selectNoResult.select2({
                    minimumResultsForSearch: -1,
                });
            }

            if(selectCountry.length != 0)
            {
                selectCountry.select2({
                    allowClear: true,
                    placeholder: "- Select Country -"
                });
            }

            var selectpicker = $('.selectpicker');
            if(selectpicker.length != 0)
            {
	            selectpicker.select2({
	                minimumResultsForSearch: -1
	            });
        	}
            
        },

        searchstopPropagation: function() {
            $(".search--pretty .form-control").on("click", function(e) {
                $(this).addClass('form-control--pushed');

                var searchPretty = $(this);
                $('.profile').one('mouseup',function(){
                    return false;
                });

                $(document).one('mouseup',function(){
                    searchPretty.removeClass('form-control--pushed');
                });
            });
        },


		/**Beautify scroll*/
		oNiceScrollbar: function() {
			$("#post-scroller").niceScroll({
				styler:"fb",
				cursorcolor:"rgba(0,0,0,0.2)", 
				cursorwidth: '4', 
				cursorborderradius: '10px', 
				cursorborder: '', 
				zindex: '1000',
				autohidemode: false,
				spacebarenabled: false,
				enablekeyboard:false,
			});
			
			$(".modal").niceScroll({
				autohidemode: false,
				spacebarenabled: false,
				enablekeyboard:false,
			});

			$("html, .modal").niceScroll({
				styler:"fb",
				cursorcolor:"#638694 ", 
				cursorwidth: '6', 
				cursorborderradius: '10px', 
				background: '#d4d4d4', 
				cursorborder: '', 
				zindex: '1000',
				spacebarenabled: false,
				enablekeyboard:false,
				autohidemode: false
			});

			$(".timeline-messages-listing, .list-group--scroll").niceScroll({
				styler:"fb",
				cursorcolor:"#95bce4 ", 
				cursorwidth: '7', 
				cursorborderradius: '10px', 
				cursorborder: '', 
				zindex: '1000',
				spacebarenabled: false,
				enablekeyboard:false,
			});


			$(".t-sidebar").niceScroll({
				styler:"fb",
				cursorcolor:"rgba(56,83,94,0.3)", 
				cursorwidth: '4', 
				cursorborderradius: '6px', 
				cursorborder: '', 
				zindex: '1015',
				autohidemode: false,
				spacebarenabled: false,
				enablekeyboard:false,
			});


			$(".media-attachments").niceScroll({
				styler:"fb",
				cursorcolor:"#d4d4d4", 
				cursorwidth: '6', 
				cursorborderradius: '6px', 
				cursorborder: '', 
				zindex: '2000',
				autohidemode: false,
				spacebarenabled: false,
				enablekeyboard:false,
			});

		},

		oMessageBtn: function() {
			$('.btn-message-submit').click(function()
			{
				$(this).addClass('disabled');
				$('.message-submit').show();
			});
		},

		oInputNumber: function() 
		{

			$(".numbers-row .numbers-sorting-listing").append('<div class="inc number-sorting"><span class="hide">+</span><i class="fa fa-sort-up"></i></div><div class="dec number-sorting"><span class="hide">-</span><i class="fa fa-sort-down"></i></div>');
				

			$(".number-sorting").on("click", function() 
			{

				var $button = $(this);
				var oldValue = $button.parent().parent().find("input").val();

				if ($button.text() == "+") 
				{
					  var newVal = parseFloat(oldValue) + 1;
				} 
				else 
				{
					   /**Don't allow decrementing below zero*/
					if (oldValue > 0) 
					{
					    var newVal = parseFloat(oldValue) - 1;
					} 
					else 
					{
					    newVal = 0;
					}
				}

				$button.parent().parent().find("input").val(newVal);

			});
		},

		oCheckboxDropdown: function() 
		{
			$('.dropdown-menu').on('click', function(e) {
			    if($(this).hasClass('dropdown-menu--extended')) {
			        e.stopPropagation();
			    }
			});
		},
		/**Datepicker*/
		oDatePicker: function() 
		{

			/** Datepicker */

			$('#datepicker-from').datetimepicker({
				pickTime: false,
				icons: {
					time: "fa fa-clock-o",
					date: "fa fa-calendar",
					up: "fa fa-arrow-up",
					down: "fa fa-arrow-down"
				}
			});
			$('#datepicker-to').datetimepicker({
				pickTime: false,
				icons: {
					time: "fa fa-clock-o",
					date: "fa fa-calendar",
					up: "fa fa-arrow-up",
					down: "fa fa-arrow-down"
				}
			});




			$("#datepicker-from").on("change.dp",function (e) {
			   $('#datepicker-to').data("DateTimePicker").setStartDate(e.date);
			});

			$("#datepicker-to").on("change.dp",function (e) {
			   $('#datepicker-from').data("DateTimePicker").setEndDate(e.date);
			});


			/** Datetimepicker **/

			$('#datetimepicker-from').datetimepicker({
				icons: {
					time: "fa fa-clock-o",
					date: "fa fa-calendar",
					up: "fa fa-arrow-up",
					down: "fa fa-arrow-down"
				}
			});
			$('#datetimepicker-to').datetimepicker({
				icons: {
					time: "fa fa-clock-o",
					date: "fa fa-calendar",
					up: "fa fa-arrow-up",
					down: "fa fa-arrow-down"
				}
			});
			$("#datetimepicker-from").on("change.dp",function (e) {
			   $('#datetimepicker-to').data("DateTimePicker").setStartDate(e.date);
			});

			$("#datetimepicker-to").on("change.dp",function (e) {
			   $('#datetimepicker-from').data("DateTimePicker").setEndDate(e.date);
			});

			$('#datepicker').datetimepicker({
				language: 'en',
			   	pickTime: false,
			   	icons: {
					time: "fa fa-clock-o",
					date: "fa fa-calendar",
					up: "fa fa-arrow-up",
					down: "fa fa-arrow-down"
				}
			});
			
			$('.datetimepicker').datetimepicker({
			  language: 'en',
			  pickTime: true,
			  pick12HourFormat: true
			});

			$('#datetimepicker2').datetimepicker({
			  language: 'en',
			  pickTime: true,
			  pick12HourFormat: true
			});

            $('.datepicker').on('change.dp',function(e){
                $(this).blur();
            });
			$('.datepicker').datetimepicker({
			  language: 'en',
			  pickTime: false
			});

        },

		oMenuDraggable: function() 
		{
			$('.js-menu-remove').click(function(){
				$(this).parent.parent('.js-menu-item').hide();
			});

			$('.js-menu-item').hover(function(){
				$(this).find('.js-menu-remove').toggleClass('js-menu-remove--ease');
			});


		}

		
	},

	/**Overlay loading*/
	Loader: {

		/**open loading*/
		layOpen: function( el )
		{

	      var Elmnt = $( el );
	      /**Check if element is exists*/
	      if(Elmnt.length == 0)
	      		return;

	      var position = Elmnt.position();

	      var top = position.top;
	      var left = position.left;
	      var height = Elmnt.height();
	      var width = Elmnt.width();


	      /**Init instance of spinner loader*/
	      var Overlay = $('<div class="table-overlay"><span class="preloader__brand preloader__brand--fade"></span></div>');
	      /**Make table or element position relative*/
	      Elmnt.css({'position':'relative'});
	      /**Append overlay to element*/
	      Elmnt.append(Overlay);
	      /**Add CSS to overlay div*/
	      Overlay.css({
	        'position':'absolute',
	        'background':'rgba(255, 255, 255, 0.74)',
	        'top':'0',
	        'left':'0',
	        'width': width+'px',
	        'height': height+'px',
	        'z-index': '999'
	      });

	      $('.preloader__brand').css({
	        'margin-top':(height/3)+'px !important',
	        'margin-left' : 'auto !important',
	        'margin-right': 'auto !important'
	      });
	    },

	    /**close loading*/
	    layClose: function()
	    {
	    	$('.table-overlay').remove();
	    }
	},

	AskExpert: {
		init: function()
		{
			this.inbox();
			this.attachment();
			this.sendForm();
			this.pagination();
			this.addAttachments();
			this.jsAttachItems();
		},

		/**Add attachment when creating questions*/
		addAttachments: function() 
		{

			$('body').on('click', '.add-more-attachment', function(){
		      var ln = $('input.attachment').length - 1;
		      /**Clone input file field to add more attachent*/
		      var clone = $('input.attachment:eq(0)').clone();
		      clone.val('')
		      .insertAfter('input.attachment:eq('+ln+')');
		      
		    });
		},
		/**Toggle attachment*/
		jsAttachItems: function() {

			$('.js-attached-btn').click(function()
			{
				$('.js-attached-items').slideDown('fast');
			});

		},
		/**Pagination for inbox*/
		pagination:function()
		{
			$('body').on('click', '.post-carousel-pagination__core > .carousel-control', function(e)
			{
				e.preventDefault();
				/**Get search element*/
				var searchEl 		= $('#s');
				/**Get row per page element*/
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
						page: $(this).data('page')
					},
					beforeSend:function()
					{	
						/**Display loading while still processing*/
						gyMain.Loader.layOpen('#table');

						
						

					},
					success: function(response)
					{	
						/**replace the inbox with new inbox*/
						$('#table').replaceWith(response.table);
						$('.post-carousel-pagination').replaceWith(response.paging);
						/**$('#pagination_info').replaceWith(response.paging_info);*/
						$('.table-overlay').remove();
					}
				});

				return false;
			});
		},
		/**Display message thread*/
		inbox: function()
		{


			$('body').on('click', '.item-inbox', function(e)
			{
				e.preventDefault();

				var cid = $(this).data('id');

       			/**remove previous selected inbox class*/
       			$('.item-inbox').removeClass('post--active');
       			/**add class to current|selected inbox*/
				$(this).addClass('post--active');

				/**Get messages thread*/
				$.ajax({
					url: baseURL+'admin/ask-expert/thread',
					dataType: 'json',
					data:
					{
						id: cid
					},
					beforeSend: function()
					{
						/**Display loading*/
						gyMain.Loader.layOpen('.forum-wrappr');
					},
					success: function(response)
					{
						/**load messages thread in forum-wrapper*/
						$('.forum-wrappr').html(response.table);
						/**close loading*/
						gyMain.Loader.layClose();
					}

				});


				return false;
			});
			/**trigger first inbox during load*/
			$('.item-inbox:eq(0)').trigger('click');
		},

		attachment:function()
		{
			$('body').on('click', '.toggle-attachments', function(e)
			{
				e.preventDefault();

				var _self 	= $(this);
				var cid 	= _self.data('id');
				

				if(_self.hasClass(':not(.get-attach)'))
				{
					_attachmnt_list.slideToggle('slow');
					return false;
				}
				/**Get message attachment*/
				$.ajax({
					url: baseURL+'inbox/attachments',
					dataType: 'json',
					data:{
						id: cid
					},
					success: function(response)
					{
						/**Load attachment of message to attachment wrapper*/
						$('.attachments-lists').html(response.attachments).show();
						
					}

				})
				return false;

			});
		},
		/**Send the message form via ajax*/
		sendForm: function()
		{

			$('body').on('submit', '.askexpert-form', function(e)
			{
				

				e.preventDefault();

				var _self 	= $(this);
				var sHTML 	= $('.wysiwyg-textarea').code();
				var token 	= $('input[name^="_token"]').val();
				var id 		= $('input[name^="id"]').val();
				var recommendations = $('input[name^="recommendations"]').val();

				$.ajax({
					url: _self.attr('action'),
					type: 'post',
					dataType:'json',
					data:
					{
						_token:token,
						message:sHTML,
						id:id,
						recommendations:recommendations
					},
					/**while processing*/
					beforeSend:function()
					{
						/**Display loading while still processing*/
						gyMain.Loader.layOpen('.forum-wrappr');
					},
					/**when success*/
					success: function(response){
						/**Close loader*/
						gyMain.Loader.layClose();

						$('.post--active').trigger('click');
						//gyMain.AskExpert.inbox();
					},
					/**Get error messages*/
					error: function(a, b, c ){
						console.log(a);
						console.log(b);
						console.log(c);
						
					}	
				});

				return false;

			});
		},

        /**Custom off canvas menu works in tablet only*/

        oResponsiveNav: function() {
            $('.navbar-toggle').click(function()
            {
                $(this).toggleClass('navbar-toggle--trigger');
                $('.t-sidebar').toggleClass('t-sidebar--pushed');
                $('#ascrail2001').toggleClass('nicescroll-rails--pushed');
                $('#ascrail2002').toggleClass('nicescroll-rails--pushed');
                $('#ascrail2003').toggleClass('nicescroll-rails--pushed');
                return false;
            });


        },

        /**Beautify scroll*/
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
                zindex: '1015',
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

        oMessageBtn: function() {
            $('.btn-message-submit').click(function()
            {
                $(this).addClass('disabled');
                $('.message-submit').show();
            });
        },

        oInputNumber: function() 
        {

            $(".numbers-row .numbers-sorting-listing").append('<div class="inc number-sorting"><span class="hide">+</span><i class="fa fa-sort-up"></i></div><div class="dec number-sorting"><span class="hide">-</span><i class="fa fa-sort-down"></i></div>');
                

            $(".number-sorting").on("click", function() 
            {

                var $button = $(this);
                var oldValue = $button.parent().parent().find("input").val();

                if ($button.text() == "+") 
                {
                      var newVal = parseFloat(oldValue) + 1;
                } 
                else 
                {
                       /**Don't allow decrementing below zero*/
                    if (oldValue > 0) 
                    {
                        var newVal = parseFloat(oldValue) - 1;
                    } 
                    else 
                    {
                        newVal = 0;
                    }
                }

                $button.parent().parent().find("input").val(newVal);

            });
        },

        oCheckboxDropdown: function() 
        {
            $('.dropdown-menu').on('click', function(e) {
                if($(this).hasClass('dropdown-menu--extended')) {
                    e.stopPropagation();
                }
            });
        },

        oMenuDraggable: function() 
        {
            $('.js-menu-remove').click(function(){
                $(this).parent.parent('.js-menu-item').hide();
            });

            $('.js-menu-item').hover(function(){
                $(this).find('.js-menu-remove').toggleClass('js-menu-remove--ease');
            });


        }

        
    },

    /**Overlay loading*/
    Loader: {

        /**open loading*/
        layOpen: function( el )
        {



          var Elmnt = $( el );
          /**Check if element is exists*/
          if(Elmnt.length == 0)
                return;

          var position = Elmnt.position();

          var top = position.top;
          var left = position.left;
          var height = Elmnt.height();
          var width = Elmnt.width();
          /**Init instance of spinner loader*/
          var Overlay = $('<div class="table-overlay"><span class="preloader__brand preloader__brand--fade"></span></div>');
          /**Make table or element position relative*/
          /**Elmnt.css({'position':'relative'});*/
          /**Append overlay to element*/
          Elmnt.append(Overlay);
          /**Add CSS to overlay div*/
          Overlay.css({
            'position':'absolute',
            'background':'rgba(255, 255, 255, 0.74)',
            'top':'0',
            'right':'0',
            'width': width+'px',
            'height': height+'px',
            'z-index': '999'
          });

          $('.preloader__brand').css({
            'margin-top':(height/3)+'px !important',
            'margin-left' : 'auto !important',
            'margin-right': 'auto !important'
          });
        },

        /**close loading*/
        layClose: function()
        {
            $('.table-overlay').remove();
        }
    },

    AskExpert: {
        init: function()
        {
            this.inbox();
            this.attachment();
            this.sendForm();
            this.pagination();
            this.addAttachments();
            this.jsAttachItems();
            this.getFilename();
            this.removeAttachment();

        },

        /**Add attachment when creating questions*/
        addAttachments: function() 
        {

            $('body').on('click', '.add-more-attachment', function(){
              var ln = $('.attachment-btn').length - 1;

              /**Clone input file field to add more attachent*/
              var attachment = $('.attachment-btn:eq(0)').clone();
              attachment.find('.filename').text('');
              attachment.find('input').val('');
              attachment.insertAfter('.attachment-btn:eq('+ln+')');
              
            });
        },
        getFilename: function()
        {
        	$("body").on("change", ":file",function(){
        		var filename = $(this).val();
        		filename = filename.length > 30 ? filename.substring(0,27)+'...': filename;
        		$(this).closest('div').find('.filename').html(filename);
		  	});
        },
        removeAttachment: function(){
        	$('body').on('click', '.attachment-btn .fa-trash-o', function(e){
        		e.preventDefault();
        		
        		if( $('.attachment-btn').length-1 != 0)
        		{
        			$(this).closest('.attachment-btn').remove();
        		}
        	});
        },
        /**Toggle attachment*/
        jsAttachItems: function() {

            $('.js-attached-btn').click(function()
            {
                $('.js-attached-items').slideDown('fast');
            });

        },
        /**Pagination for inbox*/
        pagination:function()
        {
            $('body').on('click', '.post-carousel-pagination__core > .carousel-control', function(e)
            {
                e.preventDefault();
                /**Get search element*/
                var searchEl        = $('#s');
                /**Get row per page element*/
                var per_pageEl      = $('#per_page');

                $.ajax({
                    url:ajaxUrl,
                    type: 'GET',
                    dataType:'json',
                    data : {
                        per_page: per_pageEl.val(),
                        s: searchEl.val(),
                        orderby: $('.desort').data('groupby'),
                        order: $('.desort').data('order'),
                        page: $(this).data('page')
                    },
                    beforeSend:function()
                    {   
                        /**Display loading while still processing*/
                        gyMain.Loader.layOpen('#table');

                        
                        

                    },
                    success: function(response)
                    {   
                        /**replace the inbox with new inbox*/
                        $('#table').replaceWith(response.table);
                        $('.post-carousel-pagination').replaceWith(response.paging);
                        /**$('#pagination_info').replaceWith(response.paging_info);*/
                        $('.table-overlay').remove();
                    }
                });

                return false;
            });
        },
        /**Display message thread*/
        inbox: function()
        {


            $('body').on('click', '.item-inbox', function(e)
            {
                e.preventDefault();

                var cid = $(this).data('id');

                /**remove previous selected inbox class*/
                $('.item-inbox').removeClass('post--active');
                /**add class to current|selected inbox*/
                $(this).addClass('post--active');

                /**Get messages thread*/
                $.ajax({
                    url:baseURL+'ask-expert/thread',
                    dataType: 'json',
                    data:
                    {
                        id: cid
                    },
                    beforeSend: function()
                    {
                        /**Display loading*/
                        gyMain.Loader.layOpen('.forum-wrappr');
                    },
                    success: function(response)
                    {
                        /**load messages thread in forum-wrapper*/
                        $('.forum-wrappr').html(response.table);
                        /**close loading*/
                        gyMain.Loader.layClose();
                    }

                });


                return false;
            });
            /**trigger first inbox during load*/
            $('.item-inbox:eq(0)').trigger('click');
        },

        attachment:function()
        {
            $('body').on('click', '.toggle-attachments', function(e)
            {
                e.preventDefault();

                var _self   = $(this);
                var cid     = _self.data('id');
                

                if(_self.hasClass(':not(.get-attach)'))
                {
                    _attachmnt_list.slideToggle('slow');
                    return false;
                }
                /**Get message attachment*/
                $.ajax({
                    url: baseURL+'inbox/attachments',
                    dataType: 'json',
                    data:{
                        id: cid
                    },
                    success: function(response)
                    {
                        /**Load attachment of message to attachment wrapper*/
                        $('.attachments-lists').html(response.attachments).show();
                        
                    }

                })
                return false;

            });
        },
        /**Send the message form via ajax*/
        sendForm: function()
        {

            $('body').on('submit', '.askexpert-form', function(e)
            {
                e.preventDefault();

                var _self = $(this);

                if(_self.find('.ckeditor').val() == '')
                {
                	bootbox.alert("Message is required");
                	return;
                }

                $.ajax({
                    url: _self.attr('action'),
                    type: 'post',
                    dataType:'json',
                    data: _self.serialize(),
                    /**while processing*/
                    beforeSend:function()
                    {
                        /**Display loading while still processing*/
                        gyMain.Loader.layOpen('.forum-wrappr');
                    },
                    /**when success*/
                    success: function(response){
                        /**Close loader*/
                        gyMain.Loader.layClose();

                        $('.post--active').trigger('click');
                        //gyMain.AskExpert.inbox();
                    },
                    /**Get error messages*/
                    error: function(a, b, c ){
                        console.log(a);
                        console.log(b);
                        console.log(c);
                        
                    }   
                });

                return false;

            });
        }
    
       
    },
    Product:
    {
    	init:function(){
    		var self = this;
    		var qtyLimited = $(':input[name^="is_qty_limited"]');
			qtyLimited.click(function(){
				self.manageSaleQty();
			});
			
			self.manageSaleQty();
    	},

    	manageSaleQty:function()
        {
        	
			var isQtyLtd = $(':input[name^="is_qty_limited"]');
			var saleQty  = $(':input[name^="min_sale_qty"], :input[name^="max_sale_qty"]');

			if(isQtyLtd.prop('checked') == false)
			{
				
				saleQty.attr('readonly', 'readonly')
				.val(0);
				saleQty.closest('div').find('.numbers-sorting-listing').hide();
			}
			else
			{
				saleQty.removeAttr('readonly');
				saleQty.closest('div').find('.numbers-sorting-listing').show();
			}
			
        }
    },

    Comment: 
    {
        init:function()
        {
            var _post_id = $('#post_id');
            this.comment();
            this.getPostComment(_post_id.val());
        },

        /**Get post comment by post id*/
        getPostComment: function( post_id )
        {
            /**open loader*/
            gyMain.Loader.layOpen('.timeline-messages-listing');
            $.get(baseURL+'post/comment/'+post_id).done(function( data )
            {
            	if(typeof data == 'string')
            	{
            		$('.timeline-messages').html(data);
            	}
            	else
            	{
            		try {
                    	var json = JSON.parse(data);

	                    if(json.error != 'guest')
		            	{
		               	 	/**load comments*/
		                	$('.timeline-messages').html(data);
		            	}

	                } catch (e) {
	                     /**Do some work**/
	                     $('.timeline-messages').html(data);
	                }
            		            		
            	}
            	

            	
                /**close loader*/
                gyMain.Loader.layClose();
            });
        },

        /**Sending a comment to post*/
        comment: function()
        {

            $('body').on('click', '#send-comment', function(){

                var _comment = $('#comment');
                var _post_id = $('#post_id');
                /**check if comment is empty*/
                if(_comment.val() == '' )
                        return;
                /**Send comment via post*/
                $.post(baseURL+'post/comment', 
                {
                    comment:_comment.val(),
                    post_id:_post_id.val()
                }, 
                function(data){
                    /**Load the comment after sending*/
                    gyMain.Comment.getPostComment(_post_id.val());
                    /**clear the comment box*/
                    _comment.val('');
                    
                }, 'json');

            });
            
        }
    }
}

    
