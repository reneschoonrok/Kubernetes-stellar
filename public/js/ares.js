/*!
* Ares Dashboard - v1.0.0 - Copyright 2016
* @author pixelcave - https://pixelcave.com
*/

var Ares = function() {
    /*
     * jQuery Appear, for more examples you can check out https://github.com/bas2k/jquery.appear
     *
     * Ares.initHelper('appear');
     *
     */
    var uiHelperAppear = function(){
        var lHtml = jQuery('html');

        // Add a specific class on elements (when they become visible on scrolling)
        jQuery('[data-toggle="appear"]').each(function(){
            var windowW    = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var el         = jQuery(this);
            var elClass    = el.data('class') ? el.data('class') : 'animated fadeIn';
            var offset     = el.data('offset') ? el.data('offset') : 0;
            var timeout    = (lHtml.hasClass('ie9') || windowW < 992) ? 0 : (el.data('timeout') ? el.data('timeout') : 0);

            el.appear(function() {
                setTimeout(function(){
                    el
                        .removeClass('visibility-hidden')
                        .addClass(elClass);
                }, timeout);
            },{accY: offset});
        });
    };

    /*
     * jQuery Appear + jQuery countTo, for more examples you can check out https://github.com/bas2k/jquery.appear and https://github.com/mhuggins/jquery-countTo
     *
     * Ares.initHelper('appear-countTo');
     *
     */
    var uiHelperAppearCountTo = function(){
        // Init counter functionality
        jQuery('[data-toggle="countTo"]').each(function(){
            var el         = jQuery(this);
            var after      = el.data('after');
            var before     = el.data('before');
            var speed      = el.data('speed') ? el.data('speed') : 1500;
            var interval   = el.data('interval') ? el.data('interval') : 15;

            el.appear(function() {
                el.countTo({
                    speed: speed,
                    refreshInterval: interval,
                    onComplete: function() {
                        if(after) {
                            el.html(el.html() + after);
                        } else if (before) {
                            el.html(before + el.html());
                        }
                    }
                });
            });
        });
    };

    /*
     * Easy Pie Chart, for more examples you can check out http://rendro.github.io/easy-pie-chart/
     *
     * Ares.initHelper('easy-pie-chart');
     *
     */
    var uiHelperEasyPieChart = function(){
        // Init Easy Pie Charts (with .js-pie-chart class)
        jQuery('.js-pie-chart').easyPieChart({
            barColor: jQuery(this).data('bar-color') ? jQuery(this).data('bar-color') : '#777777',
            trackColor: jQuery(this).data('track-color') ? jQuery(this).data('track-color') : '#eeeeee',
            lineWidth: jQuery(this).data('line-width') ? jQuery(this).data('line-width') : 3,
            size: jQuery(this).data('size') ? jQuery(this).data('size') : '80',
            animate: jQuery(this).data('animate') ? jQuery(this).data('animate') : 10000,
            scaleColor: jQuery(this).data('scale-color') ? jQuery(this).data('scale-color') : false
        });
    };

    return {
        initHelper: function(helper) {
            switch (helper) {
                case 'appear':
                    uiHelperAppear();
                    break;
                case 'appear-countTo':
                    uiHelperAppearCountTo();
                    break;
                case 'easy-pie-chart':
                    uiHelperEasyPieChart();
                    break;
                default:
                    return false;
            }
        },
        initHelpers: function(helpers) {
            if (helpers instanceof Array) {
                for(var index in helpers) {
                    Ares.initHelper(helpers[index]);
                }
            } else {
                Ares.initHelper(helpers);
            }
        }
    };
}();