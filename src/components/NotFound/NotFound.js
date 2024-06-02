import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>متاسفیم، صفحه‌ای که دنبال آن بودید پیدا نشد.</p>
      <a href="/" className="home-button">بازگشت به خانه</a>
    </div>
  );
};

export default NotFound;




