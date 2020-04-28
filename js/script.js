// MENU MOBILE
$(".btn-mobile").click(function () {
  $(".container-menu").fadeIn(100);
  $(".menu-mobile").addClass("active");
});

$(document).click(function (e) {
  menu = $(".menu-mobile");
  let btn = $(".btn-mobile");

  if (
    !menu.is(e.target) &&
    menu.has(e.target).length === 0 &&
    !btn.is(e.target) &&
    btn.has(e.target).length === 0
  ) {
    $(".menu-mobile").removeClass("active");
    $(".container-menu").fadeOut();
  }
});

$(".menu-mobile a").click(function () {
  $(".menu-mobile").removeClass("active");
  $(".container-menu").fadeOut();
});
