let num = 0;

if (screen.width < 768) {
  $("#tech .pop").on("click", function () {
    $("#paper").css({
      display: "block",
    });
    $("#paper .images").css({
      left: "0px",
    });
    $("#paper .images img").css({
      opacity: "0",
    });
    $("#paper .images img").eq(0).css({
      opacity: "1",
    });
  });
  $("#paper .close").on("click", function () {
    $("#paper").css({
      display: "none",
    });
    num = 0;
    console.log(num);
  });
  $("#paper .images").on("click", function () {
    num++;
    $("#paper .images img").css({
      opacity: "0",
    });
    $("#paper .images img")
      .eq(num % 14)
      .css({
        opacity: "1",
      });
  });
} else if (screen.width > 768) {
  $("#tech .pop").on("click", function () {
    $("#paper").css({
      display: "block",
    });
    $("#paper .images").css({
      position: "absolute",
      left: "0px",
    });
    console.log($("#paper .img_box .images").offset());
  });
  $("#paper .close").on("click", function () {
    $("#paper").css({
      display: "none",
    });
    num = 0;
  });
  $("#paper .images").css({
    position: "absolute",
    left: "0",
  });
  $("#paper .direc .left").on("click", function () {
    console.log($("#paper .img_box .images").position().left);
    if ($(".images").position().left > -10) {
      alert("처음입니다.");
    } else {
      num++;
      let numb = 485 * num;
      $(".images").css({
        position: "absolute",
        left: `${numb}px`,
      });
    }
  });
  $("#paper .direc .right").on("click", function () {
    console.log($("#paper .img_box .images").position().left);
    if ($(".images").position().left < -4850) {
      alert("마지막입니다.");
    } else {
      num--;
      let numb = 485 * num;
      $(".images").css({
        position: "absolute",
        left: `${numb}px`,
      });
    }
  });
}
