// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './components/NewsCard';

function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&apiKey=a98d8f62a1f74d6483e174bdf915ad6b');
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="container">
            <h1 className="my-5 text-center">Tesla News</h1>
            <div className="row">
                {articles.map((article, index) => (
                    <div key={index} className="col-md-4">
                        <NewsCard article={article} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
