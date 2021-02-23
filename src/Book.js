import React from 'react';

const Book = (props) => { return (
   <li className="book">
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>{props.price}</div>
</li>
)}
export default Book;