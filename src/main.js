import { fetchImages } from './js/pixabay-api.js';
import {
  clearGallery,
  renderGallery,
  lightbox,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
    });
    return;
  }

  loader.classList.remove('hidden');
  clearGallery();

  fetchImages(query)
    .then(data => {
      if (data.length === 0) {
        iziToast.warning({
          title: 'No Results',
          message: 'Sorry, no images match your search query.',
        });
      } else {
        renderGallery(data);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
      console.error('Error fetching images:', error);
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});
