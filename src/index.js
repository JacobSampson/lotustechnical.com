$(document).ready(function() {
    setMain("pages/landing.html");

    $("#logo-technical").click(() => setMain("pages/landing.html"));

    // Main navigation links
    $("#link-clients").click(() => setMain("pages/clients.html"));
    $("#link-job-seekers").click(() => setMain("pages/job-seekers.html"));
    $("#link-employment-forms").click(() => setMain("pages/employment-forms.html"));
    $("#link-openings").click(() => setMain("pages/openings.html"));
    $("#link-resume").click(() => setMain("pages/resume.html"));
});

function setMain(page) {
    $("main").load(page);
}