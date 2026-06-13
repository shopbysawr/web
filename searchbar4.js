// =========================================================
// COLLECTIONS DATA
// =========================================================
const collections = [
    // Main Categories
    { id: "call-of-duty", title: "Call Of Duty", productCount: 1138, url: "https://shop.bysawr.com/collection/call-of-duty" },
    { id: "premade", title: "Premade", productCount: 441, url: "https://shop.bysawr.com/collection/premade" },
    { id: "bo7", title: "Black Ops 7 / BO7", productCount: 220, url: "https://shop.bysawr.com/collection/black-ops-7" },
    { id: "bo6", title: "Black Ops 6 / BO6", productCount: 218, url: "https://shop.bysawr.com/collection/black-ops-6" },
    { id: "mwiii", title: "Modern Warfare III / MWIII", productCount: 305, url: "https://shop.bysawr.com/collection/mwiii" },
    { id: "mwii", title: "Modern Warfare II / MWII", productCount: 105, url: "https://shop.bysawr.com/collection/mwii" },
    { id: "thumbnails", title: "Thumbnails", productCount: 307, url: "https://shop.bysawr.com/collection/thumbnails" },
    { id: "cutouts", title: "Cutouts", productCount: 456, url: "https://shop.bysawr.com/collection/cutouts" },
    { id: "assets", title: "Assets", productCount: 118, url: "https://shop.bysawr.com/collection/assets" },
    { id: "free", title: "Free", productCount: 30, url: "https://shop.bysawr.com/collection/free" },
    { id: "animations", title: "Animations", productCount: 63, url: "https://shop.bysawr.com/collection/animations" },
    { id: "mascot-logos", title: "Mascot Logos", productCount: 38, url: "https://shop.bysawr.com/collection/mascot-logos" },
    { id: "renders-pngs", title: "Renders/PNGs", productCount: 100, url: "https://shop.bysawr.com/collection/renders-pngs" },
    { id: "templates", title: "Templates", productCount: 34, url: "https://shop.bysawr.com/collection/templates" },
    { id: "browse", title: "Browse", productCount: 0, url: "https://shop.bysawr.com/collection/all" },
    { id: "most-popular", title: "Most Popular", productCount: 20, url: "https://shop.bysawr.com/collection/most-popular" },
    { id: "graphics", title: "Graphics", productCount: 23, url: "https://shop.bysawr.com/collection/graphics" },
    { id: "layer-styles", title: "Layer Styles", productCount: 2, url: "https://shop.bysawr.com/collection/layer-styles" },
    { id: "hand-packs", title: "Hand Packs", productCount: 18, url: "https://shop.bysawr.com/collection/hand-packs" },
    { id: "emotes", title: "Emotes", productCount: 8, url: "https://shop.bysawr.com/collection/emotes" },
    { id: "editing", title: "Editing", productCount: 59, url: "https://shop.bysawr.com/collection/editing" },
    { id: "subtitle-packs", title: "Subtitle Packs", productCount: 7, url: "https://shop.bysawr.com/collection/subtitle-packs" },
    { id: "green-screen", title: "Green Screen", productCount: 9, url: "https://shop.bysawr.com/collection/green-screen" },
    { id: "youtube", title: "YouTube", productCount: 21, url: "https://shop.bysawr.com/collection/youtube" },
    { id: "kick", title: "Kick", productCount: 9, url: "https://shop.bysawr.com/collection/kick" },
    { id: "threads", title: "Threads", productCount: 1, url: "https://shop.bysawr.com/collection/threads" },
    { id: "x-twitter", title: "X/Twitter", productCount: 7, url: "https://shop.bysawr.com/collection/x-twitter" },
    { id: "tiktok", title: "TikTok", productCount: 4, url: "https://shop.bysawr.com/collection/tiktok" },
    { id: "instagram", title: "Instagram", productCount: 1, url: "https://shop.bysawr.com/collection/instagram" },
    { id: "twitch", title: "Twitch", productCount: 6, url: "https://shop.bysawr.com/collection/twitch" },
    { id: "transitions", title: "Transitions", productCount: 20, url: "https://shop.bysawr.com/collection/transitions" },
    { id: "bundles", title: "Bundles", productCount: 3, url: "https://shop.bysawr.com/collection/bundles" },

    // Other Games
    { id: "minecraft", title: "Minecraft", productCount: 1, url: "https://shop.bysawr.com/collection/minecraft" },
    { id: "counter-strike", title: "Counter Strike", productCount: 36, url: "https://shop.bysawr.com/collection/counter-strike" },
    { id: "grand-theft-auto", title: "Grand Theft Auto", productCount: 5, url: "https://shop.bysawr.com/collection/grand-theft-auto" },
    { id: "valorant", title: "Valorant", productCount: 16, url: "https://shop.bysawr.com/collection/valorant" },
    { id: "among-us", title: "Among Us", productCount: 6, url: "https://shop.bysawr.com/collection/among-us" },
    { id: "apex-legends", title: "Apex Legends", productCount: 9, url: "https://shop.bysawr.com/collection/apex-legends" },
    { id: "fortnite", title: "Fortnite", productCount: 10, url: "https://shop.bysawr.com/collection/fortnite" },
    { id: "rocket-league", title: "Rocket League", productCount: 2, url: "https://shop.bysawr.com/collection/rocket-league" },
    { id: "xdefiant", title: "XDefiant", productCount: 11, url: "https://shop.bysawr.com/collection/xdefiant" },

    // COD Titles
    { id: "vanguard", title: "Vanguard", productCount: 6, url: "https://shop.bysawr.com/collection/vanguard" },
    { id: "coldwar", title: "Cold War", productCount: 6, url: "https://shop.bysawr.com/collection/cold-war" },
    { id: "mw2019", title: "Modern Warfare / MW2019", productCount: 9, url: "https://shop.bysawr.com/collection/mw2019" },
    { id: "bo4", title: "Black Ops 4 / BO4", productCount: 4, url: "https://shop.bysawr.com/collection/bo4" },
    { id: "ww2", title: "World War 2 / WW2", productCount: 4, url: "https://shop.bysawr.com/collection/ww2" },
    { id: "iw", title: "Infinite Warfare", productCount: 3, url: "https://shop.bysawr.com/collection/iw" },
    { id: "mwr", title: "Modern Warfare Remastered / MWR", productCount: 9, url: "https://shop.bysawr.com/collection/mwr" },
    { id: "bo3", title: "Black Ops 3 / BO3", productCount: 13, url: "https://shop.bysawr.com/collection/bo3" },
    { id: "cod4", title: "Call of Duty 4: Modern Warfare", productCount: 18, url: "https://shop.bysawr.com/collection/cod4" },
    { id: "waw", title: "World at War / WAW", productCount: 4, url: "https://shop.bysawr.com/collection/waw" },
    { id: "mw2", title: "Modern Warfare 2 / MW2", productCount: 151, url: "https://shop.bysawr.com/collection/modern-warfare-2" },
    { id: "bo2", title: "Black Ops 2 / BO2", productCount: 181, url: "https://shop.bysawr.com/collection/black-ops-2" },
    { id: "bo1", title: "Black Ops / BO1", productCount: 23, url: "https://shop.bysawr.com/collection/black-ops-1" },
    { id: "mw3", title: "Modern Warfare 3 / MW3", productCount: 46, url: "https://shop.bysawr.com/collection/modern-warfare-3" },
    { id: "ghosts", title: "Ghosts", productCount: 12, url: "https://shop.bysawr.com/collection/ghosts" },
    { id: "mobile", title: "Call Of Duty Mobile", productCount: 5, url: "https://shop.bysawr.com/collection/call-of-duty-mobile" },

    // Top Weapons
    { id: "vs-recon", title: "VS Recon", productCount: 127, url: "https://shop.bysawr.com/search?q=vs%20recon" },
    { id: "dsr50", title: "DSR50", productCount: 194, url: "https://shop.bysawr.com/search?q=dsr50" },
    { id: "intervention", title: "Intervention", productCount: 156, url: "https://shop.bysawr.com/search?q=intervention" },
    { id: "katt-amr", title: "KATT-AMR", productCount: 137, url: "https://shop.bysawr.com/search?q=KATT-AMR" },
    { id: "barrett", title: "Barrett 50cal", productCount: 27, url: "https://shop.bysawr.com/search?q=barrett" },
    { id: "ballista", title: "Ballista", productCount: 20, url: "https://shop.bysawr.com/collection/ballista" },
    { id: "msr", title: "MSR", productCount: 26, url: "https://shop.bysawr.com/collection/msr" },
    { id: "l118a", title: "L118A", productCount: 14, url: "https://shop.bysawr.com/collection/l118a" },
    { id: "svg", title: "SVG", productCount: 5, url: "https://shop.bysawr.com/collection/svg" },
    { id: "locus", title: "Locus", productCount: 3, url: "https://shop.bysawr.com/collection/locus" },
    { id: "usr", title: "USR", productCount: 4, url: "https://shop.bysawr.com/collection/usr" },
    { id: "lynx", title: "Lynx", productCount: 2, url: "https://shop.bysawr.com/collection/lynx" },
    { id: "lr-762", title: "LR 7.62", productCount: 9, url: "https://shop.bysawr.com/search?q=lr%207.62" },
    { id: "lw3a1-frostline", title: "LW3A1 Frostline", productCount: 9, url: "https://shop.bysawr.com/search?q=LW3A1+Frostline" },
    { id: "ax-50", title: "AX-50", productCount: 9, url: "https://shop.bysawr.com/search?q=AX-50" },
    { id: "svd", title: "SVD", productCount: 5, url: "https://shop.bysawr.com/search?q=SVD" },
    { id: "hdr", title: "HDR", productCount: 11, url: "https://shop.bysawr.com/search?q=HDR" },
    { id: "mors", title: "MORS", productCount: 5, url: "https://shop.bysawr.com/search?q=MORS" },
    { id: "xpr50", title: "XPR50", productCount: 6, url: "https://shop.bysawr.com/search?q=XPR50" },
    { id: "svu-as", title: "SVU-AS", productCount: 5, url: "https://shop.bysawr.com/search?q=SVU-AS" },
    { id: "kar98k", title: "Kar98k", productCount: 18, url: "https://shop.bysawr.com/search?q=kar98k" },

    // Mastery & Popular Camos
    { id: "gold", title: "Gold Camo", productCount: 234, url: "https://shop.bysawr.com/search?q=gold" },
    { id: "darkmatter", title: "Dark Matter Camo", productCount: 82, url: "https://shop.bysawr.com/search?q=dark%20matter" },
    { id: "interstellar", title: "Interstellar Camo", productCount: 60, url: "https://shop.bysawr.com/search?q=interstellar" },
    { id: "priceless", title: "Priceless Camo", productCount: 56, url: "https://shop.bysawr.com/search?q=priceless" },
    { id: "diamond", title: "Diamond Camo", productCount: 40, url: "https://shop.bysawr.com/search?q=diamond" },
    { id: "polyatomic", title: "Polyatomic Camo", productCount: 21, url: "https://shop.bysawr.com/search?q=polyatomic" },
    { id: "borealis", title: "Borealis Camo", productCount: 10, url: "https://shop.bysawr.com/search?q=borealis" },
    { id: "ghoulie", title: "Ghoulie Camo", productCount: 34, url: "https://shop.bysawr.com/search?q=ghoulie" },
    { id: "rotten-inferno", title: "Rotten Inferno Camo", productCount: 11, url: "https://shop.bysawr.com/search?q=rotten%20inferno" },
    { id: "damascus", title: "Damascus Camo", productCount: 15, url: "https://shop.bysawr.com/search?q=damascus" },
    { id: "orion", title: "Orion Camo", productCount: 9, url: "https://shop.bysawr.com/search?q=orion" },
    { id: "red-tiger", title: "Red Tiger Camo", productCount: 17, url: "https://shop.bysawr.com/search?q=red%20tiger" },
    { id: "blue-tiger", title: "Blue Tiger Camo", productCount: 18, url: "https://shop.bysawr.com/search?q=blue%20tiger" },
    { id: "fall", title: "Fall Camo", productCount: 17, url: "https://shop.bysawr.com/search?q=fall" },
    { id: "cherry-fizz", title: "Cherry Fizz Camo", productCount: 7, url: "https://shop.bysawr.com/search?q=cherry%20fizz" },
    { id: "party-rock", title: "Party Rock Camo", productCount: 5, url: "https://shop.bysawr.com/search?q=party%20rock" },
    { id: "weaponized-115", title: "Weaponized 115 Camo", productCount: 27, url: "https://shop.bysawr.com/search?q=weaponized%20115" },
    { id: "cyborg", title: "Cyborg Camo", productCount: 8, url: "https://shop.bysawr.com/search?q=cyborg" },
    { id: "arachnid", title: "Arachnid Camo", productCount: 3, url: "https://shop.bysawr.com/search?q=arachnid" },
    { id: "dragon", title: "Dragon Camo", productCount: 29, url: "https://shop.bysawr.com/search?q=dragon" },
    { id: "lava", title: "Lava Camo", productCount: 6, url: "https://shop.bysawr.com/search?q=lava" },
    { id: "crystal", title: "Crystal Camo", productCount: 11, url: "https://shop.bysawr.com/search?q=crystal" },
    { id: "lightning", title: "Lightning Camo", productCount: 22, url: "https://shop.bysawr.com/search?q=lightning" },
    { id: "nebula", title: "Nebula Camo", productCount: 8, url: "https://shop.bysawr.com/search?q=nebula" },
    { id: "absolute-zero", title: "Absolute Zero Camo", productCount: 4, url: "https://shop.bysawr.com/search?q=absolute%20zero" },
    { id: "dark-spine", title: "Dark Spine Camo", productCount: 5, url: "https://shop.bysawr.com/search?q=dark%20spine" },
    { id: "obsidian", title: "Obsidian Camo", productCount: 2, url: "https://shop.bysawr.com/search?q=obsidian" },

    // Zombies & Wonder Weapons
    { id: "raygun", title: "Ray Gun", productCount: 6, url: "https://shop.bysawr.com/search?q=ray%20gun" },
    { id: "thundergun", title: "Thundergun", productCount: 2, url: "https://shop.bysawr.com/search?q=thundergun" },
    { id: "wunderwaffe", title: "Wunderwaffe", productCount: 2, url: "https://shop.bysawr.com/search?q=wunderwaffe" },
    { id: "pack-a-punch", title: "Pack A Punch", productCount: 8, url: "https://shop.bysawr.com/search?q=pack%20a%20punch" },

    // CS2 & Valorant Weapons
    { id: "awp", title: "AWP", productCount: 5, url: "https://shop.bysawr.com/search?q=awp" },
    { id: "ak47", title: "AK-47", productCount: 6, url: "https://shop.bysawr.com/search?q=ak-47" },
    { id: "m4a4", title: "M4A4", productCount: 4, url: "https://shop.bysawr.com/search?q=m4a4" },
    { id: "m4a1s", title: "M4A1-S", productCount: 3, url: "https://shop.bysawr.com/search?q=m4a1-s" },
    { id: "deagle", title: "Desert Eagle", productCount: 3, url: "https://shop.bysawr.com/search?q=deagle" },
    { id: "vandal", title: "Vandal (Valorant)", productCount: 4, url: "https://shop.bysawr.com/search?q=vandal" },
    { id: "phantom", title: "Phantom (Valorant)", productCount: 4, url: "https://shop.bysawr.com/search?q=phantom" },
    { id: "operator", title: "Operator (Valorant)", productCount: 3, url: "https://shop.bysawr.com/search?q=operator" },

    // Utility Searches
    { id: "screenshot-pack", title: "Screenshot Packs", productCount: 380, url: "https://shop.bysawr.com/search?q=screenshot%20pack" },
    { id: "killcam", title: "Killcam", productCount: 12, url: "https://shop.bysawr.com/search?q=killcam" },
    { id: "killfeed", title: "Killfeed", productCount: 8, url: "https://shop.bysawr.com/search?q=killfeed" },
    { id: "maps", title: "Maps", productCount: 42, url: "https://shop.bysawr.com/search?q=maps" },
    { id: "logo", title: "Logo", productCount: 72, url: "https://shop.bysawr.com/search?q=logo" },
    { id: "render", title: "Renders", productCount: 110, url: "https://shop.bysawr.com/search?q=render" },
    { id: "character-render", title: "Character Render", productCount: 15, url: "https://shop.bysawr.com/search?q=character%20render" },
    { id: "callsign", title: "Callsign", productCount: 3, url: "https://shop.bysawr.com/search?q=callsign" }
];

// Round productCount and add "+"
const roundProductCount = (count) => {
    if (count < 10) return `+${count}`;
    if (count >= 10 && count < 100) return `+${Math.round(count / 5) * 5}`;
    return `+${Math.round(count / 10) * 10}`;
};

collections.forEach(c => {
    c.productCount = roundProductCount(c.productCount);
});

const popularSearches = [
    {
        query: "Premade Thumbnails",
        type: "collection",
        url: "https://shop.bysawr.com/collection/premade",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>`
    },
    {
        query: "Black Ops 7",
        type: "collection",
        url: "https://shop.bysawr.com/collection/black-ops-7",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>`
    },
    {
        query: "Dark Matter",
        type: "search",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"></path><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7m0-4h.01"></path><path d="m11 8l2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"></path></g></svg>`
    },
    {
        query: "Freebies",
        type: "collection",
        url: "https://shop.bysawr.com/collection/free",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="4" x="3" y="8" rx="1"></rect><path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path></g></svg>`
    },
    {
        query: "Ultimate Subtitle Pack",
        type: "product",
        url: "https://shop.bysawr.com/b/ultimate-subtitle-pack",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path><path d="m3.3 7l7.703 4.734a2 2 0 0 0 1.994 0L20.7 7M7.5 4.27l9 5.15"></path></g></svg>`
    }
];

// =========================================================
// SITEMAP-BASED PRODUCT SEARCH
// =========================================================
const SITEMAP_URL = "https://shop.bysawr.com/sitemap.xml";
const CACHE_KEY = "sawr_sitemap_products";
const CACHE_DURATION_MS = 6 * 60 * 60 * 1000; // 6 hours

// Known weapon names / acronyms / special terms -> proper casing
const TERM_OVERRIDES = {
    "dsr50": "DSR50", "katt": "KATT", "amr": "AMR", "xrk": "XRK", "lr": "LR",
    "lw3a1": "LW3A1", "fjx": "FJX", "kv": "KV", "xpr50": "XPR50", "svu": "SVU",
    "as": "AS", "hdr": "HDR", "mors": "MORS", "svd": "SVD", "ak": "AK",
    "ak47": "AK-47", "ak74": "AK-74", "m4a1": "M4A1", "m4a4": "M4A4", "m4a1s": "M4A1-S",
    "awp": "AWP", "mw2": "MW2", "mw3": "MW3", "mwii": "MWII", "mwiii": "MWIII",
    "bo1": "BO1", "bo2": "BO2", "bo3": "BO3", "bo4": "BO4", "bo6": "BO6", "bo7": "BO7",
    "ww2": "WW2", "cod4": "COD4", "psg1": "PSG-1", "l96a1": "L96A1", "l118a": "L118A",
    "m21": "M21", "ebr": "EBR", "m40a3": "M40A3", "r700": "R700", "vs": "VS",
    "h2m": "H2M", "ksv": "KSV", "pp919": "PP-919", "tac50": "TAC-50", "as50": "AS50",
    "rgl80": "RGL-80", "w115": "W115", "mxr17": "MXR-17", "m8a1": "M8A1", "m15": "M15",
    "ak27": "AK-27", "rk9": "RK-9", "x9": "X9", "ds20": "DS20", "xm325": "XM325",
    "m34": "M34", "cs2": "CS2"
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
            if (/^\d+$/.test(word)) return word; // keep pure numbers as-is
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
}

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
            return { title, url, slug, camos: detectCamos(title) };
        });

    // Cache it
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), products }));
    } catch (e) {
        // storage full or unavailable, ignore
    }

    return products;
}

let allProducts = [];

async function initProductSearch() {
    try {
        allProducts = await loadProductsFromSitemap();
    } catch (e) {
        console.error("Failed to load sitemap products:", e);
        allProducts = [];
    }
}

// =========================================================
// DOM ELEMENTS
// =========================================================
const searchInput = document.getElementById('search-input');
const searchDialog = document.getElementById('search-dialog');
const commandInput = document.getElementById('command-input');
const closeDialog = document.getElementById('close-dialog');
const popularSearchesContainer = document.getElementById('popular-searches-container');
const topCollectionsContainer = document.getElementById('top-collections-container');
const allCollectionsContainer = document.getElementById('all-collections-container');
const noResults = document.getElementById('no-results');

// Sort collections by product count (note: productCount is now a string like "+150")
const sortedCollections = [...collections].sort((a, b) => {
    const numA = parseInt(a.productCount.replace('+', ''), 10);
    const numB = parseInt(b.productCount.replace('+', ''), 10);
    return numB - numA;
});
const topCollections = sortedCollections.slice(0, 5);

// =========================================================
// DIALOG OPEN/CLOSE
// =========================================================
function toggleDialog() {
    if (searchDialog.classList.contains('hidden')) {
        searchDialog.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => commandInput.focus(), 100);
    } else {
        searchDialog.classList.add('hidden');
        document.body.style.overflow = '';
        commandInput.value = '';
        filterResults();
    }
}

function performSearch(query) {
    if (query.trim()) {
        window.location.href = `https://shop.bysawr.com/search?q=${encodeURIComponent(query.trim())}`;
    }
}

function handleSelection(item) {
    let url;
    if (item.type === 'product' || item.type === 'collection') {
        url = item.url;
    } else {
        performSearch(item.query || item);
        return;
    }
    window.location.href = url;
}

// =========================================================
// RENDER FUNCTIONS
// =========================================================
function renderPopularSearches() {
    popularSearchesContainer.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${popularSearches.map(search => `
                <button class="search-item group flex items-center space-x-3 w-full text-left p-2 rounded-lg text-sm"
                    role="option">
                    <span class="flex-none text-lg">${search.icon}</span>
                    <span class="flex-1 truncate group-hover:text-blue-600 transition-colors duration-200">${search.query}</span>
                </button>
            `).join('')}
        </div>
    `;

    popularSearchesContainer.querySelectorAll('.search-item').forEach((button, index) => {
        button.addEventListener('click', () => handleSelection(popularSearches[index]));
    });
}

function renderTopCollections() {
    topCollectionsContainer.innerHTML = `
        <div class="space-y-1">
            ${topCollections.map(collection => `
                <button class="search-item flex items-center justify-between w-full p-2 rounded-lg text-sm group"
                    role="option"
                    data-url="${collection.url}">
                    <span class="group-hover:text-blue-600 transition-colors duration-200">${collection.title}</span>
                    <span class="product-count text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-200">${collection.productCount}</span>
                </button>
            `).join('')}
        </div>
    `;

    topCollectionsContainer.querySelectorAll('.search-item').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = button.dataset.url;
        });
    });
}

function renderAllCollections() {
    allCollectionsContainer.innerHTML = `
        <div class="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            All Collections
        </div>
        <div class="space-y-1 max-h-60 overflow-y-auto">
            ${sortedCollections.map(collection => `
                <button class="search-item flex items-center justify-between w-full p-2 rounded-lg text-sm group"
                    role="option"
                    data-url="${collection.url}">
                    <span class="group-hover:text-blue-600 transition-colors duration-200">${collection.title}</span>
                    <span class="product-count text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-200">${collection.productCount}</span>
                </button>
            `).join('')}
        </div>
    `;

    allCollectionsContainer.querySelectorAll('.search-item').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = button.dataset.url;
        });
    });
}

function renderProductResults(products) {
    let container = document.getElementById('product-results-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'product-results-container';
        container.className = 'space-y-1 mt-2 px-2';
        allCollectionsContainer.parentNode.insertBefore(container, allCollectionsContainer.nextSibling);
    }

    if (products.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = `
        <div class="text-xs font-semibold text-gray-400 px-2 py-1 uppercase tracking-wider">Products</div>
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

// =========================================================
// FILTERING / SEARCH
// =========================================================
function filterResults() {
    const query = commandInput.value.toLowerCase().trim();
    let hasResults = false;

    if (query) {
        popularSearchesContainer.classList.add('hidden');
        topCollectionsContainer.classList.add('hidden');
        allCollectionsContainer.classList.remove('hidden');

        // Filter existing collections list
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

// =========================================================
// EVENT LISTENERS
// =========================================================
searchInput.addEventListener('click', toggleDialog);
closeDialog.addEventListener('click', toggleDialog);
commandInput.addEventListener('input', filterResults);

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://shop.bysawr.com/search?q=${encodeURIComponent(query)}`;
        }
    }
});

commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(commandInput.value);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleDialog();
    } else if (e.key === 'Escape' && !searchDialog.classList.contains('hidden')) {
        toggleDialog();
    }
});

document.addEventListener('click', (e) => {
    if (!searchDialog.classList.contains('hidden') &&
        !e.target.closest('.search-content') &&
        !e.target.closest('#search-input')) {
        toggleDialog();
    }
});

// =========================================================
// INITIAL RENDER
// =========================================================
renderPopularSearches();
renderTopCollections();
renderAllCollections();
initProductSearch();