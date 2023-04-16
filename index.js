const pName = document.querySelector(".pName");
const pPrice = document.querySelector(".pPrice");
const pDecs = document.querySelector(".pDESC");
const pQty = document.querySelector(".pQTY");
const category = document.querySelector(".category");
const msg = document.querySelector(".msg");
const form = document.querySelector("form");
// onchange
pName.onchange = function (e) {};

// onSubmit
form.onsubmit = function (e) {
  //prevent the default behave of form
  e.preventDefault();
  //get the value from form
  const name = pName.value;
  const price = pPrice.value;
  const desc = pDecs.value;
  const qty = pQty.value;
  const Category = category.value;

  console.log({ name, price, desc, qty, Category });
};

form.onreset = function (e) {
  //prevent the default behave of form
  e.preventDefault();
  //get the value from form onreswt
  pName.value = "";
  pPrice.value = "";
  pDecs.value = "";
  pQty.value = "";
  category.value = "";
};

// onfocus
pName.onfocus = function () {
  msg.innerHTML = "Typing...";
};

// .onblur
pName.onblur = function () {
  msg.innerHTML = "Online.";
};
