$(document).ready(function() {
    // Set landing as the default home page
    $("main").load("pages/landing.html");

    $("nav").load("pages/nav.html", function() {
        $("nav").on('click', 'li', function() {
            $('.active').removeClass('active');
            $(this).addClass('active');
        });

        // Main navigation links
        $("#logo-technical").click(function() {
            $("main").load("pages/landing.html");
            $(this).addClass("active");
        });
        $("#link-landing").click(function() {
            $("main").load("pages/landing.html");
            $(this).addClass("active");
        });
        $("#link-clients").click(function() {
            $("main").load("pages/clients.html");;
            $(this).addClass("active");
        });
        $("#link-job-seekers").click(function() {
            $("main").load("pages/job-seekers.html", function() {
                // Info bubbles
                $(".info-bubble").click(function() {
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                    } else {
                        $(this).addClass("active");
                    }
                });
            });
            $(this).addClass("active");
        });
        $("#link-employment-forms").click(function() {
            $("main").load("pages/employment-forms.html");
            $(this).addClass("active");
        });
        $("#link-openings").click(function() {
            $("main").load("pages/openings.html");
            $(this).addClass("active");
        });
    });
});