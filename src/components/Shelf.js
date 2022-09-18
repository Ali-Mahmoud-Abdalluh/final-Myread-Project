import React from "react";
import Book from './Book.js';
import PropTypes from 'prop-types';

const Shelf = ({books, shelfTitle, updateScreen}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle.replace(/([a-z0-9])([A-Z])/g, '$1 $2')}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {books.map((book)=>{
                return<Book key={book.id} book={book} updateScreen = {updateScreen} myBooks={[]}/>
            })}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array,
  shelfTitle: PropTypes.string,
  updateScreen: PropTypes.func
}
export default Shelf;
