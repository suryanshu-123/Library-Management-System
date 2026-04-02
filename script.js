const API = "http://localhost:5000/api/books";

// Load books
async function loadBooks() {
    const res = await fetch(API);
    const books = await res.json();

    const list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${book.title} - ${book.author} (${book.year})
            <button onclick="deleteBook('${book._id}')">❌</button>
        `;
        list.appendChild(li);
    });
}

// Add book
async function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;

    if (!title || !author || !year) {
        alert("All fields are required!");
        return;
    }

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, author, year })
    });

    loadBooks();
}

// Delete book
async function deleteBook(id) {
    await fetch(${API}/${id}, {
        method: "DELETE"
    });

    loadBooks();
}

// Initial load
loadBooks();