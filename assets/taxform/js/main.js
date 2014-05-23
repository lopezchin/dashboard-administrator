var gytbo = {
    Global: {
        init: function () {
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

        select2select: function() {
            $('.select2,.selectpicker').select2({
                minimumResultsForSearch: -1
            });
        },

        sidebarHeight: function() {
          var contentHeight = $(".t-content").height();
          $(".t-sidebar").height(contentHeight);
        }
    }
};

