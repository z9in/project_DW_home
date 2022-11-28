// 메인 배너 애니메이션 입니다.

$(function () {
  let bgArr = [
    "main/images/main_bn_1.jpg",
    "main/images/main_bn_2.jpg",
    "main/images/main_bn_3.jpg",
  ];

  let bnTitle_1 = ["Eco-", "Improving", "Qualified"];
  let bnTitle_2 = [
    "Friendly Plastic Company",
    "People's Life",
    "Global Leader",
  ];
  let bnTitle_3 = [
    "대웅은 고객의 삶의 질을 높이기 위해 친환경 플라스틱에 앞장서겠습니다",
    "인류의 건강과 환경를 위한 플라스틱을 만들겠습니다  ",
    "세계 최대 규모의 연구 네트워크를 통해 최고 수준의 자동차 내장재를 제공합니다 ",
  ];

  let bg_img_num = 0;

  setInterval(function () {
    bg_img_num++;
    if (bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }

    $(".main_bn").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });

    $(".main_bn").css({
      transition: "1s",
      opacity: "1",
    });

    $(".main_bn_title h3").html(bnTitle_1[bg_img_num]);
    $(".main_bn_title h1").html(bnTitle_2[bg_img_num]);
    $(".main_bn_title p").html(bnTitle_3[bg_img_num]);
  }, 6000);
});

// 사이트맵 버튼 입니다.

$(function () {
  $(".m_btn a").on("click", function () {
    $(".site_map").toggleClass("site_map_open");
  });

  $(".site_map_close_btn a").on("click", function () {
    $(".site_map").removeClass("site_map_open");
  });
});
