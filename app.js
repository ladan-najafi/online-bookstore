const buttons = document.querySelectorAll('.view-btn');
const cartButtons = document.querySelectorAll('.cart-btn');
const detailsBox = document.querySelector('#book-details-box');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

function showBookDetails(bookName) {
  if (bookName === 'java') {
    detailsBox.innerHTML = `
      <h3>Java Basics</h3>
      <p><strong>Author:</strong> John Smith</p>
      <p><strong>Price:</strong> $29.99</p>
      <p><strong>Category:</strong> Programming</p>
      <p>This book is a good starting point for students who want to learn Java programming.</p>
    `;
  } else if (bookName === 'html') {
    detailsBox.innerHTML = `
      <h3>HTML and CSS</h3>
      <p><strong>Author:</strong> Sarah Johnson</p>
      <p><strong>Price:</strong> $24.99</p>
      <p><strong>Category:</strong> Web Design</p>
      <p>This book teaches the basics of creating web pages with HTML and CSS.</p>
    `;
  } else if (bookName === 'database') {
    detailsBox.innerHTML = `
      <h3>Database Concepts</h3>
      <p><strong>Author:</strong> Michael Brown</p>
      <p><strong>Price:</strong> $34.99</p>
      <p><strong>Category:</strong> Database</p>
      <p>This book explains database design, tables, relationships, and basic SQL.</p>
    `;
  } else {
    detailsBox.innerHTML = `
      <h3>Book not found</h3>
      <p>Please search for Java, HTML, CSS, Web, Database, or SQL.</p>
    `;
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const bookName = button.dataset.book;
    showBookDetails(bookName);
    document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
  });
});

/*cartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const bookName = button.dataset.book;

    if (bookName === 'java') {
      alert('Java Basics added to cart!');
    } else if (bookName === 'html') {
      alert('HTML and CSS added to cart!');
    } else if (bookName === 'database') {
      alert('Database Concepts added to cart!');
    }
  });
});*/
// ---- CART CODE STARTS HERE ----

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = cart.length;
}

updateCartCount();

/*const bookData = {
  java:     { title: 'Java Basics',       author: 'John Smith',    price: 29.99 },
  html:     { title: 'HTML and CSS',      author: 'Sarah Johnson', price: 24.99 },
  database: { title: 'Database Concepts', author: 'Michael Brown', price: 34.99 }
};
*/
// For simplicity, we can define the book data in an array instead of an object
const books = [
  { id: 'java',       title: 'Java Basics',           author: 'John Smith',    price: 29.99, category: 'Programming', description: 'A good starting point for students who want to learn Java.', image: 'images/book1.jpg' },
  { id: 'html',       title: 'HTML and CSS',           author: 'Sarah Johnson', price: 24.99, category: 'Web Design',   description: 'A beginner guide for creating web pages with HTML and CSS.', image: 'images/book2.jpg' },
  { id: 'database',   title: 'Database Concepts',      author: 'Michael Brown', price: 34.99, category: 'Database',     description: 'Learn database design, tables, relationships and basic SQL.', image: 'images/book3.jpg' },
  { id: 'python',     title: 'Python for Beginners',   author: 'Alice GreenAlexander Croyden',   price: 22.99, category: 'Programming', description: 'Learn Python programming from scratch with simple examples.', image: 'images/book4.jpg' },
  { id: 'javascript', title: 'JavaScript for Beginners',  author: 'Tim Simon',     price: 19.95, category: 'Web Design',   description: 'Master JavaScript basics and build interactive web pages.', image: 'images/book5.jpg' },
  { id: 'networking', title: 'Network Fundamentals',   author: 'Gordon Davies',   price: 53.99, category: 'Networking',  description: 'Understand how networks work, protocols and security basics.', image: 'images/book6.jpg' },
];
function renderBooks(bookList) {
  const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML = '';

  bookList.forEach((book) => {
    bookContainer.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${book.image}" class="card-img-top" alt="${book.title}" />
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.description}</p>
            <a href="#" class="btn btn-primary view-btn" data-book="${book.id}">View</a>
            <button class="btn btn-success cart-btn" data-book="${book.id}">Add to Cart</button>
          </div>
        </div>
      </div>`;
  });

  // Re-attach view and cart button events after rendering
  attachEvents();
}
/*function attachEvents() {
  document.querySelectorAll('.view-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const book = books.find(b => b.id === button.dataset.book);
      detailsBox.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Price:</strong> $${book.price}</p>
        <p><strong>Category:</strong> ${book.category}</p>
        <p>${book.description}</p>
      `;
      document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
    });
  });*/
  function attachEvents() {
  document.querySelectorAll('.view-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const book = books.find(b => b.id === button.dataset.book);
      detailsBox.innerHTML = `
        <div class="row">
          <div class="col-md-3 text-center">
          <img src="${book.image}" alt="${book.title}" class="img-fluid rounded" style="max-height: 200px; object-fit: contain;" />
            <a href="#books" class="btn btn-dark">🛍️ Continue Shopping</a>
          
            
          </div>
          <div class="col-md-9">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Price:</strong> $${book.price}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p>${book.description}</p>
            <button class="btn btn-success detail-cart-btn" data-book="${book.id}">Add to Cart</button>
          </div>
        </div>
      `;
      document.querySelector('.detail-cart-btn').addEventListener('click', () => {
        cart.push(book);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        if (confirm(`${book.title} added to cart! Go to cart?`)) {
          window.location.href = 'cart.html';
        }
      });
      document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.cart-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const book = books.find(b => b.id === button.dataset.book);
      cart.push(book);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      if (confirm(`${book.title} added to cart! Go to cart?`)) {
        window.location.href = 'cart.html';
      }
    });
  });
}

cartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const bookName = button.dataset.book;
    const book = bookData[bookName];

    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    if (confirm(`${book.title} added to cart! Go to cart?`)) {
      window.location.href = 'cart.html';
    }
  });
});

// ---- CART CODE ENDS HERE ----


/*.addEventListener('click', () => {
  const searchValue = searchInput.value.toLowerCase();

  if (searchValue.includes('java') || searchValue.includes('programming')) {
    showBookDetails('java');
  } else if (
    searchValue.includes('html') ||
    searchValue.includes('css') ||
    searchValue.includes('web')
  ) {
    showBookDetails('html');
  } else if (
    searchValue.includes('database') ||
    searchValue.includes('sql') ||
    searchValue.includes('data')
  ) {
    showBookDetails('database');
  } else {
    showBookDetails('notfound');
  }
});*/
searchBtn.addEventListener('click', () => {
  const searchValue = searchInput.value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(searchValue) ||
    book.category.toLowerCase().includes(searchValue) ||
    book.author.toLowerCase().includes(searchValue)
  );

  if (filtered.length > 0) {
    renderBooks(filtered);
  } else {
    document.getElementById('book-container').innerHTML = `
      <div class="col-12 text-center">
        <p class="text-danger">No books found for "${searchValue}"</p>
      </div>`;
  }
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchBtn.click();
  }
});
// Render all books on page load
renderBooks(books);
