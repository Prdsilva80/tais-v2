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

    // Adiciona um ouvinte de eventos para os botões "Mais detalhes"
    document.querySelectorAll('.card img').forEach(function (button) {
        button.addEventListener('click', function () {
            toggleDetails(this);
        });
    });

    // Função para mostrar/esconder detalhes do depoimento
    function toggleDetails(button) {
        var card = button.closest('.card');
        var partialComment = card.querySelector('.partial-comment');
        var fullComment = card.querySelector('.full-comment');

        if (partialComment.style.display === 'none' || partialComment.style.display === '') {
            // Mostra o comentário parcial e oculta o completo
            partialComment.style.display = 'block';
            fullComment.style.display = 'none';
            // Reinicia o carrossel
            mySwiper.autoplay.start();
        } else {
            // Mostra o comentário completo e oculta o parcial
            partialComment.style.display = 'none';
            fullComment.style.display = 'block';
            // Pausa o carrossel
            mySwiper.autoplay.stop();
        }
    }

    // Esconde os comentários completos inicialmente
    document.querySelectorAll('.full-comment').forEach(function(comment) {
        comment.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Busca o botão pelo texto, assumindo que é único na página.
    var faleConoscoButton = document.querySelector('button:contains("Fale conosco")');

    // Adiciona um event listener ao botão, se encontrado
    if (faleConoscoButton) {
        faleConoscoButton.addEventListener('click', function() {
            // Busca o elemento pelo ID
            var headerElement = document.getElementById('ondeestamos');
            
            // Usa scrollIntoView para mover para o elemento
            if (headerElement) {
                headerElement.scrollIntoView({
                    behavior: 'smooth', // Define a animação de rolagem como suave
                    block: 'start' // Alinha o elemento ao topo da página
                });
            }
        });
    }
});
