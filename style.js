const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");


if (btn1) {
  btn1.addEventListener("click", () => {
    window.location.href = "table.html";
  });
}

const form = document.getElementById("bookingForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    alert("🎉 Table reserved successfully! ☕");

    form.reset();
  });
}

if (btn2) {
  btn2.addEventListener("click", () => {
    window.location.href = "menu.html";
  });
}
