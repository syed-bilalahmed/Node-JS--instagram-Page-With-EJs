# Express.js Application

This is an Express.js application that serves dynamic content using the EJS templating engine. It handles various routes including static page rendering, query parameters, and URL parameters.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
npm start
```

2. Open your browser and navigate to `http://localhost:5000`.

## Routes

### Home Route

- **URL:** `/`
- **Method:** GET
- **Description:** Renders the home page.
- **View:** `home.ejs`

### About Route

- **URL:** `/about`
- **Method:** GET
- **Description:** Renders the about page.
- **View:** `about.ejs`

### Search Route

- **URL:** `/search`
- **Method:** GET
- **Description:** Handles search queries.
- **Query Parameters:**
  - `search`: The search query.
- **Response:** 
  - If `search` query is provided, responds with `Search Found: <searchQuery>`.
  - Otherwise, responds with `Search Not Found`.

### Instagram User Route

- **URL:** `/ig/:username`
- **Method:** GET
- **Description:** Retrieves and displays Instagram user data based on the provided username.
- **Parameters:**
  - `username`: The Instagram username.
- **Response:**
  - If user data is found in `data.json`, renders the `instagaram.ejs` template with the user data.
  - If no data is found, responds with `404 User not found`.

### Dynamic User ID Route

- **URL:** `/:username/:id`
- **Method:** GET
- **Description:** Displays a welcome message with the username and ID.
- **Parameters:**
  - `username`: The username.
  - `id`: The user ID.
- **Response:** Responds with `Welcome to page :<h1><username></h1> : your ID is <id>`.

### Dynamic Username Route

- **URL:** `/:username`
- **Method:** GET
- **Description:** Displays a welcome message with the username.
- **Parameters:**
  - `username`: The username.
- **Response:** Responds with `Welcome to page User: <username>`.

## File Structure

- `app.js`: The main application file containing route definitions and server setup.
- `views/`: Directory containing EJS templates.
  - `home.ejs`: Template for the home page.
  - `about.ejs`: Template for the about page.
  - `instagaram.ejs`: Template for Instagram user data.
- `data.json`: JSON file containing Instagram user data.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `ejs`: Embedded JavaScript templating.

## License

This project is licensed under the MIT License. 

## Author

SYe Bilal Ahmed

Feel free to contribute to this project by submitting issues or pull requests. For any questions, contact the author.