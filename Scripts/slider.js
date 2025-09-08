var currentSlide = 1;
var sliderImgs;
var slidesCount;
var nextButton;
var prevButton;
var slideNumberElement = document.getElementById('slidenumber');
var indicatorElement = document.getElementById('indicator-ul');
var indicatorNewUL = document.getElementById('indicator-ul');

function updateSlider() {
    // Clear previous indicators
    indicatorElement.innerHTML = "";

    // Get all slider images
    sliderImgs = Array.from(document.querySelectorAll('.slidercontainer img'));
    slidesCount = sliderImgs.length;

    // Get navigation buttons
    nextButton = document.getElementById('next');
    prevButton = document.getElementById('prev');

    // Assign button click events
    nextButton.onclick = nextSlide;
    prevButton.onclick = prevSlide;

    // Create indicator items with thumbnails
    for (var i = 1; i <= slidesCount; i++) {
        var indicatorItem = document.createElement('li');
        indicatorItem.setAttribute('dataIndex', i);

        var indicatorImage = document.createElement('img');
        indicatorImage.src = sliderImgs[i - 1].src;
        indicatorImage.style.width = "70px";
        indicatorImage.style.objectFit = "cover";

        indicatorItem.appendChild(indicatorImage);
        indicatorElement.appendChild(indicatorItem);
    }

    // Attach click events to the new indicator items
    var updatedIndicatorItems = Array.from(document.querySelectorAll('#indicator-ul li'));
    updatedIndicatorItems.forEach(function (item) {
        item.addEventListener('click', function () {
            currentSlide = parseInt(this.getAttribute('dataIndex'));
            checker();
        });
    });

    checker();
}

function nextSlide() {
    if (nextButton.classList.contains('disabled')) return;
    currentSlide++;
    checker();
}

function prevSlide() {
    if (prevButton.classList.contains('disabled')) return;
    currentSlide--;
    checker();
}

function checker() {
    slideNumberElement.textContent = currentSlide + ' of ' + slidesCount;

    removeActive();

    // Show active image
    sliderImgs[currentSlide - 1].classList.add('active');

    // Highlight active indicator
    indicatorNewUL.children[currentSlide - 1].classList.add('active');

    // Disable prev button if first slide
    prevButton.classList.toggle('disabled', currentSlide === 1);

    // Disable next button if last slide
    nextButton.classList.toggle('disabled', currentSlide === slidesCount);
}

function removeActive() {
    sliderImgs.forEach(img => img.classList.remove('active'));
    Array.from(indicatorNewUL.children).forEach(item => item.classList.remove('active'));
}
