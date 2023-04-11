import renderBooksList from './renderBooksList.js';

/**
 * @todo Fix search function to render a list, where the links lead to another index.html file.
 * @todo	Make the filterButtons in to a select, with options in mobile version
 */

export default function filterBooks(books) {
	let filteredBooks = [];
	const booksListContainer = document.querySelector('.books__cards--list');
	const filterButtonContainer = document.querySelector('.books__genre--buttons');
	const booksGenres = books
		.map(book => book.genreName);
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
	}

	function toggleClass(allFilterButtons, currentFilterButton) {
		allFilterButtons.forEach(button => {
			button.classList.remove('filtered__book--active')
		});

		currentFilterButton.classList.add('filtered__book--active');
	}		

	function applyGenreFilter(currentGenre) {
			switch (currentGenre) {
				case 'Classic':
				  filteredBooks = books.filter(book => book.genreName === 'Classic');
				  break;
	
				case 'Dystopian':
				  filteredBooks = books.filter(book => book.genreName === 'Dystopian');

				  break;
	
				case 'Fantasy':
				  filteredBooks = books.filter(book => book.genreName === 'Fantasy');
				  break;
	
				case 'History':
				  filteredBooks = books.filter(book => book.genreName === 'History');
				  break;
	
				case 'Science fiction':
				  filteredBooks = books.filter(book => book.genreName === 'Science fiction');
				  break;
	
				case 'Self-development':
				  filteredBooks = books.filter(book => book.genreName === 'Self-development');
				  break;
	
				default:
				  filteredBooks = books;
				  break;
			}

			booksListContainer.innerText = '';
			renderBooksList(filteredBooks);
		 }
		 
	function renderGenreButtons() {
		const allButtonElement = document.createElement('button');
   	allButtonElement.classList.add('genre__button');
    	allButtonElement.textContent = 'All';
    	filterButtonContainer.appendChild(allButtonElement);

    	allButtonElement.addEventListener('click', () => {
      toggleClass(filterButtonContainer.querySelectorAll('button'), allButtonElement);
      applyGenreFilter('All');
    });

	 uniqueGenres.forEach(genre => {
			const buttonElement = document.createElement('button');
			buttonElement.classList.add('genre__button');
			buttonElement.textContent = genre;
			filterButtonContainer.appendChild(buttonElement);

			buttonElement.addEventListener('click', handleButtonElementClick);
		})
	}
}
