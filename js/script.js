function abrirCarta() {
  $(".carta").css("display", "block");
  $(".heart").addClass("openHer");
  $(".message").addClass("openNor");
  $(".heart").off("mouseenter mouseleave");
}

$(".heart").on("click", abrirCarta);
