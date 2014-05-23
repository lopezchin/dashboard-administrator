
/***
 * A jquery Validator plugin for laravel validation Script
 *
 * This plugin is intended for the development of GYTBO.COM.AU
 *
 * @author: Stephen Cantila
 * @docs: /wiki/jquery-laravel-validator
 * @fixed: button that is disabled, does not included in serialized.
 */


(function($) {

    var processMessage  = 'Processing ...';
    var originalMessage;

    jQuery.fn.jValidator = function (option_param){
        /** @var default var parameter */
        var default_options = {
            onStart: function(){
                return false;
            },
            onSuccess: function () {
                return false;
            },
            errorClassList: 'form-control-feedback-msg',
            errorClass: 'has-error',

            messageContainer: '.validator-message',

            alertClassAppendTo: '.js-validator',

            messageTo: $("#validator_message")
        };

        var options = jQuery.extend({}, default_options, option_param);

        var $form = this;
        var $submitBtn;
        var $formTabs;
        var $isFirstTabFound = false;
        var xhr = false;

        // Set the click button as the submitted button
        $form.find('button[type=submit],input[type=submit]').click(function(){
            $submitBtn = $(this);
        });

        $form.submit(function(e){
            e.preventDefault();
            $form = $(this);
            // Abort if existing ajax is defined
            if(xhr) xhr.abort();

            // Define method and action
            var method 	= $form.attr('method');
            var action 	= $form.attr('action');
            var data = $form.serialize();

            xhr = jQuery.ajax({
                type : method,
                url: action,
                data: data,
                dataType: 'json',
                beforeSend: function() {
                    onRequestStart();
                },
                success: function(data){
                    // Clean previous validation results
                    $form.find( ".validator-message").html("");
                    $form.find('.'+options.errorClass)
                        .removeClass(options.errorClass);

                    processRedirect(data);

                    if (typeof data.successMsg != 'undefined')
                        alertSuccess(data.successMsg);

                    if (typeof data.errorMsg != 'undefined')
                        alertError(data.errorMsg);

                    // Check if successMessage is not defined
                    if(data.status == "error"){

                        for ( var x in data.errorData ){

                            var input = $form.find('.form-group [name="' + $.jValidator.laravel2Input(x) + '"] ');

                            tabErrorIndication(input);

                            // Insert Error
                            input.closest(options.alertClassAppendTo).addClass(options.errorClass);

                            var valMsgLists = data.errorData[x];
                            var valMsg;

                            if ( valMsgLists instanceof Array  ){
                                valMsg = valMsgLists[0];
                            }else {
                                valMsg = valMsgLists;
                            }

                            input.closest(options.alertClassAppendTo).find(options.messageContainer)
                                .html( errorMessage( valMsg ) );

                        }

                        // Do Focus
                        $form.find('.'+options.errorClass).find('input,textarea').first().focus();

                        //console.log(oData.errorData);

                        return ;
                    }

                    // Run plugin on success parameter
                    options.onSuccess(data,$form);
                    onSuccess();
                }
            }).complete(function(){
                xhr = false;

                $.jValidator.btnProcess($submitBtn,false);
                // Clean Submitted Button
                $submitBtn = false;

                onRequestDone();
            });

            return false;
        });

        function onSuccess() {
            /*
             *  Make Are-You-Sure "silent" by disabling the warning message
             *  (tracking/monitoring only mode). This option is useful when you wish to
             *  use the dirty/save events and/or use the dirtyness tracking in your own
             *  beforeunload handler.
             */
            $form.areYouSure( {'silent':true} );
        }

        function processRedirect(data) {
            if ( typeof data.redirect != 'undefined') {

                // Prevent areYouSure Popup when system is
                // redirecting the form
                $form.areYouSure( {'silent':true} );

                if (data.redirect == window.location.href) {
                    return window.location.reload();
                }

                if ($.jValidator.helper.strpos(data.redirect ,'#')) {
                    window.location.href = data.redirect;
                    return window.location.reload();
                }

                return window.location = data.redirect;
            }
        }

        function errorMessage(msg){
            return ' <i class="fa fa-exclamation-triangle form-control-feedback"></i> <span class="' + options.errorClassList + '">'  + msg + '</span>';
        }

        function onRequestDone(){
            toTop();
        }

        function onRequestStart() {

            options.onStart($(this));

            // Check Which Button is clicked
            if (!$submitBtn) {
                $submitBtn = $form.find('button[type=submit],input[type=submit]').first();
            }
            $.jValidator.btnProcess($submitBtn,true);

            // Reset Tab Button
            $isFirstTabFound = false;

            options.messageTo.html("");

            // Tab Initiate
            tabErrorInit();
        }

        function alertError(errorMsg) {
            options.messageTo.html(createMessage(errorMsg,'alert alert-omega alert-small alert-danger fade in'));
        }

        function alertSuccess(errorMsg) {
            options.messageTo.html(createMessage(errorMsg,'alert alert-omega alert-small alert-success fade in'));
        }

        function createMessage(message,classLists) {
            return '<div class="'+classLists+'"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>' +
                '<i class="fa fa-info-circle"></i>'+message+'</div>';
        }

        function toTop(){

            var toTop = 0;

            if( $form.find( "." + options.errorClass ).length > 0 ){
                toTop = $form.find( "." + options.errorClass ).first().offset().top;
            } else if ($form.find( options.messageTo ).length > 0 && $form.find( options.messageTo).html() != "" ){
                toTop = $form.find( options.messageTo ).first().offset().top;
            } else {
                toTop = $form.offset().top;
            }

            $("html, body").animate({ scrollTop: toTop  - ($(window).height() * .36) }, 300);

        }


        function tabErrorInit() {
            $formTabs = $form.find('a[data-toggle="tab"].tab');
            $formTabs.find('.validator_tab_error').remove();
        }

        function tabErrorIndication($input){
            if ($formTabs.length) {

                // Check if a parent has tab_pane
                // This means that the container of the input we want to focus is a tab.
                // The container might be hidden
                var $tabPane = $input.closest('.tab-pane');

                if ($tabPane.length) {

                    var $targetTabToggler = $("a[href=#"+$tabPane.attr('id')+"]");

                    // Check error indicator has already been displayed
                    // Now we want to trigger the tab-toggle via a[href=#{the_tab_id}]
                    if ( $targetTabToggler.length && !$targetTabToggler.find('.validator_tab_error').length ){
                        $('<i class="fa fa-exclamation-triangle validator_tab_error"></i>').appendTo($targetTabToggler)
                    }

                    if (!$isFirstTabFound) {
                        $targetTabToggler.trigger('click');

                        $isFirstTabFound = true;
                    }
                }

            }
        }
    }

    $.jValidator = {};

    $.jValidator.btnProcess = function($btn,proccessing){

        if (typeof proccessing === 'undefined') {
            proccessing = false;
        }

        if (typeof $btn == 'object') {
            if (proccessing) {
                $btn.addClass('disabled');
                $btn.addClass('is-process');
            } else {
                $btn.removeClass('is-process');
                $btn.removeClass('disabled');
            }
        }
    }

    /**
     * This is intended for array input
     * (e.g tax_salary.0.sample will change to tax_salary[0][sample]
     *
     * @param input_name
     */
    $.jValidator.laravel2Input = function(input_name) {
        if ($.jValidator.helper.strpos(input_name,'.')) {
            var exploded,
                index = 0,
                finalName,
                x,
                segment;

            exploded = input_name.split('.');

            finalName = exploded[0];
            for(x in exploded){
                if (index != 0) {
                    segment = exploded[x];
                    finalName += '[' + segment + ']';
                }

                index++;
            }

            return finalName;

        } else {
            return input_name;
        }
    }



    $.jValidator.helper = {
        strpos: function(haystack, needle, offset) {
            //  discuss at: http://phpjs.org/functions/strpos/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Onno Marsman
            // improved by: Brett Zamir (http://brett-zamir.me)
            // bugfixed by: Daniel Esteban
            //   example 1: strpos('Kevin van Zonneveld', 'e', 5);
            //   returns 1: 14

            var i = (haystack + '')
                .indexOf(needle, (offset || 0));
            return i === -1 ? false : i;
        }
    }


})(jQuery);


/** // the backend code

 // check for laravel validator
 $input = Input::all();
 $rules = array(
 'email'	=> 'required|email|max:255|confirmed',//|unique:users,email',
 'email_confirmation' =>	'required|email|max:255|min:5',
 'first_name' =>	'required|max:100',
 'last_name' =>	'required|max:100',
 'password' =>	'required|max:255|confirmed|min:6',
 'password_confirmation' =>	'required',
 );
 $validator = Validator::make($input,$rules);

 // return json's error
 if($validator->fails()){
        $messages = $validator->messages();
        $response =  array(
            'status'=>  'error',
            'errorData'=> $validator->getMessageBag()->toArray(),
            'errorMsg' => 'Successfully deleted account',

            or

            'successMsg' => 'Successfully updated acount'
        );
        return Response::json( $response );
    }
 // your special codes here
 */

