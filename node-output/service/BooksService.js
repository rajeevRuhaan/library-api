'use strict';


/**
 * Add a new book to the store
 * Add a new book to the store
 *
 * body Book Create a new book in the store
 * returns Book
 **/
exports.addBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : {
    "name" : "J.K Rowling",
    "id" : 1
  },
  "isbn" : "978-3-16-148410-0",
  "name" : "Harry Potter and the Philosopher's Stone",
  "genre" : "Fantasy",
  "borrower" : {
    "password" : "password",
    "createdDate" : "2016-08-29T09:12:33.001Z",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "user@email.com"
  },
  "description" : "The first book in the Harry Potter series, in which Harry discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
  "publisher" : "Bloomsbury",
  "borrowedDate" : {
    "reservedDate" : "2000-01-23T04:56:07.000+00:00",
    "quantity" : 1,
    "userId" : "userId",
    "bookId" : "bookId",
    "returnedDate" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : 10,
  "publishedDate" : "1997-06-26",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new book to the store
 * Add a new book to the store
 *
 * body Book Create a new book in the store
 * returns Book
 **/
exports.addBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : {
    "name" : "J.K Rowling",
    "id" : 1
  },
  "isbn" : "978-3-16-148410-0",
  "name" : "Harry Potter and the Philosopher's Stone",
  "genre" : "Fantasy",
  "borrower" : {
    "password" : "password",
    "createdDate" : "2016-08-29T09:12:33.001Z",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "user@email.com"
  },
  "description" : "The first book in the Harry Potter series, in which Harry discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
  "publisher" : "Bloomsbury",
  "borrowedDate" : {
    "reservedDate" : "2000-01-23T04:56:07.000+00:00",
    "quantity" : 1,
    "userId" : "userId",
    "bookId" : "bookId",
    "returnedDate" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : 10,
  "publishedDate" : "1997-06-26",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a book
 * delete a book
 *
 * bookId Long Book id to delete
 * no response value expected for this operation
 **/
exports.deleteBook = function(bookId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds books by status
 * Multiple status values can be provided with comma separated strings
 *
 * status String Status values that need to be considered for filter (optional)
 * returns List
 **/
exports.findBooksByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : {
    "name" : "J.K Rowling",
    "id" : 1
  },
  "isbn" : "978-3-16-148410-0",
  "name" : "Harry Potter and the Philosopher's Stone",
  "genre" : "Fantasy",
  "borrower" : {
    "password" : "password",
    "createdDate" : "2016-08-29T09:12:33.001Z",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "user@email.com"
  },
  "description" : "The first book in the Harry Potter series, in which Harry discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
  "publisher" : "Bloomsbury",
  "borrowedDate" : {
    "reservedDate" : "2000-01-23T04:56:07.000+00:00",
    "quantity" : 1,
    "userId" : "userId",
    "bookId" : "bookId",
    "returnedDate" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : 10,
  "publishedDate" : "1997-06-26",
  "status" : "available"
}, {
  "author" : {
    "name" : "J.K Rowling",
    "id" : 1
  },
  "isbn" : "978-3-16-148410-0",
  "name" : "Harry Potter and the Philosopher's Stone",
  "genre" : "Fantasy",
  "borrower" : {
    "password" : "password",
    "createdDate" : "2016-08-29T09:12:33.001Z",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "user@email.com"
  },
  "description" : "The first book in the Harry Potter series, in which Harry discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
  "publisher" : "Bloomsbury",
  "borrowedDate" : {
    "reservedDate" : "2000-01-23T04:56:07.000+00:00",
    "quantity" : 1,
    "userId" : "userId",
    "bookId" : "bookId",
    "returnedDate" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : 10,
  "publishedDate" : "1997-06-26",
  "status" : "available"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find Book by name
 * Returns a single Book
 *
 * name String Name of the book
 * returns Book
 **/
exports.getBookByName = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : {
    "name" : "J.K Rowling",
    "id" : 1
  },
  "isbn" : "978-3-16-148410-0",
  "name" : "Harry Potter and the Philosopher's Stone",
  "genre" : "Fantasy",
  "borrower" : {
    "password" : "password",
    "createdDate" : "2016-08-29T09:12:33.001Z",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "user@email.com"
  },
  "description" : "The first book in the Harry Potter series, in which Harry discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
  "publisher" : "Bloomsbury",
  "borrowedDate" : {
    "reservedDate" : "2000-01-23T04:56:07.000+00:00",
    "quantity" : 1,
    "userId" : "userId",
    "bookId" : "bookId",
    "returnedDate" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : 10,
  "publishedDate" : "1997-06-26",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all books
 * Returns books from the store
 *
 * returns List
 **/
exports.getBooks = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "author" : {
    "name" : "J.K Rowling",
    "id" : 1
  },
  "isbn" : "978-3-16-148410-0",
  "name" : "Harry Potter and the Philosopher's Stone",
  "genre" : "Fantasy",
  "borrower" : {
    "password" : "password",
    "createdDate" : "2016-08-29T09:12:33.001Z",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "user@email.com"
  },
  "description" : "The first book in the Harry Potter series, in which Harry discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
  "publisher" : "Bloomsbury",
  "borrowedDate" : {
    "reservedDate" : "2000-01-23T04:56:07.000+00:00",
    "quantity" : 1,
    "userId" : "userId",
    "bookId" : "bookId",
    "returnedDate" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : 10,
  "publishedDate" : "1997-06-26",
  "status" : "available"
}, {
  "author" : {
    "name" : "J.K Rowling",
    "id" : 1
  },
  "isbn" : "978-3-16-148410-0",
  "name" : "Harry Potter and the Philosopher's Stone",
  "genre" : "Fantasy",
  "borrower" : {
    "password" : "password",
    "createdDate" : "2016-08-29T09:12:33.001Z",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "user@email.com"
  },
  "description" : "The first book in the Harry Potter series, in which Harry discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
  "publisher" : "Bloomsbury",
  "borrowedDate" : {
    "reservedDate" : "2000-01-23T04:56:07.000+00:00",
    "quantity" : 1,
    "userId" : "userId",
    "bookId" : "bookId",
    "returnedDate" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : 10,
  "publishedDate" : "1997-06-26",
  "status" : "available"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update an existing book
 * Update an existing book by Id
 *
 * body Book Update an existing book in the bookstore
 * returns Book
 **/
exports.updateBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : {
    "name" : "J.K Rowling",
    "id" : 1
  },
  "isbn" : "978-3-16-148410-0",
  "name" : "Harry Potter and the Philosopher's Stone",
  "genre" : "Fantasy",
  "borrower" : {
    "password" : "password",
    "createdDate" : "2016-08-29T09:12:33.001Z",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "user@email.com"
  },
  "description" : "The first book in the Harry Potter series, in which Harry discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
  "publisher" : "Bloomsbury",
  "borrowedDate" : {
    "reservedDate" : "2000-01-23T04:56:07.000+00:00",
    "quantity" : 1,
    "userId" : "userId",
    "bookId" : "bookId",
    "returnedDate" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : 10,
  "publishedDate" : "1997-06-26",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update an existing book
 * Update an existing book by Id
 *
 * body Book Update an existing book in the bookstore
 * returns Book
 **/
exports.updateBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : {
    "name" : "J.K Rowling",
    "id" : 1
  },
  "isbn" : "978-3-16-148410-0",
  "name" : "Harry Potter and the Philosopher's Stone",
  "genre" : "Fantasy",
  "borrower" : {
    "password" : "password",
    "createdDate" : "2016-08-29T09:12:33.001Z",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "user@email.com"
  },
  "description" : "The first book in the Harry Potter series, in which Harry discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
  "publisher" : "Bloomsbury",
  "borrowedDate" : {
    "reservedDate" : "2000-01-23T04:56:07.000+00:00",
    "quantity" : 1,
    "userId" : "userId",
    "bookId" : "bookId",
    "returnedDate" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : 10,
  "publishedDate" : "1997-06-26",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

