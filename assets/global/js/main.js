var globalJs = {
	Global:{
		init: function()
		{
			//API: https://github.com/eternicode/bootstrap-datepicker
			this.dateTimePicker();

			this.addAttachments();
           // this.logoutInactive();
            this.popupLogin();
            this.priceFormat();

            this.ajaxComplete();
            this.closeLoginPopupModalClose();

            this.pluginNormalization();

            this.triggerer();

            this.resetFormControlFeedback();
		},
        pluginNormalization: function() {
            // Fixed plugins bugs
            $( document ).on(
                'DOMMouseScroll mousewheel scroll',
                '.modal,body',
                function(){
                    if (typeof ___t != "undefined"){
                        window.clearTimeout( ___t );
                    }
                    ___t = window.setTimeout( function(){
                        $( ".datetimepicker,.datepicker-dob" ).datepicker({
                          changeMonth: true,
                          changeYear: true,
                        });
                    }, 600 );
                }
            );
        },

        maskInput: function() {
            // Nothing is defined yet.
            $("input[name$=\"[landline]\"]").mask("99 - 9?999999999999",{placeholder:" "});
//            $("input[name$=\"[tax_file_number]\"]").mask("?999 999 999",{placeholder:"_"});
//            $("input[name$=\"[payers_abn]\"]").mask("?99 999 999 999",{placeholder:"_"});
        },

        alertBox: function( title, body, footer){
            var modalBOx,markUp;
            if (!$("#defaultModal").length) {
                markUp = '<div class="modal fade" id="defaultModal"  tabindex="-1" role="dialog" aria-labelledby="media" aria-hidden="true">' +
                    '<div class="modal-dialog">' +
                    '<div class="modal-content">  ' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                    '<h4 class="modal-title"></h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '</div>' +
                    '<div class="modal-footer">' +
                    '</div>' +
                    '</div><!-- /.modal-content -->' +
                    '</div><!-- /.modal-dialog -->' +
                    '</div><!-- /.modal -->';
                modalBOx = $(markUp).appendTo($("body"));
            } else {
                modalBOx = $("#defaultModal");
            }

            if (typeof footer != 'undefined' && footer != "" ) {
                modalBOx.find('.modal-footer').html(footer);
            } else {
                modalBOx.find('.modal-footer').remove();
            }

            if (typeof body != 'undefined' && body != "" ) {
                modalBOx.find('.modal-body').html(body);
            } else {
                modalBOx.find('.modal-body').remove();
            }

            if (typeof title != 'undefined' && title != "" ) {
                modalBOx.find('.modal-title').html(title);
            } else {
                modalBOx.find('.modal-title').closest('modal-header').remove();
            }

            modalBOx.modal();
        },

        ajaxComplete: function() {
            var _self = this;

            $( document ).ajaxComplete(function( event, request, settings ) {
                if (request.status == 200) {
                    if (typeof request.responseJSON != "undefined"){
                        var response = request.responseJSON;

                        if (typeof response.status != 'undefined') {

                            // Handle Not Logged in ajax.
                            if (response.status == 'not_logged_in') {

                                _self._showLoginDialog();
                            }
                        }
                    }
                } else if (request.status == 500) {
                    var title = "Something is not quite right.";
                    var body =  "<p>We hope to solve it shortly.</p>";
                    var footer = "<a class=\"btn btn-default pull-left\" href=\"/\">Return to homepage.</a>";
                    util.alertBox(title,body,footer);
                }
            });
        },

        _showLoginDialog: function(){
            var _self = this,
                $quickLoginModal = $("#login_popup_modal");


            $quickLoginModal.modal('show');
        },
        closeLoginPopupModalClose: function(){
            $('#login_popup_modal_close').bind('click',function(){
                $("#login_popup_modal").modal('hide');
            });
        },

        priceFormat: function($parent) {
            if (typeof $parent == 'undefined') {
                $parent = "";
            }

            var $the_target;
            if (typeof $parent == "object") {
                $the_target = $parent.find('.form-group-currency input');
            } else {
                $the_target = $($parent + ' .form-group-currency input');
            }

            $the_target.autoNumeric('init',{aSign: '$ ',mDec: 0,vMax: 99999999});
        },
        datePicker: function() {
        },
		dateTimePicker: function() {

            $( ".datepicker-dob" ).datepicker({
              changeMonth: true,
              changeYear: true,
            });
            
            // $('.datetimepicker').datetimepicker({
            //     icons: {
            //         time: "fa fa-clock-o",
            //         date: "fa fa-calendar",
            //         up: "fa fa-arrow-up",
            //         down: "fa fa-arrow-down"
            //     },
            //     language:'au',
            //     showToday: true,
            //     pickTime: false
            // });

            // $('.datetimepicker').on('dp.change',function(e){
            //     $(this).blur();
            // });

            // $(".datetimepicker-from").on("dp.change",function (e) {
            //    $('.datetimepicker-to').data("DateTimePicker").setMinDate(e.date);
            // });

            // $(".datetimepicker-to").on("dp.change",function (e) {
            //    $('.datetimepicker-from').data("DateTimePicker").setMaxDate(e.date);
            // });
		},

		addAttachments: function() {
			$('body').on('click', '.add-more-attachment', function(){
		      var ln = $('input.attachment').length - 1;

		      $('input.attachment:eq(0)').clone().insertAfter('input.attachment:eq('+ln+')');

		    });
		},

        logoutInactive: function() {
            // Add the following into your HEAD section
            // timeout()
                var idle=0,
                sessionTimeout,
                inActivity = (20 * 60000) ;// 20 minutes
                ;

            function keepAlive() {
                if (idle < (inActivity - (10 *60000))) {
                    // Request keep alive.
                    // keep alive may return success or error.
                    // error means user are already been logout or minutes of keeping alive is due.
                    $.get(CONST.BASEURL + "/session/keep-alive",{},function(data){
                        if (typeof data.status != 'undefined'
                            && data.status == "success") {
                            // No action
                        } else {
                            login();
                        }
                    });
                }
            }

            var login = function() {
                $("#inactivity_login_popup").modal('show');
            }

            function startLiveTimeout() {
                // clear live timeout var
                // set new live timeout
                clearTimeout(sessionTimeout);
                idle = 0;
                sessionTimeout = setTimeout(request_logout, inActivity);
            }

            var request_logout = function(el) {
                // Request keep alive.
                // keep alive may return success or error.
                // error means user are already been logout or minutes of keeping alive is due.
                $.get(CONST.BASEURL + '/session/destroy',{
                    _token: CONST.TOKEN
                },function(data){
                    if (typeof data.status != 'undefined'
                        && data.status == "success") {

                        login();
                    }
                });
            }

            startLiveTimeout();

            setInterval(function(){
                keepAlive();
            },10000);

            setInterval(function() {
                idle+=1000;

            },1000);

            $(document).bind('click mousemove', startLiveTimeout);
        },

        popupLogin: function() {
            var $theModal = $("#inactivity_login_popup");
            $theModal.find("form").jValidator({
                messageTo: $("#inactivity_form_message"),
                onSuccess: function(data,$obj){
                    if (data.status == "success") {
                        $theModal.modal('hide');
                    }
                }
            });
        },

        triggerer: function() {
            $('body').on('click','[data-toggle=trigerrer]', function (e) {
                var $theTab = $(this);
                var $target = $($(this).attr('href'));

                $target.trigger('click');

                e.preventDefault();
            });
        },

        resetFormControlFeedback: function() {

            // jValidator Helpers And Additional Functions

            // form group error message
            var formMsg = $('.form-control-feedback-msg');
            var formMsgLeft = $('.form-group-left .form-control-feedback-msg');

            $("body").delegate('input,select,textarea','focus',function(){

                $formGroup = $(this).closest('.form-group');
                $feedbackMsg = $formGroup.find('.form-control-feedback-msg');


                $('.form-control-feedback-msg').hide('fast');

                if ($formGroup.hasClass('form-group-left')) {
                    $feedbackMsg
                        // Fix Bug on hidden by adding left
                        .css('left', - 335)
                        .css('left', - ($feedbackMsg.width() + 35) )
                        .fadeIn('fast');
                } else {
                    $feedbackMsg
                        // Fix Bug on hidden by adding right
                        .css('right', - 335)
                        .css('right', - ($feedbackMsg.width() + 35) )
                        .fadeIn('fast');
                }

            });

            $("body").delegate('input[type=text],select,textarea,checkbox,radio','blur',function(){
                $('.form-control-feedback-msg').fadeOut('fast');
            });

            $("body").delegate('.form-control-feedback-msg','click',function() {
                $(this).hide();
            });


            // autofocus attribute.
            // we need to check the input that is focused by html 5 attribute
            // thus, we need to re focus through javascript to trigger the event.
            // Since javascript is not yet loaded when html 5 focus on the field.
            $theInputFocused = $("input[type=text],textarea,select,checkbox").filter(':focus');
            $theInputFocusedFeedbackMsg = $theInputFocused.closest('.form-group').find('.form-control-feedback-msg');
            if ($theInputFocusedFeedbackMsg.length && !$theInputFocusedFeedbackMsg.is(':visible')) {
                $theInputFocused.focus();
            }
        }

    },


    Overlay: {

        layOpen: function( el ){
            var table = $( el );
            var position = table.position();

            var top = position.top;
            var left = position.left;
            var height = table.height();
            var width = table.width();

            var Overlay = $('<div class="table-overlay"><span class="table-loader"></span></div>');

            table.css({'position':'relative'});

            table.append(Overlay);

            Overlay.css({
                'position':'absolute',
                'background':'rgba(255, 255, 255, 0.74)',
                'top':'0',
                'right':'0',
                'width': width+'px',
                'height': height+'px',
                'z-index': '999'
            });


            $('.table-loader').css({
                'margin-top':(height/3)+'px',
                'margin-left' : 'auto',
                'margin-right': 'auto'
            });
        },
        layClose: function()
        {
            $('.table-overlay').remove();
        }
    },

    Comment: {
        init:function(){
            var _post_id = $('#post_id');
            this.comment();
            this.getPostComment(_post_id.val());
        },
        getPostComment: function( post_id ){
            globalJs.Overlay.layOpen('.timeline-messages-listing');

            $.get(baseURL+'post/comment/'+post_id).done(function( data ){
                $('.timeline-messages').html(data);
                globalJs.Overlay.layClose();
            });
        },
        comment: function(){
            $('body').on('click', '#send-comment', function(){

                var _comment = $('#comment');
                var _post_id = $('#post_id');

                if(_comment.val() == '' )
                    return;

                $.post(baseURL+'post/comment', {
                    comment:_comment.val(),
                    post_id:_post_id.val()
                }, function(data){

                    globalJs.Comment.getPostComment(_post_id.val());
                    _comment.val('');

                });

            });

        }
    },


    /**
     * this will allow user to search a users from GY
     *
     * @param userGroup - leave empty if all user
     * @param select2Element -
     */

    /**
     * Search a user
     *
     * @param userGroup - the group id
     * @param select2Element - the element object (input,select ..
     * @param isMultiple - Multiple or single : default is false
     * @param selectionCallBack - you can make a callback through passing a method
     * @param customParameter - A json of custom parameter
     */
    searchUser: function(userGroup,select2Element,isMultiple,customParameterselectionCallBack,customParameter){
        if (typeof userGroup == 'undefined'){
            userGroup = "";
        }
        if (typeof isMultiple == 'undefined'){
            isMultiple = false;
        }
        if (typeof selectionCallBack == 'undefined'){
            selectionCallBack = function(data){ return false; };
        }
        if (typeof customParameter == 'undefined'){
            customParameter = [];
        }
        if (typeof customParameter == 'function') {
            customParameter = customParameter();
        }

        /**
         * This would return an html for the select2 content
         *
         * @param user
         * @returns {string}
         */
        function userFormatResult(user){
            var markup = "<table class='user'><tr>";
            markup += "<td class='user-info'><div class='user-title'>" + user.firstname + " " + user.lastname + "</div>";
            markup += "</td></tr></table>";
            return markup;
        }

        /**
         * When selected one of the result, we will generate the id and name of the user to be display
         * and put to hidden input box as the user for this discount
         *
         * @param user
         * @returns {string}
         */
        function userFormatSelection(user) {
            selectionCallBack(user);
            return user.firstname + " " + user.lastname;
        }

        /**
         * This will search an user from the backend + user (PAP)
         *
         * @return null
         */
        $(select2Element).select2({
            placeholder: "Search for an user ..",
            multiple: isMultiple,
            minimumInputLength: 0,
            allowClear: true,
            ajax: { // instead of writing the function to execute the request we use Select2's convenient helper
                url: CONST.URL + "/g/search-user",
                dataType: 'json',
                data: function (term, page) {
                    var param = {
                        q: term, // search term
                        per_page: 15,
                        page: page,
                        group_id: userGroup
                    };

                    for(x in customParameter) {
                        param[x] = customParameter[x];;
                    }

                    return param;
                    // @note return format must be an json with a {total:20}{items:items_array
                },

                results: function (data, page) { // parse the results into the format expected by Select2.
                    // since we are using custom formatting functions we do not need to alter remote JSON data
                    var more = (page * 15) < data.total;
                    return {results: data.users, more: more};
                }
            },
            initSelection: function(element, callback) {
                // the input tag has a value attribute preloaded that points to a preselected movie's id
                // this function resolves that id attribute to an object that select2 can render
                // using its formatResult renderer - that way the movie name is shown preselected
                var id=$(element).val();
                if (id!=="") {
                    $.ajax(CONST.URL + "/g/search-user", {
                        data: {
                            id: id,
                            method: "init-selection"
                        },
                        dataType: "json"
                    }).done(function(data) { callback(data); });
                }
            },
            formatResult: userFormatResult, // omitted for brevity, see the source of this page
            formatSelection: userFormatSelection,  // omitted for brevity, see the source of this page
            //dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
            escapeMarkup: function (m) { return m; } // we do not want to escape markup since we are displaying html in results
        });
    }


}

