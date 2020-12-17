$(function () {

    fetch('src/images.json')
    .then(response => response.json())
    .then(data => showPictures(data))
    .catch((error) => {
        console.error('Error:', error);
    });


    // image list
    let imgs = [
        { src: 'src/hands-423794_640.jpg', title: 'Old man pipe', desc: 'wonderful' },
        { src: 'src/noel-1897317_640.jpg', title: 'Secret agent', desc: 'beauty' },
        { src: 'src/tea-783352_640.jpg', title: 'Travel poster Colorado', desc: 'nice' },
        { src: 'src/still-life-851328_640.jpg', title: 'Travel poster National Parks', desc: 'gorgeous' },
        { src: 'src/wood-cube-473703_640.jpg', title: 'We Can Do It', desc: 'sumptuous' },
    ];

    let main = $('.main');

    // display them all
    imgs.forEach(img => {
        main.append(`
            <div class="img">
                <img src="` + img.src + `" alt="` + img.title + `" width="200">
                <div class="title">` + img.title + `</div>
                <div class="desc">` + img.desc + `</div>
            </div>
        `);
    });

    // trigger onhover img
    $('.img').hover(
        function() {
            $(this).addClass('hover');
        }, 
        function() {
            $( this ).removeClass('hover');
        }
    );


    function showPictures(pics) {
        console.log(pics) ;
    }

});