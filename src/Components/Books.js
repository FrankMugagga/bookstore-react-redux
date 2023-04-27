import { React } from 'react';
import Form from './Form';
import BookList from './BookList';
import './Books.css';

function Books() {
  return (
    <div className="booksMain">
      <BookList />
      <Form />
    </div>
  );
}

export default Books;
