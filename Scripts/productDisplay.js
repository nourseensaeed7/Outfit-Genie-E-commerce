const productContainer = document.querySelector(".product-grid");
const isProductDetailPage = document.querySelector(".product-details");
console.log(products);

if (productContainer) {
  renderProducts();
}

if (isProductDetailPage) {
  displayProductDetail();
}

var selectedColor = null;

//change color of the item
function changeColor(c) {
  const sliderContainer = document.querySelector(".slidercontainer"); // thumbnails
  selectedColor = c;
  //empty element container
  sliderContainer.innerHTML = "";
  selectedColor.slidercontainer.forEach((img_link) => {
    const img = document.createElement("img");
    img.src = img_link;
    sliderContainer.appendChild(img);
  });
  updateSlider();
}

function displayProductDetail() {
  const productData = JSON.parse(sessionStorage.getItem("selectedProduct"));

  const titleEl = document.querySelector(".title");
  const priceEl = document.querySelector(".price");
  const materialEl = document.querySelector(".materials");
  const descriptionEl = document.querySelector(".description");
  const colorContainer = document.querySelector(".color-option");
  const sizeContainer = document.querySelector(".size-option");

  changeColor(productData.colors[0]);
  let selectedSize = selectedColor.size[0];

  console.log(selectedColor.slidercontainer);

  productData.colors.forEach((color) => {
    const img = document.createElement("img");
    img.src = color.mainImage;

    //put default colour
    colorContainer.appendChild(img);

    img.addEventListener("click", () => {
      changeColor(color);
    });
  });

  sizeContainer.innerHTML = "";
  selectedColor.size.forEach((size) => {
    const btn = document.createElement("div");
    const sizeId = `size-${size}`;
    btn.classList.add("size-option");
    //sizeID to connect the label with input for CSS to work
    btn.innerHTML = `
      <input type="radio" name="size" value="${size}" id="${sizeId}" >
      <label for="${sizeId}">${size}</label>
    `;

    sizeContainer.appendChild(btn);

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".size-option input")
        .forEach((el) => el.classList.remove("checked"));

      selectedSize = size;
    });
  });

  titleEl.textContent = productData.title;
  priceEl.textContent = "$" + productData.price;
  materialEl.textContent = productData.material;
  descriptionEl.textContent = productData.description;
}

// Quantity
const qtyElement = document.getElementById("qty");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", () => {
  qtyElement.textContent = parseInt(qtyElement.textContent) + 1;
});

decreaseBtn.addEventListener("click", () => {
  if (parseInt(qtyElement.textContent) > 1) {
    qtyElement.textContent = parseInt(qtyElement.textContent) - 1;
  }
});

function AddToBasket() {
  console.log(selectedColor);
  var r = document.querySelector("input[type='radio']:checked");
  if (!r) {
    alert("Please select a size before adding to basket.");
    return;
  }
  console.log(r.value);
  console.log(qtyElement);
  console.log(document.querySelector(".price").textContent);
}

//Reviews
const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const reviewText = document.getElementById("review");
const submitBtn = document.getElementById("submit");
const reviewsContainer = document.getElementById("reviews");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = parseInt(star.getAttribute("data-value"));
    rating.innerText = value;

    // Remove all existing classes from stars
    stars.forEach((s) =>
      s.classList.remove("one", "two", "three", "four", "five")
    );

    // Add the appropriate class to
    // each star based on the selected star's value
    stars.forEach((s, index) => {
      if (index < value) {
        s.classList.add(getStarColorClass(value));
      }
    });

    // Remove "selected" class from all stars
    stars.forEach((s) => s.classList.remove("selected"));
    // Add "selected" class to the clicked star
    star.classList.add("selected");
  });
});

submitBtn.addEventListener("click", () => {
  const review = reviewText.value.trim();
  const userRating = parseInt(rating.innerText);

  if (!userRating || !review) {
    alert("Please select a rating and provide a review before submitting.");
    return;
  }

  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");

  // Generate star HTML
  let starHTML = "";
  for (let i = 1; i <= 5; i++) {
    starHTML += `<i class="fa-star fa-solid" style="color:${
      i <= userRating ? "#d558dc" : "#ccc"
    }"></i>`;
  }
  const currentDate = new Date().toLocaleDateString();
  reviewElement.innerHTML = `<h3>@Anonymous - <span style="color: gray;">${currentDate}</span></h3><p><strong>Rating: ${starHTML}</strong></p><p>${review}</p>`;
  reviewsContainer.appendChild(reviewElement);

  // Reset styles after submitting
  reviewText.value = "";
  rating.innerText = "0";
  stars.forEach((s) =>
    s.classList.remove("one", "two", "three", "four", "five", "selected")
  );
});

function getStarColorClass(value) {
  switch (value) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    default:
      return "";
  }
}
