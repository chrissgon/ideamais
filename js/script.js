// MENU MOBILE
$(".btn-mobile").click(function () {
  $(".container-menu").fadeIn(100);
  $(".menu-mobile").addClass("active");
});

$(".container-menu").click(function () {
  $(".menu-mobile").removeClass("active");
  $(".container-menu").fadeOut();
});
