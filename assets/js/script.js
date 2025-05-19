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

// function activateCard(cardId) {
//     // Hide all tab contents
//     console.log('cardId', cardId);

//     document.querySelectorAll(".tab-content").forEach((content) => {
//         content.classList.add("hidden");
//     });

//     // Show the selected tab content
//     const contentId = `content-${cardId}`;
//     document.getElementById(contentId).classList.remove("hidden");

//     // Remove active styles from all owl-item wrappers
//     document.querySelectorAll(".owl-item").forEach((item) => {
//         item.classList.add("mb-1", "md:mb-5", "border-b-0", "rounded-bl-lg");
//     });

//     // Remove arrow rotation from all cards
//     document.querySelectorAll(".tabs > div").forEach((card) => {
//         const svg = card.querySelector("a #arrow-svg");
//         if (svg) {
//             svg.classList.remove("rotate-90");
//         }
//     });

//     // Add active styles to the parent .owl-item of the clicked card
//     const activeCard = document.getElementById(cardId);
//     const activeItem = activeCard.parentElement;
//     console.log('activeItemactiveItem', activeItem);

//     if (activeItem) {
//         activeItem.classList.remove("mb-1", "md:mb-5", "border-b-0", "rounded-bl-lg");
//     }

//     // Rotate the arrow for the active card
//     const activeSvg = activeCard.querySelector("a #arrow-svg");
//     if (activeSvg) {
//         activeSvg.classList.add("rotate-90");
//     }
// }


document.addEventListener('DOMContentLoaded', () => {
    activateCard("card-1");

    if (typeof $ !== "undefined" && $('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 16,
            nav: false,
            dots: false,
            responsive: {
                0: { items: 1.2 },
                640: { items: 2.2 },
                1024: { items: 3 }
            }
        });
    }
});