import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addbook } from '../redux/books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addbook({ title, author, category }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (

    <form onSubmit={handleSubmit}>
      <label htmlFor="book">
        <input id="book" name="book" type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label htmlFor="author">
        <input id="author" name="author" type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
      </label>

      <label htmlFor="category">
        <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Category</option>
          <option value="Action">Action</option>
          <option value="Science fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
      </label>

      <button className="add_bookbtn" type="submit">ADD BOOK</button>

    </form>
  );
}

export default Form;
