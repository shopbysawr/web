// ---- Sitemap-based product search ----
const SITEMAP_URL = "https://shop.bysawr.com/sitemap.xml";
const CACHE_KEY = "sawr_sitemap_products";
const CACHE_DURATION_MS = 6 * 60 * 60 * 1000; // 6 hours

// Known weapon names / acronyms / special terms -> proper casing
const TERM_OVERRIDES = {
    "dsr50": "DSR50",
    "katt": "KATT",
    "amr": "AMR",
    "xrk": "XRK",
    "lr": "LR",
    "7": "7", // keep numbers as-is
    "lw3a1": "LW3A1",
    "fjx": "FJX",
    "kv": "KV",
    "xpr50": "XPR50",
    "svu": "SVU",
    "as": "AS",
    "hdr": "HDR",
    "mors": "MORS",
    "svd": "SVD",
    "ak": "AK",
    "ak47": "AK-47",
    "ak74": "AK-74",
    "m4a1": "M4A1",
    "m4a4": "M4A4",
    "m4a1s": "M4A1-S",
    "awp": "AWP",
    "mw2": "MW2",
    "mw3": "MW3",
    "mwii": "MWII",
    "mwiii": "MWIII",
    "bo1": "BO1",
    "bo2": "BO2",
    "bo3": "BO3",
    "bo4": "BO4",
    "bo6": "BO6",
    "bo7": "BO7",
    "ww2": "WW2",
    "cod4": "COD4",
    "psg1": "PSG-1",
    "l96a1": "L96A1",
    "l118a": "L118A",
    "m21": "M21",
    "ebr": "EBR",
    "m40a3": "M40A3",
    "r700": "R700",
    "vs": "VS",
    "h2m": "H2M",
    "ksv": "KSV",
    "pp919": "PP-919",
    "tac50": "TAC-50",
    "as50": "AS50",
    "rgl80": "RGL-80",
    "w115": "W115",
    "115": "115",
    "mxr17": "MXR-17",
    "m8a1": "M8A1",
    "m15": "M15",
    "ak27": "AK-27",
    "rk9": "RK-9",
    "x9": "X9",
    "ds20": "DS20",
    "xm325": "XM325",
    "m34": "M34",
    "cs2": "CS2",
    "h2m's": "H2M's"
};

// Known camo / cosmetic names — used for camo-aware filtering
const CAMO_TERMS = [
    "gold", "dark matter", "interstellar", "priceless", "diamond",
    "polyatomic", "borealis", "ghoulie", "rotten inferno", "damascus",
    "orion", "red tiger", "blue tiger", "fall", "cherry fizz",
    "party rock", "weaponized 115", "cyborg", "arachnid", "dragon",
    "lava", "crystal", "lightning", "nebula", "absolute zero",
    "dark spine", "obsidian", "shattered gold", "arclight", "tempest",
    "singularity", "golden river", "shiny gold", "rainbow", "spectrum",
    "chrome", "tiger", "void", "ice", "toxic waste", "platinum",
    "psychedelic", "creature", "molten", "1987", "ghosts"
];

function slugToTitle(slug) {
    return slug
        .split("-")
        .map(word => {
            const lower = word.toLowerCase();
            if (TERM_OVERRIDES[lower]) return TERM_OVERRIDES[lower];
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
}

// Detect which camo terms appear in a title (for tagging/boosting)
function detectCamos(title) {
    const lower = title.toLowerCase();
    return CAMO_TERMS.filter(camo => lower.includes(camo));
}

async function loadProductsFromSitemap() {
    // Try cache first
    try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
        if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION_MS) {
            return cached.products;
        }
    } catch (e) {
        // ignore bad cache
    }

    // Fetch and parse sitemap
    const res = await fetch(SITEMAP_URL);
    const text = await res.text();
    const xml = new DOMParser().parseFromString(text, "application/xml");

    const products = Array.from(xml.querySelectorAll("url > loc"))
        .map(loc => loc.textContent)
        .filter(url => url.includes("/b/"))
        .map(url => {
            const slug = url.split("/b/")[1];
            const title = slugToTitle(slug);
            return {
                title: title,
                url: url,
                slug: slug,
                camos: detectCamos(title)
            };
        });

    // Cache it
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            products: products
        }));
    } catch (e) {
        // storage full or unavailable, ignore
    }

    return products;
}

// ---- Integrate into your existing search ----
let allProducts = [];

async function initProductSearch() {
    allProducts = await loadProductsFromSitemap();
}

initProductSearch();

// Updated filter function — searches collections AND products, camo-aware
function filterResults() {
    const query = commandInput.value.toLowerCase().trim();
    let hasResults = false;

    if (query) {
        popularSearchesContainer.classList.add('hidden');
        topCollectionsContainer.classList.add('hidden');
        allCollectionsContainer.classList.remove('hidden');

        // Filter your existing collections list
        const items = allCollectionsContainer.querySelectorAll('.search-item');
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            const match = text.includes(query);
            item.style.display = match ? 'flex' : 'none';
            if (match) hasResults = true;
        });

        // Filter + rank products from sitemap
        const matchingProducts = allProducts
            .map(p => {
                const titleLower = p.title.toLowerCase();
                const titleMatch = titleLower.includes(query);
                const camoMatch = p.camos.some(c => c.includes(query) || query.includes(c));

                if (!titleMatch && !camoMatch) return null;

                // Rank: camo-specific matches and earlier substring matches first
                let score = 0;
                if (camoMatch) score += 10;
                if (titleLower.startsWith(query)) score += 5;
                score -= titleLower.indexOf(query) * 0.01;

                return { ...p, score };
            })
            .filter(Boolean)
            .sort((a, b) => b.score - a.score)
            .slice(0, 20);

        renderProductResults(matchingProducts);
        if (matchingProducts.length > 0) hasResults = true;

    } else {
        popularSearchesContainer.classList.remove('hidden');
        topCollectionsContainer.classList.remove('hidden');
        allCollectionsContainer.classList.add('hidden');
        clearProductResults();
        hasResults = true;
    }

    noResults.classList.toggle('hidden', hasResults);
}

// Renders product search results into a dedicated container
function renderProductResults(products) {
    let container = document.getElementById('product-results-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'product-results-container';
        container.className = 'space-y-1 mt-2';
        allCollectionsContainer.parentNode.insertBefore(container, allCollectionsContainer.nextSibling);
    }

    if (products.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = `
        <div class="text-xs font-semibold text-gray-400 px-2 py-1">Products</div>
        ${products.map(p => `
            <button class="search-item flex items-center justify-between w-full p-2 rounded-lg text-sm group"
                role="option"
                data-url="${p.url}">
                <span class="group-hover:text-blue-600 transition-colors duration-200">${p.title}</span>
            </button>
        `).join('')}
    `;

    container.querySelectorAll('.search-item').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = button.dataset.url;
        });
    });
}

function clearProductResults() {
    const container = document.getElementById('product-results-container');
    if (container) container.innerHTML = '';
}