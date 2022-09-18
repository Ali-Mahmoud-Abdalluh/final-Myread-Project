import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import { useEffect , useState} from "react";
import * as BooksAPI from "../BooksAPI.js";


const MainPage = () => {
  const [shelves, setShelves] = useState([]);


  function updateScreen (){
    BooksAPI.getAll()
      .then((books) => {
        const shelvesArr = Array.from(new Set(books.map((book) => book.shelf)));
        const bookShelvesArr = [];
        shelvesArr.forEach((shelf) => {
          var obj = {};
          obj[shelf] = books.filter((book) => book.shelf === shelf);
          bookShelvesArr.push(obj);
        });
        setShelves(bookShelvesArr);
      })
      .catch((error) => console.log(error));
  }


  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        const shelvesArr = Array.from(new Set(books.map((book) => book.shelf)));
        const bookShelvesArr = [];
        shelvesArr.forEach((shelf) => {
          var obj = {};
          obj[shelf] = books.filter((book) => book.shelf === shelf);
          bookShelvesArr.push(obj);
        });
        setShelves(bookShelvesArr);
      })
      .catch((error) => console.log(error));
  }, []);

  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf, i) => (
            <Shelf
              key={i}
              books={Object.values(shelf)[0]}
              shelfTitle={Object.keys(shelf)[0]}
              updateScreen={updateScreen}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainPage;
