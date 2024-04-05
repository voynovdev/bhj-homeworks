const buttons = document.querySelectorAll(".font-size");
const book = document.getElementById("book");

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();

        buttons.forEach(btn => btn.classList.remove("font-size_active"));
        this.classList.add("font-size_active");

        const size = this.getAttribute("data-size");

        if (size === "small") {
            book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");
        } else if (size === "big") {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        } else {
            book.classList.remove("book_fs-small", "book_fs-big");
        }
    });
});