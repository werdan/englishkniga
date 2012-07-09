function formatText(index, panel) {
    return index + "";
    }

$(function () {
    var j = jQuery.noConflict();
    j('.anythingSlider').anythingSlider({
    easing: "swing",                // Anything other than "linear" or "swing" requires the easing plugin
    autoPlay: true,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not.
    delay: 7000,                    // How long between slide transitions in AutoPlay mode
    startStopped: false,            // If autoPlay is on, this can force it to start stopped
    animationTime: 1000,             // How long the slide transition takes
    hashTags: true,                 // Should links change the hashtag in the URL?
    buildNavigation: true,         // If true, builds and list of anchor links to link to each slide
    pauseOnHover: true,             // If true, and autoPlay is enabled, the show will pause on hover
    startText: "Play",              // Start text
    stopText: "Stop",               // Stop text
    navigationFormatter: formatText   // Details at the top of the file on this use (advanced use)
    });

j("#slide-jump").click(function(){
    j('.anythingSlider').anythingSlider(6);
    });

});

jQuery(window).bind('load', function(){
    jQuery().prepare_slider();
    jQuery('#slider_list > li').over();
    //=======intro (auto slider for all images)================
    var slider_link = jQuery('.slider .box-right a');
    var slider_link_index = 1;
    var slider_count = jQuery('#slider_list > li').size();

    function slider_intro(){
        if(slider_link_index <= slider_count){
            slider_link.trigger('click');
            slider_link_index++;
            setTimeout(function(){slider_intro()}, 7000); //select change time
        }
    }
    setTimeout(function(){slider_intro()}, 7000)
    //========//intro=======
});