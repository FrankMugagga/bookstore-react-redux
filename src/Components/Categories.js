import React from 'react';
import { useSelector } from 'react-redux';

function Categories() {
  const check = useSelector((store) => store.Categories.check);

  return (
    <div>
      <h3>{check}</h3>
      <button type="submit" onClick={alert('click')}>Check</button>
    </div>
  );
}

export default Categories;
