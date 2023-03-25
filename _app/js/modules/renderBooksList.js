import { booksData } from './booksData.js';

export default function renderBooksList() {
	const books = booksData;
	const booksListContainer = document.querySelector('.books__list');

	books.forEach(book => {
		renderHTML(book);
	})


	function renderHTML(book) {
		const title = book.title;
		const author = book.author;

		const bookCard = document.createElement('div');
		const bookTitle = document.createElement('div');
		// const bookImage = document.createElement('img');
		const bookAuthor = document.createElement('div');

		bookCard.className = 'book__card';
		bookTitle.classList.add('book__title');
		// bookImage.classList.add('book__image');
		bookAuthor.classList.add('book__author');


		bookTitle.innerText = title;
		// bookImage.setAttribute('src', )
		bookAuthor.innerText = author;

		booksListContainer.appendChild(bookCard);
		bookCard.appendChild(bookTitle);
		// bookCard.appendChild(bookImage);
		bookCard.appendChild(bookAuthor);

	}


	console.log(books)
}