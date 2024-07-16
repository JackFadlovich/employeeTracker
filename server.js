const express = require('express');

const path = require('path');

const app = express

const prompt = 3001

app.use(express.static('public'));

// app.get('/', (req, res) => res.send('Navigare to /send or /routes'));

// app.get('/send', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/sendFile.html'))
// );

// app.get('/routes', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/routes.html'))
// );

app.listen(PORT, () =>
    console.log('listening at http://localhost:${PORT}')
);