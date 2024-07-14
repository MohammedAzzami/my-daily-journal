# Daily Journal

Welcome to the Daily Journal project! This web application allows users to create, edit, and view journal entries. It is built using Express.js, EJS, and Node.js.

## Project Description

This project serves as a daily journal where you can document your journey as a web developer. You can share insights, tutorials, and experiences from your projects. The website is hosted on Vercel,
and you can access it [Click here to visit my daily journal](https://daily-journal-14hkmmpjk-mohammed-alazamis-projects.vercel.app/).

**Note**: Access to view and interact with the live demo requires logging into Vercel. If you don't have a Vercel account, you'll need to create one to access the application.

### Home Page

The home page displays a welcome message and lists all the journal entries. You can click on any entry to read the full post.

### About Page

The about page provides information about the author, Mohammed Alazami, including his background and goals.

### Contact Page

The contact page allows visitors to get in touch with the author via email.

## Features

- **Home Page:** Displays a list of journal entries with a welcome message.
- **About Page:** Provides information about the author.
- **Contact Page:** Allows visitors to reach out to the author via email.
- **Compose Page:** Allows users to create new journal entries.
- **Individual Post Pages:** Displays full content of each journal entry.



## Technologies Used

- **Express.js:** Web framework for Node.js.
- **EJS:** Templating engine for generating HTML.
- **Mongoose:** ODM for MongoDB.
- **Body-Parser:** Middleware for parsing request bodies.
- **Lodash:** Utility library for JavaScript.
- **Path:** Node.js module for working with file and directory paths.
- **Vercel:** Hosting platform for deploying web applications.

## Setup and Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/MohammedAzzami/news-letter.git
    ```

2. Navigate to the project directory:
    ```sh
    cd daily-journal
    ```

3. Install the required dependencies:
    ```sh
    npm install
    ```

4. Start the server:
    ```sh
    node app.js
    ```

5. Open your browser and visit `http://localhost:3000`.

## Project Structure

- `app.js`: Main application file.
- `views`: Directory containing EJS templates.
  - `home.ejs`
  - `about.ejs`
  - `contact.ejs`
  - `compose.ejs`
  - `post.ejs`
  - `partials`: Directory containing partial EJS templates (e.g., header.ejs, footer.ejs).
- `public`: Directory containing static files (CSS, images, JS).
- `package.json`: Project configuration and dependencies.

## Posting a New Entry
To post a new journal entry:

1. Navigate to the /compose page by clicking on the "Compose" link in the navigation bar.
2. Fill in the title and body of your journal entry.
3. Click the "Publish" button to save your entry.
4. You will be redirected to the home page where you can see your new entry listed.

## Deployed Application

The application is deployed on Vercel and can be accessed [here](https://daily-journal-14hkmmpjk-mohammed-alazamis-projects.vercel.app/).

## Author

**Mohammed Alazami**

- Email: moh-azamy@hotmail.com

Feel free to reach out if you have any questions or would like to collaborate on future projects!
