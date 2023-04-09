export default function renderBooksList(books) {
	const booksListContainer = document.querySelector('.books__cards--list');

	books.forEach(book => {
		renderHTML(book);
	})

	function renderHTML(book) {
		const title = book.title;
		const author = book.author;
		const bookUrl = book.coverUrl;

		const bookCard = document.createElement('div');
		const bookTitle = document.createElement('div');
		const bookCover = document.createElement('img');
		const bookAuthor = document.createElement('div');

		bookCard.className = 'book__card';
		bookTitle.classList.add('book__title');
		bookCover.classList.add('book__cover');
		bookAuthor.classList.add('book__author');

		bookTitle.innerText = title;
		bookCover.setAttribute('src', bookUrl);
		bookAuthor.innerText = author;

		booksListContainer.appendChild(bookCard);
		bookCard.appendChild(bookCover);
		bookCard.appendChild(bookTitle);
		bookCard.appendChild(bookAuthor);

	}


}