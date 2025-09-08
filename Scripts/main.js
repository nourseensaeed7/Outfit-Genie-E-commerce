

// hero
window.addEventListener('DOMContentLoaded', () => {
 // Typing effect for hero tagline
 const tagline = document.querySelector('.hero-content p');
 if (tagline) {
     const fullText = tagline.textContent;
     tagline.textContent = '';
     let i = 0;
     function typeChar() {
         if (i < fullText.length) {
             tagline.textContent += fullText.charAt(i);
             i++;
             setTimeout(typeChar, 38);
         }
     }
     setTimeout(typeChar, 600);
 }
 // Pulse animation for Shop Now button
 const shopBtn = document.querySelector('.button-container button');
 if (shopBtn) {
     shopBtn.classList.add('pulse-anim');
 }
});
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
        .pulse-anim {
    animation: pulseGlow 1.6s infinite alternate cubic-bezier(.4,0,.2,1);
    box-shadow: 0 0 0 0 rgba(161,140,209,0.18), 0 0 16px 4px #a18cd133;
}
@keyframes pulseGlow {
    0% { box-shadow: 0 0 0 0 rgba(161,140,209,0.18), 0 0 16px 4px #a18cd133; }
    100% { box-shadow: 0 0 0 12px rgba(161,140,209,0.08), 0 0 32px 8px #a18cd144; }
}
    </style>
`); 
