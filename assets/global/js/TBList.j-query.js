jQuery(function($) {

    var prevRequest = false;
    var onRefreshStart = function(listForm){};
    var onRefreshEnd = function(listForm){};

    // Helper Function
    function _getListSerialize(listForm) {
        data = listForm.serialize();

        if (listForm.data('order_method') && listForm.data('order_by')) {
            data += "&order_mehotd" + listForm.data('order_method');
            data += "&order_by" + listForm.data('order_by');
        }

        if (listForm.data('page')) {
            data += "&page" + listForm.data('page');
        }

        return data;

    }


    function retrievedData(listForm,callBack) {
        onRequestStart(listForm);

        // Abort previous request, as this will results to lag
        if(prevRequest){
            prevRequest.abort();
        }

        if (typeof callBack == 'undefined') {
            callBack = function() { return false };
        }

        var inputData = _getListSerialize(listForm);

        var method 	= listForm.attr('method');
        var action 	= listForm.attr('action');

        // Check form data type
        prevRequest = $.ajax({
            type : 		method,
            url : 		action,
            data : 		inputData,
            dataType : 		'json',
            success :	function(data){

               if(data.status == "success"){

                    // Status Success Message
                    listForm
                        .find('.list--table')
                        .replaceWith(data.tableData);

                    if (typeof data.pagination !== 'undefined'){
                        listForm
                            .find('.list--pagination')
                            .replaceWith(data.pagination);
                    }

                    if (typeof data.paginationInfo !== 'undefined'){
                        listForm
                            .find('.list--pagination-info')
                            .replaceWith(data.paginationInfo);
                    }

                    callBack();
                }
            }

        }).done(function(){
            onRequestDone(listForm);
            prevRequest = false;
        });

        function onRequestStart(listForm) {
            var table = listForm.find('table');
            var position = table.position();
            var top = position.top;
            var left = position.left;
            var height = table.height();
            var width = table.width();

            var Overlay = $('<div class="table-overlay"><span class="table-loader"  ></span></div>');
            Overlay.insertAfter(table);

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


            onRefreshStart(listForm);
        }

        function onRequestDone() {

            $('.table-overlay').remove();
            onRefreshEnd(listForm);
        }

        return false;
    }

    function refreshList(listForm,callBack) {
        if (typeof callBack == 'undefined'){
            callBack = function(){ return ""; };
        }

        return retrievedData(listForm,callBack);
    }

    function _listCheckable(listForm) {
        var $checkeAll = $("input[type=checkbox].check-all");

        listForm.on('change','input[type=checkbox].check-all',function(e){

            var $allChecks = $(e.delegateTarget)
                .find('input.check-single,input.check-all');

            if( $(this).is(":checked") ){
                $allChecks.prop('checked', 'checked');
            } else {
                $allChecks.prop('checked', false);
            }
        });

    }

    function _paginationButton(listForm) {
        listForm.on('click','.list--pagination li a',function(e){

            e.preventDefault();

            listForm.attr('action',$(this).attr('href'));

            refreshList( listForm );
        });
    }

    function getCheckedItem(listForm,toArray) {

        var checkData = listForm.find('input.check-single:checked, ' +
                // include the check item hidden input type,
                // this is usefull if we have an individual page
                // and we need to identify what is currently selected
                'input.check-single[type=hidden]').map(function() {
            return this.value;
        }).get();

        console.log(checkData.length);
        if (typeof toArray !== 'undefined' && toArray){
            // must defined and have a true value to convert it the value as array
            return checkData;
        } else {
            return checkData.join(',');
        }
    }

    function countCheckedItem(listForm) {
        var items = getCheckedItem(listForm,true);

        return items.length;
    }

    function remove(listForm,toRemove) {
        listForm
            .find('#checkbox-'+toRemove)
            .prop('checked', false );
    }

    function select(listForm,toCheck) {
        listForm
            .find('#checkbox-'+toCheck)
            .prop('checked', 'checked' );

    }

    function selectOne(listForm,toCheck){

        removeAll(listForm);

        listForm
            .find('#checkbox-'+toCheck)
            .prop('checked', 'checked' );
    }

    function selectAll(listForm){
        listForm
            .find('input[id^=checkbox-]')
            .prop('checked', 'checked' );
    }

    function removeAll(listForm) {
        listForm
            .find('input[id^=checkbox-]')
            .prop('checked', false );
    }

    function _headerSortable(listForm) {

        listForm.on('click','.list--table .sorting a',function(e){
            e.preventDefault();
            listForm = $(this).closest('.list--con');

            listForm.attr('action',$(this).attr('href'));

            refreshList( listForm );
        });
    }

    function _perPage(listForm) {

        listForm.find(".list--per-page-limit").change(function(){
            var thisListForm  = $(this).closest('.list--con');
            thisListForm
                .find('input[name=page]')
                .val(1);

            refreshList( thisListForm );
        });
    }

    function onReady() {
        var $tblist = $(".list--con");
        _listCheckable($tblist);
        _paginationButton($tblist);
        _perPage($tblist);
        _headerSortable($tblist);
    }

    onReady();

    var methods = {
        count : function() {
            return countCheckedItem(this);
        },// GOOD

        select: function(arguments) {
            var listForm = this;

            for (var i in arguments){
                select(listForm,arguments[i]);
            }
        },

        /**
         *
         * @param {boolean} toArray
         */
        getCheckedItem: function(toArray) {
            var listForm = this;
            return getCheckedItem(listForm,toArray);
        },

        /**
         *
         * @param {string|int} id
         * @returns {*}
         */
        remove: function(id) {
            var listForm = this;
            return remove(listForm,id);
        },

        removeAll: function(){
            var listForm = this;
            removeAll(listForm);
        },

        refresh: function(callBack) {
            var pThis = this;

            setTimeout(function(){
                refreshList(pThis,callBack);
            }, 300);
        },

        onRefreshStart: function(args){
            onRefreshStart = args;
        },

        onRefreshEnd: function(args){
            onRefreshEnd = args;
        }

    };

    $.fn.TBList = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on TBList.jQuery.js' );
        }
    };
});
