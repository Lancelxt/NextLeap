// Assuming your JSON data is stored in a variable named productJSON

// Create a div element
const containerDiv = document.createElement('div');

// Add a class to the div using classList
containerDiv.classList.add('container');

// Append the div to the body of the document (you can append it to any other element as needed)
document.body.appendChild(containerDiv);

// Fetching data for each product
productJSON.forEach(product => {
    // Accessing properties of each product
    const title = product.title;
    const imageUrl = product.image.url;
    const overallRating = product.ratings.overallRating;
    const totalRatingsNum = product.ratings.totalRatingsNum;
    const totalReviewsNum = product.ratings.totalReviewsNum;
    const featuresList = product.featuresList;
    const freeDelivery = product.freeDelivery;
    const mrp = product.price.mrp;
    const finalPrice = product.price.finalPrice;
    const discountType = product.price.discount.type;
    const discountData = product.price.discount.data;
    const exchangeOfferType = product.exchangeOfferDiscount.type;
    const exchangeOfferData = product.exchangeOfferDiscount.data;
    const bankOffersLink = product.bankOffersLink;
    const productPageLink = product.productPageLink.url;

    // Create a div element for each product
    const itemDiv = document.createElement('div');

    // Add a class to the div using classList
    itemDiv.classList.add('item');

    // Append the itemDiv to the containerDiv
    containerDiv.appendChild(itemDiv);

    const content = document.createElement('div')
    content.classList.add('content')
    containerDiv.appendChild(content)

    content.appendChild(itemDiv)

    // Create an img element for each product
    const img = document.createElement('img');

    // Set the source (URL) for the image
    img.src = imageUrl; 
    img.alt = product.image.alt;
    img.height = product.image.height;
    img.width = product.image.width;

    // Append the imgElement to the itemDiv
    itemDiv.appendChild(img);

  const description = document.createElement('div');
  description.classList.add('description');
  itemDiv.appendChild(description);

  const descriptionTitle = document.createElement('a');
  descriptionTitle.classList.add('item-title');

  descriptionTitle.textContent = title;
  descriptionTitle.href = productPageLink;

  description.appendChild(descriptionTitle);

  const ratingContainer = document.createElement('div');
  ratingContainer.classList.add('rate-container');

  description.appendChild(ratingContainer);
  

  const rating = document.createElement('div');
  rating.classList.add('rating');
  rating.textContent = product.ratings.overallRating;

  ratingContainer.appendChild(rating);

  const grade = document.createElement('img');
  grade.src = "./assets/grade.svg"

  rating.appendChild(grade);


  const review = document.createElement('div');
  review.classList.add('review');
  review.textContent = product.ratings.totalRatingsNum + " Ratings" + " & " + product.ratings.totalReviewsNum + " Reviews";


  ratingContainer.appendChild(review);


  // Create a div element for the feature list
const featureList = document.createElement('div');
featureList.classList.add('feature-list');
description.appendChild(featureList);

// Create a ul element for the features
const featuresUl = document.createElement('ul');

// Assuming you have the featuresList array from your JSON data
featuresListUl = productJSON[0].featuresList;

// Iterate through the featuresList and create li elements
featuresList.forEach(feature => {
    const liElement = document.createElement('li');
    liElement.textContent = feature;
    featuresUl.appendChild(liElement);
});

// Append the ul element to the featureList div
featureList.appendChild(featuresUl);

const PriceContainer = document.createElement('div');
PriceContainer.classList.add('price-container');
itemDiv.appendChild(PriceContainer);

const price = document.createElement('div')
price.classList.add('price')
price.textContent = "Rs. "+ product.price.finalPrice;
PriceContainer.appendChild(price);

const maxPrice = document.createElement('div')
maxPrice.classList.add('max-price')

const discount = document.createElement('span')
discount.classList.add('discount')
discount.textContent = " " +product.price.discount.data + "% " +" Off"

maxPrice.textContent = "Rs. "+ product.price.mrp;
maxPrice.appendChild(discount)
PriceContainer.appendChild(maxPrice);

const delivery = document.createElement('div')
delivery.classList.add('free-delivery')
PriceContainer.appendChild(delivery)

// Check if freeDelivery is true
if (product.freeDelivery) {
  delivery.textContent = "Free Delivery";
} else {
  delivery.textContent = "Standard Delivery"; // or any other text you want for false condition
}


const exchangeOffer = document.createElement('div');
exchangeOffer.classList.add('exchange-offer');
PriceContainer.appendChild(exchangeOffer);

exchangeOffer.textContent = 'Upto ';


const exchangeSpan = document.createElement('span');
exchangeSpan.textContent = "Rs. " + product.exchangeOfferDiscount.data;
exchangeSpan.style.fontWeight = 'bold';


exchangeOffer.appendChild(exchangeSpan);

exchangeOffer.insertAdjacentText('beforeend', ' on Exchange');


const bankOffer = document.createElement('div')
bankOffer.classList.add('bank-offer');
PriceContainer.appendChild(bankOffer)


bankOfferLink =document.createElement('a')
bankOfferLink.textContent = product.bankOffersLink.buttonText;
bankOffer.appendChild(bankOfferLink)


const CheckBoxes = document.createElement('div')
CheckBoxes.classList.add('check-boxes')
// CheckBoxes.style.display = 'block'
content.appendChild(CheckBoxes)

const addToCart = document.createElement('div')
addToCart.classList.add('addToCart')
CheckBoxes.appendChild(addToCart)


const addToCompare = document.createElement('div')
addToCompare.classList.add('addToCompare')
CheckBoxes.appendChild(addToCompare)

// Create checkbox for "Add to Cart"
const addToCartCheckbox = document.createElement('input');
addToCartCheckbox.type = 'checkbox';
addToCartCheckbox.id = 'addToCartCheckbox'; // Provide a unique ID
addToCart.appendChild(addToCartCheckbox);

// Create label for "Add to Cart" checkbox
const addToCartLabel = document.createElement('label');
addToCartLabel.textContent = 'Add to Cart';
addToCartLabel.htmlFor = 'addToCartCheckbox'; // Use the same ID as the associated checkbox
addToCart.appendChild(addToCartLabel);

// Create checkbox for "Add to Compare"
const addToCompareCheckbox = document.createElement('input');
addToCompareCheckbox.type = 'checkbox';
addToCompareCheckbox.id = 'addToCompareCheckbox'; // Provide a unique ID
addToCompare.appendChild(addToCompareCheckbox);

// Create label for "Add to Compare" checkbox
const addToCompareLabel = document.createElement('label');
addToCompareLabel.textContent = 'Add to Compare';
addToCompareLabel.htmlFor = 'addToCompareCheckbox'; // Use the same ID as the associated checkbox
addToCompare.appendChild(addToCompareLabel);





});
