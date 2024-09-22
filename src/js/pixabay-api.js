import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '46118287-c5ba04b36aad3afec959570e4';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  if (!query.trim()) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
    });
    return;
  }

  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
        query
      )}&image_type=photo&orientation=horizontal&safesearch=true`
    );
    const data = await response.json();

    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No Results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return [];
    }

    return data.hits;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    throw error;
  }
}
