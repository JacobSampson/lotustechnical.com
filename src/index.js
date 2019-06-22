var oldSelection = null;
$(document).ready(function() {
    // console.log(document.location.hostname);

    // Set landing as the default home page
    $("main").load("pages/landing.html");
    
    // Setup nav
    $("nav").load("pages/nav.html", function() {

        $("html").click(function(e) {
            if ($(e).hasClass("nav-internal-link")) {
                $("#side-bar").removeClass("active");
            }
        });

        // Add or remove active state
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
            toggleActive($("#side-bar"), $(this));
        });
        $("#link-resume").click(function() {
            $("#side-bar").load("pages/pieces/side-resume.html");
            toggleActive($("#side-bar"), $(this));
        });
        $("#link-phone").click(function() {
            $("#side-bar").load("pages/pieces/side-info.html");
            toggleActive($("#side-bar"), $(this));
        });
        $("#link-email").click(function() {
            $("#side-bar").load("pages/pieces/side-info.html");
        });
        $("#link-location").click(function() {
            toggleActive($("#side-bar"), $(this));
            $("#side-bar").load("pages/pieces/side-info.html");
        });
    });
});

function toggleActive(e, newSelection) {    
    oldSelection = newSelection[0].id;

    if (newSelection != oldSelection) {
        if (e.hasClass("active")) {
                e.removeClass("active");
        } else {
            e.addClass("active");
        }
    }
}

function toggleActivePopup(e) {
    if (e.hasClass("active")) {
        e.removeClass("active");
        e.next().removeClass("active");
    } else {
        e.addClass("active");
        e.next().addClass("active");
    }
}