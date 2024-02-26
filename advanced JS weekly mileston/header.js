var navElement = document.createElement("nav");

var headerDiv = document.createElement("div");
headerDiv.classList.add("header", "f-center");

var logoImg = document.createElement("img");
logoImg.src = "./assets/flipkart.svg";
logoImg.alt = "flipkart logo";
logoImg.id = "logo";

var searchInput = document.createElement("input");
searchInput.type = "search";
searchInput.name = "search";
searchInput.id = "search";
searchInput.placeholder = "Search";

var innerFcenterDiv = document.createElement("div");
innerFcenterDiv.classList.add("f-center");

var sellerParagraph = document.createElement("p");
sellerParagraph.classList.add("top");
sellerParagraph.textContent = "Become a seller";

var cartParagraph = document.createElement("p");
cartParagraph.classList.add("top");
cartParagraph.textContent = "Cart";

innerFcenterDiv.appendChild(sellerParagraph);
innerFcenterDiv.appendChild(cartParagraph);

headerDiv.appendChild(logoImg);
headerDiv.appendChild(searchInput);
headerDiv.appendChild(innerFcenterDiv);

navElement.appendChild(headerDiv);

document.body.appendChild(navElement);
