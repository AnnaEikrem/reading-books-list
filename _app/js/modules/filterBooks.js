import renderBooksList from './renderBooksList.js';

export default function filterBooks(books) {
	let filteredBooks = [];
	const booksListContainer = document.querySelector('.books__cards--list');
	const filterButtonContainer = document.querySelector('.books__genre--buttons');
	const booksGenres = books
		.map(book => book.genre);
	const uniqueGenres = [...new Set(booksGenres)].sort();

	if(filterButtonContainer) {
		renderGenreButtons();
	}

	function handleButtonElementClick(event) {
		const currentGenre = event.target.innerText;
		const currentFilterButton = event.target;
		const allFilterButtons = event.target.parentElement.querySelectorAll('button');

		toggleClass(allFilterButtons, currentFilterButton);
		applyGenreFilter(currentGenre);
		// filterBooksByGenre(currentGenre);

		// if (filteredBooks.length > 0 && filteredBooks[0].genre === currentGenre) {
		// 	filteredBooks = [];
		// 	renderBooksList(books);
		// } else {
		// 	filterBooks(currentGenre);
		// }
	}

	function toggleClass(allFilterButtons, currentFilterButton) {
		allFilterButtons.forEach(button => {
			button.classList.remove('filtered__book--active')
		});

		currentFilterButton.classList.add('filtered__book--active');
	}		

	function applyGenreFilter(currentGenre) {
		if (filteredBooks.length > 0 && filteredBooks[0].genre === currentGenre) {
			filteredBooks = [];
			renderBooksList(books);
		} else {

			switch (currentGenre) {
				case 'Classic':
				  filteredBooks = books.filter(book => book.genre === 'Classic');
				  break;
	
				case 'Dystopian':
				  filteredBooks = books.filter(book => book.genre === 'Dystopian');
				  break;
	
				case 'Fantasy':
				  filteredBooks = books.filter(book => book.genre === 'Fantasy');
				  break;
	
				case 'History':
				  filteredBooks = books.filter(book => book.genre === 'History');
				  break;
	
				case 'Science fiction':
				  filteredBooks = books.filter(book => book.genre === 'Science fiction');
				  break;
	
				case 'Self-development':
	
				  filteredBooks = books.filter(book => book.genre === 'Self-development');
				  break;
	
				default:
				  filteredBooks = [];
				  renderBooksList(books);
				  break;
			}

			booksListContainer.innerText = '';
			renderBooksList(filteredBooks);
		 }
	}

	function renderGenreButtons() {
		uniqueGenres.forEach(genre => {
			const buttonElement = document.createElement('button');
			buttonElement.classList.add('genre__button');
			buttonElement.textContent = genre;
			filterButtonContainer.appendChild(buttonElement);

			buttonElement.addEventListener('click', handleButtonElementClick);
		})
	}
}
	