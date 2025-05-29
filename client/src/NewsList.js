import React from 'react';

const NewsList = ({ articles }) => {
  if (!articles.length) {
    return <p style={{ color: '#fff', textAlign: 'center' }}>No news articles found.</p>;
  }

  return (
    <div className="news-list">
      {articles.map((article, idx) => (
        <div
          key={idx}
          className="news-article"
          onClick={() => window.open(article.url, '_blank')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') window.open(article.url, '_blank'); }}
          style={{ cursor: 'pointer' }}
        >
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} />
          )}
          <div className="content">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <small style={{ color: '#bbb' }}>
              {article.source.name} | {new Date(article.publishedAt).toLocaleString()}
            </small>
            <br />
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
              onClick={(e) => e.stopPropagation()}
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
