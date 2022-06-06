import styles from "../styles/Quote.module.css";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import process from "process";

// https://quotes.rest/qod.json?category=inspire
export default function Quote() {
  useEffect(() => {
    fetchquote();
    if (process.env.REACT_APP_API_URL != undefined) {
      setApi(process.env.REACT_APP_API_URL);
      console.log(Api);
    }
  }, []);
  const [Api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [title, setTitle] = useState(null);
  function fetchquote() {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setLoading(false);
        }
        setQuote(data.quote);
        setAuthor(data.anime + " - " + data.character);
        setTitle("Random Anime Quote");
      });
  }
  if (loading) {
    return (
      <div data-aos="fade-up" className={styles.quote}>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div data-aos="fade-up" className={styles.quote}>
        {console.log(Api)}
        {<h1>{title}</h1>}
        <br />
        {<h1>`{quote}`</h1>}
        <br />
        {<h1> {author}</h1>}
      </div>
    );
  }
}
