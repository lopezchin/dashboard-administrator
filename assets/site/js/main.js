var util = {
    Global: {
        init: function () {
            this.sidebarHeight();
            $("body").delegate('.form-control-feedback','mouseenter mouseleave',function(e){
                $(this).tooltip('show');
            });

            // form group error message !---
            $(window).resize(function() {
                this.sidebarHeight();
            });

            this.sidebarHeight();

            $('.tooltip2').tooltip();

            $('.progress-button').click()

            $(".progress-button, .form-collapse").click(function(){
                $(".banner-box-media").hide().removeClass('is-animated');
                $(".banner-form").show().addClass('is-animated');
            });

            $(".banner-form .close").click(function(){
                $(".banner-box-media").show().addClass('is-animated');
                $(".banner-form").hide().removeClass('is-animated');
            });

        },
        sidebarHeight: function() {
          var contentHeight = $(".t-content").height();
          $(".t-sidebar").height(contentHeight);
        }
    },
    Front: {
      // init: function() {        
      //   var $banner = $('.banner-full');
      //   var $headerH = $('.navbar-l2');
      //   var $window = $(window);
      //   //$banner.height($(window).height());

      //   $banner.css({
      //       'height': $window.height() - $headerH.height() + 'px'
      //   });

       
      // }      
    }
};



util.areYouSure = function() {
    $("form.are_you_sure").areYouSure();

    /*
     *  In some situations it may be desirable to look for other form
     *  changes such as adding/removing fields. This is useful for forms that
     *  can change their field count, such as address/phone contact forms.
     *  Form example, you might remove a phone number from a contact form
     *  but update nothing else. This should mark the form as dirty.
     */
    $('form.are_you_sure').areYouSure( {'addRemoveFieldsMarksDirty':true} );
}

util.areYouSure.recheck  = function() {
    $('form.are_you_sure').trigger('checkform.areYouSure');
}


$(window).load(function(){
    util.Global.init();
    util.areYouSure();
});