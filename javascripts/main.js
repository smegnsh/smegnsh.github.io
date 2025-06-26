fetch('/params.json')
  .then(r => r.json())
  .then(data => initTabs(data.tabs))
  .catch(e => console.error('Failed to load params.json', e));

function initTabs(tabs) {
  const nav = document.getElementById('tabs');
  const main = document.getElementById('content');

  tabs.forEach((tab, i) => {
    const btn = document.createElement('button');
    btn.textContent = tab.title;
    btn.dataset.target = tab.id;
    if (i === 0) btn.classList.add('active');
    nav.appendChild(btn);

    const section = document.createElement('section');
    section.id = tab.id;
    section.classList.add('tab-content');
    if (i === 0) section.classList.add('active');
    section.innerHTML = tab.content;
    main.appendChild(section);

    btn.addEventListener('click', () => {
      nav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      main.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      section.classList.add('active');
    });
  });
}
