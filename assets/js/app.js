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
    if (label) label.textContent = percent + '% COMPLETE';
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
})();