const cards = document.querySelectorAll(".project-card");

cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;

  card.addEventListener("animationend", () => {
    card.style.animationDelay = "0";
  });

  card.addEventListener("mouseenter", () => {
    card.style.border = "2px solid white";
  });

  card.addEventListener("mouseleave", () => {
    card.style.border = "2px solid transparent";
  });

  card.addEventListener("mousemove", (event) => {
    const { top, bottom, left, right } = card.getBoundingClientRect();
    const middleX = (right - left) / 2;
    const middleY = (bottom - top) / 2;

    const offsetX = -(event.clientX - left - middleX) / middleX;
    const offsetY = (event.clientY - top - middleY) / middleY;

    card.style.setProperty("--tilt-x", `${offsetX * 7}deg`);
    card.style.setProperty("--tilt-y", `${offsetY * 7}deg`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--tilt-x", "0");
    card.style.setProperty("--tilt-y", "0");
  });
});
