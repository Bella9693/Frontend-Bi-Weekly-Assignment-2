$(".faq-toggle").on("click", function () {
  const img = $(this).find("img");

  $(this).closest(".faq-questions").find(".faq-answer, p").slideToggle();

  const currentSrc = img.attr("src");
  if (currentSrc.includes("plus")) {
    img.attr("src", "./assets/images/icon-minus.svg");
  } else {
    img.attr("src", "./assets/images/icon-plus.svg");
  }
});
