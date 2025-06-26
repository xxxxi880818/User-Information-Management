
# User Information Management System

A full-stack web application for managing user information using Node.js, Express, EJS, and MySQL. Users can add, search, update, and delete user records stored in a MySQL database through a simple web interface.



## Features

- Display all user records  
- Add new users  
- Search for a specific user by ID  
- Update existing user information  
- Delete users from the database  
- Server-side rendering with EJS templates  
- MySQL database connectivity  
- Responsive layout with static files served via Express  



## How to Run

1. Make sure you have Node.js and MySQL installed.  
2. Install project dependencies:  

   ```bash
   npm install
   ```

3. Update database connection details in `index.js`:  

   ```javascript
   const db = mysql.createConnection({
       host: "YOUR_DATABASE_HOST",
       user: "YOUR_DATABASE_USERNAME",
       password: "YOUR_DATABASE_PASSWORD",
       database: "YOUR_DATABASE_NAME"
   });
   ```

4. Ensure the required `user_info` table exists in your MySQL database (structure provided below).  
5. Start the server:  

   ```bash
   node index.js
   ```

6. Visit the application in your browser:  

   ```
   http://localhost:3000
   ```



## Project Files

- `index.js` — Main server file  
- `package.json` — Project configuration and dependencies  
- `views/` — EJS templates for rendering pages  
- `public/` — Static assets (CSS, images, optional JS)  



## Database Table Structure (`user_info`)

   ```sql
   CREATE TABLE user_info (
       id INT AUTO_INCREMENT PRIMARY KEY,
       first_name VARCHAR(255),
       last_name VARCHAR(255),
       mobile VARCHAR(20),
       title VARCHAR(50),
       email_address VARCHAR(255),
       address_line_1 VARCHAR(255),
       address_line_2 VARCHAR(255),
       town VARCHAR(100),
       county_city VARCHAR(100),
       eircode VARCHAR(20)
   );
   ```



## Requirements

- Node.js  
- MySQL database  
- Modern web browser (for front-end interaction)  



## Notes

This project is for educational purposes. It demonstrates full-stack development with Node.js, Express, EJS templating, and MySQL database interaction.
