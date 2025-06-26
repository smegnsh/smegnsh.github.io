document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    // Activate clicked tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    // Show related content
    let id = btn.dataset.target;
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  });
});
