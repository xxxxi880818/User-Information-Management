const express = require('express'); // Importing Express framework
const path = require('path'); // Importing path module for file paths
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const mysql = require('mysql'); // MySQL module for database interaction

const app = express(); // Creating Express application
const port = 3000; // Setting server port

// Setting view engine to EJS and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serving static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parsing request bodies as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // Database connection configuration
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "880818",
    database: "USERS"
});

// Connecting to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// Route for rendering home page
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// Route for rendering action page
app.get('/action', function(req, res, next) {
    res.render('action.ejs');
});

// Handling POST requests to perform actions
app.post("/action", function(req, res, next) {
    var action = req.body.action; // Extracting action from request body

    // Performing different actions based on the 'action' parameter
    if (action == 'search') {
        // Query to fetch all records from 'user_info' table
        var query = "SELECT * FROM user_info ORDER BY id ASC";

        // Executing the query
        db.query(query, function(error, data) {
            console.log(data); // Logging fetched data
            res.json({ data: data }); // Sending fetched data as JSON response
        });
    }
    
    // Adding other action handlers for create, search_single, update, and delete actions...
    if(action == 'create'){
		var first_name = req.body.first_name;
		var last_name = req.body.last_name;
		var mobile = req.body.mobile;
		var title = req.body.title;
        var email_address = req.body.email_address;
        var address_line_1 = req.body.address_line_1;
        var address_line_2 = req.body.address_line_2;
        var town = req.body.town;
        var county_city = req.body.county_city;
        var eircode = req.body.eircode;

		var query = `
		INSERT INTO user_info 
		(first_name, last_name, mobile, title, email_address, address_line_1, address_line_2, town, county_city, eircode) 
		VALUES ("${first_name}", "${last_name}", "${mobile}", "${title}", "${email_address}", "${address_line_1}", "${address_line_2}", "${town}", "${county_city}", "${eircode}")
		`;

		db.query(query, function(error, data){

			res.json({
				message : 'Data Created'   
			});

		});
	}
    if(action == 'search_single'){
		var id = req.body.id;

		var query = `SELECT * FROM user_info WHERE id = "${id}"`;

		db.query(query, function(error, data){

			res.json(data[0]);

		});
	}

    if(action == 'update'){
		var id = req.body.id;
		var first_name = req.body.first_name;
		var last_name = req.body.last_name;
		var title = req.body.title;
		var mobile = req.body.mobile;
        var email_address = req.body.email_address;
        var address_line_1 = req.body.address_line_1;
        var address_line_2 = req.body.address_line_2;
        var town = req.body.town;
        var county_city = req.body.county_city;
        var eircode = req.body.eircode;

		var query = `
		UPDATE user_info 
		SET first_name = "${first_name}", 
		last_name = "${last_name}", 
		mobile = "${mobile}", 
		title = "${title}", 
        email_address = "${email_address}",
        address_line_1 = "${address_line_1}",
        address_line_2 = "${address_line_2}",
        town = "${town}",
        county_city = "${county_city}",
        eircode = "${eircode}"
		WHERE id = "${id}"
		`;

		db.query(query, function(error, data){
			res.json({
				message : 'Data Updated'
			});
		});
	}

    if(action == 'delete'){
		var id = req.body.id;

		var query = `DELETE FROM user_info WHERE id = "${id}"`;

		db.query(query, function(error, data){

			res.json({
				message : 'Data Deleted'
			});

		});
	}


});

// Starting the server and listening for incoming requests
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
