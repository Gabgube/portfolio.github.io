// Lightbox — s'applique à toutes les images du portfolio
document.addEventListener('DOMContentLoaded', () => {

  // Créer l'overlay
  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.innerHTML = `
    <button id="lightbox-close" aria-label="Fermer">&times;</button>
    <img id="lightbox-img" src="" alt="" />
  `;
  document.body.appendChild(overlay);

  const lightboxImg = document.getElementById('lightbox-img');

  // Sélectionner toutes les images cliquables (pas les logos, icônes, etc.)
  const selecteurs = [
    '.particule-images img',
    '.jeu-block-img',
    '.projet-hero-img',
    '.about-photo img'
  ];

  document.querySelectorAll(selecteurs.join(', ')).forEach(img => {
    img.classList.add('lightbox-trigger');
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Fermer au clic sur l'overlay ou le bouton
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.id === 'lightbox-close') {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Fermer avec Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
