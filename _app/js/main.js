// import renderHero from './modules/renderHero.js';
import toggleNavigation from './modules/toggleNavigation.js';
import searchFilter from './modules/search-filter.js';
import { booksData } from './modules/booksData.js';
import renderBooksList from './modules/renderBooksList.js';
import filterBooks from './modules/filterBooks.js';



const booksInformation =  booksData;

// renderHero();
toggleNavigation();
searchFilter(booksInformation);
renderBooksList(booksInformation);
filterBooks(booksInformation);