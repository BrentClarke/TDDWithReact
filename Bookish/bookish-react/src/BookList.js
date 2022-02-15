import React from 'react'

//this us a component from react 16 onward you don't need a class to define a component

//books is in {brackets because it knows its receiving an object}
const BookList = ({books}) => {
    return <div data-test="book-list">
        {
          books.map(book => (<div className="book-item">
              <h2 className='title'>{book.name}</h2>
            </div>
          ))
        }
      </div>
  }

export default  BookList