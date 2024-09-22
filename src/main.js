import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderGallery } from './js/render-functions.js';

const form = document.querySelector('search-form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();

  if (!query) return;

  try {
    loader.classList.remove('hidden');
    clearGallery();

    const images = await fetchImages(query);
    renderGallery(images);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    loader.classList.add('hidden');
  }
});
