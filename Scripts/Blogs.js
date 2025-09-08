const blogs = [
    {
      title: "White Sneakers",
      image: "../Assets/WhiteSneakers.jpg",
      preview: "white sneakers that can help elevate your wardrobe and style!",
      content: "White sneakers are a wardrobe staple that can be worn in any season,not just after Labor Day. The key to integrating everyday sneakers into your wardrobe is to choose a more fashion-forward style rather than an athletic one. This choice will help create a polished look, making your outfit feel more appropriate for daily wear rather than as if you're heading to a workout."
    },
    {
      title: "24 Types of Necklines for Women’s Tops and Dresses",
      image:"../Assets/necklinechart.jpg",
      preview: "This will help you shop for tops more easily because it provides some style order with respect to the neckline..",
      content: "When you shop for clothes, especially tops when there are so many types, you tend to forget specific style cuts such as necklines.  By knowing the neckline options, you can narrow down your search for tops by neckline, which can help."
    },
    {
      title: "2025 Jeans Trends ",
      image: "../Assets/Jeans.jpg",
      preview: "The best jeans for your Body shape.",
      content: "A well-fitting pair of jeans can enhance your wardrobe. Blue, black, and white washes are timeless options that are always in style year-round, so treat yourself to some variety!"
    },
    {
      title: "How To Wear Leather",
      image: "../Assets/leatherjackets.jpeg",
      preview: "If you've been enjoying the leather trend, don't be afraid to embrace it!.",
      content: "There are always ways to style an outfit so that it feels right for you. While leather is a trendy item suitable for fall and winter, many people avoid it because they think it's too flashy. The key is in the styling and choosing the right garments to pair with it, which can make this trendy style feel more practical and less flashy."
    },
    {
      title: "Woman’s Clothing Size Conversion Chart (Pants, Shirts & Jackets)",
      image: "../Assets/WomenClothingSizeChart.jpg",
      preview: "When retailers first started selling clothes, I heard lots of people say that it wouldn’t take off because people can’t try it on and people just LOVE or HAVE TO try clothes on before buying.",
      content: "3 types of sizing:1. Small to XXXLarge.2. US sizing, and3. EU sizing.All of the above three are not helpful if you don’t know what that means in inches.For example, what is the waist size for a size 4?  Check our chart. It’s 26.8″.  Or, put another way, what size is a 27″ inch waist?  It’s a small."
    },
    {
      title: "Different Types of Sweatshirts",
      image: "../Assets/sweatshirts.jpg",
      preview: "Crewneck Sweatshirt./Polo Sweatshirt./Hoodies/Pullover",
      content:"In its simplest, “purest” form, a crew neck sweatshirt consists of a some-what-heavier-than-a-T-shirt long-sleeved shirt with a crew neck, meaning it’s round and collarless.  These comfortable, functional shirts are a great source of warmth and are frequently worn by men and women." 
    }
  ];
  
  const container = document.getElementById("blogContainer");
  
  blogs.forEach((blog, i) => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}">
      <div class="content">
        <h3>${blog.title}</h3>
        <p>${blog.preview}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(blog));
    container.appendChild(card);
  });
  
  function openModal(blog) {
    document.getElementById("modalTitle").textContent = blog.title;
    document.getElementById("modalContent").textContent = blog.content;
    document.getElementById("modalImage").src = blog.image;
    document.getElementById("blogModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("blogModal").style.display = "none";
  }
  