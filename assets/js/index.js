/**
 * Main JS file for Aside behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
        $("a[href^='http://'], a[href^='https://']").not(".header-link").attr("target", "_blank");
    });

}(jQuery));