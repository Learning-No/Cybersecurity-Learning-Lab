(() => {
  const checks = Array.from(document.querySelectorAll('input[data-progress]'));
  const key = 'cybersecurity-learning-lab-progress-v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (_) { saved = {}; }
  checks.forEach((input) => {
    input.checked = Boolean(saved[input.dataset.progress]);
    input.addEventListener('change', () => {
      saved[input.dataset.progress] = input.checked;
      try { localStorage.setItem(key, JSON.stringify(saved)); } catch (_) {}
      updateProgress();
    });
  });
  function updateProgress() {
    const done = checks.filter((input) => input.checked).length;
    const percent = checks.length ? Math.round(done / checks.length * 100) : 0;
    const label = document.getElementById('progress-label');
    const fill = document.getElementById('progress-fill');
    if (label) label.textContent = percent + '% COMPLETE';
    if (fill) fill.style.width = percent + '%';
  }
  updateProgress();
  const search = document.getElementById('note-search');
  const cards = Array.from(document.querySelectorAll('.note-card'));
  const empty = document.getElementById('empty-state');
  if (search) search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const match = (card.dataset.search || card.textContent).toLowerCase().includes(query);
      card.hidden = !match;
      if (match) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  });
})();
