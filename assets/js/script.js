const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');
const close = document.getElementById('menuClose');

toggle.addEventListener('click', () => {
    menu.classList.remove('hidden'); // Show the menu
});

close.addEventListener('click', () => {
    menu.classList.add('hidden'); // Hide the menu
});

// tab bar
function activateCard(cardId) {
    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.add("hidden");
    });

    // Show the selected tab content
    const contentId = `content-${cardId}`;
    document.getElementById(contentId).classList.remove("hidden");

    // Remove active class from all cards
    document.querySelectorAll(".tabs > div").forEach((card) => {
        card.classList.remove("border-b-0");
        card.classList.add("md:mb-5");
        card.classList.add("mb-1");
        card.classList.add("rounded-bl-lg");
        const svg = card.querySelector("a #arrow-svg");
        if (svg) {
            svg.classList.remove("rotate-90");
        }
    });

    // Add active class to the selected card
    const activeCard = document.getElementById(cardId);
    activeCard.classList.add("border-b-0");
    activeCard.classList.remove("md:mb-5");
    activeCard.classList.remove("mb-1");
    activeCard.classList.remove("rounded-bl-lg");

    activeCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

    const activeSvg = activeCard.querySelector("a #arrow-svg");
    if (activeSvg) {
        activeSvg.classList.add("rotate-90");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    activateCard("card-1");
});