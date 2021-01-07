$(function () {
    // --




    /**
     * Offline mode
     */
    if(!navigator.onLine){
        $('body').prepend('<div class="info">offline mode</div>');
    } ;
       
    window.addEventListener('offline', event => {
        console.log('offline !');
        $('body').prepend('<div class="info">offline mode</div>');
    }) ;

    window.addEventListener('online', event => {
        console.log('online');
        $( ".info" ).remove();
    }) ;
});