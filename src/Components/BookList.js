import React from 'react';
import { PropTypes } from 'prop-types';

function BookList({ booksL }) {
  return (
    <ul>

      {
        booksL.map((books) => (
          <li key={books.id}>
            <div className="bookInfo">

              <div className="bookDetails">
                <div className="category">
                  {books.category}
                </div>
                <div className="title">
                  {books.title}
                </div>
                <div className="author">
                  {books.title}
                </div>

                <div className="controlBtn">
                  <button className="ctrlBtn" type="submit">Comments</button>
                  <button className="ctrlBtn btn2" type="submit">Remove</button>
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

BookList.propTypes = {
  booksL: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default BookList;
