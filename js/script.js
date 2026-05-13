$(document).ready(function () {
    const $sidebar = $('.sidebar');

    if ($('.sidebar__menu-toggle').length === 0) {
        $('<button>', {
            class: 'sidebar__menu-toggle',
            'aria-label': 'Toggle menu',
            html: '<span></span><span></span><span></span>'
        }).appendTo($sidebar);
    }

    $(document).on('click', '.sidebar__menu-toggle', function () {
        $('.sidebar__menu').toggleClass('active');
    });

    $('.sidebar__item').on('click', function () {
        $('.sidebar__menu').removeClass('active');
    });

   
    $('#abrirModal').on('click', function () {
        $('#modal').css('display', 'flex').hide().fadeIn(300);
    });

    $('#fecharModal').on('click', function () {
        $('#modal').fadeOut(300);
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#modal')) {
            $('#modal').fadeOut(300);
        }
    });
});
