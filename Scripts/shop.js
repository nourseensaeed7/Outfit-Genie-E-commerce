//welcome message 
function showToast(message) {
  let toast = document.createElement('div'); //creat toast container 
  toast.className = 'custom-toast'; // implement toast styling class 
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => { toast.classList.add('show'); }, 10);
  setTimeout(() => {
      toast.classList.remove('show'); // remove the toast after 2.2 seconds
      setTimeout(() => toast.remove(), 400); // remove the element from DOM after fade out
  }, 2200);
}

window.addEventListener('DOMContentLoaded', () => { // DOMContentLoaded event to ensure the DOM is fully loaded before executing the script

    // Show welcome message on shop page
  if (window.location.pathname.includes('shop')) { // 3ashan mtzhrsh m3 kol page
    setTimeout(() => { 
        showToast('Welcome to OutfitGenie! Enjoy shopping the latest trends ✨');
    }, 800); 
}

    // Add hover zoom to product images
    document.querySelectorAll('.product-img').forEach(img => { 
        img.addEventListener('mouseenter', () => { 
            img.style.transform = 'scale(1.08)'; // zoom in effect on hover
            img.style.transition = 'transform 0.3s cubic-bezier(.4,2,.6,1)'; 
        });
        img.addEventListener('mouseleave', () => { // zoom out effect on mouse leave
            img.style.transform = 'scale(1)';
        });
    });

  

    // Light/Dark mode toggle
    createThemeToggle();

});

// Toast notification


// Theme toggle button
function createThemeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.innerHTML = '🌙';
    document.body.appendChild(toggle);
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

// Add styles for toast, cart animation, and dark mode
document.head.insertAdjacentHTML('beforeend', `
<style>
.custom-toast {
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%) scale(0.95);
    background: linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%);
    color: #5b1465;
    font-family: 'Cinzel', serif;
    padding: 1rem 2.5rem;
    border-radius: 30px;
    box-shadow: 0 4px 24px rgba(161,140,209,0.18);
    opacity: 0;
    z-index: 9999;
    font-size: 1.1rem;
    transition: opacity 0.4s, transform 0.4s;
    pointer-events: none;
}
.custom-toast.show {
    opacity: 1;
    transform: translateX(-50%) scale(1);
}
.cart-anim {
    animation: cart-bounce 0.5s cubic-bezier(.4,2,.6,1);
}
@keyframes cart-bounce {
    0% { transform: scale(1); }
    30% { transform: scale(1.15); }
    60% { transform: scale(0.95); }
    100% { transform: scale(1); }
}
.theme-toggle {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 52px;
    height: 52px;
    font-size: 1.7rem;
    box-shadow: 0 4px 16px rgba(161,140,209,0.18);
    cursor: pointer;
    z-index: 9999;
    transition: background 0.3s, transform 0.2s;
}
.theme-toggle:hover {
    background: linear-gradient(90deg, #fbc2eb 0%, #a18cd1 100%);
    transform: scale(1.08);
}
body.dark-mode {
    background: linear-gradient(120deg, #232526 0%, #414345 100%);
    color: #fbc2eb;
}
body.dark-mode .product-card {
    background: linear-gradient(120deg, #232526 0%, #414345 100%);
    color: #fbc2eb;
}
body.dark-mode .section-title, body.dark-mode .product-title {
    color: #fbc2eb;
}
body.dark-mode .price {
    color: #fbc2eb;
}
body.dark-mode .add-to-cart {
    background: linear-gradient(90deg, #232526 0%, #a18cd1 100%);
    color: #fff;
}
body.dark-mode #hero {
    background: linear-gradient(120deg, #232526 0%, #414345 100%), url('backgroundd.jpg') center center/cover no-repeat;
}
body.dark-mode #hero::before {
    background: linear-gradient(120deg, rgba(35,37,38,0.7) 0%, rgba(65,67,69,0.5) 100%);
}
</style>
`); 

const products = [
  {
    id: 1,
    image: "../Assets/floral1.jpg",
    title: "Blossom Lace Garden Dress",
    category: "Dresses",
    price: 25,
    oldPrice: 35,
    description : "Step into a fairytale... hi",
    material: [" Main Fabric: Lightweight cotton blend (cotton 70%, polyester 30%) — breathable and soft with a subtle structured drape.",
        "Lining: Soft cotton voile for comfort and opacity.",
        "Corset Lacing: Satin ribbon (pink) for a delicate, adjustable fit.",
        "Trims: Fine lace around neckline and sleeves.",
        "Buttons/Zipper: Hidden side zipper for easy wear."],
colors: [
      {
        name: "color-pink",
        mainImage: "../Assets/floral1.jpg",
        slidercontainer: [
            "../Assets/floral1.jpg",
            "../Assets/floral2.jpg",
            "../Assets/floral3.jpg",
            "../Assets/floral4.jpg"
        ],
        size: ["S", "M", "L", "XL", "2XL"]
      },
      {
        name: "color-blue",
        mainImage: "../Assets/floralblue1.jpg", // <-- REQUIRED
        slidercontainer: [
            "../Assets/floralblue1.jpg",
            "../Assets/floralblue2.jpg",
            "../Assets/floralblue3.jpg",
            "../Assets/floralblue4.jpg"
        ],
        size: ["S", "M", "L", "XL", "2XL"]
      }
    ]
  },

  {
    id: 2,
    image: "../Assets/dress1.jpeg",
    title: "French Vintage Plaid Dresse",
    price: "200",
    category: "Dresses",
    description : "Blossom Tavimart French Vintage Plaid Dresses Summer Puff Sleeve Square Collar Garden Dress",
    material: [" Main Fabric: Lightweight cotton blend (cotton 70%, polyester 30%) — breathable and soft with a subtle structured drape.",
        "Lining: Soft cotton voile for comfort and opacity"],
colors: [
      {
        name: "color-red",
        mainImage: "../Assets/dress1.jpeg",
        slidercontainer: [
            "../Assets/dress1.jpeg",
            "../Assets/dress2.jpeg",
            "../Assets/dress3.jpeg"
        ],
        size: ["S", "M", "L", "XL", "2XL"]
      }
    ]
  },

  {
    id:3,
    title: "Off-the-Shoulder Ruched Long Sleeve Top",
    description:"hi",
    material:['hi'],
    image: "../Assets/product1.jpg",
    category: "Tops",
    price: 25,
    oldPrice: 35,
    colors:[
      {
        name: "color-red",
        mainImage: "../Assets/product1.jpg",
        slidercontainer: [
            "../Assets/product1.jpg"
            
        ],
        size: ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    id:4,
    title: "Cropped Knit Sweater",
    image: "../Assets/5.jpg",
    description:"hi",
    material:['hi'],
    category: "Tops",
    price: 30,
    colors:[
      {
        name: "color-white",
        mainImage: "../Assets/5.jpg",
        slidercontainer: [
            "../Assets/5.jpg"
        ],
        size: ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    id:5,
    title: "Wide-Leg Cargo Pants",
    image: "../Assets/product15.jpg",
    description:"hi",
    material:['hi'],
    category: "Pants",
    price: 40,
    oldPrice: 55,
    colors:[
      {
        name: "color-jeans",
        mainImage: "../Assets/product15.jpg",
        slidercontainer: [
            "../Assets/product15.jpg"
        ],
        size: ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    id:6,
    title: "Brown Pullover",
    image: "../Assets/AutumnPullover.jpeg",
    description:"hi",
    material:['hi'],
    category: "Sweaters",
    price: 28,
    oldPrice: 38,
    colors:[
      {
        name: "color-brown",
        mainImage: "../Assets/AutumnPullover.jpeg",
        slidercontainer: [
            "../Assets/AutumnPullover.jpeg"
            
        ],
        size: ["S", "M", "L", "XL"]
      }
    ]
  },
  {id:7,
    title: "Corset Top",
    image: "../Assets/product5.jpeg",
    description:"hi",
    material:['hi'],
    category: "Tops",
    price: 35,
    oldPrice: 48,
    colors:[
      {
        name: "color-black",
        mainImage: "../Assets/product5.jpeg",
        slidercontainer: [
            "../Assets/product5.jpeg"
            
        ],
        size: ["S", "M", "L", "XL"]
      }
    ]
    
  },
  { id:8,
    title: "Black Vintage Leather Jacket",
    description:"hi",
    material:['hi'],
    image: "../Assets/product6.jpeg",
    category: "Jackets",
    price: 220,
    oldPrice: 300,
    colors:[
      {
        name: "color-black",
        mainImage: "../Assets/product6.jpeg",
        slidercontainer: [
            "../Assets/product6.jpeg"
            
        ],
        size: ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    id:9,
    title: "Watercolor Print Midi Skirt",
    description:"hi",
    material:['hi'],
    image: "../Assets/product7.jpeg",
    category: "Skirts",
    price: 12,
    oldPrice: 18,
    colors:[
      {
        name: "color-watercolor",
        mainImage: "../Assets/product7.jpeg",
        slidercontainer: [
            "../Assets/product7.jpeg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  {
    id:10,
    title: "American Loose Sweaters",
    description:"hi",
    material:['hi'],
    image: "../Assets/product8.jpeg",
    category: "Sweaters",
    price: 18,
    oldPrice: 25,
    colors:[
      {
        name: "color-blue",
        mainImage: "../Assets/product8.jpeg",
        slidercontainer: [
            "../Assets/product8.jpeg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  {
    id:11,
    title: "Slim Sweet Blouse with Stitching Lace",
    description:"hi",
    material:['hi'],
    image: "../Assets/product9.jpeg",
    category: "Tops",
    price: 24,
    colors:[
      {
        name: "color-white",
        mainImage: "../Assets/product9.jpeg",
        slidercontainer: [
            "../Assets/product9.jpeg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  {
    id:12,
    title: "Navy Blue Sweater",
    description:"hi",
    material:['hi'],
    image: "../Assets/product10.jpeg",
    category: "Sweaters",
    price: 15,
    oldPrice: 20,
    colors:[
      {
        name: "color-blue",
        mainImage: "../Assets/product10.jpeg",
        slidercontainer: [
            "../Assets/product10.jpeg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  { 
    id:13,
    title: "Lantern sleeve Tie Back Satin Top",
    description:"hi",
    material:['hi'],
    image: "../Assets/product11.jpg",
    category: "Tops",
    price: 32,
    colors:[
      {
        name: "color-green",
        mainImage: "../Assets/product11.jpg",
        slidercontainer: [
            "../Assets/product11.jpg",

        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        name: "color-Brown",
        mainImage:"../Assets/BrownToplikeTorquise.jpg",
        slidercontainer: [
            "../Assets/BrownToplikeTorquise.jpg"
            
        ],
        size: ["S", "M", "L", "XL"]
      },
      {
        name: "color-pink",
        mainImage: "../Assets/pinkToplikeTorquise.jpg",
        slidercontainer: [
            "../Assets/pinkToplikeTorquise.jpg"
            
        ],
        size: ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    id:14,
    title: "Square Neck Ruched Hanky Hem Tee",
    description:"hi",
    material:['hi'],
    image: "../Assets/whitetop.jpg",
    category: "Tops",
    price: 16,
    oldPrice: 22,
    colors:[
      {
        name: "color-OffWhite",
        mainImage: "../Assets/whitetop.jpg",
        slidercontainer: [
            "../Assets/whitetop.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  {
    id:15,
    title: "White Top with buttons",
    description:"hi",
    material:['hi'],
    image: "../Assets/whiteTopwithbuttons.jpg",
    category: "Tops",
    price: 55,
    oldPrice: 70,
    colors:[
      {
        name: "color-white",
        mainImage: "../Assets/whiteTopwithbuttons.jpg",
        slidercontainer: [
            "../Assets/whiteTopwithbuttons.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  {
    id:16,
    title: "Vintage Mid Waist Diamond Flare Jeans",
    description:"hi",
    material:['hi'],
    image: "../Assets/product14.jpg",
    category: "Pants",
    price: 55,
    oldPrice: 70,
    colors:[
      {
        name: "color-jeans",
        mainImage: "../Assets/product14.jpg",
        slidercontainer: [
            "../Assets/product14.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  {
    id:17,
    title: "Heavy Cotton Rugby Knit Mint Green",
    description:"hi",
    material:['hi'],
    image: "../Assets/product17.jpg",
    category: "Sweaters",
    price: 55,
    oldPrice: 70,
    colors:[
      {
        name: "color-green",
        mainImage: "../Assets/product17.jpg",
        slidercontainer: [
            "../Assets/product17.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  { 
    id:18,
    title: "Oakland Athletics Pink Jersey",
    description:"hi",
    material:['hi'],
    image: "../Assets/product18.jpg",
    category: "Tops",
    price: 55,
    colors:[
      {
        name: "color-pink",
        mainImage: "../Assets/product18.jpg",
        slidercontainer: [
            "../Assets/product18.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  {
    id:19,
    title: "Pink Corset Top",
    description:"hi",
    material:['hi'],
    image: "../Assets/pinktop.jpeg",
    category: "Tops",
    price: 55,
    colors:[
      {
        name: "pinktop",
        mainImage: "../Assets/pinktop.jpeg",
        slidercontainer: [
            "../Assets/pinktop.jpeg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  {
    id:20,
    title: "Floral Top",
    description:"hi",
    material:['hi'],
    image: "../Assets/floraltop.jpg",
    category: "Tops",
    price: 55,
    colors:[
      {
        name: "color-floral",
        mainImage: "../Assets/floraltop.jpg",
        slidercontainer: [
            "../Assets/floraltop.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  {
    id:21,
    title: "Knit Top",
    description:"hi",
    material:['hi'],
    image: "../Assets/knittop.jpg",
    category: "Tops",
    price: 55,
    colors:[
      {
        name: "color-pink",
        mainImage: "../Assets/knittop.jpg",
        slidercontainer: [
            "../Assets/knittop.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      },
      {
        name: "color-gray",
        mainImage: "../Assets/knittopGray.jpg",
        slidercontainer: [
            "../Assets/knittopGray.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  },
  {
    id:22,
    title: "Blue star denim jeans",
    description:"hi",
    material:['hi'],
    image: "../Assets/Blue Denim Jeans .jpg",
    category: "Pants",
    price: 80,
    colors:[
      {
        name: "color-pink",
        mainImage: "../Assets/Blue Denim Jeans .jpg",
        slidercontainer: [
           "../Assets/Blue Denim Jeans .jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  }
  ,
  {
    id:23,
    title: "Cider White Midi Dress",
    description:"hi",
    material:['hi'],
    image: "../Assets/Cider White Midi Dress.jpg",
    category: "Dresses",
    price: 100,
    colors:[
      {
        name: "color-white",
        mainImage: "../Assets/Cider White Midi Dress.jpg",
        slidercontainer: [
           "../Assets/Cider White Midi Dress.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  }
  ,
  {
    id:24,
    title: "Black Bell Bottom Flared Jeans",
    description:"hi",
    material:['hi'],
    image: "../Assets/Black Bell Bottom Flared Jeans.jpg",
    category: "Pants",
    price: 70,
    colors:[
      {
        name: "color-black",
        mainImage: "../Assets/Black Bell Bottom Flared Jeans.jpg",
        slidercontainer: [
           "../Assets/Black Bell Bottom Flared Jeans.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  }
  ,
  {
    id:25,
    title: "Square Neck Flare Sleeve Ruched Bust Dress",
    description:"hi",
    material:['hi'],
    image: "../Assets/Square Neck Flare Sleeve Ruched Bust Dress.jpg",
    category: "Dresses",
    price: 50,
    colors:[
      {
        name: "color-black",
        mainImage: "../Assets/Square Neck Flare Sleeve Ruched Bust Dress.jpg",
        slidercontainer: [
           "../Assets/Square Neck Flare Sleeve Ruched Bust Dress.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  }
  ,
  {
    id:26,
    title: "Rose short Dress",
    description:"hi",
    material:['hi'],
    image: "../Assets/rosedress.jpg",
    category: "Dresses",
    price: 75,
    colors:[
      {
        name: "color-rose",
        mainImage: "../Assets/rosedress.jpg",
        slidercontainer: [
           "../Assets/rosedress.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  }
  ,
  {
    id:27,
    title: "Rose chemise",
    description:"hi",
    material:['hi'],
    image: "../Assets/product19.jpg",
    category: "Tops",
    price: 40,
    colors:[
      {
        name: "color-rose",
        mainImage: "../Assets/product19.jpg",
        slidercontainer: [
           "../Assets/product19.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  }
  ,
  {
    id:28,
    title: "Black leather jacket",
    description:"hi",
    material:['hi'],
    image: "../Assets/Leather jacket.jpg",
    category: "Jackets",
    price: 120,
    colors:[
      {
        name: "color-black",
        mainImage: "../Assets/Leather jacket.jpg",
        slidercontainer: [
           "../Assets/Leather jacket.jpg"
            
        ],
        size: ["S", "M", "L", "XL","2XL","3XL"]
      }
    ]
  }
  ,
  {
    id:29,
    title: "Burgundy YVES handbag",
    description:"hi",
    material:['hi'],
    image: "../Assets/brugndyyvesBag.jpg",
    category: "Bags",
    price: 120,
    colors:[
      {
        name: "color-black",
        mainImage: "../Assets/brugndyyvesBag.jpg",
        slidercontainer: [
           "../Assets/brugndyyvesBag.jpg"
            
        ],
        size: [ "One-Size"]
      }
    ]
  }
  ,
  {
    id:30,
    title: "White Diesel Bag handbag",
    description:"hi",
    material:['hi'],
    image: "../Assets/Diesel Bags for Women.jpg",
    category: "Bags",
    price: 100,
    colors:[
      {
        name: "color-black",
        mainImage: "../Assets/Diesel Bags for Women.jpg",
        slidercontainer: [
           "../Assets/Diesel Bags for Women.jpg"
            
        ],
        size: [ "One-Size"]
      }
    ]
  }
  ,
  {
    id:31,
    title: "Shoulder Bag Buckle Punk",
    description:"hi",
    material:['hi'],
    image: "../Assets/Shoulder Bag Buckle Punk Bags.jpg",
    category: "Bags",
    price: 110,
    colors:[
      {
        name: "color-black",
        mainImage: "../Assets/Shoulder Bag Buckle Punk Bags.jpg",
        slidercontainer: [
           "../Assets/Shoulder Bag Buckle Punk Bags.jpg"
            
        ],
        size: [ "One-Size"]
      }
    ]
  }
];
//  sort
const grid = document.getElementById("productGrid");
const sortSelect = document.getElementById("sort-select");
const filterButtons = document.querySelectorAll(".filter-btn");
let currentCategory = "all";
let currentSort = "default";

function renderProducts() {

  if (!grid) {
    return;
  }
  let filtered = products.filter(p =>
    currentCategory === "all" ? true : p.category === currentCategory
  );

  switch (currentSort) {
    case "price-low-high":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high-low":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "title-a-z":
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-z-a":
      filtered.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }

  grid.innerHTML = "";

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-category", product.category);

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product-img">
      <h4 class="product-title">${product.title}</h4>
      <p class="product-category">${product.category}</p>
      <div class="price-box">
        <span class="price">$${product.price}</span>
        ${product.oldPrice ? `<del>$${product.oldPrice}</del>` : ""}
      </div>
      <button class="add-to-cart">Add to Cart</button>
    `;

    grid.appendChild(card);
    //added new
    const imgBox = card.querySelector(".product-img");
        imgBox.addEventListener("click", () => {
            sessionStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product.html";
        });
  });
  const addCartButtons = document.querySelectorAll(".add-to-cart");
  addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
      const productBox = event.target.closest(".product-card");
      if (productBox) {
        addToCart(productBox);
      }
    });
  });
  // Add-to-cart animation and notification
  document.querySelectorAll('.add-to-cart').forEach(btn => { 
    btn.addEventListener('click', (e) => { 
        e.preventDefault(); // prevent default action of the button
        btn.classList.add('cart-anim'); // add animation class
        setTimeout(() => btn.classList.remove('cart-anim'), 500); //
        showToast('Added to cart! 🛒');
    });
});
  


}

// Filter button logic
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    renderProducts();
  });
});


// Sort dropdown logic
if(sortSelect){
sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  renderProducts();
});
}

// Initial render
renderProducts();
