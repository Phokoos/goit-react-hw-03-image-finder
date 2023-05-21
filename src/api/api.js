const API_KEY = '34992270-3b017e4415c54b51260483202';
const BASE_URL = 'https://pixabay.com/api/'


export const findPhotoApi = async (value, page) => {
	try {
		const data = await fetch(`${BASE_URL}?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
		return data.json();
	} catch (error) {
		console.log(error);
	}
}