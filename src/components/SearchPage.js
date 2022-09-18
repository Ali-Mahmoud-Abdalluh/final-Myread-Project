import { useState } from "react";
import * as BooksAPI from "../BooksAPI.js";
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchPage = () => {


  const [searchRes, setSearchRes] = useState([]);
  const [myBooks, setMyBooks] = useState([]);

  function searchHandler(event) {
    if (event.target.value.trim() !== "") {
      BooksAPI.search(event.target.value.trim())
        .then((res) => {
          let allRes = [];

          Array.isArray(res)&&event.target.value.trim().length > 0 ? allRes = res : setSearchRes([]);
          
          updateSearch();

          let filteredRes = allRes.filter((value) => "imageLinks" in value !== false && "authors" in value !== false);
          setSearchRes(filteredRes.length > 0 ? filteredRes : [])
        })
        .catch((error) => console.log(error));
    }else{
        setSearchRes([]);
    }
  }



  function updateSearch() {
    BooksAPI.getAll()
      .then((allBooks) => {
        setMyBooks(allBooks);
      })
      .catch((error) => console.log(error));
  }



  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={searchHandler}
              type="text"
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchRes.map((book) => (
              <Book key={book.id} book={book} updateScreen={updateSearch} myBooks={myBooks} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
