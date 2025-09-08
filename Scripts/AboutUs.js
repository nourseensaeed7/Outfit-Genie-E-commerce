document.addEventListener('DOMContentLoaded', function() {
    // 1. Logo hover effect
    const logo = document.querySelector('.about-img img');
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.05) rotate(-5deg)';
        logo.style.boxShadow = '0 10px 20px rgba(91, 20, 101, 0.2)';
        logo.style.transition = 'all 0.3s ease';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1) rotate(0)';
        logo.style.boxShadow = 'none';
    });

    // 2. Fashion quote rotator
    const slogan = document.querySelector('.slogan');
    const fashionQuotes = [
        "Fashion Spells, Cast by You.",
        "Style is a way to say who you are without speaking.",
        "Dress like you're already famous.",
        "Confidence is the best outfit.",
        "Live in style, love in fashion."
    ];
    
    let currentQuote = 0;
    setInterval(() => {
        currentQuote = (currentQuote + 1) % fashionQuotes.length;
        slogan.style.opacity = 0;
        setTimeout(() => {
            slogan.textContent = fashionQuotes[currentQuote];
            slogan.style.opacity = 1;
        }, 500);
    }, 3000);

    // 3. Subtle purple gradient animation (stays in purple palette)
    const baseHue = 280; // Base purple hue
    const variationRange = 15; // How much hue variation we allow
    let direction = 1;
    let currentVariation = 0;
    
    setInterval(() => {
        // Oscillate between -variationRange and +variationRange
        currentVariation += 0.2 * direction;
        if (Math.abs(currentVariation) >= variationRange) {
            direction *= -1;
        }
        
        const currentHue = baseHue + currentVariation;
        const lightColor = `hsl(${currentHue}, 70%, 95%)`;
        const darkColor = `hsl(${currentHue}, 60%, 80%)`;
        
        document.body.style.background = `
            linear-gradient(360deg, 
                ${lightColor} 0%, 
                ${darkColor} 100%)`;
    }, 100);
});