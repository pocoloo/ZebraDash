const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname)));

// Route for Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Route for Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Handle Contact form submission
app.post('/submit-contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    if (!name || !email || !message) {
        res.send("All fields are required.");
        return;
    }

    // Display thank-you message with user's name
    res.send(`<h1>Thank you, ${name}! We have received your message.</h1>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
