import React from 'react';

function Form() {
  return (

    <form>
      <label htmlFor="book">
        <input id="book" name="book" type="text" placeholder="Book title" />
      </label>

      <label htmlFor="category">
        <select id="category" name="category" value="Category" placeholder="Book title">
          <option value="action">Category</option>
          <option value="action">Action</option>
          <option value="science fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
      </label>

      <button className="add_bookbtn" type="submit">ADD BOOK</button>

    </form>
  );
}

export default Form;
