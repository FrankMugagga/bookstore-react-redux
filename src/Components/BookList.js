import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removebook } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((store) => store.books.book);
  const dispatch = useDispatch();

  return (
    <ul>

      {
        books.map((book) => (
          <li key={book.id}>
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
                  <button className="ctrlBtn btn2" type="submit" onClick={() => dispatch(removebook(book.item_id))}>Remove</button>
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
              <buuton className="updatebtn" type="submit">
                UPDATE PROGRESS
              </buuton>
            </div>

          </li>

        ))
      }
    </ul>
  );
}

export default BookList;
