/**
 * Global Footer
 * @provides none
 * @requires util.js
 **/



(function($){
    /*
	var handler = function(){
        var pos = scrollPosition();
        if(pos.top > 10){
            $(".ply-wrapper").addClass("ply-scrolled");
           $(window).unbind("scroll", f);
        }
    };

    var timeout = null;

    var f = function(e){
        if(timeout){
            clearTimeout(timeout);
            timeout = null;
        }

        timeout = setTimeout(handler, 150);
    };

    $(window).bind("scroll", f);

    var scrollPosition = function(){
        return {
            top:window.pageYOffset||(document.documentElement?document.documentElement.scrollTop:null)||document.body.scrollTop||0,
            left:window.pageXOffset||(document.documentElement?document.documentElement.scrollLeft:null)||document.body.scrollLeft||0
        };
    };
	*/


    $.fn.siteselector = function(){
        var goButton = $("button", this);
        var languageForm = $("form", this);
        
        goButton.click(function(){
            var selectedCountryUrl = $("input[name='region']:checked", languageForm).val();
            var rememberMe = $("input[name='remember']", languageForm);
            if(selectedCountryUrl == ""){
                alert("Please select a language.");
                return false;
            } else{
                if(rememberMe.attr("checked")){
                    languageForm.attr("action", "http://www.polycom.com/content/dam/polycom/www/includes/plantCookie.html?select="+ selectedCountryUrl +"&remember_me=on");                 
                } else{
                  languageForm.attr("action", selectedCountryUrl);
                  languageForm.attr("method", "post");                 
                }
            }
            languageForm.obj.submit();
            return false;
        });
    };
}(window.jQuery));

$(document).ready(function(){
    $(".ply-global-language-modal").siteselector();
});