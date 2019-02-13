$(document).ready(function () {
    var $actionBtn = $(".action-btn"),
        $iconBtn = $(".action-btn .fa");

    $actionBtn.click(function () {
        $iconBtn.toggleClass("fa-heart fa-comment");
    });
});