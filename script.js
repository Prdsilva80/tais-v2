function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            speed: 800,
            disableOnInteraction: false,
        },
    });

    document.querySelectorAll('.card img').forEach(function (img) {
        img.addEventListener('click', function () {
            toggleDetails(this);
        });
    });

    function toggleDetails(img) {
        var card = img.closest('.card');
        var partialComment = card.querySelector('.partial-comment');
        var fullComment = card.querySelector('.full-comment');
        var plusIcon = card.querySelector('img[alt="Sinal de mais para ampliar os comentários"]');
        var minusIcon = card.querySelector('img[alt="Sinal de menos para fechar os comentários"]');

        // Verifica se o comentário completo está visível
        if (fullComment.style.display === 'none' || fullComment.style.display === '') {
            // Mostra o comentário completo e oculta o parcial
            partialComment.style.display = 'none';
            fullComment.style.display = 'block';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
            mySwiper.autoplay.stop(); // Pausa o carrossel
        } else {
            // Mostra o comentário parcial e oculta o completo
            partialComment.style.display = 'block';
            fullComment.style.display = 'none';
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
            mySwiper.autoplay.start(); // Reinicia o carrossel
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão pelo ID
    var contactButton = document.getElementById('contactButton');

    // Adiciona um ouvinte de eventos ao botão
    contactButton.addEventListener('click', function() {
        // Rola para o topo da página suavemente
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
