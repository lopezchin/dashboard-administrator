
(function($){
    $.fn.idleTimeout = function(options) {
        var defaults = {
            inactivity: 1200000, //20 Minutes
            sessionIsAlive: 11000, //10 Minutes
            sessionDestroyUrl: '/session/keep-alive',

            showDialog: true,
            autoLogoutModal: $("#auto_logout_modal"),
            loginModal: $("#inactivity_login_popup")
        }

        //##############################
        //## Private Variables
        //##############################
        var opts = $.extend(defaults, options);
        var sessionTimeout,idle;

        var start_liveTimeout = function() {
            clearTimeout(sessionTimeout);

            sessionTimeout = setTimeout(request_logout, opts.inactivity);
        }

        var login = function() {
            if (opts.redirect_url) {
                window.location.href = opts.redirect_url;
            } else {
                opts.loginModal.modal('show');
            }
        }

        function isLiveTimeinterval() {
            $.get(opts.isAliveURL,{},function(data){

                if (typeof data.status != 'undefined'
                    && data.status == "success") {

                    start_liveTimeout();
                } else {
                    login();
                }
            });
        }



        return this.each(function() {
            obj = $(this);
        });


    };
})(jQuery);