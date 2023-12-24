const formattedData = [];
let selectedData = [];

// Function to create divs
function createDiv() {
  // Create a new div element
  var divElement = document.createElement("div");
  return divElement;
}

const containerDiv = createDiv();
containerDiv.classList.add("container");

// Append the div to the body of the document (you can append it to any other element as needed)
document.body.appendChild(containerDiv);

// Counter for the "Add to Compare" functionality
let compareCount = parseInt(localStorage.getItem("compareCount")) || 0;

// Function to update the compare count in both UI and localStorage
const updateCompareCount = () => {
  if (compareCount >= 0) {
    localStorage.setItem("compareCount", compareCount);
    compareBtn.textContent = `COMPARE (${compareCount})`;
  } else {
    compareCount = 0;
  }
};

// Fetching data for each product
productJSON.forEach((product) => {
  const title = product.title;
  const imageUrl = product.image.url;
  const featuresList = product.featuresList;
  const productPageLink = product.productPageLink.url;
  formattedData.push({ title, imageUrl });

  const itemDiv = createDiv();
  itemDiv.classList.add("item");
  containerDiv.appendChild(itemDiv);

  const content = createDiv();
  content.classList.add("content");
  containerDiv.appendChild(content);

  content.appendChild(itemDiv);

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = product.image.alt;
  img.height = product.image.height;
  img.width = product.image.width;
  itemDiv.appendChild(img);

  const description = createDiv();
  description.classList.add("description");
  itemDiv.appendChild(description);

  const descriptionTitle = document.createElement("a");
  descriptionTitle.classList.add("item-title");

  descriptionTitle.textContent = title;
  descriptionTitle.href = productPageLink;

  description.appendChild(descriptionTitle);

  const ratingContainer = createDiv();
  ratingContainer.classList.add("rate-container");

  description.appendChild(ratingContainer);

  const rating = createDiv();
  rating.classList.add("rating");
  rating.textContent = product.ratings.overallRating;

  ratingContainer.appendChild(rating);

  const grade = document.createElement("img");
  grade.src = "./assets/grade.svg";

  rating.appendChild(grade);

  const review = createDiv();
  review.classList.add("review");
  review.textContent =
    product.ratings.totalRatingsNum +
    " Ratings" +
    " & " +
    product.ratings.totalReviewsNum +
    " Reviews";

  ratingContainer.appendChild(review);

  // feature list
  const featureList = createDiv();
  featureList.classList.add("feature-list");
  description.appendChild(featureList);

  const featuresUl = document.createElement("ul");
  featuresListUl = productJSON[0].featuresList;

  // Iterate through the featuresList and create li elements
  featuresList.forEach((feature) => {
    const liElement = document.createElement("li");
    liElement.textContent = feature;
    featuresUl.appendChild(liElement);
  });

  featureList.appendChild(featuresUl);

  const PriceContainer = createDiv();
  PriceContainer.classList.add("price-container");
  itemDiv.appendChild(PriceContainer);

  const price = createDiv();
  price.classList.add("price");
  price.textContent = "Rs. " + product.price.finalPrice;
  PriceContainer.appendChild(price);

  const maxPrice = createDiv();
  maxPrice.classList.add("max-price");

  const discount = document.createElement("span");
  discount.classList.add("discount");
  discount.textContent = " " + product.price.discount.data + "% " + " Off";

  maxPrice.textContent = "Rs. " + product.price.mrp;
  maxPrice.appendChild(discount);
  PriceContainer.appendChild(maxPrice);

  const delivery = createDiv();
  delivery.classList.add("free-delivery");
  PriceContainer.appendChild(delivery);

  // Check if freeDelivery is true
  if (product.freeDelivery) {
    delivery.textContent = "Free Delivery";
  } else {
    delivery.textContent = "Standard Delivery";
  }

  const exchangeOffer = createDiv();
  exchangeOffer.classList.add("exchange-offer");
  PriceContainer.appendChild(exchangeOffer);

  exchangeOffer.textContent = "Upto ";

  const exchangeSpan = document.createElement("span");
  exchangeSpan.textContent = "Rs. " + product.exchangeOfferDiscount.data;
  exchangeSpan.style.fontWeight = "bold";

  exchangeOffer.appendChild(exchangeSpan);
  exchangeOffer.insertAdjacentText("beforeend", " on Exchange");

  const bankOffer = createDiv();
  bankOffer.classList.add("bank-offer");
  PriceContainer.appendChild(bankOffer);

  bankOfferLink = document.createElement("a");
  bankOfferLink.textContent = product.bankOffersLink.buttonText;
  bankOffer.appendChild(bankOfferLink);

  const CheckBoxes = createDiv();
  CheckBoxes.classList.add("check-boxes");
  content.appendChild(CheckBoxes);

  const addToCart = createDiv();
  addToCart.classList.add("addToCart");
  CheckBoxes.appendChild(addToCart);

  const addToCompare = createDiv();
  addToCompare.classList.add("addToCompare");
  CheckBoxes.appendChild(addToCompare);

  // Create checkbox for "Add to Cart"
  const addToCartCheckbox = document.createElement("input");
  addToCartCheckbox.type = "checkbox";
  addToCartCheckbox.id = "addToCartCheckbox";
  addToCart.appendChild(addToCartCheckbox);

  // Create label for "Add to Cart" checkbox
  const addToCartLabel = document.createElement("label");
  addToCartLabel.textContent = "Add to Cart";
  addToCartLabel.htmlFor = "addToCartCheckbox";
  addToCart.appendChild(addToCartLabel);

  // Create checkbox for "Add to Compare"
  const addToCompareCheckbox = document.createElement("input");
  addToCompareCheckbox.type = "checkbox";
  addToCompareCheckbox.classList.add("compare-checkbox");

  addToCompareCheckbox.id = `addToCompareCheckbox_${compareCount}`;
  addToCompare.appendChild(addToCompareCheckbox);

  // Create label for "Add to Compare" checkbox
  const addToCompareLabel = document.createElement("label");
  addToCompareLabel.textContent = "Add to Compare";
  addToCompareLabel.htmlFor = `addToCompareCheckbox_${compareCount}`;
  addToCompare.appendChild(addToCompareLabel);

  // Add event listener for the "Add to Compare" checkbox
  addToCompareCheckbox.addEventListener("change", () => {
    if (addToCompareCheckbox.checked) {
      compareCount++;
    } else {
      compareCount = Math.max(0, compareCount - 1); 
    }
    updateCompareCount();
  });
});

// COMPARE button
const compareBtn = document.createElement("button");
compareBtn.classList.add("compare-btn");
containerDiv.appendChild(compareBtn);

compareBtn.textContent = `COMPARE ${0}`;

// product cards
const productCardsDiv = createDiv();
productCardsDiv.classList.add("product-cards");

containerDiv.appendChild(productCardsDiv);

const showCompareButton = function () {
  [product.title, product.image.url];
};

const checkboxes = document.querySelectorAll(".compare-checkbox");

// handle checkbox state change
function handleCheckboxChange(event, index) {
  const checkbox = event.target;

  if (checkbox.checked) {
    selectedData.push({ ...formattedData[index], index });
  } else {
    selectedData = selectedData.filter((data) => data.index != index);
  }

  updateCompareButton();
}

// update the compare button state
function updateCompareButton() {
  if (selectedData.length > 0) {
    compareBtn.classList.add("show");
    productJSON.forEach((product) => {
      // Create a div element for each product
      const productCardDiv = createDiv();
      productCardDiv.classList.add("product-card");

      // Add product details to the card
      const title = document.createElement("h6");
      const cardImg = document.createElement("img");

      title.textContent = product.title;
      productCardDiv.appendChild(title);

      cardImg.src = product.image.url;

      productCardDiv.appendChild(cardImg);

      productCardsDiv.appendChild(productCardDiv);
    });
  } else {
    compareBtn.classList.remove("show");
  }

  compareBtn.textContent = `COMPARE ${selectedData.length}`;
}

// Add event listener to each checkbox
checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", (e) => handleCheckboxChange(e, index));
});

// Function to handle checkbox state change
function handleCheckboxChange(event, index) {
  const checkbox = event.target;

  if (checkbox.checked) {
    selectedData.push({ ...formattedData[index], index });
    // Create a div element for each product card
    const productCardDiv = createDiv();
    productCardDiv.classList.add("product-card");
    productCardDiv.dataset.index = index;

    // product card details
    const title = document.createElement("h6");
    const cardImg = document.createElement("img");

    title.textContent = formattedData[index].title;
    title.style.fontWeight = 400;
    cardImg.src = formattedData[index].imageUrl;

    productCardDiv.appendChild(cardImg);
    productCardDiv.appendChild(title);

    productCardsDiv.appendChild(productCardDiv);
  } else {
    selectedData = selectedData.filter((data) => data.index !== index);
    // Remove the product card from the main container
    const cardToRemove = document.querySelector(
      `.product-card[data-index="${index}"]`
    );
    if (cardToRemove) {
      productCardsDiv.removeChild(cardToRemove);
    }
  }

  updateCompareButton();
}

// Function to update the compare button state
function updateCompareButton() {
  if (selectedData.length > 0) {
    compareBtn.classList.add("show");
  } else {
    compareBtn.classList.remove("show");
  }

  compareBtn.textContent = `COMPARE ${selectedData.length}`;
}

