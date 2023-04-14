/**
 * @todo Fix search function to render a list, where the links lead to another index.html file.
 * @todo	Make the filterButtons in to a select, with options in mobile version.
 */

export default function searchFilter(books) {
	const searchFieldAnchor = document.querySelector('.header__container');
	const inputResultsContainer = document.querySelector('.navigation__input--content');
	const searchInputField = document.getElementById('input__filter');
	const submitButton = document.querySelector('.input__submit--icon');
	const newBooksData = books.map(book => {
		return {
			id: book.id,
			author: book.author,
			title: book.title
		}
	});

	submitButton.addEventListener('click', handleFilterSearch);

	function handleFilterSearch() {
		let filterResults = [];
		const inputTerm = searchInputField.value.toLowerCase();
		const inputResultsList = document.createElement('ul');

		newBooksData.forEach(book => {
			if (book.title.toLowerCase().includes(inputTerm) || book.author.toLowerCase().includes(inputTerm)) {
				const listItem = document.createElement('li');
				const bookLink = document.createElement('a');
				const bookTitle = book.title;
				const bookAuthor = book.author;
				filterResults.push(book);

				bookLink.innerText = `${bookTitle}  by ${bookAuthor}`;
				listItem.classList.add('input__result--item');
				bookLink.href = `/_app/book-preview/index.html/${book.id}`;
				bookLink.classList.add('result__item--link')

				listItem.appendChild(bookLink);
				inputResultsList.appendChild(listItem);
			} 
		});

		const closeFilterButton = document.createElement('button'); 
		closeFilterButton.innerText = 'Close';
		closeFilterButton.classList.add('close__filter--button');
		closeFilterButton.addEventListener('click', handleCloseFilterButtonClick);

		function handleCloseFilterButtonClick() {
			inputResultsContainer.removeChild(inputResultsList);
			closeFilterButton.remove('close__filter--button');
			closeFilterButton.add('close__filter--button--hidden');
		}
			
		if(inputResultsContainer) {
			inputResultsList.classList.add('input__result--items');
			inputResultsContainer.innerHTML = '';
			inputResultsContainer.appendChild(closeFilterButton);
			inputResultsContainer.appendChild(inputResultsList);
			searchFieldAnchor.appendChild(inputResultsContainer)
		}
	}	
}




	