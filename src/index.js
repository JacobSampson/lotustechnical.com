$(document).ready(function() {
    // console.log(document.location.hostname);

    // Set landing as the default home page
    $("main").load("pages/landing.html");

    // Setup nav button styles
    $("nav").load("pages/nav.html", function() {
        // $(document).click(function(e) {
        //     if (!e.hasClass("side-bar-button")) {
        //         $("#side-bar").removeClass("active");
        //     }
        // });

        // Add and remove active state
        $("nav").on("click", "li", function() {
            $("li.active").removeClass("active");
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
            $("main").load("pages/clients.html", function() {
                // Info bubbles
                $(".info-bubble").click(function() {
                    toggleActivePopup($(this));
                });
            });
        });
        $("#link-job-seekers").click(function() {
            $("main").load("pages/job-seekers.html", function() {
                // Info bubbles
                $(".info-bubble").click(function() {
                    toggleActivePopup($(this));
                });
            });
        });

        // Sidebar popout
        $("#link-employment-forms").click(function() {
            $("#side-bar").load("pages/pieces/side-employment-forms.html");
            toggleActive($("#side-bar"));
        });
        $("#link-resume").click(function() {
            $("#side-bar").load("pages/pieces/side-phone.html");
            toggleActive($("#side-bar"));
        });
        $(".nav-external-link").click(function() {
            $("#side-bar").load("pages/pieces/side-phone.html");
            toggleActive($("#side-bar"));
        });
    });
});

function toggleActive(element) {
    if (element.hasClass("active")) {
        element.removeClass("active");
    } else {
        element.addClass("active");
    }
}

function toggleActivePopup(element) {
    if (element.hasClass("active")) {
        element.removeClass("active");
        element.next().removeClass("active");
    } else {
        element.addClass("active");
        element.next().addClass("active");
    }
}