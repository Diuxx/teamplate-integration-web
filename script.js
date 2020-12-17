$(function () {
    
    if('serviceWorker'in navigator) 
    {
        navigator.serviceWorker.register("/sw.js")
        .then((reg) => {
            console.log("votre service worker a été enregistré!");
        }).catch((error) => {
            console.error(error);
        });
    } else {
        console.warn("Service workers are not supported.");
    }

    fetchPictures('src/images.json');
    let main = $('.main');

    // trigger onhover
    $('.img').hover(
        function() {
            $(this).addClass('hover');
        }, 
        function() {
            $( this ).removeClass('hover');
        }
    );

    /**
     * display all pics
     * @param {*} pics 
     */
    function showPictures(data) {
        
        console.log(data) ;
        let pictures = data.pictures ;

        pictures.forEach(img => {
            main.append(`
                <div class="img">
                    <img src="` + img.src + `" alt="` + img.title + `" width="200">
                    <div class="title">` + img.title + `</div>
                    <div class="desc">` + img.desc + `</div>
                </div>
            `);
        });
    }

    /**
     * fetch pics data
     * @param {*} addr 
     */
    function fetchPictures(addr) {
        fetch(addr)
        .then(response => response.json())
        .then(data => showPictures(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    }

});