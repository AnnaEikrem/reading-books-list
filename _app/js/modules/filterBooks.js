import renderBooksList from './renderBooksList.js';

export default function filterBooks(books) {
	const booksListContainer = document.querySelector('.books__cards--list');
	const filterButtonContainer = document.querySelector('.books__genre--buttons');
	const booksGenres = books.map(book => book.genre);
	const uniqueGenres = [...new Set(booksGenres)];

	if(filterButtonContainer) {
		renderGenreButtons(uniqueGenres);
	}

	function buttonDOMElement(genre) {
		genre.forEach(button => {
			const genreButton = document.createElement('button');
			genreButton.classList.add('genre__button');
			genreButton.innerText = genre;

			filterButtonContainer.appendChild(genreButton);

			return genreButton;
		})
		console.log(genre);
	}


	function renderGenreButtons(genres) {
		for(let i = 0; i < genres.length; i++) {
			const genreButtonElement = buttonDOMElement(uniqueGenres[i]);
			// filterButtonContainer.appendChild(genreButtonElement);

			// console.log(genres);
		}
	}




	// console.log(uniqueGenres);
	// console.log(books);

}




	// function returnDOMElement(button) {
	// 	const genreButtonElement = document.createElement('button');
	// 	genreButtonElement.classList.add('genre__button');
	// 		genreButtonElement.textContent = button[i];
	// 		filterButtonContainer.appendChild(genreButtonElement);
			
	// 		const genreButtons = document.querySelectorAll('.genre__button'); 

	// 	genreButtons.forEach((button) => {
	// 		button.addEventListener('click', handleButtonClick);
	// 	})
	// }

	


	// function handleButtonClick(event) {
	// 	const selectedGenre = event.target.textContent.toLowerCase();
	// 	filterBooksByGenre(selectedGenre)
	// }

	// function filterBooksByGenre(genre) {
	// 	const bookCards = document.querySelectorAll('.book__card');

	// 	bookCards.forEach((bookCard) => {
	// 		const bookGenre = bookCard.dataset.genre;

	// 		if(bookGenre === genre || genre === 'all') {
	// 			bookCard.style.display = 'block';
	// 		} else {
	// 			bookCard.style.display = 'none';
	// 		}

	// 	});
	// }

	// filterBooksByGenre('all');
	// renderBooksList(books);