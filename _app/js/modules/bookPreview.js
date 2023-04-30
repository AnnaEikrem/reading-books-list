export default function bookPreview(books) {
	const previewContainer = document.querySelector('.books__preview--section');
	const currentSearchParams = new URLSearchParams(window.location.search);
	const bookSlug = currentSearchParams.get('book');

	if (previewContainer) {
		renderPreviewHTML(bookSlug);
	}

	function returnDOMElement(book) {
		const bookTitle = book.title;
		const bookAuthor = book.author;
		const bookYear = book.year;
		const bookPages = book.pages;
		const bookSummary = book.summary;
		const bookUrl = book.coverUrl;

		const bookPreview = document.createElement('div');
		const titleElement = document.createElement('h3');
		const authorElement = document.createElement('div');
		const imageElement = document.createElement('div');
		const imageElementSource = document.createElement('img');
		const informationContainerElement = document.createElement('div');
		const pagesElement = document.createElement('div');
		const yearElement = document.createElement('div');
		const summaryElement = document.createElement('article');
		
		bookPreview.classList.add('book__preview--card')
		titleElement.classList.add('preview__title')
		authorElement.classList.add('preview__author');
		imageElement.classList.add('preview__image');
		imageElementSource.classList.add('preview__image--source');
		informationContainerElement.classList.add('preview__information')
		pagesElement.classList.add('preview__pages');
		yearElement.classList.add('preview__year')
		summaryElement.classList.add('preview__summary');

		titleElement.textContent = bookTitle;
		authorElement.textContent = bookAuthor;
		imageElementSource.setAttribute('src', bookUrl);
		pagesElement.textContent = bookPages;
		yearElement.textContent = bookYear;
		summaryElement.textContent = bookSummary;

		bookPreview.appendChild(titleElement);
		bookPreview.appendChild(authorElement);
		bookPreview.appendChild(informationContainerElement);
		informationContainerElement.appendChild(pagesElement);
		informationContainerElement.appendChild(yearElement);
		informationContainerElement.appendChild(summaryElement);
		
		return bookPreview
	}

	function renderPreviewHTML(slug) {
		const currentBook = books.find(book => book.slug === slug);
		const currentBookClicked = returnDOMElement(currentBook);

		previewContainer.appendChild(currentBookClicked);
	};
}