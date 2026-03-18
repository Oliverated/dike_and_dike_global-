let body = document.querySelector("body");
let modeBlk = document.getElementById("slider-ball");
let cover_bg = document.querySelector(".cover-bg");
let harm_btn = document.querySelector(".harm");
let nav_bar = document.querySelector("header nav");
let nav_list = document.querySelectorAll(".nav-list a");
let darkMode = localStorage.getItem("darkMode");
let load_ctn = document.querySelector(".loading-ctn");
let cancel_btn = document.querySelector(".cancel");
let sections = document.querySelectorAll("section");
// Loader
// setTimeout(() => {
//   load_ctn.classList.add("clear");
//   startTypewriter();
// }, 2800);

// nav-bar

harm_btn.addEventListener("click", () => {
  nav_bar.classList.toggle("active");
  cover_bg.classList.toggle("active");
  harm_btn.classList.toggle("active");
});

cover_bg.addEventListener("click", () => {
  cover_bg.classList.remove("active");
  nav_bar.classList.remove("active");
  harm_btn.classList.remove("active");
});

nav_list.forEach((nav_li) => {
  nav_li.addEventListener("click", () => {
    cover_bg.classList.remove("active");
    nav_bar.classList.remove("active");
    harm_btn.classList.remove("active");
  });
});

window.onscroll = function () {
  cover_bg.classList.remove("active");
  nav_bar.classList.remove("active");
  harm_btn.classList.remove("active");
};

let url_locate = window.location.pathname;

nav_list.forEach((nav_li) => {
  let nav_url = nav_li.pathname;
  if (url_locate == nav_url) {
    nav_li.classList.add("nav_locate");
  }
});

//email sender
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "victorlodoliver@gmail.com",
    Password: "E7756217CEA069E2DB92AD03B5A72AE75815",
    To: "victorlodoliver@gmail.com",
    From: "victorlodoliver@gmail.com",
    Subject: "",
    Body:
      "Name: " +
      document.getElementById("userName").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("email-msg").value,
  }).then((message) =>
    alert(document.getElementById("userName").value + " Email sent"),
  );
}

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    // Close other items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});

// contact form - whatsapp integration

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let message = document.getElementById("message").value;

    let phone = "2347066071996"; // your WhatsApp number

    let text = `Hello, my name is ${name}.
My number is ${number}.
${message}`;

    let encodedText = encodeURIComponent(text);

    let url = `https://wa.me/${phone}?text=${encodedText}`;

    window.open(url, "_blank");
});

