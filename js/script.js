//NAV BAR SCROLL GRADIENT
$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavBar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
function TestsFunction() {
  var T = document.getElementById("othersMain");
  if (T.style.display === "block") {
    T.style.display = "none"; // <-- Set it to block
  } else {
    T.style.display = "none";
  }
}
$(".navbar-collapse").on("shown.bs.collapse", function () {
  $(".navbar-collapse .collapse.show").parent().addClass("mt-3 mb-3");
});
$(".navbar-collapse").on("hidden.bs.collapse", function () {
  $(".navbar-collapse  >.collapse.m-0").removeClass("mt-3 mb-3");
});
