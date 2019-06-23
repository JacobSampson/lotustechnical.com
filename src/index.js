var oldSelection = null;

$(document).ready(function() {
    // Switch pages loaded for the two domains
    let host = document.location.hostname;
    var pageFolder = "pages/";

    console.log(host);

    if (host === "lotushealthcaresolutions.com") {
        pageFolder += "health/";
    } else {
        pageFolder += "technical/";
    }

    // Set landing as the default home page
    $("main").load(pageFolder + "/landing.html");
    
    // Setup nav
    $("nav").load(pageFolder + "/nav.html", function() {
        // Sidebar popout
        $("html").click(function (e) {
            let selectedID = $(e.target)[0].id;

            switch(selectedID) {
                case "icon-info":
                    $("#side-bar").load(pageFolder + "pieces/side-info.html");
                    toggleSideBar($("#side-bar"), selectedID);
                    break;
                case "link-employment-forms":
                    $("#side-bar").load(pageFolder + "pieces/side-employment-forms.html");
                    toggleSideBar($("#side-bar"), selectedID);
                    break;
                default:
                    $("#side-bar").removeClass("active");
            }
        });

        // Add or remove active state
        $("nav").on("click", "li", function() {
            if($(this).hasClass("page")) {
                $("li.active").removeClass("active");
                $(this).addClass("active");
            }
        });

        // Main navigation links
        $("#logo").click(function() {
            $("main").load(pageFolder + "/landing.html");
            $("#link-clients, #link-job-seekers").removeClass("active");
            $("#link-landing").addClass("active");
        });
        $("#link-landing").click(function() {
            $("main").load(pageFolder + "/landing.html");
        });
        $("#link-clients").click(function() {
            $("main").load(pageFolder + "/clients.html", function() {
                // Info bubbles
                $(".info-bubble").click(function() {
                    toggleActivePopup($(this));
                });
            });
        });
        $("#link-job-seekers").click(function() {
            $("main").load(pageFolder + "/job-seekers.html", function() {
                // Info bubbles
                $(".info-bubble").click(function() {
                    toggleActivePopup($(this));
                });
            });
        });
    });
});

function toggleSideBar(e, newSelection) {
    if (e.hasClass("active")) {
        if ((newSelection !== "icon-info" && newSelection !== "link-employment-forms") || newSelection === oldSelection) {
            e.removeClass("active");
        }
    } else {
        e.addClass("active");
    }

    oldSelection = newSelection;
}

function toggleActive(e) {
    if (e.hasClass("active")) {
        e.removeClass("active");
    } else {
        e.addClass("active");
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