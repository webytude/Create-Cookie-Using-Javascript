//DOM Ready ----
jQuery(document).ready(function() {
    // Create new Cookies
    setCookie("webytude_tab", 'webytudetab', 30,'admin');
     
    // get Cookies
    var activeTab = getCookie("webytude_tab"); 
    alert(activeTab);

});

// Create new Cookies function
function setCookie(Cookiename,Cookievalue,exdays,Cookiepath) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    // document.cookie = Cookiename+"="+Cookievalue+"; "+expires + "path/"+Cookiepath;
    document.cookie = Cookiename + "=" + Cookievalue + "; " + expires + "; path=/";
}
// get Cookies function
function getCookie(Cookiename) {    
    var name = Cookiename + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}