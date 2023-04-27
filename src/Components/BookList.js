import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeBook, fetchBooks, getBooksStatus, getBooksError,
} from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const book = useSelector((store) => store.books.books);
  const booksStatus = useSelector(getBooksStatus);
  const error = useSelector(getBooksError);

  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, []);

  if (booksStatus === 'Loading') {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>There was an error</h1>
      </div>
    );
  }

  return (
    <ul>

      {
        book.map((book) => (
          <li key={book.item_id}>
            <div className="bookInfo">

              <div className="bookDetails">
                <div className="category">
                  {book.category}
                </div>
                <div className="title">
                  {book.title}
                </div>
                <div className="author">
                  {book.author}
                </div>

                <div className="controlBtn">
                  <button className="ctrlBtn" type="submit">Comments</button>
                  <button className="ctrlBtn btn2" type="submit" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
                  <button className="ctrlBtn" type="submit">Edit</button>
                </div>

              </div>

              <div className="loading">
                <div className="loadingCircle" />
                <div className="loadDetails">
                  <div className="loadNum">
                    64%
                  </div>
                  <div className="loadstatus">
                    Completed
                  </div>

                </div>
              </div>

            </div>

            <div className="chapters">
              <h3 className="h3h">
                CURRENT CHAPTER
              </h3>
              <h5 className="h5h">
                Chapter 17
              </h5>
              <button className="updatebtn" type="submit">
                UPDATE PROGRESS
              </button>
            </div>

          </li>

        ))
      }
    </ul>
  );
}

export default BookList;
