const collections = [
    // Main Categories
    { id: "call-of-duty", title: "Call Of Duty", productCount: 1138, url: "https://shop.bysawr.com/collection/call-of-duty" },
    { id: "premade", title: "Premade", productCount: 441, url: "https://shop.bysawr.com/collection/premade" },
    { id: "mw4", title: "Modern Warfare 4 / MW4", productCount: 53, url: "https://shop.bysawr.com/collection/mw4" },
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

    // MW4 Categories
    { id: "mw4-sniper-rifles", title: "MW4 Sniper Rifles", productCount: 33, url: "https://shop.bysawr.com/collection/mw4-sniper-rifles" },
    { id: "mw4-assault-rifles", title: "MW4 Assault Rifles", productCount: 6, url: "https://shop.bysawr.com/collection/mw4-assault-rifles" },
    { id: "mw4-smgs", title: "MW4 SMGs", productCount: 4, url: "https://shop.bysawr.com/collection/mw4-smgs" },
    { id: "mw4-lmgs", title: "MW4 LMGs", productCount: 2, url: "https://shop.bysawr.com/collection/mw4-lmgs" },
    { id: "mw4-shotguns", title: "MW4 Shotguns", productCount: 1, url: "https://shop.bysawr.com/collection/mw4-shotguns" },
    { id: "mw4-marksman-rifles", title: "MW4 Marksman Rifles", productCount: 2, url: "https://shop.bysawr.com/collection/mw4-marksman-rifles" },
    { id: "mw4-secondaries", title: "MW4 Secondaries", productCount: 3, url: "https://shop.bysawr.com/collection/mw4-secondaries" },
    { id: "mw4-misc", title: "MW4 Misc", productCount: 6, url: "https://shop.bysawr.com/collection/mw4-misc" },

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
    { id: "gold", title: "Gold Camo", productCount: 261, url: "https://shop.bysawr.com/search?q=gold" },
    { id: "darkmatter", title: "Dark Matter Camo", productCount: 85, url: "https://shop.bysawr.com/search?q=dark%20matter" },
    { id: "interstellar", title: "Interstellar Camo", productCount: 60, url: "https://shop.bysawr.com/search?q=interstellar" },
    { id: "priceless", title: "Priceless Camo", productCount: 56, url: "https://shop.bysawr.com/search?q=priceless" },
    { id: "diamond", title: "Diamond Camo", productCount: 35, url: "https://shop.bysawr.com/search?q=diamond" },
    { id: "polyatomic", title: "Polyatomic Camo", productCount: 21, url: "https://shop.bysawr.com/search?q=polyatomic" },
    { id: "borealis", title: "Borealis Camo", productCount: 10, url: "https://shop.bysawr.com/search?q=borealis" },
    { id: "ghoulie", title: "Ghoulie Camo", productCount: 34, url: "https://shop.bysawr.com/search?q=ghoulie" },
    { id: "rotten-inferno", title: "Rotten Inferno Camo", productCount: 11, url: "https://shop.bysawr.com/search?q=rotten%20inferno" },
    { id: "damascus", title: "Damascus Camo", productCount: 17, url: "https://shop.bysawr.com/search?q=damascus" },
    { id: "orion", title: "Orion Camo", productCount: 9, url: "https://shop.bysawr.com/search?q=orion" },
    { id: "red-tiger", title: "Red Tiger Camo", productCount: 35, url: "https://shop.bysawr.com/search?q=red%20tiger" },
    { id: "blue-tiger", title: "Blue Tiger Camo", productCount: 44, url: "https://shop.bysawr.com/search?q=blue%20tiger" },
    { id: "fall", title: "Fall Camo", productCount: 21, url: "https://shop.bysawr.com/search?q=fall" },
    { id: "cherry-fizz", title: "Cherry Fizz Camo", productCount: 6, url: "https://shop.bysawr.com/search?q=cherry%20fizz" },
    { id: "party-rock", title: "Party Rock Camo", productCount: 6, url: "https://shop.bysawr.com/search?q=party%20rock" },
    { id: "weaponized-115", title: "Weaponized 115 Camo", productCount: 49, url: "https://shop.bysawr.com/search?q=weaponized%20115" },
    { id: "cyborg", title: "Cyborg Camo", productCount: 10, url: "https://shop.bysawr.com/search?q=cyborg" },
    { id: "arachnid", title: "Arachnid Camo", productCount: 3, url: "https://shop.bysawr.com/search?q=arachnid" },
    { id: "dragon", title: "Dragon Camo", productCount: 29, url: "https://shop.bysawr.com/search?q=dragon" },
    { id: "lava", title: "Lava Camo", productCount: 8, url: "https://shop.bysawr.com/search?q=lava" },
    { id: "crystal", title: "Crystal Camo", productCount: 11, url: "https://shop.bysawr.com/search?q=crystal" },
    { id: "lightning", title: "Lightning Camo", productCount: 19, url: "https://shop.bysawr.com/search?q=lightning" },
    { id: "nebula", title: "Nebula Camo", productCount: 8, url: "https://shop.bysawr.com/search?q=nebula" },
    { id: "absolute-zero", title: "Absolute Zero Camo", productCount: 2, url: "https://shop.bysawr.com/search?q=absolute%20zero" },
    { id: "dark-spine", title: "Dark Spine Camo", productCount: 10, url: "https://shop.bysawr.com/search?q=dark%20spine" },
    { id: "obsidian", title: "Obsidian Camo", productCount: 3, url: "https://shop.bysawr.com/search?q=obsidian" },

    // Additional camos found in the current product catalog
    { id: "dark-aether", title: "Dark Aether Camo", productCount: 3, url: "https://shop.bysawr.com/search?q=dark%20aether" },
    { id: "spectrum", title: "Spectrum Camo", productCount: 10, url: "https://shop.bysawr.com/search?q=spectrum" },
    { id: "red-matter", title: "Red Matter Camo", productCount: 4, url: "https://shop.bysawr.com/search?q=red%20matter" },
    { id: "platinum", title: "Platinum Camo", productCount: 3, url: "https://shop.bysawr.com/search?q=platinum" },
    { id: "royal", title: "Royal Camo", productCount: 16, url: "https://shop.bysawr.com/search?q=royal" },
    { id: "bubblegum", title: "Bubblegum Camo", productCount: 2, url: "https://shop.bysawr.com/search?q=bubblegum" },
    { id: "void", title: "Void Camo", productCount: 6, url: "https://shop.bysawr.com/search?q=void" },
    { id: "green-mutation", title: "Green Mutation Camo", productCount: 1, url: "https://shop.bysawr.com/search?q=green%20mutation" },
    { id: "art-of-war", title: "Art Of War Camo", productCount: 2, url: "https://shop.bysawr.com/search?q=art%20of%20war" },
    { id: "cherry-blossom", title: "Cherry Blossom Camo", productCount: 3, url: "https://shop.bysawr.com/search?q=cherry%20blossom" },
    { id: "christmas", title: "Christmas Camo", productCount: 1, url: "https://shop.bysawr.com/search?q=christmas" },
    { id: "benjamins", title: "Benjamins Camo", productCount: 2, url: "https://shop.bysawr.com/search?q=benjamins" },
    { id: "ghost", title: "Ghost Camo", productCount: 10, url: "https://shop.bysawr.com/search?q=ghost" },
    { id: "woodland", title: "Woodland Camo", productCount: 2, url: "https://shop.bysawr.com/search?q=woodland" },
    { id: "urban", title: "Urban Camo", productCount: 8, url: "https://shop.bysawr.com/search?q=urban" },
    { id: "digital", title: "Digital Camo", productCount: 2, url: "https://shop.bysawr.com/search?q=digital" },
    { id: "desert", title: "Desert Camo", productCount: 3, url: "https://shop.bysawr.com/search?q=desert" },
    { id: "black-sky", title: "Black Sky Camo", productCount: 1, url: "https://shop.bysawr.com/search?q=black%20sky" },
    { id: "faze", title: "FaZe Camo", productCount: 5, url: "https://shop.bysawr.com/search?q=faze" },
    { id: "coral-streaks", title: "Coral Streaks Camo", productCount: 2, url: "https://shop.bysawr.com/search?q=coral%20streaks" },
    { id: "reverence", title: "Reverence Camo", productCount: 1, url: "https://shop.bysawr.com/search?q=reverence" },
    { id: "dia-de-muertos", title: "Dia De Muertos Camo", productCount: 1, url: "https://shop.bysawr.com/search?q=dia%20de%20muertos" },
    { id: "disco", title: "Disco Camo", productCount: 3, url: "https://shop.bysawr.com/search?q=disco" },
    { id: "green-tiger", title: "Green Tiger Camo", productCount: 8, url: "https://shop.bysawr.com/search?q=green%20tiger" },
    { id: "yellow-tiger", title: "Yellow Tiger Camo", productCount: 2, url: "https://shop.bysawr.com/search?q=yellow%20tiger" },
    { id: "shiny-gold", title: "Shiny Gold Camo", productCount: 4, url: "https://shop.bysawr.com/search?q=shiny%20gold" },
    { id: "white", title: "White Camo", productCount: 3, url: "https://shop.bysawr.com/search?q=white%20camo" },

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

    // BO7 Specific Weapons (kept all unique ones)
    { id: "mxr-17", title: "MXR-17", productCount: 11, url: "https://shop.bysawr.com/search?q=MXR-17" },
    { id: "peacekeeper-mk1", title: "Peacekeeper MK1", productCount: 8, url: "https://shop.bysawr.com/search?q=Peacekeeper%20MK1" },
    { id: "graz-45k", title: "Graz 45K", productCount: 6, url: "https://shop.bysawr.com/search?q=Graz%2045K" },
    { id: "m8a1", title: "M8A1", productCount: 8, url: "https://shop.bysawr.com/search?q=M8A1" },
    { id: "m15-mod-0", title: "M15 MOD 0", productCount: 10, url: "https://shop.bysawr.com/search?q=m15%20mod%200" },
    { id: "dravec-45", title: "Dravec 45", productCount: 8, url: "https://shop.bysawr.com/search?q=dravec%2045" },
    { id: "ak-27", title: "AK-27", productCount: 10, url: "https://shop.bysawr.com/search?q=ak-27" },
    { id: "shadow-sk", title: "Shadow SK", productCount: 8, url: "https://shop.bysawr.com/search?q=shadow%20sk" },
    { id: "ryden-45k", title: "Ryden 45K", productCount: 7, url: "https://shop.bysawr.com/search?q=ryden%2045k" },
    { id: "m10-breacher", title: "M10 Breacher", productCount: 7, url: "https://shop.bysawr.com/search?q=m10%20breacher" },
    { id: "mk-78", title: "MK.78", productCount: 7, url: "https://shop.bysawr.com/search?q=mk.78" },
    { id: "rk-9", title: "RK-9", productCount: 7, url: "https://shop.bysawr.com/search?q=rk-9" },
    { id: "razor-9mm", title: "Razor 9mm", productCount: 7, url: "https://shop.bysawr.com/search?q=razor%209mm" },
    { id: "x9-maverick", title: "X9 Maverick", productCount: 7, url: "https://shop.bysawr.com/search?q=x9%20maverick" },
    { id: "ds20-mirage", title: "DS20 Mirage", productCount: 8, url: "https://shop.bysawr.com/search?q=ds20%20mirage" },
    { id: "carbon-57", title: "Carbon 57", productCount: 7, url: "https://shop.bysawr.com/search?q=carbon%2057" },
    { id: "mpc-25", title: "MPC-25", productCount: 8, url: "https://shop.bysawr.com/search?q=mpc-25" },
    { id: "echo-12", title: "Echo 12", productCount: 7, url: "https://shop.bysawr.com/search?q=echo%2012" },
    { id: "akita", title: "Akita", productCount: 7, url: "https://shop.bysawr.com/search?q=akita" },
    { id: "xm325", title: "XM325", productCount: 7, url: "https://shop.bysawr.com/search?q=xm325" },
    { id: "warden-308", title: "Warden 308", productCount: 6, url: "https://shop.bysawr.com/search?q=warden%20308" },
    { id: "m34-novaline", title: "M34 Novaline", productCount: 6, url: "https://shop.bysawr.com/search?q=m34%20novaline" },
    { id: "xr-3-ion", title: "XR-3 Ion", productCount: 8, url: "https://shop.bysawr.com/search?q=xr-3%20ion" },
    { id: "aarrow-109", title: "AAROW 109", productCount: 5, url: "https://shop.bysawr.com/search?q=aarrow%20109" },
    { id: "arc-m1", title: "A.R.C. M1", productCount: 5, url: "https://shop.bysawr.com/search?q=a.r.c.%20m1" },
    { id: "jager-45", title: "Jäger 45", productCount: 5, url: "https://shop.bysawr.com/search?q=jager%2045" },
    { id: "velox-5-7", title: "Velox 5.7", productCount: 5, url: "https://shop.bysawr.com/search?q=velox%205.7" },
    { id: "coda-9", title: "Coda 9", productCount: 5, url: "https://shop.bysawr.com/search?q=coda%209" },
    { id: "knife", title: "Knife", productCount: 5, url: "https://shop.bysawr.com/search?q=knife" },
    { id: "flatline-mkii", title: "Flatline Mk.II", productCount: 5, url: "https://shop.bysawr.com/search?q=flatline%20mk.ii" },
    { id: "kogot-7", title: "Kogot-7 (S1)", productCount: 5, url: "https://shop.bysawr.com/search?q=kogot-7" },
    { id: "maddox-rfb", title: "Maddox RFB (S1)", productCount: 5, url: "https://shop.bysawr.com/search?q=maddox%20rfb" },
    { id: "sokol-545", title: "Sokol 545 (S1)", productCount: 5, url: "https://shop.bysawr.com/search?q=sokol%20545" },
    { id: "nx-ravager", title: "NX Ravager (S1)", productCount: 5, url: "https://shop.bysawr.com/search?q=nx%20ravager" },
    { id: "ballistic-knife", title: "Ballistic Knife (S1)", productCount: 5, url: "https://shop.bysawr.com/search?q=ballistic%20knife" },
    { id: "sturmwolf-45", title: "Sturmwolf 45 (S1)", productCount: 5, url: "https://shop.bysawr.com/search?q=sturmwolf%2045" },
    { id: "hawker-hx", title: "Hawker HX (S1)", productCount: 5, url: "https://shop.bysawr.com/search?q=hawker%20hx" },

    // MW4 Weapons — includes beta-only loadout weapons
    { id: "mw4-han-86", title: "HAN-86", productCount: 1, url: "https://shop.bysawr.com/search?q=HAN-86" },
    { id: "mw4-m4", title: "M4 (MW4)", productCount: 1, url: "https://shop.bysawr.com/collection/mw4-assault-rifles" },
    { id: "mw4-hyeon-burst", title: "Hyeon Burst", productCount: 1, url: "https://shop.bysawr.com/search?q=Hyeon%20Burst" },
    { id: "mw4-kastov-762", title: "Kastov 762", productCount: 1, url: "https://shop.bysawr.com/search?q=Kastov%20762" },
    { id: "mw4-patriot-xmr", title: "Patriot XMR", productCount: 1, url: "https://shop.bysawr.com/search?q=Patriot%20XMR" },
    { id: "mw4-axion", title: "Axion (Beta)", productCount: 1, url: "https://shop.bysawr.com/collection/mw4" },
    { id: "mw4-iso-nightshade", title: "ISO Nightshade", productCount: 1, url: "https://shop.bysawr.com/search?q=ISO%20Nightshade" },
    { id: "mw4-ppsh-41", title: "PPSh-41", productCount: 1, url: "https://shop.bysawr.com/search?q=PPSh" },
    { id: "mw4-x-58-nyx", title: "X-58 NYX", productCount: 1, url: "https://shop.bysawr.com/search?q=X-58%20NYX" },
    { id: "mw4-wz-55-striga", title: "WZ. 55 Striga (Beta)", productCount: 1, url: "https://shop.bysawr.com/collection/mw4" },
    { id: "mw4-rezi-12", title: "Rezi 12", productCount: 1, url: "https://shop.bysawr.com/search?q=Rezi%2012" },
    { id: "mw4-finn-lmg", title: "FiNN LMG", productCount: 1, url: "https://shop.bysawr.com/search?q=Finn%20LMG" },
    { id: "mw4-type-73", title: "Type 73", productCount: 1, url: "https://shop.bysawr.com/search?q=Type%2073" },
    { id: "mw4-mar-9", title: "MAR-9", productCount: 1, url: "https://shop.bysawr.com/search?q=MAR-9" },
    { id: "mw4-oris-8-6", title: "Oris 8.6", productCount: 1, url: "https://shop.bysawr.com/search?q=Oris%208.6" },
    { id: "mw4-kg-7-vulcan", title: "KG-7 Vulcan", productCount: 9, url: "https://shop.bysawr.com/search?q=KG-7%20Vulcan" },
    { id: "mw4-signal-50", title: "Signal .50", productCount: 24, url: "https://shop.bysawr.com/search?q=Signal%2050" },
    { id: "mw4-krait-p68", title: "Krait P68 / Karit P68", productCount: 1, url: "https://shop.bysawr.com/search?q=Krait%20P68" },
    { id: "mw4-50-gs", title: ".50 GS", productCount: 1, url: "https://shop.bysawr.com/search?q=.50%20GS" },
    { id: "mw4-sang-9mm", title: "Sang 9mm (Beta)", productCount: 1, url: "https://shop.bysawr.com/collection/mw4" },
    { id: "mw4-pila", title: "PILA", productCount: 1, url: "https://shop.bysawr.com/collection/mw4" },
    { id: "mw4-combat-knife", title: "Combat Knife", productCount: 1, url: "https://shop.bysawr.com/collection/mw4" },

    // Zombies Mastery Camos
    { id: "golden-dragon-camo", title: "Golden Dragon Camo", productCount: 8, url: "https://shop.bysawr.com/search?q=golden%20dragon" },
    { id: "bloodstone-camo", title: "Bloodstone Camo", productCount: 3, url: "https://shop.bysawr.com/search?q=bloodstone" },
    { id: "infestation-camo", title: "Infestation Camo", productCount: 5, url: "https://shop.bysawr.com/search?q=infestation" },

    // BO7 Multiplayer Mastery Camos
    { id: "shattered-gold-camo", title: "Shattered Gold Camo", productCount: 24, url: "https://shop.bysawr.com/search?q=shattered%20gold" },
    { id: "arclight-camo", title: "Arclight Camo", productCount: 17, url: "https://shop.bysawr.com/search?q=arclight" },
    { id: "tempest-camo", title: "Tempest Camo", productCount: 25, url: "https://shop.bysawr.com/search?q=tempest" },
    { id: "singularity-camo", title: "Singularity Camo", productCount: 32, url: "https://shop.bysawr.com/search?q=singularity" },

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



// Function to round productCount and add "+"
const roundProductCount = (count) => {
    if (count < 10) {
        return `+${count}`;
    }
    // Round to nearest 5 for numbers 10-99
    if (count >= 10 && count < 100) {
        return `+${Math.round(count / 5) * 5}`;
    }
    // Round to nearest 10 for numbers >= 100
    return `+${Math.round(count / 10) * 10}`;
};

// Map over collections to update productCount
const updatedCollections = collections.map(collection => ({
    ...collection,
    productCount: roundProductCount(collection.productCount)
}));

// Output the updated collections
console.log(updatedCollections);

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
            query: "YouTube Subscribe Tag",
            type: "product",
            url: "https://shop.bysawr.com/b/youtube-subscribe-tag-2025",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path><path d="m3.3 7l7.703 4.734a2 2 0 0 0 1.994 0L20.7 7M7.5 4.27l9 5.15"></path></g></svg>`
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

    // DOM elements
    const searchInput = document.getElementById('search-input');
    const searchDialog = document.getElementById('search-dialog');
    const commandInput = document.getElementById('command-input');
    const closeDialog = document.getElementById('close-dialog');
    const popularSearchesContainer = document.getElementById('popular-searches-container');
    const topCollectionsContainer = document.getElementById('top-collections-container');
    const allCollectionsContainer = document.getElementById('all-collections-container');
    const noResults = document.getElementById('no-results');

    // Sort collections by product count
    const sortedCollections = collections.sort((a, b) => b.productCount - a.productCount);
    const topCollections = sortedCollections.slice(0, 5);

    // Open/close dialog with fade effect
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

    // Handle selection with proper routing
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

    // Render popular searches with icons and hover effect
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

        // Add click handlers for popular searches
        popularSearchesContainer.querySelectorAll('.search-item').forEach((button, index) => {
            button.addEventListener('click', () => handleSelection(popularSearches[index]));
        });
    }

    // Render top collections with enhanced styling
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

        // Add click handlers for collections
        topCollectionsContainer.querySelectorAll('.search-item').forEach(button => {
            button.addEventListener('click', () => {
                window.location.href = button.dataset.url;
            });
        });
    }

    // Render all collections (initially hidden)
    function renderAllCollections() {
        allCollectionsContainer.innerHTML = `
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

        // Add click handlers for all collections
        allCollectionsContainer.querySelectorAll('.search-item').forEach(button => {
            button.addEventListener('click', () => {
                window.location.href = button.dataset.url;
            });
        });
    }

    // Filter results with improved UX
    function filterResults() {
        const query = commandInput.value.toLowerCase();
        let hasResults = false;

        if (query) {
            popularSearchesContainer.classList.add('hidden');
            topCollectionsContainer.classList.add('hidden');
            allCollectionsContainer.classList.remove('hidden');

            const items = allCollectionsContainer.querySelectorAll('.search-item');
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'flex';
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });
        } else {
            popularSearchesContainer.classList.remove('hidden');
            topCollectionsContainer.classList.remove('hidden');
            allCollectionsContainer.classList.add('hidden');
            hasResults = true;
        }

        noResults.classList.toggle('hidden', hasResults);
    }

    // Event listeners
    searchInput.addEventListener('click', toggleDialog);
    closeDialog.addEventListener('click', toggleDialog);
    commandInput.addEventListener('input', filterResults);

    // Add Enter key handler for main search input
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


    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            toggleDialog();
        } else if (e.key === 'Escape' && !searchDialog.classList.contains('hidden')) {
            toggleDialog();
        }
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
        if (!searchDialog.classList.contains('hidden') &&
            !e.target.closest('.search-content') &&
            !e.target.closest('#search-input')) {
            toggleDialog();
        }
    });

    // Initial render
    renderPopularSearches();
    renderTopCollections();
    renderAllCollections();
