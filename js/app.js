$(document).ready(function () {
    $("#main").load("../layout/home/main.html");
    $("#footer").load("../layout/footer/footer.html");
})


function clickTab(path) {
    $("#product-love-tab").empty();
    $("#product-love-tab").load(path);
}

$(document).ready(function () {
    $(".menu-love-item").click(function () {
        $(".menu-love-item").removeClass("active");
        $(".menu-love-item").addClass("active");
    });
});


function clickTabMenuHeader(path) {
    $("#main").empty();
    $("#main").load(path)
}

$(document).ready(function () {
    $(".active-class ").click(function () {
        $(".active-class ").removeClass("active");
        $(this).addClass("active");
    });
});

var btn = $('#button');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});








