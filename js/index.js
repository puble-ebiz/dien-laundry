$(function () {
  var popConsult = $(".popup-consult"),
    popClose = $(".popup-box .btn-close"),
    btnConsult = $(".btnConsult");

  var topHead = $(".header"),
    btnMore = $(".brand-message .btn-more"),
    moreCompany = $(".product-delivery");

  var bannerConsult = $(".side-banner .btn-consult"),
    consultBox = $(".product-consult");

  bannerConsult.click(function () {
    var consultHeight = consultBox.offset().top - topHead.height();
    $("html,body").animate({ scrollTop: consultHeight }, 1000);
  });

  btnConsult.click(function () {
    popConsult.show();
  });

  popClose.click(function () {
    popConsult.hide();
  });

  btnMore.click(function () {
    var location = moreCompany.offset().top - topHead.height();
    $("html,body").animate({ scrollTop: location }, 1000);
  });

  //개인정보수집동의
  var btnPolicy = $(".consult-box .btn-policy"),
    popPolicy = $(".popup-policy"),
    btnPopClose = $(".popup-policy .btn-close");

  btnPolicy.click(function () {
    popPolicy.show();
  });
  btnPopClose.click(function () {
    popPolicy.hide();
  });
});
