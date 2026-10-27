(()=> {
  const tablists = [...document.querySelectorAll('[data-tablist]')];
  tablists.forEach(list => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];
    const scope = list.classList.contains('episode-tabs')
      ? list.closest('.novel-panel')
      : document.querySelector('.novel-page');
    const activate = tab => {
      tabs.forEach(item => {
        const active = item === tab;
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
      });
      tabs.forEach(item => {
        const panel = scope && scope.querySelector('#' + CSS.escape(item.getAttribute('aria-controls')));
        if (panel) panel.hidden = item !== tab;
      });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', event => {
        let next = index;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        tabs[next].focus();
        activate(tabs[next]);
      });
    });
    const hashTarget = location.hash.slice(1);
    const initial = tabs.find(tab => tab.getAttribute('aria-controls') === hashTarget) || tabs.find(tab => tab.getAttribute('aria-selected') === 'true') || tabs[0];
    if (initial) activate(initial);
  });
})();