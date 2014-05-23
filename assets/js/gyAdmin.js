var attachments = [];
var selectedAttachment = [];
var att = '';
var modalAction = '';
"use strict";
var gyAdmin = {
	init: function(){
		this.Media.init();
		this.sideBarMenuDropdown();
		$('.tooltip2').tooltip();
		this.BootrstrapAlert.init();
		this.selectCapabilities();
		this.deSelectCapabilities();
        this.navigationSegments();
        this.sideBarMenuDropdown();
		
	},

    navigationSegments: function() {

        var segments = CONST.SEGMENTS;
        var theSegment = "";
        for(var x in segments) {
            theSegment = segments[(segments.length - 1) - x];

            var $theSegment = $("[data-mysegment=\""+theSegment+"\"]");
            if ($theSegment.length) {
            $theSegment.addClass('active');

            $theSegment.closest('.sub-menu').addClass('active');

            return false;
            }
        }
    },

    // Global Related Scripts

	/**Check User Capabilities*/
	selectCapabilities: function() {
		$('body').on('click', '.check-all-caps', function (e) {
			e.preventDefault();

		  $(':checkbox[name^="capability"]').prop('checked', 'checked');

		});
	},

	/**Uncheck User Capabilities*/
	deSelectCapabilities: function(){
		$('body').on('click', '.uncheck-all-caps', function (e) {
			e.preventDefault();

		  $(':checkbox[name^="capability"]').prop('checked', false);

		});
	},

	sideBarMenuDropdown: function() {

	    
	    $(".sub-menu--extended:not(.active)").hover(function(){
			$(this).addClass('collapse');
			$(this).addClass('collapsed');
		},function(){
	    	$(".sub-menu--extended:not(.active)").removeClass('collapse').removeClass('collapsed');
		});

	},

	/**Custom Alert, Confirm box*/
	BootrstrapAlert: {
		init: function(){

			$('body').on('click', '.confirm-delete', function(e){
				e.preventDefault();
				var self = $(this);

				bootbox.confirm("<i class='fa fa-exclamation-triangle'></i>Are you sure you want to delete?", function(result) {
					if(result)
					{
						document.location.href = self.attr('href');
					}
				});
				
			});
		},
		
		/**Popup confirmbox*/
		confirmDelete: function()
		{

			$('body').on('click', '#delete-single-entry', function(e)
			{
				e.preventDefault();
			
				var footer = '';
				var title = '';
				var body = '';
				
				footer 	= '<button type="button" data-value="0" class="confirmBtn btn btn-default" data-dismiss="modal">Cancel</button>';
				footer 	+= '<button type="button" data-value="1" class="btn btn-primary confirmBtn" data-dismiss="modal">Continue</button>';
				title 	= 'Delete';
				body 	= 'Are you sure you want to delete?';

				gyAdmin.BootrstrapAlert.alertBox(title, body, footer);
				
				var flag = false;
				$('body').one('click', '.confirmBtn', function(e)
				{
					e.preventDefault();
					
					var _self = $(this);
					if(_self.data('value') == 1)
					{
						flag = true;
					}
					
					return false;
				
				});
				
				return flag;
			});
			
		},

		/**Popup alertbox*/
		alertBox: function( title, body, footer){
			
			var modalBOx = $('#defaultModal');

			modalBOx.find('.modal-footer').html(footer);
			modalBOx.find('.modal-body').html(body);
			modalBOx.find('.modal-title').html(title);
			modalBOx.modal();

		},

		/**This method will process the status of the row*/
		xActivate: function(self, _url, _title)
		{
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
				/**Display alert modal box*/
				gyAdmin.BootrstrapAlert.alertBox(title, body, footer);
				return;
			}
			/**Store selected row to array*/
			var data = [];
			checked.each(function() 
			{
			  data.push($(this).val());
			});

			
			$.ajax({
				type: 'post',
				url: baseURL+_url,
				dataType: 'json',
				data: {
					cid: data,
					status: status
				},
				success: function(response)
				{
					/**Reload table data*/
					tableHelper.ajaxTableHelper();
				}
			});

		},
		/**This method will delete rows of data*/
		xdelete: function( _url, _title )
		{
			

			var footer 	= '';
			var title 	= '';
			var body 	= '';
			/**Get selected row id*/
			var checked = $('input[name^="cid[]"]:checked');
			/**Check if no selected row*/
			if(checked.length == 0) 
			{
				footer 	= '<button type="button" class="confirmBtn btn btn-primary" data-dismiss="modal">Close</button>';
				title 	= 'Message';
				body 	= 'No '+_title+' selected';

				gyAdmin.BootrstrapAlert.alertBox(title, body, footer);
				return;
			}
			footer 	= '<button type="button" data-value="0" class="confirmBtn btn btn-default" data-dismiss="modal">Cancel</button>';
			footer 	+= '<button type="button" data-value="1" class="btn btn-primary confirmBtn" data-dismiss="modal">Continue</button>';

			title 	= 'Delete '+ _title;
			body 	= 'Are you sure you want to delete?';

			gyAdmin.BootrstrapAlert.alertBox(title, body, footer);

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
			
		},

        deletetblist: function(url,title,$tbList) {

            var checked = $tbList.tblist('getCb',true),
                footer = "",
                body = "";

            /**Check if no selected row*/
            if(count(checked) <= 0)
            {
                footer 	= '<button type="button" class="confirmBtn btn btn-primary" data-dismiss="modal">Close</button>';
                title 	= 'Message';
                body 	= 'No '+_title+' selected';

                gyAdmin.BootrstrapAlert.alertBox(title, body, footer);
                return;
            }

            footer 	= '<button type="button" data-value="0" class="confirmBtn btn btn-default" data-dismiss="modal">Cancel</button>';
            footer 	+= '<button type="button" data-value="1" class="btn btn-primary confirmBtn" data-dismiss="modal">Continue</button>';

            title 	= 'Delete '+ _title;
            body 	= 'Are you sure you want to delete?';

            gyAdmin.BootrstrapAlert.alertBox(title, body, footer);

            $('body').on('click', '.confirmBtn', function(){
                $.ajax({
                    type: 'post',
                    url: baseURL+_url,
                    dataType: 'json',
                    data: {
                        cid: checked
                    },
                    success: function(response)
                    {
                        $tbList.tblist('refresh');
                    }
                });
            });

        }
		
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

			/**clear the uploaded files*/
			$('body').on('click', '.upload-files', function(){
				$('.table tbody.files').html('');
			});

			/**remove attribute disable to reload the uploaded files*/
			$('body').on('click', '.fileupload-buttonbar .start', function(){
				$('#load-more-media').removeAttr('disabled');
			});
		},

		/**This funcion will save the selected media on modal*/
		saveAttachment: function() 
		{
			$('body').on('change', '#attachment-form :input', function()
			{
				var self 		= $(this);
				var _form 		= self.closest('form');
				var action 		= _form.attr('action');
				var Inputdata 	= _form.serialize();
				/**Display spinner while saving is in progress*/
				$('.settings-save-status .spinner').show();
				
				$.post(action,  Inputdata).done(function( data )
				{
					/**Display spinner when saving is completed*/
					$('.settings-save-status .spinner').hide();
					/**Display success message with in 3 seconds*/
					$('.settings-save-status .saved').show().delay(3000).fadeOut();
				});				
				
			});
		},
		/**Add featured media to post*/
		setPostThumbnail: function()
		{


			var _clearSK = this;
			$('body').on('click', '.set-post-thumbnail', function(){
				
				var self = $(this);

				gyMain.Loader.layOpen('.img_panel_wrappr');
				
				/**Add media modal action*/
				modalAction = 'send-post-thumbnail';
				/**Check if featured panel image has panel__image-remove class*/
				if( self.hasClass('panel__image-remove') ) 
				{

					

					/**Get current post id*/
					var _post_id = $('#post_id').val();
					/**Delete existing attachment*/
					$.post(baseURL+'admin/delete-attachment', 
						{post_id: _post_id},function(){
						
						/**Get post attachment*/
						_clearSK.getPostAttachment();
						/**Close loader*/
						gyMain.Loader.layClose();
					});
					

				} else {
					
					/**Initialize modal element*/
					var insertMediaModal = $('#defaultModal');

					/**Add class to modal to make it fullwidth*/
					insertMediaModal.addClass('modal--full');
					
					/**check if media upload is not exits*/
					if($('.media-uploader').length == 0)
					{
						
						$.get(baseURL+'media/modal').done(function(data){
								/**Load modal*/
								insertMediaModal.html(data);
								/**attach modal action to element*/
								insertMediaModal.modal();
								$('.media-library').trigger('click');
								
								
						});
					
					}
					else
					{
						/**attach modal action to element*/
						insertMediaModal.modal();
						/**Trigger media library tab*/
						$('.media-library').trigger('click');
					}
					
					/**Close loader*/
					gyMain.Loader.layClose();
					/**Trigger media library tab*/
					$('.media-library').trigger('click');
					
					
					
				}
			});
		},
		library: function()
		{
			var _clearSK = this;
			$('body').on('click', '.media-library', function(){
				// var length = $('.media__attachment').length;
				// if( length == 0 )
				// {
					attachments = [];
					$('.media-listings__inner .media-attachments').html('');
					_clearSK.getMediaLibrary();
				//}
				
			});

		},

		/**Search media*/
		search: function()
		{
			var _clearSK = this;
			$('body').on('keyup', '#search-media', function() 
			{
				if($(this).val().length < 3 && $(this).val() != '' )
					return false;
				/**Load result query media*/	
				_clearSK.getMediaLibrary();
			});
		},

		/**Load more media*/
		loadMore:function()
		{
			var _clearSK = this;
			$('body').on('click', '#load-more-media', function(){
				/**Load more media*/

				_clearSK.getMediaLibrary();
			});
		},
		/**Load all uploaded media*/
		getMediaLibrary: function()
		{
			var _s 		= $('#search-media').val();
			var _totalAttachments	= $('.modal-body .media__attachment').length;
			
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
		/**This method will get the attachment information*/
		attachmentDetails: function() 
		{

			$('body').on('click', '.modal-body .media__attachment', function()
			{
				var _self = $(this);
				var index = _self.index();
				var slctd = attachments[index];

				if( _self.hasClass('is-active') )
				{

					for(var i = selectedAttachment.length - 1; i >= 0; i--) 
					{
					    if(selectedAttachment[i].id === slctd.id) {
					       selectedAttachment.splice(i, 1);
					    }
					}
					
				}
				else
				{
					
					/**Check if selected media will attach to editor*/
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

					
					/**Get the attachment detail*/
					$.post(baseURL+'media/attachment',slctd)
					.done(function(data) {
						/**Display detail to detail wrapper*/
						$('.media-attachment-details').html(data);
					});
				}

				/**Toggle class is-active*/
				_self.toggleClass('is-active');
			});

		},
		/**This method will attach media to post*/
		attach: function() 
		{
			var _clearSK = this;

			/**Check if selected media will attach to editor*/
			if(modalAction == 'send-to-editor')
				return;

			$('body').on('click', '#attach-to-post', function(){
				
				gyMain.Loader.layOpen('.img_panel_wrappr');
				/**remove post attachment url title and url cause we will use post id*/
				//$('#attachment_title').remove();
				$('#attachment').remove()
					
				var _post_id = $('#post_id').val();
				
				$.post(baseURL+'media/attach', {
					post_id: _post_id, 
					attachment: selectedAttachment['id'], 
					type: 'post',
					title: ''
				}).done(function(){
					/**Get the post attachment*/
					_clearSK.getPostAttachment();

					gyMain.Loader.layClose();
				});
				
				
				
			});

			$('body').on('click', '#url-attach-to-post', function(){
				//remove post attachement_id cause we will use url
				$('#attachment').remove();

				var title 	= $('#attachment_title');
				var url 	= $('#attachment_url');
				var isValidUrl = url.val().match(/^http:\/\/(?:.*?)\.?(youtube|vimeo)\.com\/(watch\?[^#]*v=(\w+)|(\d+)).+$/);

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
					});
					
				_clearSK.getPostAttachment();
				
				$('#defaultModal').modal('hide');
				
			});
		},


		getPostAttachment: function()
		{
			/**Check if selected media will attach to editor*/
			if(modalAction == 'send-to-editor')
				return;

			/**Get current post id*/
			var _post_id = $('#post_id').val();

			/**Get post featured media attachment*/
			$.get(baseURL+'admin/post-attachment', { post_id: _post_id, size: 'post-thumbnail'})
			.done(function(data) 
			{
				/**Display attachment to featured image panel*/
				$('.img_panel_wrappr').html(data);

			});
		}


	},

    // Below is an action helper for admin
    buckActions: {
        /**
         * Instantiate Buck Actions
         *
         * @param $which_form - the target object form
         * @param obj - the callback function when buck actions is changed
         */
        init: function($which_form,obj) {
            var _self = this;
            _self.$form = $which_form;
            _self.obj = obj;

            _self.onEvent();
        },

        /**
         * On buck action is applied.
         *
         */
        onEvent: function() {
            var _self = this,
                $buckAction = _self.$form.find('.bulk_actions'),
                $button = $buckAction.find('button[type=button]');

            $button.on('click',function(e) {

                var cIds = _self.$form.tblist('getCb',true),
                    $buckAction = $(this).closest('.bulk_actions'),
                    $buckActionSelect = $buckAction.find('select').first(),
                    param = "?",
                    x,
                    data = {},
                    paramName = _self.$form.find('.cb-select').first().attr('name');

                // If delete action
                for(x in cIds) {
                    var theId = cIds[x];

                    param += paramName + "[]=" + encodeURI(theId) + "&";
                }

                data.param = param;
                data.total = cIds.length;
                data.action = $buckActionSelect.val();
                data.action_input_name = $buckActionSelect.attr('name');

                // Run the object with the parameter of the data
                _self.obj(data);

                e.preventDefault();

            });
        }

    },




    // Page Related Scripts

    taxSettingsPage: {
        init: function() {
            this.selectGateway();
        },

        selectGateway: function() {
            $("#select-gateway").change(function(){
                var gatewayID = '#gateway-' + $(this).val();
                // Hide all gateway id
                $("div[id^=gateway-]").hide();

                $(gatewayID).show();
            });
        }
    },

    taxRatePage: {
        init: function() {
            this.hasTax();
        },

        hasTax: function() {
            $("#has_tax").change(function(){
                if ($(this).val() == 0) {
                    $("#has-tax-form").hide();
                } else {
                    $("#has-tax-form").show();
                }
            });

            $("#has_tax").change();
        }
    },

    offsetRatePage: {
        init: function() {
            this.addBaseLevel();
            this.removeBaseLevel();
        },

        removeBaseLevel: function(){
            var self = this;

            $("body").on("click","#remove_base_level",function(e){
                e.preventDefault();
                if ($('#base_levels .item-level').length > 1) {
                    $(this).closest('.item-level').remove();
                    self._resetBaseLevelIndex();
                }
            });
        },

        _resetBaseLevelIndex: function(){
            var index = 0;
            $("#base_levels").find('.item-level').each(function(){
                var new_levelFrom = "offset_rate_base_levels["+index+"][level_from]";
                var new_levelTo = "offset_rate_base_levels["+index+"][level_to]";
                var new_rate = "offset_rate_base_levels["+index+"][offset_rate]";

                // Empty Content and rename email
                $(this).find('input[name$="[level_from]"]').attr('name',new_levelFrom);
                $(this).find('input[name$="[level_to]"]').attr('name',new_levelTo);
                $(this).find('input[name$="[offset_rate]"]').attr('name',new_rate);

                index++;
            });
        },

        addBaseLevel: function() {
            var self = this;
            $("#add_base_level").on('click',function(e){
                e.preventDefault();

                var $itemGroup = $("#base_levels");
                var $itemLevel = $itemGroup.find('.item-level:first');
                var $cloned = $itemLevel.clone();
                $cloned.appendTo($itemGroup);

                // Rest index name
                self._resetBaseLevelIndex();

                $cloned.find('input,select,radio,checkbox').val("");
            });
        }
    },

    usersPage: {
        init: function() {
            var _self = this;

            _self.$form = $("#user_tblist_form");

            _self.buckActions();
            _self.deleteSearchUser();
        },

        deleteSearchUser: function() {
            var _self = this;

            globalJs.searchUser("",$(".selectpicker_search_user"),false,function(){},function(){
                var userIds = [];

                $('input[name^=user_id]').each(function(){
                    userIds.push( $(this).val() );
                });

                return {
                    not_in_user_id: userIds
                };
            });
        },

        buckActions: function() {
            var _self = this;

            gyAdmin.buckActions.init(_self.$form,function(data){
                var url = "";

                if (data.action == "delete") {
                    var url = CONST.BASEURL + "/admin/users/delete";
                } else if (data.action == "active") {
                    var url = CONST.BASEURL + "/admin/users/active";
                } else if (data.action == "inactive") {
                    var url = CONST.BASEURL + "/admin/users/inactive";
                }

                if (data.total >= 1) {
                    window.location = url + data.param;
                } else {
                    // Alert or no action
                }
            });
        }

    },

    groupsPage: {
        init: function() {
            var _self = this;

            _self.$form = $("#group_tblist_form");

            _self.buckActions();
        },

        buckActions: function() {
            var _self = this;
            gyAdmin.buckActions.init(_self.$form,function(data){
                var url = "";
                if (data.action == "delete") {
                    var url = CONST.BASEURL + "/admin/groups/delete";
                }

                if (data.total >= 1) {
                    window.location = url + data.param;
                } else {
                    // Alert or no action
                }
            });
        }

    },

    capabilityPage: {
        init: function() {
            var _self = this;

            _self.$form = $("#capability_tblist_form");

            _self.buckActions();
        },

        buckActions: function() {
            var _self = this;
            gyAdmin.buckActions.init(_self.$form,function(data){
                var url = "";
                if (data.action == "delete") {
                    var url = CONST.BASEURL + "/admin/capabilities/delete";
                }

                if (data.total >= 1) {
                    window.location = url + data.param;
                } else {
                    // Alert or no action
                }
            });
        }

    },

    taxFormPage: {
        init: function() {
            var _self = this;

            _self.$form = $("#tax_form_form");

            _self.buckActions();
        },

        buckActions: function() {
            var _self = this;

            gyAdmin.buckActions.init(_self.$form,function(data){
                var url;
                if (data.action_input_name == "action") {

                    if (data.action == "delete") {
                        url = CONST.BASEURL + "/admin/tax-form/delete?_token=" + CONST.TOKEN;
                    }

                    if (data.total >= 1) {
                        window.location = url + data.param;
                    } else {
                        // Alert or no action
                    }

                } else if (data.action_input_name == "action2") {
                    url = CONST.BASEURL + "/admin/tax-form/update-status";

                    if (data.total >= 1) {
                        window.location = url + data.param + "status_to=" + encodeURI(data.action) + "&_token=" + CONST.TOKEN;
                    } else {
                        // No action
                    }

                }
            });
        }

    }

}
