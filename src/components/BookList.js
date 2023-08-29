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
            <section className="bookDisplay">
                {books.map((book) => {
                    const { author, book_image, buy_links, description,
                    price, primary_isbn10, publisher, rank, title, } = book

                    return (
                        <article key={rank} className="bookArticle">
                            <div className="bookCard">
                                <div className = "imageContainer">
                                    <img src = {book_image} alt = {title}/>
                                </div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <p>{author}</p>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
        
    )
            }


export default BookList ;


