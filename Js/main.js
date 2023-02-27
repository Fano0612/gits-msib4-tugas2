document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('loaded');
            }, 1000);
            setTimeout(() => {
                preloader.remove();
            }, 2000);
        });
    }
});

window.onload = function() {
    document.body.classList.add('fade-in');
};

function toggleContent() {
    var content = document.querySelector('.head-img-content');
    content.classList.toggle('show');
}

$(window).scroll(function() {
    $('.show-once').each(function() {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elementPos < topOfWindow + $(window).height() - 50) {
            $(this).addClass("show");
        } else {
            $(this).removeClass("show");
        }
    });
});


var header = document.querySelector('.Mainheader');
var sticky = header.offsetTop;
window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

$(window).scroll(function() {
    $('.show-once2').each(function() {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var top_of_object = $(this).offset().top;
        var top_of_window = $(window).scrollTop();

        if (bottom_of_window > bottom_of_object && top_of_window < top_of_object) {
            $(this).addClass('show2');
        } else {
            $(this).removeClass('show2');
        }
    });
});