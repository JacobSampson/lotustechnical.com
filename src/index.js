$(document).ready(function() {
    // Set landing as the default home page
    $("main").load("pages/job-seekers.html");

    $("nav").load("pages/nav.html", function() {
        // Add and remove active state
        $("nav").on("click", "li", function() {
            $(".active").removeClass("active");
            $(this).addClass("active");
        });

        // Main navigation links
        $("#logo-technical").click(function() {
            $("main").load("pages/landing.html");
        });
        $("#link-landing").click(function() {
            $("main").load("pages/landing.html");
        });
        $("#link-clients").click(function() {
            $("main").load("pages/clients.html");;
        });
        $("#link-job-seekers").click(function() {
            $("main").load("pages/job-seekers.html", function() {
                // Info bubbles
                $(".info-bubble").click(function() {
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                        $(this).next().removeClass("active");
                    } else {
                        $(this).addClass("active");
                        $(this).next().addClass("active");
                    }
                });
            });
        });
        $("#link-employment-forms").click(function() {
            $("main").load("pages/employment-forms.html");
        });
        $("#link-openings").click(function() {
            $("main").load("pages/openings.html");
        });
    });
});