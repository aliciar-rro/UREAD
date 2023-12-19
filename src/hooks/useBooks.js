import {useEffect, useState} from "react";
import bookList from  "../assets/bookList.json"

export const useBooks = () => {

    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState('');
    let [filteredBooks] = [];

    useEffect(() => {
        setBooks(bookList);
    }, []);
    const handleFilter = (filteredValue) => {
        setFilter(filteredValue);
        filteredBooks = bookList.filter(b => b.title.includes(filteredValue));
        setBooks(filteredBooks);
    };

    return {books, handleFilter};
}