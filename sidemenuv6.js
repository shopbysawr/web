(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.collection-vertical-wrapper');
    if (!wrapper) return;

    const list = wrapper.querySelector('ul');
    if (!list) return;

    // Inject the CSS this script depends on (collapse animation +
    // chevron rotation). Lives here instead of in the Payhip custom
    // CSS so renaming this file for cache busting never breaks it.
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
        '  display: none;',
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
    // Everything is keyed on the collection slug (last part of the
    // href), so the order in Payhip's HTML doesn't matter.
    //
    // groups    = top-level parent -> direct children (chevron level 1)
    // subgroups = second-level parent -> its children (chevron level 2)
    //
    // AUTO-NESTING: a collection whose slug starts with a known slug
    // plus "-" is nested under it automatically. So creating a Payhip
    // collection with URL "mw4-sniper-rifles-signal50" puts it under
    // MW4 > Sniper Rifles with no changes to this file.
    // ---------------------------------------------------------------

    const groups = {
      'premade':          ['premade-thumbnails', 'premade-cutouts', 'emotes', 'mascot-logos'],
      'graphics':         ['psds', 'renders-pngs', 'layer-styles', 'hand-packs'],
      'editing':          ['preset-packs', 'subtitle-packs', 'sound-effects', 'green-screen', 'transitions'],
      'animations':       ['youtube', 'kick', 'threads', 'twitter', 'tiktok', 'instagram', 'twitch', 'animation-bundles'],
      'modern-warfare-2': ['intervention', 'barrett-50cal', 'wa2000', 'm21-ebr'],
      'black-ops-1':      ['dragunov-bo1', 'wa2000-bo1', 'l96a1', 'psg-1'],
      'modern-warfare-3': ['barrett-50cal-mw3', 'l118a', 'as50', 'rsass', 'dragunov', 'msr'],
      'black-ops-2':      ['svu-as', 'dsr50', 'ballista', 'xpr-50'],
      'ghosts':           ['usr', 'lynx'],
      'black-ops-3':      ['svg', 'locus'],
      'mwiii':            ['mwiii-sniper-rifles', 'mwiii-assault-rifles', 'smgs', 'mwiii-battle-rifles', 'mwiii-shotguns', 'mwiii-lmgs', 'mwiii-marksman-rifles', 'mwiii-secondaries'],
      'black-ops-6':      ['bo6-sniper-rifles', 'bo6-assault-rifles', 'bo6-smgs', 'bo6-lmgs', 'bo6-shotguns', 'bo6-handguns', 'bo6-launchers', 'bo6-melee-weapons'],
      'black-ops-7':      ['bo7-sniper-rifles', 'bo7-assault-rifles', 'bo7-smgs', 'bo7-lmgs', 'bo7-shotguns', 'bo7-secondaries', 'bo7-misc'],
      'mw4':              ['mw4-sniper-rifles', 'mw4-assault-rifles', 'mw4-smgs', 'mw4-lmgs', 'mw4-shotguns', 'mw4-marksman-rifles', 'mw4-secondaries', 'mw4-misc'],
      'zombies':          ['ray-gun', 'blundergat'],
    };

    const subgroups = {
      'mwiii-sniper-rifles': ['katt-amr', 'longbow', 'kv-inhibitor', 'xrk-stalker', 'signal50', 'mcpr-300', 'victus-xmr', 'sp-x-80', 'la-b-300', 'fjx-imperium'],
    };

    // Top-level order. CoD games run oldest -> newest so the newest
    // titles end up at the bottom of the game list.
    const order = [
      'all',
      'most-popular',
      'templates',
      'premade',
      'graphics',
      'editing',
      'animations',
      'minecraft',
      'counter-strike',
      'grand-theft-auto',
      'valorant',
      'among-us',
      'apex-legends',
      'fortnite',
      'rocket-league',
      'battlefield-6',
      'call-of-duty',
      'cod-4',            // 2007
      'world-at-war',     // 2008
      'modern-warfare-2', // 2009
      'black-ops-1',      // 2010
      'modern-warfare-3', // 2011
      'black-ops-2',      // 2012
      'ghosts',           // 2013
      'aw',               // 2014
      'black-ops-3',      // 2015
      'iw',               // 2016
      'mwr',              // 2016
      'ww2',              // 2017
      'bo4',              // 2018
      'mw2019',           // 2019
      'cold-war',         // 2020
      'vanguard',         // 2021
      'mwii',             // 2022
      'mwiii',            // 2023
      'black-ops-6',      // 2024
      'black-ops-7',      // 2025
      'mw4',              // 2026
      'zombies',
      'call-of-duty-mobile',
      'map-screenshot-packs',
      'callsigns',
      'cod-bundles',
      'hmw',
      'false-front',
      'free',
      'logos',
      'marvel-rivals',
      'collabs',
      'splitgate-2',
      'xdefiant',
    ];

    // Visual levels for the CSS ([data-level] in styles.css)
    // 1 = bold main categories, 2 = weapon classes (40px indent),
    // 3 = individual weapons (60px indent). Everything else = default.
    // Auto-nested collections get a level automatically.
    const level1 = [
      'all', 'most-popular', 'templates', 'premade', 'graphics', 'editing',
      'animations', 'minecraft', 'counter-strike', 'grand-theft-auto',
      'valorant', 'among-us', 'apex-legends', 'fortnite', 'rocket-league',
      'battlefield-6', 'call-of-duty', 'false-front', 'free', 'logos',
      'marvel-rivals', 'collabs', 'splitgate-2', 'xdefiant',
    ];
    const level2 = [
      'bo7-sniper-rifles', 'bo7-assault-rifles', 'bo7-smgs', 'bo7-lmgs', 'bo7-shotguns', 'bo7-secondaries', 'bo7-misc',
      'bo6-sniper-rifles', 'bo6-assault-rifles', 'bo6-smgs', 'bo6-lmgs', 'bo6-shotguns', 'bo6-handguns', 'bo6-launchers', 'bo6-melee-weapons',
      'mwiii-sniper-rifles', 'mwiii-assault-rifles', 'smgs', 'mwiii-battle-rifles', 'mwiii-shotguns', 'mwiii-lmgs', 'mwiii-marksman-rifles', 'mwiii-secondaries',
      'mw4-sniper-rifles', 'mw4-assault-rifles', 'mw4-smgs', 'mw4-lmgs', 'mw4-shotguns', 'mw4-marksman-rifles', 'mw4-secondaries', 'mw4-misc',
    ];
    const level3 = [
      'katt-amr', 'longbow', 'kv-inhibitor', 'xrk-stalker', 'signal50', 'mcpr-300', 'victus-xmr', 'sp-x-80', 'la-b-300', 'fjx-imperium',
      'svg', 'locus', 'usr', 'lynx',
      'svu-as', 'dsr50', 'ballista', 'xpr-50',
      'barrett-50cal-mw3', 'l118a', 'as50', 'rsass', 'dragunov', 'msr',
      'dragunov-bo1', 'wa2000-bo1', 'l96a1', 'psg-1',
      'intervention', 'barrett-50cal', 'wa2000', 'm21-ebr',
      'ray-gun', 'blundergat',
    ];

    // Map slug -> <li> element
    const itemsBySlug = {};
    Array.from(list.children).forEach(li => {
      const link = li.querySelector('a');
      if (!link) return;
      const slug = link.getAttribute('href').replace(/\/+$/, '').split('/').pop();
      itemsBySlug[slug] = li;
      li.dataset.slug = slug;
    });

    // ---- Auto-nesting of unknown slugs by prefix ----
    // "mw4-sniper-rifles-signal50" -> nested under "mw4-sniper-rifles"
    // "vanguard-stg44"             -> nested under "vanguard" (chevron
    //                                 is created automatically)
    const knownNow = () => new Set(
      order
        .concat(Object.values(groups).flat())
        .concat(Object.values(subgroups).flat())
    );
    {
      const known = knownNow();
      // Longest prefix first so mw4-sniper-rifles wins over mw4
      const candidates = [...known].sort((a, b) => b.length - a.length);
      Object.keys(itemsBySlug).forEach(slug => {
        if (known.has(slug)) return;
        const parent = candidates.find(p => slug.indexOf(p + '-') === 0);
        if (!parent) return; // no matching prefix -> stays at the bottom
        if (subgroups[parent]) {
          subgroups[parent].push(slug);
        } else if (groups[parent]) {
          // Parent is a top-level category -> new second level
          groups[parent].push(slug);
          if (!level2.includes(slug)) level2.push(slug);
          return;
        } else if (order.includes(parent)) {
          // Top-level without children yet -> create the group
          groups[parent] = [slug];
          if (!level2.includes(slug)) level2.push(slug);
          return;
        } else {
          // Parent is itself a child (e.g. mw4-sniper-rifles) ->
          // it becomes a subgroup with its own chevron
          subgroups[parent] = [slug];
        }
        if (!level3.includes(slug)) level3.push(slug);
      });
    }

    // Tag visual levels (after auto-nesting so new slugs are included)
    Object.keys(itemsBySlug).forEach(slug => {
      const li = itemsBySlug[slug];
      if (level1.includes(slug))      li.dataset.level = '1';
      else if (level2.includes(slug)) li.dataset.level = '2';
      else if (level3.includes(slug)) li.dataset.level = '3';
    });

    // Reorder the DOM: parent, then children, then grandchildren.
    order.forEach(slug => {
      const li = itemsBySlug[slug];
      if (!li) return;
      list.appendChild(li);
      (groups[slug] || []).forEach(childSlug => {
        const childLi = itemsBySlug[childSlug];
        if (childLi) list.appendChild(childLi);
        (subgroups[childSlug] || []).forEach(grandSlug => {
          const grandLi = itemsBySlug[grandSlug];
          if (grandLi) list.appendChild(grandLi);
        });
      });
    });

    // Slugs with no prefix match go to the bottom of the menu.
    {
      const known = knownNow();
      Object.keys(itemsBySlug).forEach(slug => {
        if (!known.has(slug)) list.appendChild(itemsBySlug[slug]);
      });
    }

    // slug -> parent slug (both levels), and the set of all collapsible items
    const parentOf = {};
    Object.entries(groups).forEach(([p, kids]) => kids.forEach(k => { parentOf[k] = p; }));
    Object.entries(subgroups).forEach(([p, kids]) => kids.forEach(k => { parentOf[k] = p; }));
    const allChildSlugs = Object.keys(parentOf);
    const kidsOf = slug => groups[slug] || subgroups[slug] || null;

    // Visibility helpers — class-based so CSS can animate the transition
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

    function collapseAll() {
      allChildSlugs.forEach(hideItem);
      Object.keys(groups).forEach(slug => setExpanded(slug, false));
      Object.keys(subgroups).forEach(slug => setExpanded(slug, false));
    }

    function addChevronAndToggle(parentSlug, childSlugs, isTopLevel) {
      const parentLi = itemsBySlug[parentSlug];
      if (!parentLi) return;
      const parentLink = parentLi.querySelector('a');

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

        if (isTopLevel) {
          // Accordion behaviour between top-level categories
          collapseAll();
          if (!isExpanded) {
            childSlugs.forEach(showItem);
            setExpanded(parentSlug, true);
          }
        } else {
          // Nested toggle: only open/close this subgroup's own children
          if (isExpanded) {
            childSlugs.forEach(slug => {
              hideItem(slug);
              // Also close any open sub-subgroups
              (subgroups[slug] || []).forEach(hideItem);
              setExpanded(slug, false);
            });
            setExpanded(parentSlug, false);
          } else {
            childSlugs.forEach(showItem);
            setExpanded(parentSlug, true);
          }
        }
      }

      chevronWrapper.addEventListener('click', toggle);
      chevronWrapper.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') toggle(event);
      });
    }

    Object.keys(groups).forEach(slug => addChevronAndToggle(slug, groups[slug], true));
    Object.keys(subgroups).forEach(slug => addChevronAndToggle(slug, subgroups[slug], false));

    function showDefault() {
      Object.keys(itemsBySlug).forEach(slug => {
        if (allChildSlugs.includes(slug)) hideItem(slug);
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
      if (!itemsBySlug[current]) return;

      let ancestor = parentOf[current];
      while (ancestor) {
        (kidsOf(ancestor) || []).forEach(showItem);
        showItem(ancestor);
        setExpanded(ancestor, true);
        ancestor = parentOf[ancestor];
      }
      // If the current page itself has subcategories, open them too
      if (kidsOf(current)) {
        kidsOf(current).forEach(showItem);
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

      Object.keys(itemsBySlug).forEach(hideItem);
      Object.keys(groups).forEach(slug => setExpanded(slug, false));
      Object.keys(subgroups).forEach(slug => setExpanded(slug, false));

      let matches = 0;
      Object.keys(itemsBySlug).forEach(slug => {
        const li = itemsBySlug[slug];
        if (!li.textContent.toLowerCase().includes(searchTerm)) return;

        matches++;
        showItem(slug);
        // Show and expand every ancestor so the match is visible in context
        let parent = parentOf[slug];
        while (parent) {
          showItem(parent);
          setExpanded(parent, true);
          parent = parentOf[parent];
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
