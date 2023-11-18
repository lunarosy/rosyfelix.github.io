function parallax(element, speed) {
  var scrolled = ($(window).width(), $(window).height(), $(window).scrollTop());
  var scrollSpeed = speed;

  $(element).each(function () {
    var offset = $(this).offset();
    $(this)
      .find("img")
      .css(
        "transform",
        "translate3d(-50%," + speed * (scrolled - offset.top) + "px,0)"
      );
  });
}

$(window).scroll(function () {
  parallax(".parallax", 0.3);
});
