// Global Variables and Function that doesnt need to be instanciated manually
var $body = $("body");
// This will fix the bug on .serialize(). form submitted or clicked button
// that has a name and value on it through ajax
// is not included in the POST or GET data. So we need to manually append the
// input as hidden in the form with the value of the name and value.
$body.delegate('button[type=submit].btn_action','click',function(e){
    var $btn = $(this);
    var $form = $btn.closest('form');

    var name = $btn.attr('name');
    var value = $btn.attr('value');

    if (typeof name != 'undefined') {
        $form.find('.temp_input').remove();

        if (!$form.find('input[name='+name+']').length) {
            $form.prepend('<input class="temp_input" type="hidden" name="'+name+'" value="'+value+'">');
        }
    }
});

// This will send a quick validation link through ajax
// with a loading effect and return a result quickly.
// input.quick-validate
// .js-validator
// .validator-message
// data-targeturl="{url_here}"
var qvXhr;
$body.delegate('input.quick-validate','keyup',function(e){
    var $input = $(this),
        $form = $input.closest('form'),
        $jsValidator = $input.closest('.js-validator'),
        $valMessage = $jsValidator.find('.validator-message'),
        targetUrl = $input.data('targeturl'),
        $spinner;

    if (qvXhr) {
        qvXhr.abort();
    }


    qvXhr = jQuery.ajax({
        type : 'GET',
        url: targetUrl,
        data: {input_value: $(this).val() },
        dataType: 'json',
        beforeSend: function() {
            $jsValidator.removeClass('has-error');
            $valMessage.html('');
            $spinner = $('<i class="fa fa-spinner fa-spin" style="display: block;"></i>').appendTo($valMessage);
        },
        success: function(data){
            if (data.status == 'success') {
                $('<i class="fa fa-check" style="display: block;"></i>').appendTo($valMessage);
            } else {
                $jsValidator.addClass('has-error');
                var markup = '<i class="fa fa-exclamation-triangle form-control-feedback"></i>  <span class="form-control-feedback-msg">'+data.messageError+'</span>';

                $(markup).appendTo($valMessage.html(''));
            }

            // Do Call Focus for this input
            // so .form-control-feedback-msg will be displayed again
            // $input.focus();
            $formGroup = $input.closest('.form-group');
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

        },
        complete: function() {
            $spinner.remove();
        }
    });
});


// Tabs Fixes
// Javascript to enable link to tab
var url = document.location.toString();
if (url.match('#')) {
    $('.nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
}

// Change hash for page-reload
$('.nav-tabs a').on('click', function (e) {
    window.location.hash = e.target.hash;
});



// Loader and effects
$.loadTab = {
    start: function($which_tab) {
        var $target = $($(this).attr('href'));

        $which_tab.addClass('loading');
        $target.addClass('loading');
    },

    stop: function($which_tab) {
        var $target = $($(this).attr('href'));

        $which_tab.removeClass('loading');
        $target.removeClass('loading');
    }
}


$.taxform = {
    init: function() {
        var _self = this;

        _self.formItem.init();
        _self.scrollRoll();
        _self.disableInProgressFields();
    },

    scrollRoll: function() {
        var $section16 = $('.section-l6');
        if ($section16.length) {
            $('.t-sidebar-inner').scrollToFixed({
                marginTop: $('.banner').outerHeight() - 380,
                limit: $section16.offset().top - $('.t-sidebar-inner').outerHeight(),
                zIndex: 1
            });
        }
    },

    triggerQuickAction: function($target) {

        if ($target) {
            // Remove
            $target.trigger('click');
        }
    },


    disableInProgressFields: function() {
        var _self = this,
            $statusWrapper = $(".body-tax-not-in-progress").find('.tax-return-form');

        if ($statusWrapper.length) {
            $statusWrapper.find('input[type=text],textarea,select,input[type=radio],input[type=checkbox]').prop('disabled','disabled');
        }
    }



}

// Taxform Helpers

$.taxform.h = {

    // Let when focus on a field.
    windowFocus: function($obj) {
        if (typeof $obj != 'undefined') {
            var offset = $obj.offset();

            var newOffset = offset.top - ($(window).height() * .16);
            $("html").scrollTop(newOffset  - 150);
        }

    }
};




// Add Item to the form Field

$.taxform.formItem = {
    init: function(){
        var _self = this;

        // Will be defined dynamically later
        _self.$section = "";

        _self.onLoad();
        _self.addFieldItem();
        _self.removeFieldItem();
        _self._resetRemove();
        _self.removeButton();

        _self.editQuickAction();
        _self.deleteQuickAction();
    },

    onLoad: function() {
        // Disable and do not display form-2cloned input,checkboxes,radios and textarea
        $('.form-2cloned')
            .css('display','none')
            .find('input,checkbox,textarea,select')
            .filter(':not(:disabled)')
            .addClass('temporary-disabled')
            .prop('disabled', true);

    },

    removeFieldItem: function(){
        var _self = this;

        $body.delegate("click","#remove_base_level",function(e){
            e.preventDefault();

            if ($('#base_levels .item-level').length > 1) {
                $(this).closest('.item-level').remove();
                _self._resetIndex();
            }
        });
    },

    /**
     * This will reset the remove_link foreach .form-fieldset
     *
     * @private
     * @return {Void}
     */
    _resetRemove: function() {
        $('.remove_form_item').remove();

        $('.form-fieldset').each(function(){
            $('<a href="#" class="remove_form_item" class="btn btn-warning">' +
                '<i class="fa fa-times"></i>Remove</a>')
                .appendTo($(this).find(".form-item"));

            // .fieldset-exclude-first - is intended to used when you
            // want to forced the user to at least 1 group of form-item.
            // If has class ".fieldset-exclude-first" then remove the
            // remove_form_item element in that form-item
            if ($(this).find('.form-item').length <= 1) {
                if ($(this).hasClass('fieldset-exclude-first')) {
                    $(this).find(".form-item").first().find('.remove_form_item').remove();
                }
            }

        });
    },

    /**
     * This will bind the click event of a specific remove button
     *
     * @return Void
     */
    removeButton: function() {
        var _self = this;

        $body.delegate(".remove_form_item",'click',function(e) {
            var $formItem = $(this).closest(".form-item");

            _self.$section = $(this).closest('.section');

            // Remove the closest form item
            $formItem.remove();

            // Remove the quick edit in side bar also
            $('[data-targetitem="#'+$formItem.attr('id')+'"]').closest('tr').remove();

            // reset form field index and reset remove link
            _self._resetIndex();
            _self._resetRemove();

            e.preventDefault();
        });
    },

    /**
     * Add .form-item .form-fieldset in the closest from .add_field_item on
     * clicked event.
     */
    addFieldItem: function() {
        var _self = this;

        $body.delegate('.add_field_item','click',function(e){
            e.preventDefault();

            _self.$section = $(this).closest('.section');

            var $formFieldSet   = _self.$section.find('.form-fieldset');
            var $formItem       = _self.$section.find('.form-2cloned .form-item:first');
            var $cloned         = $formItem.clone();

            $cloned.appendTo($formFieldSet);
            // Enable Disabled input
            $cloned.find('.temporary-disabled').prop('disabled',false).removeAttr('disabled');

            $cloned.find('input,select,textearea').first().focus();

            // Reset Remove BUttons
            _self._resetRemove();

            // Rest index name
            _self._resetIndex();

            // Reset Plugin
            globalJs.Global.priceFormat($cloned);

            $cloned.find('input[type=text],textarea').val("");
        });
    },

    _resetIndex: function(){
        var _self = this,
            index = 0;

        // Get all input name in the first index of .form-2cloned.
        // Which is by default has [0]
        var $formItem           = _self.$section.find('.form-fieldset .form-item'),
            $2ClonedFormItem    = _self.$section.find('.form-2cloned .form-item'),
            inputNames          = [];

        $2ClonedFormItem.first().find('input,select,checkbox,radio,textarea').each(function(){
            var name = $(this).attr('name');

            if (typeof name != 'undefined' && $.trim(name) != "") {
                inputNames.push(name);
            }
        });

        // Reset Index
        $formItem.each(function(){
            var x;

            // Find each name
            for(x in inputNames) {
                var extracted       = inputNames[x].split('[0]');

                var group           = extracted[0];           // dividend
                var itemIndex       = '[' + index + ']';  // [0] | [1] | [2]
                var realFieldName   = extracted[1];   // [company]

                var indexFullName   = group + itemIndex + realFieldName;

                // Empty content and rename email
                $(this).find('[name$="'+realFieldName+'"]').attr('name',indexFullName);
            }

            index++;

            // var new_levelFrom = "offset_rate_base_levels["+index+"][level_from]";
            // // Empty Content and rename email
            // $(this).find('input[name$="[level_from]"]').attr('name',new_levelFrom);

        });
    },

    editQuickAction: function() {
        var _self = this;

        $body.delegate('.edit_quick_action','click',function(e) {
            var $targetItem = $( $(this).data('targetitem') );
            if ($targetItem.length) {

                // Check if a parent has tab_pane
                // This means that the container of the input we want to focus is a tab.
                // The container might be hidden
                var $tabPane = $targetItem.closest('.tab-pane');

                if ($tabPane.length) {
                    // Now we want to trigger the tab-toggle via a[href=#{the_tab_id}]
                    $("a[href=#"+$tabPane.attr('id')+"]").trigger('click');
                }

                var $firstField = $targetItem.find('input,select,textarea,checkbox,radio').first();
                $firstField.focus();
                $.taxform.h.windowFocus($firstField);
            }

            e.preventDefault();
        });
    },


    deleteQuickAction: function() {

        $body.delegate('.delete_quick_action','click',function(e) {
            e.preventDefault();

            var $targetItem = $( $(this).data('targetitem')),
                $formItem = $targetItem.closest('.form-item'),
                $formItems = $targetItem.closest('.form-fieldset').find('.form-item');

            // Check if a parent has tab_pane
            // This means that the container of the input we want to focus is a tab.
            // The container/wrapper might be hidden/not currently active
            var $tabPane = $targetItem.closest('.tab-pane');
            if ($tabPane.length) {
                // Now we want to trigger the tab-toggle via a[href=#{the_tab_id}]
                $("a[href=#"+$tabPane.attr('id')+"]").trigger('click');
            }

            var $firstField = $targetItem.find('input:not([type=hidden]),select,textarea').first()

            // Focused the screen with the found field
            $.taxform.h.windowFocus($firstField);

            // Remove its closest row
            $(this).closest('tr').remove();

            // The form field is an array if formItem group is found
            if ($formItem.length) {

                if ( $formItem.closest('.fieldset-exclude-first').length && $formItems.length > 1
                    || !$formItem.closest('.fieldset-exclude-first').length
                    ) {

                    // Check if has
                    // We need to recheck the input be for
                    // delete it, so are_you_sure plugin detect any changes.
                    util.areYouSure.recheck();

                    // Remove the form item via triggering .remove_form_item
                    // So hooks event will work (e.g re index the field)
                    $formItem.find('.remove_form_item').trigger('click');

                    return "";
                }
            }

            // Else means it is just a simple form
            $targetItem.find("input:not([type=hidden]),select,textarea")
                .filter(':not(:disabled)')
                .val("")
                .keyup()
                .first()
                .focus();


        });

    }

}



$.taxform.details = {
    init: function() {
        var _self = this;

        _self.$form = $("#details_form");

        // Jvalidator
        _self.formValidator();

        // Initiate Helper
        _self.ifHasSpouse();
        _self.copyPostal2Home();
    },

    copyPostal2Home: function() {
        var _self = this,
            $checkbox = _self.$form.find('#input_home_is_postal'),
            $homeAddress = _self.$form.find('#home_address'),
            $postalAddress = _self.$form.find('#postal_address');

        $postalAddress.find('input,select').bind("change keyup",function() {
            if ($checkbox.is(':checked')) {
                copyContent();
            }
        });

        $checkbox.change(function(){
            if ($(this).is(':checked')) {
                copyContent();
            }
        });



        function copyContent() {
            // A json of un prefixed name of input
            var inputs = [
                'address_1',
                'address_2',
                'post_code',
                'suburb',
                'state'
            ];

            for (var i in inputs) {
                var input_name = inputs[i];

                var toCopy = $postalAddress.find('#input_postal_'+input_name).val();

                $homeAddress.find('#input_home_'+input_name).val(toCopy);
            }
        }

        function resetContent() {
            $homeAddress.get(0).reset;
        }
    },

    ifHasSpouse: function() {
        var _self = this;

        var $hasSpouseWrapper  = _self.$form.find('#has_spouse_wrapper');
        var $hasSpouse = _self.$form.find('input[name="family_status[has_spouse]"]');

        $hasSpouse.on('change',function() {
            if ($(this).is(':checked')  && $(this).val() == 1) {
                $hasSpouseWrapper.show();
            } else {
                $hasSpouseWrapper.hide();

                // Cleared Item.
                $hasSpouseWrapper.find('*').val('');
            }
        });

        if ( $hasSpouse.filter(':checked').val() == 0) {
            $hasSpouseWrapper.hide();
        }
    },

    formValidator: function() {
        var _self = this;

        // INSTANTIATE VALIDATOR
        _self.$form.jValidator({
            messageTo: $("#details_form_message"),
            onSuccess: function(res,data) {
            }
        });
    }
}








// Tax Income
$.taxform.income = {
    init: function() {
        var _self = this;

        // global variable
        _self.$form = $("#income_form");

        // Method Initiation
        _self.incomeForm();
        _self.calculateFrankedCredit();
    },

    incomeForm: function() {
        var _self = this;

        // INSTANTIATE VALIDATOR
        _self.$form.jValidator({
            messageTo: $("#income_form_message"),
            onSuccess: function(res,data) {
            }
        });
    },
    calculateFrankedCredit: function() {

        $('body').delegate('input[name$="[franked_divident]"]','keyup',function(){

            console.log($('input[name$="[franked_divident]"]'));
            var parsedValue = $(this).val();

            parsedValue = parsedValue.replace('$','');
            parsedValue = parsedValue.replace('$',' ');
            parsedValue = parsedValue.replace(',',' ');

            $frankedCredit = $(this).closest('.form-item').find('input[name$="[franking_credit]"]');
            if (parseInt(parsedValue) > 0) {
                $credit = parseInt(parsedValue) * (0.3/0.7);
                $frankedCredit.val( $credit.toFixed(0) );
            } else {
                $frankedCredit.val("");
            }
        });
    }
};






// Tax Deductions

$.taxform.deductions = {

    init: function() {
        var _self = this;

        _self.carExpenses.init();
        _self.travelExpenses.init();
        _self.uniform.init();
        _self.selfEducation.init();
        _self.other.init();
    }
}

$.taxform.deductions.carExpenses = {
    init: function() {
        var _self = this;

        // Global Vars
        _self.$form = $("#car_expenses_form");

        // Method Initiation
        _self.carExpensesForm();
        _self.showHideLogBook();
        _self.bindAddNew();
    },

    bindAddNew: function() {
        var _self = this;

        $("#add_car_expenses").bind('click',function(){
            var $clicked = $(this);
            // Set time out, since append is first done and called
            // so we need to make a delay
            setTimeout(function(){
                var $formFieldset =$clicked.closest('.section').find('.form-fieldset');
                if ($formFieldset.length) {
                    $formItem = $formFieldset.find('.form-item').last();

                    if ($formItem.length) {
                        var $logBook = $formItem.find('.show_log_book');
                        if ($.trim($logBook.text()) == 'Cancel') {
                            $logBook.trigger('click');
                        }
                    }
                }
            },200);

        });
    },

    carExpensesForm: function() {
        var _self = this;
        // INSTANTIATE VALIDATOR
        _self.$form.jValidator({
            messageTo: $("#car_expenses_form_message"),
            onSuccess: function(res,data) {
            }
        });
    },

    showHideLogBook: function() {
        $body.delegate(".show_log_book",'click',function(e) {
            var $formItem = $(this).closest('.form-item');

            var $logBookWrapper = $formItem.find('.log_book_wrapper');
            var $logBookInput = $formItem.find('input[name$="[has_claimed_log_book]"]');
            var $businessKilometre = $formItem.find('input[name$="[business_kilometre]"]');
            var $centsPerKilometre = $formItem.find('[name$="[cents_per_kilometre_id]"]');

            if ( $logBookInput.val() >= 1   ) {

                $(this).text('Click here');
                $logBookInput.val(0);

                $logBookWrapper.hide().removeClass('hidden');
                $businessKilometre.closest('.form-group').show().removeClass('hidden');
                $centsPerKilometre.closest('.form-group').show().removeClass('hidden');
            } else {
                $logBookInput.val(1);
                $(this).text('Cancel');

                $logBookWrapper.show().removeClass('hidden');
                $businessKilometre.closest('.form-group').hide().addClass('hidden');
                $centsPerKilometre.closest('.form-group').hide().addClass('hidden');
            }

            e.preventDefault();
        });
    }
}

$.taxform.deductions.travelExpenses = {
    init: function() {
        var _self = this;

        // Global Vars
        _self.$form = $("#travel_expenses_form");

        // Method Initiation
        _self.travelExpensesForm();
    },

    travelExpensesForm: function() {
        var _self = this;
        // INSTANTIATE VALIDATOR
        _self.$form.jValidator({
            messageTo: $("#travel_expenses_form_message"),
            onSuccess: function(res,data) {
            }
        });
    }
}

$.taxform.deductions.uniform = {

    init: function() {
        var _self = this;

        // Global Vars
        _self.$form = $("#uniforms_form");

        // Method Initiation
        _self.UniformForm();
    },

    UniformForm: function() {
        var _self = this;
        // INSTANTIATE VALIDATOR
        _self.$form.jValidator({
            messageTo: $("#uniforms_form_message"),
            onSuccess: function(res,data) {
            }
        });
    }
}

$.taxform.deductions.selfEducation = {
    init: function() {
        var _self = this;

        // Global Vars
        _self.$form = $("#self_education_form");

        // Method Initiation
        _self.SelfEducationForm();
    },

    SelfEducationForm: function() {
        var _self = this;
        // INSTANTIATE VALIDATOR
        _self.$form.jValidator({
            messageTo: $("#self_education_form_message"),
            onSuccess: function(res,data) {
            }
        });
    }
}

$.taxform.deductions.other = {
    init: function() {
        var _self = this;

        // Global Vars
        _self.$form = $("#other_deduction_form");

        // Method Initiation
        _self.formValidator();
    },

    formValidator: function() {
        var _self = this;

        // Instantiate Validator
        _self.$form.jValidator({
            messageTo: $("#other_deduction_form_message"),
            onSuccess: function(res,data) {
            }
        });
    }
}


$.taxform.notesUpdate = {
    init: function() {
        var _self = this;

        // Global Vars
        _self.$form = $("#update_notes_form");

        // Method Initiation
        _self.formValidator();
    },

    formValidator: function() {
        var _self = this;

        // Instantiate Validator
        _self.$form.jValidator({
            messageTo: $("#update_notes_form_message"),
            onSuccess: function(res,data) {
            }
        });
    }
}


$.taxform.statusUpdate = {
    init: function() {
        var _self = this;
        
        // Global Vars
        _self.$form = $("#update_status_form");

        // Method Initiation
        _self.formValidator();
    },

    formValidator: function() {
        var _self = this;

        // Instantiate Validator
        _self.$form.jValidator({
            onSuccess: function(res,data) {
            }
        });
    }
}



// Tax Offsets
$.taxform.taxOffsets = {
    init: function() {
        var _self = this;

        _self.$form = $('#tax_offsets_form');

        // Method Initiation
        _self.formValidator();
        _self.haveHelp();
        _self.zoneOffsetDays();
    },

    formValidator: function() {
        var _self = this;

        // Instantiate Validator
        _self.$form.jValidator({
            messageTo: $("#other_deduction_form_message"),
            onSuccess: function(res,data) {
            }
        });
    },

    haveHelp: function() {
        $("#input_help_has_help_debt").change(function() {

            var $targetFormGroup = $("#help_help_debt_amount").closest('.form-group');

            if ($(this).val() == 1) {
                $targetFormGroup.show();
            } else {
                $targetFormGroup.hide();
            }
        });

        $("#input_help_has_help_debt").change();
    },

    zoneOffsetDays: function() {
        $body.delegate('#zone_offset input[name$="_days]"]','keyup',function(){
            var val = parseInt( $(this).val() ),
                targetInput = $(this).closest('.form-group')
                    .next('.form-group')
                    .first()
                    .find('input')
                    .first();

            if (val >= 183) {
                targetInput.val( targetInput.data('target-value') );
            } else {
                targetInput.val(0);
            }

            targetInput.keyup();
        });

        $('#zone_offset input[name$="_days]"]').keyup();
    }
}


$.taxform.payment = {
    init: function() {
        var _self = this;

        _self.$form = $('#payment_form');
        _self.$agreementModal = $('#payment_agreement_modal');

        // Method Initiation
        _self.formValidator();
        _self.paymentMethodEvent();
        _self.onSelectAgreementEvent();
    },

    formValidator: function() {
        var _self = this;

        // Instantiate Validator
        _self.$form.jValidator({
            messageTo: $("#payment_form_message"),
            onSuccess: function(res,data) {
                // Run global Resets
                _self.$agreementModal.modal('hide');

                if (typeof res.nextProcess != 'undefined') {
                    var $targetModal = $(res.nextProcess);

                    if ($targetModal.length) {
                        $targetModal.modal('show');
                    }

                    // Remove selected agreement radio
                    $targetModal.find('input[name=payment_agreement]').prop('checked',false);

                    // Disable button.
                    $targetModal.find('button[type=submit]').addClass('disabled');
                }
            }
        });

    },

    onSelectAgreementEvent: function() {
        var _self = this;

        _self.$agreementModal.find('input[name=payment_agreement]').on('change',function(){
            var $button = _self.$agreementModal.find('button[type=submit]');
            if ($(this).is(':checked')) {
                $button.removeClass('disabled');
            } else {
                $button.addClass    ('disabled');
            }
        });
    },

    paymentMethodEvent: function() {
        $("input[name=payment_type]").on('change',function(e){

            $billTab = $("a[href='#bill']"); // #bill
            $billTabContent = $("#bill"); // #bill
            if ($(this).val() == "fee_from_refund") {
                $billTab.hide();

                if ($billTab.closest('li').next('li').length) {
                    $billTab.closest('li').next('li').first().find('a').trigger('click');
                }
            } else {
                $billTab.show();

                $billTab.trigger('click');
            }

            e.preventDefault();

        });
    }
}