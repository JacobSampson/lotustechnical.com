$(document).ready(function() {
    // Set landing as the default home page
    setMain("pages/landing.html");
    
    // Main navigation links
    $("#logo-technical").click(() => setMain("pages/landing.html"));
    $("#link-landing").click(() => setMain("pages/landing.html"));
    $("#link-clients").click(() => setMain("pages/clients.html"));
    $("#link-job-seekers").click(() => setMain("pages/job-seekers.html"));
    $("#link-employment-forms").click(() => setMain("pages/employment-forms.html"));
    $("#link-openings").click(() => setMain("pages/openings.html"));
    $("#link-resume").click(() => setMain("pages/resume.html"));
});

function setMain(page) {
    $("main").load(page);
}