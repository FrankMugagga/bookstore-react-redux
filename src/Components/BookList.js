import React from 'react';

function BookList() {
  return (
    <ul>
      <li>
        <div className="bookInfo">

          <div className="bookDetails">
            <div className="category">
              Action
            </div>
            <div className="title">
              The hunger Games
            </div>
            <div className="author">
              Suzanne Collins
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

      <li>
        <div className="bookInfo">

          <div className="bookDetails">
            <div className="category">
              Science Fiction
            </div>
            <div className="title">
              Dune
            </div>
            <div className="author">
              Frank Herbert
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
                8%
              </div>
              <div className="loadstatus">
                Completed
              </div>

            </div>
          </div>

        </div>

        <div className="chapters">
          <h3>
            CURRENT CHAPTER
          </h3>
          <h5>
            Chapter 3: `A lesson Learned `
          </h5>
          <buuton className="updatebtn" type="submit">
            UPDATE PROGRESS
          </buuton>
        </div>
      </li>
      <li>
        <div className="bookInfo">

          <div className="bookDetails">
            <div className="category">
              Economy
            </div>
            <div className="title">
              Capital in the Twenty-First Century
            </div>
            <div className="author">
              Suzanne Collins
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
                0%
              </div>
              <div className="loadstatus">
                Completed
              </div>

            </div>
          </div>

        </div>

        <div className="chapters">
          <h3>
            CURRENT CHAPTER
          </h3>
          <h5>
            Introduction
          </h5>
          <buuton className="updatebtn" type="submit">
            UPDATE PROGRESS
          </buuton>
        </div>

      </li>
    </ul>
  );
}

export default BookList;
