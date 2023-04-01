import renderBooksList from './renderBooksList.js';

export default function filterBooks(booksData) {
	// const booksListContainer = document.querySelector('.books__cards--list');
	const filterButtonContainer = document.querySelector('.books__filter--genres');
	const booksGenres = booksData.map(book => book.genre);
	const uniqueGenres = [...new Set(booksGenres)];

	function renderGenreButtons(genres) {
		for(let i = 0; i < genres.length; i++) {
			const genreButtonElement = document.createElement('button');
			genreButtonElement.classList.add('genre__button');
			genreButtonElement.textContent = genres[i];
			filterButtonContainer.appendChild(genreButtonElement);	
		}

		const genreButtons = document.querySelectorAll('.genre__button'); 

		genreButtons.forEach((button) => {
			button.addEventListener('click', handleButtonClick);
		})
	}

	if(filterButtonContainer) {
		renderGenreButtons(uniqueGenres);
	}

	function handleButtonClick(event) {
		const selectedGenre = event.target.textContent.toLowerCase();
		filterBooksByGenre(selectedGenre)
	}

	function filterBooksByGenre(genre) {
		const bookCards = document.querySelectorAll('.book__card');

		bookCards.forEach((bookCard) => {
			const bookGenre = bookCard.dataset.genre;

			if(bookGenre === genre || genre === 'all') {
				bookCard.style.display = 'block';
			} else {
				bookCard.style.display = 'none';
			}

			console.log(bookCard);
		});
	}

	filterBooksByGenre('all');
	renderBooksList(booksData);
}