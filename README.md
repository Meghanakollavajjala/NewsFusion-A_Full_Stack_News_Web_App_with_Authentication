# NewsFusion - News Aggregator App

## Overview

NewsFusion is a modern, responsive web application that fetches and displays the latest news articles from multiple sources. It features user authentication (signup/login), a clean UI, and seamless navigation. Built using the MERN stack, it showcases integration of React frontend with a Node.js/Express backend and MongoDB Atlas for data storage.

---

## Features

- User registration and login with JWT authentication
- Browse latest news articles with images, titles, descriptions, and sources
- Responsive design for desktop and mobile
- Error handling for API and user input
- Clean, accessible UI with professional colors suitable for a news platform

---

## Tech Stack

- **Frontend:** React, React Router, Context API  
- **Backend:** Node.js, Express.js, MongoDB (Atlas), Mongoose  
- **Authentication:** JWT (JSON Web Tokens)  
- **API:** News API for fetching news data  
- **Styling:** CSS (custom styles)  

---

## Installation & Setup

### Prerequisites

- Node.js (v14 or above)  
- npm (comes with Node.js)  
- MongoDB Atlas account (for database)  
- News API key (https://newsapi.org/)  

---

### Backend Setup

1. Navigate to the backend folder:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory with these variables:

    ```
    MONGO_URI=your_mongodb_atlas_connection_string
    JWT_SECRET=your_jwt_secret_key
    NEWS_API_KEY=your_news_api_key
    PORT=5000
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

---

### Frontend Setup

1. Navigate to the frontend folder:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

---

## Usage

- Open your browser and go to `http://localhost:3000`  
- Register a new user or login with existing credentials  
- Browse latest news articles on the homepage  
- Click on any article to read full details in a new tab  

---


## 🌐 Live Demo

- 🔗 **Frontend**: [NewsFusion Frontend](https://news-fusion-a-full-stack-news-web-a.vercel.app/)
- 🔗 **Backend API**: [NewsFusion Backend](https://newsfusion-a-full-stack-news-web-app.onrender.com/)


## Folder Structure

/client - React frontend
/server - Node.js backend


---

## Future Improvements

- Add filters and categories for news articles  
- Implement pagination or infinite scroll  
- Add user profile and saved articles functionality  
- Enhance UI/UX with animations and themes  

---

## Acknowledgments

- News API for providing news data  
- MongoDB Atlas for cloud database hosting  

---

## Author

**Meghana Kollavajjala**

---

## License

This project is licensed under the MIT License.
