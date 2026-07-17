(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.collection-vertical-wrapper');
    if (!wrapper) return;

    const list = wrapper.querySelector('ul');
    if (!list) return;

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
    // Everything below is keyed on the collection slug (the last part
    // of the href), so the order in Payhip's HTML doesn't matter.
    // ---------------------------------------------------------------

    // Parent slug -> child slugs (collapsible under the parent)
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
      'mwiii':            ['mwiii-sniper-rifles', 'katt-amr', 'longbow', 'kv-inhibitor', 'xrk-stalker', 'signal50', 'mcpr-300', 'victus-xmr', 'sp-x-80', 'la-b-300', 'fjx-imperium', 'mwiii-assault-rifles', 'smgs', 'mwiii-battle-rifles', 'mwiii-shotguns', 'mwiii-lmgs', 'mwiii-marksman-rifles', 'mwiii-secondaries'],
      'black-ops-6':      ['bo6-sniper-rifles', 'bo6-assault-rifles', 'bo6-smgs', 'bo6-lmgs', 'bo6-shotguns', 'bo6-handguns', 'bo6-launchers', 'bo6-melee-weapons'],
      'black-ops-7':      ['bo7-sniper-rifles', 'bo7-assault-rifles', 'bo7-smgs', 'bo7-lmgs', 'bo7-shotguns', 'bo7-secondaries', 'bo7-misc'],
      'zombies':          ['ray-gun', 'blundergat'],
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

    // Map slug -> <li> element
    const itemsBySlug = {};
    Array.from(list.children).forEach(li => {
      const link = li.querySelector('a');
      if (!link) return;
      const slug = link.getAttribute('href').replace(/\/+$/, '').split('/').pop();
      itemsBySlug[slug] = li;
    });

    // Reorder the DOM: each top-level item followed by its children.
    // Unknown slugs (new collections not listed yet) keep their spot at the end.
    order.forEach(slug => {
      const li = itemsBySlug[slug];
      if (!li) return;
      list.appendChild(li);
      (groups[slug] || []).forEach(childSlug => {
        const childLi = itemsBySlug[childSlug];
        if (childLi) list.appendChild(childLi);
      });
    });

    const allChildSlugs = Object.values(groups).flat();
    const isChild = slug => allChildSlugs.includes(slug);

    function collapseAll() {
      allChildSlugs.forEach(slug => {
        const li = itemsBySlug[slug];
        if (li) li.style.display = 'none';
      });
      document.querySelectorAll('.chevron-wrapper').forEach(w => {
        w.setAttribute('data-expanded', 'false');
        w.setAttribute('aria-expanded', 'false');
        const icon = w.querySelector('iconify-icon');
        if (icon) icon.setAttribute('icon', 'tabler:chevron-down');
      });
    }

    function addChevronAndToggle(parentSlug, childSlugs) {
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
        collapseAll();
        if (!isExpanded) {
          childSlugs.forEach(slug => {
            const li = itemsBySlug[slug];
            if (li) li.style.display = 'list-item';
          });
          chevronWrapper.setAttribute('data-expanded', 'true');
          chevronWrapper.setAttribute('aria-expanded', 'true');
          const icon = chevron.querySelector('iconify-icon');
          icon.setAttribute('icon', 'tabler:chevron-up');
        }
      });

      // Hide children initially
      childSlugs.forEach(slug => {
        const li = itemsBySlug[slug];
        if (li) li.style.display = 'none';
      });
    }

    Object.keys(groups).forEach(parentSlug => {
      addChevronAndToggle(parentSlug, groups[parentSlug]);
    });

    function showDefault() {
      Object.keys(itemsBySlug).forEach(slug => {
        itemsBySlug[slug].style.display = isChild(slug) ? 'none' : 'list-item';
      });
      collapseAll();
    }
    showDefault();

    // Search filtering with parent visibility
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();

      if (searchTerm === '') {
        showDefault();
        return;
      }

      // Hide everything, then show matches
      Object.values(itemsBySlug).forEach(li => li.style.display = 'none');

      const matchedParents = new Set();

      Object.keys(itemsBySlug).forEach(slug => {
        const li = itemsBySlug[slug];
        if (li.textContent.toLowerCase().includes(searchTerm)) {
          li.style.display = 'list-item';
          // If it's a child, remember its parent; if a parent, itself
          Object.keys(groups).forEach(parentSlug => {
            if (groups[parentSlug].includes(slug)) matchedParents.add(parentSlug);
            if (parentSlug === slug) matchedParents.add(parentSlug);
          });
        }
      });

      // Reset all chevrons, then expand parents with visible children
      document.querySelectorAll('.chevron-wrapper').forEach(w => {
        w.setAttribute('data-expanded', 'false');
        w.setAttribute('aria-expanded', 'false');
        const icon = w.querySelector('iconify-icon');
        if (icon) icon.setAttribute('icon', 'tabler:chevron-down');
      });

      matchedParents.forEach(parentSlug => {
        const parentLi = itemsBySlug[parentSlug];
        if (parentLi) parentLi.style.display = 'list-item';

        const chevronWrapper = parentLi && parentLi.querySelector('.chevron-wrapper');
        if (chevronWrapper) {
          chevronWrapper.setAttribute('data-expanded', 'true');
          chevronWrapper.setAttribute('aria-expanded', 'true');
          const icon = chevronWrapper.querySelector('iconify-icon');
          if (icon) icon.setAttribute('icon', 'tabler:chevron-up');
        }
      });
    });

  });
})();
