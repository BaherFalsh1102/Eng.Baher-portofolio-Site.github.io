$(".About").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".about").offset().top,
    },
    "slow"
  );
});
$(".Exp").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".Experience").offset().top,
    },
    "slow"
  );
});
$(".Edu").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".Education_head-name").offset().top,
    },
    "slow"
  );
});
$(".Certificat").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".cert").offset().top,
    },
    "slow"
  );
});

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
