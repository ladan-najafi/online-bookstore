console.log("app.js connected");
const buttons = document.querySelectorAll(".view-btn");
const detailsBox = document.querySelector("#book-details-box");

console.log(buttons);
console.log(detailsBox);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const bookName = button.dataset.book;

    if (bookName === "java") {
      detailsBox.innerHTML = `
    <h3>Java Basics</h3>
    <p><strong>Author:</strong> John Smith</p>
    <p><strong>Price:</strong> $29.99</p>
    <p><strong>Category:</strong> Programming</p>
    <p>This book is a good starting point for students who want to learn Java programming.</p>
  `;
    } else if (bookName === "html") {
      detailsBox.innerHTML = `
    <h3>HTML and CSS</h3>
    <p><strong>Author:</strong> Sarah Johnson</p>
    <p><strong>Price:</strong> $24.99</p>
    <p><strong>Category:</strong> Web Design</p>
    <p>This book teaches the basics of creating web pages with HTML and CSS.</p>
  `;
    } else if (bookName === "database") {
      detailsBox.innerHTML = `
    <h3>Database Concepts</h3>
    <p><strong>Author:</strong> Michael Brown</p>
    <p><strong>Price:</strong> $34.99</p>
    <p><strong>Category:</strong> Database</p>
    <p>This book explains database design, tables, relationships, and basic SQL.</p>
  `;
    }
  });
});
