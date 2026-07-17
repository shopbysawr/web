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
      ].join('\n');
      document.head.appendChild(animStyle);
    }

    // Create search input
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search collections...';
    searchInput.style.padding = '16px';
    searchInput.style.width = '100%';
    searchInput.style.borderLeft = '1px solid #e0e0e0';
    searchInput.style.borderBottom = '1px solid #e0e0e0';
    searchInput.style.borderRight = '1px solid #e0e0e0';
    wrapper.insertBefore(searchInput, list);

    // ---------------------------------------------------------------
    // Everything is keyed on the collection slug (last part of the
    // href), so the order in Payhip's HTML doesn't matter.
    //
    // groups    = top-level parent -> direct children (chevron level 1)
    // subgroups = second-level parent -> its children (chevron level 2)
    //             e.g. MWIII > Sniper Rifles > KATT-AMR
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

    // Second-level parents that have their own collapsible children.
    // Add e.g. 'mw4-sniper-rifles': ['weapon-slug', ...] when you make
    // per-weapon collections for MW4.
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

    // Map slug -> <li> element, and tag each li for the CSS
    const itemsBySlug = {};
    Array.from(list.children).forEach(li => {
      const link = li.querySelector('a');
      if (!link) return;
      const slug = link.getAttribute('href').replace(/\/+$/, '').split('/').pop();
      itemsBySlug[slug] = li;
      li.dataset.slug = slug;
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

    // Unknown slugs (new collections not added to `order`/`groups` yet)
    // go to the bottom of the menu instead of ending up on top.
    const knownSlugs = new Set(
      order
        .concat(Object.values(groups).flat())
        .concat(Object.values(subgroups).flat())
    );
    Object.keys(itemsBySlug).forEach(slug => {
      if (!knownSlugs.has(slug)) list.appendChild(itemsBySlug[slug]);
    });

    // slug -> parent slug (both levels), and the set of all collapsible items
    const parentOf = {};
    Object.entries(groups).forEach(([p, kids]) => kids.forEach(k => { parentOf[k] = p; }));
    Object.entries(subgroups).forEach(([p, kids]) => kids.forEach(k => { parentOf[k] = p; }));
    const allChildSlugs = Object.keys(parentOf);

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

      chevronWrapper.addEventListener('click', function(event) {
        event.preventDefault();
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
            childSlugs.forEach(hideItem);
            setExpanded(parentSlug, false);
          } else {
            childSlugs.forEach(showItem);
            setExpanded(parentSlug, true);
          }
        }
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
    }
    showDefault();

    // Search filtering with parent visibility (walks all ancestor levels)
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();

      if (searchTerm === '') {
        showDefault();
        return;
      }

      Object.keys(itemsBySlug).forEach(hideItem);
      Object.keys(groups).forEach(slug => setExpanded(slug, false));
      Object.keys(subgroups).forEach(slug => setExpanded(slug, false));

      Object.keys(itemsBySlug).forEach(slug => {
        const li = itemsBySlug[slug];
        if (!li.textContent.toLowerCase().includes(searchTerm)) return;

        showItem(slug);
        // Show and expand every ancestor so the match is visible in context
        let parent = parentOf[slug];
        while (parent) {
          showItem(parent);
          setExpanded(parent, true);
          parent = parentOf[parent];
        }
      });
    });

  });
})();
