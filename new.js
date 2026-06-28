document.addEventListener('DOMContentLoaded', function(){
  const searchInput = document.getElementById('commandSearch');
  const cards = Array.from(document.querySelectorAll('.command-card'));

  function filterCards(){
    const query = searchInput.value.trim().toLowerCase();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? 'block' : 'none';
    });
  }

  searchInput.addEventListener('input', filterCards);

  cards.forEach(card => {
    const button = card.querySelector('.copy-btn');
    button.addEventListener('click', async () => {
      const command = card.getAttribute('data-command');
      try {
        await navigator.clipboard.writeText(command);
        button.textContent = 'Copied!';
        setTimeout(() => { button.textContent = 'Copy'; }, 1200);
      } catch (err) {
        console.error(err);
        button.textContent = 'Copy failed';
        setTimeout(() => { button.textContent = 'Copy'; }, 1200);
      }
    });
  });
});