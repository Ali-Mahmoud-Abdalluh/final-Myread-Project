import React from "react";
import * as BooksAPI from "../BooksAPI.js";
const Book = ({ book, updateScreen, myBooks }) => {
  
  function changeShelfHandle(event) {
    BooksAPI.update(book, event.target.value)
      .then(() => updateScreen())
      .catch((error) => console.log(error));
  }

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
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(" & ")}</div>
      </div>
    </li>
  );
};

export default Book;
