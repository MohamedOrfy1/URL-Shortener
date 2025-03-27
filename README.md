# URL Shortener

A simple URL shortening service built with Node.js, Express, and MongoDB.

## Features
- Shorten long URLs into short, shareable links
- Store and retrieve URL mappings using MongoDB
- Validate URLs before shortening
- Redirect users from short URLs to the original long URL

## Technologies Used
- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **MongoDB**: Database for storing URLs
- **Mongoose**: ODM for MongoDB
- **shortid**: Generates unique short URLs
- **valid-url**: Validates URLs
- **config**: Manages environment configurations

## Installation
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/MohamedOrfy1/URL-Shortener.git
   cd URL-Shortener
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `default.json` file inside the `config` folder:
   ```json
   {
     "mongoURI": "your_mongodb_connection_string",
     "baseUrl": "http://localhost:5005"
   }
   ```
4. Start the server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   npm start
   ```

## API Endpoints
### Shorten a URL
**POST** `/api/url/shorten`
#### Request Body:
```json
{
  "longUrl": "https://www.example.com"
}
```
#### Response:
```json
{
  "longUrl": "https://www.example.com",
  "shortUrl": "http://localhost:5005/abcd123",
  "urlCode": "abcd123",
  "date": "2024-03-25T12:00:00.000Z"
}
```

### Redirect to Original URL
**GET** `/:code`
- Redirects users to the original `longUrl`

## Project Structure
```
URL-Shortener/
│── config/
│   ├── db.js
│   ├── default.json
│── models/
│   ├── URL.js
│── routes/
│   ├── index.js
│   ├── url.js
│── index.js
│── package.json
│── README.md
```

