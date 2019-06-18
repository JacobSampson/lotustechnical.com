$(document).ready(function() {
    // Set landing as the default home page
    setMain("pages/job-seekers.html");
    
    // Main navigation links
    $("#logo-technical").click(function() {
        setMain("pages/landing.html");
        removeActive();
        $(this).addClass("active");
    });
    $("#link-landing").click(function() {
        setMain("pages/landing.html");
        removeActive();
        $(this).addClass("active");
    });
    $("#link-clients").click(function() {
        setMain("pages/clients.html");;
        removeActive();
        $(this).addClass("active");
    });
    $("#link-job-seekers").click(function() {
        setMain("pages/job-seekers.html");
        removeActive();
        removeActive();
        $(this).addClass("active");
    });
    $("#link-employment-forms").click(function() {
        setMain("pages/employment-forms.html");
        removeActive();
        removeActive();
        $(this).addClass("active");
    });
    $("#link-openings").click(function() {
        setMain("pages/openings.html");
        removeActive();
        $(this).addClass("active");
    });

    // Info bubbles
    $(".info-bubble").click(function() {
        $(this).addClass("minimized");
    });
});

function setMain(page) {
    $("main").load(page);
}

function removeActive() {
    $(".inner-link").removeClass("active");
}