const dialog = document.querySelector(".artwork-dialog");
const dialogImage = dialog.querySelector(".dialog-image");
const dialogTitle = dialog.querySelector(".dialog-title");

document.querySelectorAll(".artwork-open").forEach((button) => {
  button.addEventListener("click", () => {
    const thumbnail = button.querySelector("img");
    dialogTitle.textContent = button.dataset.title;
    dialogImage.src = button.dataset.image;
    dialogImage.alt = thumbnail.alt;
    dialog.showModal();
  });
});

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("#year").textContent = new Date().getFullYear();
