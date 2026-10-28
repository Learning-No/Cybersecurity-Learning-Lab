(()=> {
  const boxes = [...document.querySelectorAll('[data-progress]')];
  const key = 'cybersecurity-learning-lab-progress-v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (_) {}
  function updateProgress() {
    const done = boxes.filter(box => box.checked).length;
    const percent = boxes.length ? Math.round(done / boxes.length * 100) : 0;
    const label = document.getElementById('progress-label');
    const fill = document.getElementById('progress-fill');
    if (label) label.textContent = percent + '% complete';
    if (fill) fill.style.width = percent + '%';
  }
  boxes.forEach(box => {
    box.checked = !!saved[box.dataset.progress];
    box.addEventListener('change', () => {
      saved[box.dataset.progress] = box.checked;
      try { localStorage.setItem(key, JSON.stringify(saved)); } catch (_) {}
      updateProgress();
    });
  });
  updateProgress();

  const noteSearch = document.getElementById('note-search');
  const noteCards = [...document.querySelectorAll('.note-card')];
  const noteEmpty = document.getElementById('empty-state');
  if (noteSearch) {
    const filterNotes = () => {
      const query = noteSearch.value.toLowerCase().trim();
      let visible = 0;
      noteCards.forEach(card => {
        const match = (card.dataset.search || card.textContent).toLowerCase().includes(query);
        card.hidden = !match;
        if (match) visible++;
      });
      if (noteEmpty) noteEmpty.hidden = visible > 0;
    };
    noteSearch.addEventListener('input', filterNotes);
    filterNotes();
  }

  const toolSearch = document.getElementById('tool-search');
  const toolCards = [...document.querySelectorAll('.tool-entry')];
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const toolGrid = document.getElementById('tool-grid');
  let activeCategory = 'all';
  let toolEmpty = document.getElementById('tool-empty-state');
  if (toolGrid && toolCards.length) {
    if (!toolEmpty) {
      toolEmpty = document.createElement('p');
      toolEmpty.id = 'tool-empty-state';
      toolEmpty.className = 'hint';
      toolEmpty.textContent = 'No tools match those filters. Try another search or choose “All”.';
      toolEmpty.hidden = true;
      toolGrid.insertAdjacentElement('afterend', toolEmpty);
    }
    const filterTools = () => {
      const query = toolSearch ? toolSearch.value.toLowerCase().trim() : '';
      let visible = 0;
      toolCards.forEach(card => {
        const text = (card.dataset.search || card.textContent).toLowerCase();
        const category = (card.dataset.category || '').toLowerCase();
        const matchesCategory = activeCategory === 'all' || category === activeCategory;
        const matchesQuery = !query || text.includes(query);
        card.hidden = !(matchesCategory && matchesQuery);
        if (!card.hidden) visible++;
      });
      if (toolEmpty) toolEmpty.hidden = visible > 0;
    };
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        activeCategory = button.dataset.filter || 'all';
        filterButtons.forEach(item => {
          const active = item === button;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        filterTools();
      });
    });
    if (toolSearch) toolSearch.addEventListener('input', filterTools);
    filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === 'all')));
    filterTools();
  }

  // Accessible responsive navigation: toggle the mobile menu without blocking desktop navigation.
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  if (navToggle && primaryNav) {
    const setNavOpen = open => {
      primaryNav.dataset.open = String(open);
      navToggle.setAttribute('aria-expanded', String(open));
      const label = navToggle.querySelector('.nav-toggle-label');
      if (label) label.textContent = open ? 'Close' : 'Menu';
    };
    navToggle.addEventListener('click', () => setNavOpen(primaryNav.dataset.open !== 'true'));
    primaryNav.addEventListener('click', event => {
      if (event.target.closest('a') && window.matchMedia('(max-width: 1080px)').matches) setNavOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && primaryNav.dataset.open === 'true') {
        setNavOpen(false);
        navToggle.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (!window.matchMedia('(max-width: 1080px)').matches) setNavOpen(false);
    });
  }

  // Treat the dropdowns as one exclusive menu: opening one closes the others.
  const navMenus = [...document.querySelectorAll('.nav-group')];
  const closeNavMenus = except => {
    navMenus.forEach(menu => {
      if (menu !== except) menu.open = false;
    });
  };
  navMenus.forEach(menu => {
    menu.addEventListener('toggle', () => {
      if (menu.open) closeNavMenus(menu);
    });
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.primary-nav')) closeNavMenus(null);
    if (event.target.closest('.nav-menu a')) closeNavMenus(null);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeNavMenus(null);
      const activeSummary = document.activeElement;
      if (activeSummary && activeSummary.matches('.nav-group > summary')) activeSummary.focus();
    }
  });

  // Accessible horizontal card carousels for notes and weekly lab cards.
  const carouselButtons = [...document.querySelectorAll('[data-carousel-prev], [data-carousel-next]')];
  const updateCarouselControls = id => {
    const track = document.getElementById(id);
    if (!track) return;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    document.querySelectorAll('[data-carousel-prev="' + id + '"]').forEach(button => {
      button.disabled = track.scrollLeft <= 2;
    });
    document.querySelectorAll('[data-carousel-next="' + id + '"]').forEach(button => {
      button.disabled = track.scrollLeft >= maxScroll - 2;
    });
  };
  const carouselStep = track => {
    const item = track.querySelector(':scope > .note-card, :scope > .week-card, :scope > .kpi-slide');
    if (!item) return Math.max(240, track.clientWidth * .8);
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
    return item.getBoundingClientRect().width + gap;
  };
  carouselButtons.forEach(button => {
    const id = button.dataset.carouselPrev || button.dataset.carouselNext;
    const track = document.getElementById(id);
    if (!track) return;
    button.addEventListener('click', () => {
      const direction = button.hasAttribute('data-carousel-next') ? 1 : -1;
      track.scrollBy({ left: direction * carouselStep(track), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
    track.addEventListener('scroll', () => updateCarouselControls(id), { passive: true });
    window.addEventListener('resize', () => updateCarouselControls(id));
    updateCarouselControls(id);
  });

})();