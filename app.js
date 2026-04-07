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
  });
});

cartButtons.forEach((button) => {
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
});

searchBtn.addEventListener('click', () => {
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
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchBtn.click();
  }
});