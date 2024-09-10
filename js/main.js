// звуження і розширення блоку main при скролі
window.addEventListener("scroll", function () {
  const expandable = document.querySelector(".main");
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  const widths = [
    { scrollPoint: 0, width: "89%" },
    { scrollPoint: maxScroll * 0.05, width: "93%" },
    { scrollPoint: maxScroll * 0.075, width: "97%" },
    { scrollPoint: maxScroll * 0.1, width: "99.9%" },
  ];

  const newWidth =
    widths.find(
      (point, index) =>
        scrollY >= point.scrollPoint &&
        (index === widths.length - 1 || scrollY < widths[index + 1].scrollPoint)
    )?.width || "100%";

  expandable.style.width = newWidth;
});

// поява тексту при скролі
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function showOnScroll() {
  const sections = document.querySelectorAll(".process-block-text");

  sections.forEach((section) => {
    if (isElementInViewport(section)) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);

showOnScroll();
