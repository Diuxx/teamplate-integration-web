$(function () {

    // image list
    let imgs = [
        { src: 'src/oldmanpipebooze.svg', title: 'Old man pipe', desc: 'wonderful' },
        { src: 'src/secretAgent.svg', title: 'Secret agent', desc: 'beauty' },
        { src: 'src/Vintage-Travel-Poster-Colorado-USA.svg', title: 'Travel poster Colorado', desc: 'nice' },
        { src: 'src/Vintage-Travel-Poster-National-Parks-America-USA.svg', title: 'Travel poster National Parks', desc: 'gorgeous' },
        { src: 'src/We-Can-Do-It-Rosie-The-Riveter-Poster.svg', title: 'We Can Do It', desc: 'sumptuous' },
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

});