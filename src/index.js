var oldSelection = null;
$(document).ready(function() {
    // Switch pages loaded for the two domains
    let host = document.location.hostname;
    var pageFolder = "pages/";
    
    console.log(host);
    
    if (host === "lotushealthcaresolutions.com") {
        pageFolder += "health/";
        document.title = "Lotus Healthcare Solutions";
        loadOpenings('https://docs.google.com/spreadsheets/d/1rshSdUdYiL6T4mqNBXfIjSlofDjpnt1eu0-x6v6WG8Y/pubhtml');
    } else {
        pageFolder += "technical/";
        document.title = "Lotus Technical";
        loadOpenings('https://docs.google.com/spreadsheets/d/1rshSdUdYiL6T4mqNBXfIjSlofDjpnt1eu0-x6v6WG8Y/pubhtml');
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
                case "link-tournament":
                    $("#side-bar").load(pageFolder + "pieces/side-tournament.html");
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

                // Current openings link
                $("#openings-button-link").click(function() {
                    $("main").load(pageFolder + "/openings.html", function() {
                        $("li.active").removeClass("active");
                        $("#link-openings").addClass("active");

                        let openingsInfo = setOpenings();
                        document.querySelector(".openings").innerHTML = openingsInfo;
                    });
                    
                });
            });
        });
        $("#link-openings").click(function() {
            $("main").load(pageFolder + "/openings.html", function() {
                $(".info-bubble").click(function() {
                    toggleActivePopup($(this));
                });
                
                let openingsInfo = setOpenings();
                document.querySelector(".openings").innerHTML = openingsInfo;
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

function loadOpenings(url) {
    Tabletop.init( { key: url,
        callback: function(data, tabletop) { 
            window.openingData = data;
        },
        simpleSheet: true
    });
} 

function setOpenings() {
    try {
        return window.openingData.map(opening => {

            console.log(opening.id);
            return `
            <div class="openings__opening">
                <h2 class="openings__header">${opening.title}</h2>
                <p class="openings__description">${opening.description}</p>
                <p class="openings__location">${opening.location}</p>
                <p class="openings__employee-type">${opening.employee_type}</p>
                <p class="openings__id">${opening.id}</p>
                <p class="openings__pay">${opening.pay}</p>
            </div>
            `
        }).join("");
    } catch {
        return `<h1>NO OPENINGS</h1>`;
    }
}
