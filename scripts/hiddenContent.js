const buttons = document.querySelectorAll("[hidden-content-open]");
const buttonOpen = document.querySelector(".button");
const vectorOpen = document.querySelector(".vector");
const normalDiv = document.querySelector(".user_status_div");
const hiddenDiv = document.querySelector(".user_status_hidden_div");
const hiddenUl = document.querySelector(".open-vector");
const clickableSpan = document.querySelectorAll("[clickable]");
// const normalList = document.querySelector(".user_offers_list_haracter");
// const hiddenList = document.querySelector(".user_offers_list_hidden_div");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const contentId = button.getAttribute("hidden-content-open");
    const content = document.getElementById(contentId);
    console.log(content);
    content.classList.toggle("show");

    if (content.classList.contains("user_status_hidden_div")) {
      if (content.classList.contains("show")) {
        button.textContent = "Згорнути";
        normalDiv.style.backgroundColor = "#71a9ff";
      } else {
        button.textContent = "Розгорнути";
        normalDiv.style.backgroundColor = "#f1f4ff";
        hiddenUl.classList.remove("show");
      }
    }

    if (content.classList.contains("open-vector")) {
      if (content.classList.contains("show")) {
        button.style.transform = "rotate(180deg)";
      } else {
        button.style.transform = "rotate(0deg)";
      }
    }

    if (content.classList.contains("user_offers_list_hidden_div")) {
      if (content.classList.contains("show")) {
        button.style.background =
          "linear-gradient(to bottom, #70a9ff, #0149b4)";
        button.style.color = "#fff";
      } else {
        button.style.background = "#f1f4ff";
        button.style.color = "#000";
      }
    }
  });
});

let previousElement = null;

clickableSpan.forEach(function (element) {
  element.addEventListener("click", moveTextContent);
});

function moveTextContent(event) {
  const spanId = event.target.getAttribute("clickable");
  const span = document.getElementById(spanId);
  const content = event.target.textContent;
  // const target = document.getElementById("target");
  span.textContent = content;

  if (previousElement) {
    previousElement.style.backgroundColor = "#fff";
    previousElement.style.color = "#000";
  }

  event.target.style.backgroundColor = "#4777F2";
  event.target.style.color = "#fff";

  previousElement = event.target;
}
// button.addEventListener("click", () => {
//   const content = document.getElementById("hiddenContent");
//   content.classList.toggle("show");
//   if (content.classList.contains("show")) {
//     button.textContent = "Згорнути";
//     div.style.backgroundColor = "#71a9ff";
//   } else {
//     button.textContent = "Розгорнути";
//     div.style.backgroundColor = "#f1f4ff";
//   }
// });
