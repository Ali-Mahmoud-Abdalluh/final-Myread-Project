import React from "react";
import * as BooksAPI from "../BooksAPI.js";
import PropTypes from 'prop-types';

const Book = ({ book, updateScreen, myBooks }) => {
  
  function changeShelfHandle(event) {
    BooksAPI.update(book, event.target.value)
      .then(() => updateScreen())
      .catch((error) => console.log(error));
  }

  const shelves = [{"currentlyReading":"Currently Reading"},{"wantToRead":"Want to Read"},{"read":"Read"},{"none": "None"}]
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={"shelf" in book === false?(myBooks.filter((some)=>some.id === book.id).length >0 ? myBooks.filter((myBook)=>myBook.id === book.id)[0].shelf: "none"):book.shelf}
              option={"shelf" in book === false?(myBooks.filter((some)=>some.id === book.id).length >0 ? myBooks.filter((myBook)=>myBook.id === book.id)[0].shelf: "none"):book.shelf}
              onChange={changeShelfHandle}
            >
              <option disabled>Move to...</option>
              {
                shelves.map((shelf, index)=> <option key={index} value={Object.keys(shelf)[0]}>{Object.values(shelf)[0]}</option>)
              }
              
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(" & ")}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object,
  updateScreen: PropTypes.func,
  myBooks: PropTypes.array,
}

export default Book;
