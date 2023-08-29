import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

const BookList = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`)
            setBooks(res.data.results.books)
        }
        fetchBooks()
    }, [])

    

    return (
        <div className = "bookList">

        </div>
    )
}

export default BookList;

