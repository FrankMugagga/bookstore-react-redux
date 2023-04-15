import { React, useState } from 'react';
import Form from './Form';
import BookList from './BookList';
import './Books.css';

function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      category: 'Action',
      title: 'The hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ]);
  return (
    <div className="booksMain">
      <BookList setBooks={setBooks} booksL={books} />
      <Form />
    </div>
  );
}

export default Books;
