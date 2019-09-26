// API/TMDBApi.js

const API_TOKEN = "cc76b2b6d666b935757860a8b569484c";

export function getFilmsFromApiWithSearchedText (text, page) {
	const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
	return fetch(url)
	.then((response) => response.json())
	.catch((error) => console.error(error))
}

export function getImageFromApi(name) {
	return 'https://image.tmdb.org/t/p/w300' + name
}