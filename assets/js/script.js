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
        card.classList.add("mb-5");
        // card.classList.add("mb-1");
        card.classList.add("rounded-bl-lg");
        const svg = card.querySelector("a #arrow-svg");
        if (svg) {
            svg.classList.remove("rotate-90");
        }
    });

    // Add active class to the selected card
    const activeCard = document.getElementById(cardId);
    activeCard.classList.add("border-b-0");
    activeCard.classList.remove("mb-5");
    // activeCard.classList.remove("mb-1");
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
// Filter functionality for categories
const categories = [
    "Gehechtheid en trauma",
    "Cognitieve gedragstherapie (CGT)",
    "Systeemtherapie",
    "Handelingsgerichte Diagnostiek",
    "Coaching & supervisoren",
    "Juridisch en ethiek"
];

const defaultBtn = document.getElementById('defaultFilterButton');
const filterOptions = document.getElementById('filterOptions');
const selectedFilters = document.getElementById('selectedFilters');
const selectedList = document.getElementById('selectedList');
const filterInstruction = document.getElementById('filterInstruction');
const filterListMobile = document.getElementById('filterListMobile');
const filterListDesktop = document.getElementById('filterListDesktop');
const filterListDesktopWrapper = document.getElementById('filterListDesktopWrapper');

let selected = [];
let filterApplied = false;

// Render category lists for both mobile and desktop
function renderCategoryLists() {
    function renderList(ul) {
        ul.innerHTML = '';
        categories.forEach(cat => {
            const li = document.createElement('li');
            li.className = 'flex gap-2 items-center';
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = cat;
            a.onclick = (e) => {
                e.preventDefault();
                if (!selected.includes(cat)) {
                    selected.push(cat);
                } else {
                    selected = selected.filter(c => c !== cat);
                }
                renderCategoryLists();
            };
            li.appendChild(a);

            if (selected.includes(cat)) {
                const btn = document.createElement('button');
                btn.setAttribute('aria-label', 'Remove filter');
                btn.className = 'text-primary rounded-md bg-white p-1 flex items-center justify-center ml-1';
                btn.innerHTML = `
                    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>`;
                btn.onclick = (e) => {
                    e.stopPropagation();
                    selected = selected.filter(c => c !== cat);
                    renderCategoryLists();
                };
                li.appendChild(btn);
            }
            ul.appendChild(li);
        });
    }

    if (!filterApplied) {
        filterInstruction.textContent = 'Selecteer een categorie';
        renderList(filterListMobile);
        renderList(filterListDesktop);
        selectedFilters.classList.add('hidden');
        if (window.innerWidth >= 768) {
            filterListDesktopWrapper.classList.remove('hidden');
        }
    } else {
        filterInstruction.textContent = 'Klik om te filteren:';
        filterListMobile.innerHTML = '';
        filterListDesktop.innerHTML = '';
        filterListDesktopWrapper.classList.add('hidden');
        renderSelected();
    }
}

// Mobile: Show filter panel
function toggleFilterPanel() {
    filterOptions.classList.remove('hidden');
    defaultBtn.classList.add('hidden');
    selectedFilters.classList.add('hidden');
    filterApplied = false;
    renderCategoryLists();
}

// Apply filters: show only selected list
function applyFilters() {
    filterApplied = true;
    filterOptions.classList.add('hidden');
    defaultBtn.classList.add('hidden');
    filterListDesktopWrapper.classList.add('hidden');
    selectedFilters.classList.remove('hidden');
    filterInstruction.textContent = 'Klik om te filteren:';
    renderSelected();
}

// Show selected filters with cross buttons (no extra <ul>)
function renderSelected() {
    selectedList.innerHTML = '';
    selected.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'flex gap-2 items-center';
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = item;
        const btn = document.createElement('button');
        btn.setAttribute('aria-label', 'Remove filter');
        btn.className = 'text-primary rounded-md bg-white p-1 flex items-center justify-center';
        btn.innerHTML = `
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>`;
        btn.onclick = () => removeSelected(index);

        li.appendChild(a);
        li.appendChild(btn);
        selectedList.appendChild(li);
    });

    if (selected.length === 0) {
        resetToDefault();
    }
}

function removeSelected(index) {
    selected.splice(index, 1);
    renderSelected();
    if (selected.length === 0) {
        resetToDefault();
    }
}

// Reset to default state
function resetToDefault() {
    filterApplied = false;
    selected = [];
    selectedList.innerHTML = '';
    selectedFilters.classList.add('hidden');
    if (window.innerWidth < 768) {
        defaultBtn.classList.remove('hidden');
        filterOptions.classList.add('hidden');
    } else {
        filterListDesktopWrapper.classList.remove('hidden');
    }
    renderCategoryLists();
}

function handleResize() {
    if (window.innerWidth >= 768) {
        defaultBtn.classList.add('hidden');
        filterOptions.classList.add('hidden');
        filterListDesktopWrapper.classList.remove('hidden');
    } else {
        filterListDesktopWrapper.classList.add('hidden');
        defaultBtn.classList.remove('hidden');
    }
    renderCategoryLists();
}

// Initial render
renderCategoryLists();
handleResize();
window.addEventListener('resize', handleResize);