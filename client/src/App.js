import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import NewsList from './NewsList';
import Login from './components/Login';  // Create this later
import Signup from './components/Signup'; // Create this later
import { AuthContext } from './context/AuthContext';
import './App.css';
function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');

  const fetchNews = async (searchQuery = '') => {
  try {
    const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
    const url = searchQuery
      ? `${baseUrl}/api/news?q=${encodeURIComponent(searchQuery)}`
      : `${baseUrl}/api/news?category=general`;

    const res = await fetch(url);
    const data = await res.json();
    setArticles(data.articles || []);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};


  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    fetchNews(searchTerm);
  };

  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '20px' }}>
      <h1>NewsFusion</h1>
      <SearchBar onSearch={handleSearch} />
      <NewsList articles={articles} />
    </div>
  );
}

function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '20px' }}>
      <nav style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
