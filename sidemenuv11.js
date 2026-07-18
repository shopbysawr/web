(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.collection-vertical-wrapper');
    if (!wrapper) return;

    const list = wrapper.querySelector('ul');
    if (!list) return;

    // Inject the CSS this script depends on. Lives here instead of in
    // the Payhip custom CSS so renaming this file for cache busting
    // never breaks it.
    if (!document.getElementById('sidemenu-anim-style')) {
      const animStyle = document.createElement('style');
      animStyle.id = 'sidemenu-anim-style';
      animStyle.textContent = [
        '.collection-vertical-wrapper li[data-slug][data-slug] {',
        '  overflow: hidden;',
        '  max-height: 64px;',
        '  opacity: 1;',
        '  transition: max-height 0.25s ease, opacity 0.2s ease;',
        '}',
        '.collection-vertical-wrapper li[data-slug][data-slug].sm-hidden {',
        '  max-height: 0 !important;',
        '  opacity: 0 !important;',
        '  pointer-events: none;',
        '}',
        '.chevron-wrapper .chevron { transition: transform 0.25s ease; }',
        '.chevron-wrapper[data-expanded="true"] .chevron { transform: rotate(180deg); }',
        '.sm-no-results {',
        '  padding: 16px;',
        '  font-size: 0.85em;',
        '  color: #6b7280;',
        '  background: white;',
        '  border-left: 1px solid #e0e0e0;',
        '  border-right: 1px solid #e0e0e0;',
        '  display: none;',
        '}',
        // Light blue hover
        '.collection-vertical-wrapper li a:hover {',
        '  background-color: var(--primary-100, #cde5ff) !important;',
        '}',
        // Light blue on the current page link
        '.collection-vertical-wrapper ul li a.active {',
        '  background-color: var(--primary-100, #cde5ff) !important;',
        '  outline: none !important;',
        '  border-left: none !important;',
        '  box-shadow: none !important;',
        '}',
        // No dark pressed state: kill :active/:focus styling, the
        // mobile tap-highlight, and text selection inside the menu
        // (selecting the label text is what looked like a dark flash).
        // Keyboard focus ring on the chevron itself is kept.
        '.collection-vertical-wrapper li a:active,',
        '.collection-vertical-wrapper li a:focus,',
        '.collection-vertical-wrapper li a:focus-within {',
        '  background-color: transparent !important;',
        '  outline: none !important;',
        '  border-left: none !important;',
        '  box-shadow: none !important;',
        '}',
        '.collection-vertical-wrapper li a:hover:active,',
        '.collection-vertical-wrapper li a.active:hover {',
        '  background-color: var(--primary-100, #cde5ff) !important;',
        '}',
        '.collection-vertical-wrapper li a {',
        '  -webkit-tap-highlight-color: transparent;',
        '  -webkit-user-select: none;',
        '  user-select: none;',
        '}',
        '.collection-vertical-wrapper li a::selection,',
        '.collection-vertical-wrapper li a *::selection {',
        '  background: transparent;',
        '}',
        // No dark press flash on the chevron button itself; keep the
        // focus ring only for keyboard (Tab) navigation.
        '.chevron-wrapper {',
        '  -webkit-tap-highlight-color: transparent;',
        '  -webkit-user-select: none;',
        '  user-select: none;',
        '}',
        '.chevron-wrapper:focus:not(:focus-visible) { outline: none; }',
        // Game titles (children of Call of Duty) in bold so the levels
        // below them (weapon classes / weapons) are easy to tell apart.
        '.collection-vertical-wrapper li[data-slug][data-slug][data-game] {',
        '  font-weight: 600 !important;',
        '  line-height: 1.2em !important;',
        '}',
      ].join('\n');
      document.head.appendChild(animStyle);
    }

    // Create search input
    const searchInput = document.createElement('input');
    searchInput.type = 'search';
    searchInput.placeholder = 'Search collections...';
    searchInput.style.padding = '16px';
    searchInput.style.width = '100%';
    searchInput.style.borderLeft = '1px solid #e0e0e0';
    searchInput.style.borderBottom = '1px solid #e0e0e0';
    searchInput.style.borderRight = '1px solid #e0e0e0';
    wrapper.insertBefore(searchInput, list);

    // "No results" message (shown when a search matches nothing)
    const noResults = document.createElement('div');
    noResults.className = 'sm-no-results';
    noResults.textContent = 'No collections found';
    wrapper.insertBefore(noResults, list);

    // ---------------------------------------------------------------
    // THE MENU TREE — the single source of truth.
    // A node is either 'slug' or ['slug', [children]].
    //
    // A node may reference a collection that does not exist in Payhip
    // yet (e.g. 'mw2-sniper-rifles'). Then its children are shown
    // directly under the grandparent instead. The moment you create
    // that collection in Payhip, everything nests under it
    // automatically — no changes needed here.
    //
    // AUTO-NESTING: a collection whose slug starts with a known slug
    // plus "-" nests under it automatically (longest prefix wins), so
    // "mw4-sniper-rifles-signal50" lands under MW4 > Sniper Rifles.
    // The aliasPrefixes map extends this to short game prefixes, so
    // "mw2-assault-rifles" lands under Modern Warfare 2 even though
    // its slug is "modern-warfare-2". Unknown slugs with no matching
    // prefix go to the bottom of the menu.
    // ---------------------------------------------------------------
    const tree = [
      'all',
      'most-popular',
      'templates',
      ['premade', ['premade-thumbnails', 'premade-cutouts', 'emotes', 'mascot-logos']],
      ['graphics', ['psds', 'renders-pngs', 'layer-styles', 'hand-packs']],
      ['editing', ['preset-packs', 'subtitle-packs', 'sound-effects', 'green-screen', 'transitions']],
      ['animations', ['youtube', 'kick', 'threads', 'twitter', 'tiktok', 'instagram', 'twitch', 'animation-bundles']],
      'minecraft',
      'counter-strike',
      'grand-theft-auto',
      'valorant',
      'among-us',
      'apex-legends',
      'fortnite',
      'rocket-league',
      'battlefield-6',
      ['call-of-duty', [
        'cod-4',                                                                       // 2007
        'world-at-war',                                                                // 2008
        ['modern-warfare-2', [                                                         // 2009
          ['mw2-sniper-rifles', ['intervention', 'barrett-50cal', 'wa2000', 'm21-ebr']],
        ]],
        ['black-ops-1', [                                                              // 2010
          ['bo1-sniper-rifles', ['dragunov-bo1', 'wa2000-bo1', 'l96a1', 'psg-1']],
        ]],
        ['modern-warfare-3', [                                                         // 2011
          ['mw3-sniper-rifles', ['barrett-50cal-mw3', 'l118a', 'as50', 'rsass', 'dragunov', 'msr']],
        ]],
        ['black-ops-2', [                                                              // 2012
          ['bo2-sniper-rifles', ['svu-as', 'dsr50', 'ballista', 'xpr-50']],
        ]],
        ['ghosts', [                                                                   // 2013
          ['ghosts-sniper-rifles', ['usr', 'lynx']],
        ]],
        'aw',                                                                          // 2014
        ['black-ops-3', [                                                              // 2015
          ['bo3-sniper-rifles', ['svg', 'locus']],
        ]],
        'iw',                                                                          // 2016
        'mwr',                                                                         // 2016
        'ww2',                                                                         // 2017
        'bo4',                                                                         // 2018
        'mw2019',                                                                      // 2019
        'cold-war',                                                                    // 2020
        'vanguard',                                                                    // 2021
        'mwii',                                                                        // 2022
        ['mwiii', [                                                                    // 2023
          ['mwiii-sniper-rifles', ['katt-amr', 'longbow', 'kv-inhibitor', 'xrk-stalker', 'signal50', 'mcpr-300', 'victus-xmr', 'sp-x-80', 'la-b-300', 'fjx-imperium']],
          'mwiii-assault-rifles', 'smgs', 'mwiii-battle-rifles', 'mwiii-shotguns', 'mwiii-lmgs', 'mwiii-marksman-rifles', 'mwiii-secondaries',
        ]],
        ['black-ops-6', ['bo6-sniper-rifles', 'bo6-assault-rifles', 'bo6-smgs', 'bo6-lmgs', 'bo6-shotguns', 'bo6-handguns', 'bo6-launchers', 'bo6-melee-weapons']], // 2024
        ['black-ops-7', ['bo7-sniper-rifles', 'bo7-assault-rifles', 'bo7-smgs', 'bo7-lmgs', 'bo7-shotguns', 'bo7-secondaries', 'bo7-misc']], // 2025
        ['mw4', ['mw4-sniper-rifles', 'mw4-assault-rifles', 'mw4-smgs', 'mw4-lmgs', 'mw4-shotguns', 'mw4-marksman-rifles', 'mw4-secondaries', 'mw4-misc']], // 2026
        ['zombies', ['ray-gun', 'blundergat']],
        'call-of-duty-mobile',
        'map-screenshot-packs',
        'callsigns',
        'cod-bundles',
        'hmw',
      ]],
      'false-front',
      'free',
      'logos',
      'marvel-rivals',
      'collabs',
      'splitgate-2',
      'xdefiant',
    ];

    // Short prefixes -> the game they belong to, for auto-nesting of
    // future collections like "mw2-assault-rifles" or "waw-ptrs41".
    const aliasPrefixes = {
      'mw2':    'modern-warfare-2',
      'mw3':    'modern-warfare-3',
      'bo1':    'black-ops-1',
      'bo2':    'black-ops-2',
      'bo3':    'black-ops-3',
      'waw':    'world-at-war',
      'codm':   'call-of-duty-mobile',
    };

    // Top-level items that get the bold "main category" styling
    const boldSlugs = [
      'all', 'most-popular', 'templates', 'premade', 'graphics', 'editing',
      'animations', 'minecraft', 'counter-strike', 'grand-theft-auto',
      'valorant', 'among-us', 'apex-legends', 'fortnite', 'rocket-league',
      'battlefield-6', 'call-of-duty', 'false-front', 'free', 'logos',
      'marvel-rivals', 'collabs', 'splitgate-2', 'xdefiant',
    ];

    // ---- Flatten the tree into lookup maps ----
    const parentOf = {};   // slug -> parent slug per the tree
    const flatOrder = [];  // DFS order

    (function walk(nodes, parent) {
      nodes.forEach(node => {
        const slug = Array.isArray(node) ? node[0] : node;
        const kids = Array.isArray(node) ? node[1] : null;
        flatOrder.push(slug);
        if (parent) parentOf[slug] = parent;
        if (kids) walk(kids, slug);
      });
    })(tree, null);

    // Map slug -> <li> element
    const itemsBySlug = {};
    Array.from(list.children).forEach(li => {
      const link = li.querySelector('a');
      if (!link) return;
      const slug = link.getAttribute('href').replace(/\/+$/, '').split('/').pop();
      itemsBySlug[slug] = li;
      li.dataset.slug = slug;
    });

    // ---- Auto-nesting of unknown slugs ----
    const inTree = new Set(flatOrder);
    const prefixCandidates = flatOrder.slice().sort((a, b) => b.length - a.length);
    const aliasCandidates = Object.keys(aliasPrefixes).sort((a, b) => b.length - a.length);
    Object.keys(itemsBySlug).forEach(slug => {
      if (inTree.has(slug)) return;
      let parent = prefixCandidates.find(p => slug.indexOf(p + '-') === 0);
      if (!parent) {
        const alias = aliasCandidates.find(a => slug.indexOf(a + '-') === 0);
        if (alias) parent = aliasPrefixes[alias];
      }
      if (!parent || !inTree.has(parent)) return; // -> bottom of the menu
      parentOf[slug] = parent;
      flatOrder.push(slug);
      inTree.add(slug);
    });

    // ---- Effective structure: skip tree nodes that have no Payhip
    // collection yet. Their children are promoted to the nearest
    // existing ancestor until the collection is created. ----
    const eParent = {};    // slug -> nearest existing ancestor (or null)
    const eChildren = {};  // slug -> [existing child slugs, in order]
    const eDepth = {};     // slug -> effective depth
    const eRoots = [];

    flatOrder.forEach(slug => {
      if (!itemsBySlug[slug]) return;
      let p = parentOf[slug];
      while (p && !itemsBySlug[p]) p = parentOf[p];
      eParent[slug] = p || null;
      if (p) {
        eDepth[slug] = eDepth[p] + 1;
        (eChildren[p] = eChildren[p] || []).push(slug);
      } else {
        eDepth[slug] = 0;
        eRoots.push(slug);
      }
    });

    // Tag visual levels from effective depth
    Object.keys(eDepth).forEach(slug => {
      const li = itemsBySlug[slug];
      const depth = eDepth[slug];
      if (depth === 0 && boldSlugs.includes(slug)) li.dataset.level = '1';
      else if (depth === 2)                        li.dataset.level = '2';
      else if (depth >= 3)                         li.dataset.level = '3';
      // Bold game titles under Call of Duty
      if (eParent[slug] === 'call-of-duty') li.setAttribute('data-game', '');
    });

    // ---- Reorder the DOM: depth-first through the effective tree ----
    function appendSubtree(slug) {
      list.appendChild(itemsBySlug[slug]);
      (eChildren[slug] || []).forEach(appendSubtree);
    }
    eRoots.forEach(appendSubtree);

    // Slugs with no prefix match go to the bottom of the menu.
    Object.keys(itemsBySlug).forEach(slug => {
      if (eDepth[slug] === undefined) list.appendChild(itemsBySlug[slug]);
    });

    // ---- Visibility helpers (class-based so CSS can animate) ----
    function hideItem(slug) {
      const li = itemsBySlug[slug];
      if (li) li.classList.add('sm-hidden');
    }
    function showItem(slug) {
      const li = itemsBySlug[slug];
      if (li) li.classList.remove('sm-hidden');
    }
    function setExpanded(slug, expanded) {
      const li = itemsBySlug[slug];
      const cw = li && li.querySelector('.chevron-wrapper');
      if (!cw) return;
      cw.setAttribute('data-expanded', expanded ? 'true' : 'false');
      cw.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }

    // Recursively hide a node's whole subtree and reset its chevrons
    function collapseSubtree(slug) {
      (eChildren[slug] || []).forEach(child => {
        hideItem(child);
        collapseSubtree(child);
      });
      setExpanded(slug, false);
    }

    function collapseAll() {
      eRoots.forEach(collapseSubtree);
    }

    function addChevronAndToggle(parentSlug) {
      const parentLi = itemsBySlug[parentSlug];
      if (!parentLi) return;
      const parentLink = parentLi.querySelector('a');
      if (parentLink.querySelector('.chevron-wrapper')) return;

      const chevronWrapper = document.createElement('div');
      chevronWrapper.className = 'chevron-wrapper';
      chevronWrapper.style.flexShrink = '0';
      chevronWrapper.style.marginLeft = 'auto';
      chevronWrapper.style.display = 'flex';
      chevronWrapper.style.alignItems = 'center';
      chevronWrapper.style.justifyContent = 'center';
      chevronWrapper.style.padding = '0.5em';
      chevronWrapper.style.cursor = 'pointer';
      chevronWrapper.style.borderRadius = '9999px';
      chevronWrapper.setAttribute('role', 'button');
      chevronWrapper.setAttribute('tabindex', '0');
      chevronWrapper.setAttribute('aria-label', 'Toggle subcategories');
      chevronWrapper.setAttribute('aria-expanded', 'false');
      chevronWrapper.setAttribute('data-expanded', 'false');

      const chevron = document.createElement('span');
      chevron.className = 'chevron';
      chevron.innerHTML = '<iconify-icon icon="tabler:chevron-down" width="1.5em" height="1.5em" style="color: #a4a2ab;"></iconify-icon>';

      chevronWrapper.appendChild(chevron);
      parentLink.appendChild(chevronWrapper);
      parentLink.style.display = 'flex';
      parentLink.style.alignItems = 'center';

      chevronWrapper.addEventListener('mouseenter', () => {
        chevronWrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
      });
      chevronWrapper.addEventListener('mouseleave', () => {
        chevronWrapper.style.backgroundColor = 'transparent';
      });

      function toggle(event) {
        event.preventDefault();
        event.stopPropagation();
        const isExpanded = chevronWrapper.getAttribute('data-expanded') === 'true';

        if (eDepth[parentSlug] === 0) {
          // Accordion behaviour between top-level categories
          collapseAll();
          if (!isExpanded) {
            eChildren[parentSlug].forEach(showItem);
            setExpanded(parentSlug, true);
          }
        } else if (isExpanded) {
          collapseSubtree(parentSlug);
        } else {
          eChildren[parentSlug].forEach(showItem);
          setExpanded(parentSlug, true);
        }
      }

      chevronWrapper.addEventListener('click', function(event) {
        toggle(event);
        // Drop focus after a mouse click so no focus styling lingers
        // on the row. Keyboard users keep their focus ring.
        chevronWrapper.blur();
      });
      chevronWrapper.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') toggle(event);
      });
    }

    Object.keys(eChildren).forEach(addChevronAndToggle);

    function showDefault() {
      Object.keys(itemsBySlug).forEach(slug => {
        if (eParent[slug]) hideItem(slug);
        else showItem(slug);
      });
      collapseAll();
      noResults.style.display = 'none';
      expandForCurrentPage();
    }

    // Auto-expand the category tree for the collection page you're on,
    // and scroll it into view inside the sidebar.
    function expandForCurrentPage() {
      const current = location.pathname.replace(/\/+$/, '').split('/').pop();
      if (!itemsBySlug[current] || eDepth[current] === undefined) return;

      let ancestor = eParent[current];
      while (ancestor) {
        eChildren[ancestor].forEach(showItem);
        showItem(ancestor);
        setExpanded(ancestor, true);
        ancestor = eParent[ancestor];
      }
      // If the current page itself has subcategories, open them too
      if (eChildren[current]) {
        eChildren[current].forEach(showItem);
        setExpanded(current, true);
      }

      const li = itemsBySlug[current];
      if (li && list.scrollHeight > list.clientHeight) {
        list.scrollTop = Math.max(0, li.offsetTop - list.offsetTop - 120);
      }
    }

    showDefault();

    // Search filtering with parent visibility (walks all ancestor levels)
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();

      if (searchTerm === '') {
        showDefault();
        return;
      }

      Object.keys(itemsBySlug).forEach(slug => {
        hideItem(slug);
        setExpanded(slug, false);
      });

      let matches = 0;
      Object.keys(itemsBySlug).forEach(slug => {
        const li = itemsBySlug[slug];
        if (!li.textContent.toLowerCase().includes(searchTerm)) return;

        matches++;
        showItem(slug);
        // Show and expand every ancestor so the match is visible in context
        let parent = eParent[slug];
        while (parent) {
          showItem(parent);
          setExpanded(parent, true);
          parent = eParent[parent];
        }
      });

      noResults.style.display = matches === 0 ? 'block' : 'none';
    });

    // Escape clears the search
    searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        this.value = '';
        showDefault();
      }
    });

  });
})();
