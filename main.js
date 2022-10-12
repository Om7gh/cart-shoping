const myLink = document.querySelectorAll("ul li");
const cartFilled = document.querySelector(".fill");
const avatar = document.querySelector("#avatar");
const bigProduct = document.querySelector(".product .big-one img");
const bigProductSelected = document.querySelector(".after-select .big-one img");
const smallProduct = document.querySelectorAll(".product .small img");
const productSelect = document.querySelector(".after-select");
const smallProductSelected = document.querySelectorAll(
  ".after-select .small img"
);
const body = document.querySelector(".main");
const addQuant = document.querySelector(".control .incress");
const minusQuant = document.querySelector(".control .desincress");
const quant = document.querySelector(".control .total");
const addToCart = document.querySelector(".submit");
let choice = document.querySelector(".img .product-img");
let choiceDescription = document.querySelector(".titl");
let ProductPrice = document.querySelector(".fois");
let productQuant = document.querySelector(".multiple");
let productTotal = document.querySelector("#total");
let cart = document.querySelector(".span .sup");
let title = document.querySelector(".product-title h1");
const emptycart = document.querySelector(".cart-empty");
const trash = document.querySelector(".trash");
const chechBtn = document.querySelector(".check-btn");
let priceContent = document.querySelector(".description .price-container");
let price = document.querySelector(".price");
let priceMultiple = document.querySelector(".fois");
let totalPrice = document.querySelector("#total");
const allCart = document.querySelector(".img");
const toogleBtn = document.querySelector(".toogle #toogle");
const menu = document.querySelector("ul");
var count = 1;

let myImgObject = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
const next = document.querySelector(".next");
const previou = document.querySelector(".previou");
// Variables End

// toogle menu
toogleBtn.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
});
smallProduct.forEach((product) => {
  product.addEventListener("click", function (product) {
    smallProduct.forEach((product) => {
      bigProduct.src = this.src;
      productSelect.style.display = "block";
      bgEffect();
    });
  });
});

smallProductSelected.forEach((product) => {
  product.addEventListener("click", function (product) {
    smallProductSelected.forEach((product) => {
      bigProductSelected.src = this.src;
    });
  });
});
setTimeout(
  productSelect.addEventListener("mouseleave", function () {
    this.style.display = "none";
    resetBody();
  }),
  2000
);

function bgEffect() {
  body.style.opacity = ".5";
  body.style.backgroundColor = "rgba(0,0,0,.4)";
}

function resetBody() {
  body.style.opacity = "1";
  body.style.backgroundColor = "";
  body.style.transition = ".5s";
}

avatar.addEventListener("click", function (e) {
  if (cartFilled.style.opacity == 0) {
    cartFilled.style.opacity = "1";
    cartFilled.style.transform = "scale(1)";
  } else {
    cartFilled.style.opacity = "0";
  }
});

cartFilled.addEventListener("mouseleave", function () {
  cartFilled.style.opacity = "0";
});

myLink.forEach((li) => {
  li.addEventListener("click", function (e) {
    myLink.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  });
});

addToCart.addEventListener("click", function () {
  emptycart.style.display = "none";
  totalProduct();
  addImgToCart();
  addCartDescription();
  addTrash();
  addTotalPrice();
  addBtn();
});

function addTrash() {
  let myTrash = document.createElement("img");
  myTrash.src = "./images/icon-delete.svg";
  myTrash.id = "delete";
  if (trash.innerHTML === "") {
    trash.appendChild(myTrash);
  }
}

function addBtn() {
  const myBtn = document.createElement("button");
  myBtn.id = "check";
  myBtn.type = "button";
  myBtn.innerText = "Chechout";
  if (chechBtn.innerHTML === "") chechBtn.appendChild(myBtn);
}

function addTotalPrice() {
  price.innerText = "$125";
  priceMultiple.innerText = ` x ${cart.innerText} : `;
  const proprePrice = price.innerText.replace("$", "");
  let total = (totalPrice.innerHTML = "$" + proprePrice * cart.innerText);
}

function addImgToCart() {
  let myImg = document.createElement("img");
  myImg.src = bigProduct.src;
  myImg.id = "filled-product";
  if (choice.innerHTML === "") {
    choice.appendChild(myImg);
  }
}

function addCartDescription() {
  choiceDescription.innerText = title.innerText;
}

function totalProduct() {
  cart.innerText = quant.innerText;
}

trash.addEventListener("click", function () {
  chechBtn.style.display = "none";
  x;
});

addQuant.addEventListener("click", addQ);
minusQuant.addEventListener("click", minuQ);

function addQ() {
  count++;
  if (quant.innerText >= 1) {
    quant.innerText = count;
  }
}

function minuQ() {
  if (count > 1) {
    count--;
    quant.innerText = count;
  }
}

// slider product




next.addEventListener("click", function () {
  count++;
  if(count > myImgObject.length -1) {
    count = 0;
  }
slideRightProduct(count)
});

previou.addEventListener("click", function () {
  count--;
  if(count < 0) {
    count = myImgObject.length -1 ;
  }
  slideLeftProduct(count);
});

function slideRightProduct(product) {
  const item = myImgObject[product];
  bigProduct.src = item;
}

function slideLeftProduct(product) {
  const item = myImgObject[product];
  bigProduct.src = item;
}