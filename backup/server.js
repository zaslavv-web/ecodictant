const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware для обработки JSON-запросов и данных формы
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware для доступа к статическим файлам
app.use(express.static(path.join(__dirname, 'public')));

// Обработчик POST-запроса на маршрут /register
app.post('/register', (req, res) => {
    const userData = req.body;
    const filePath = path.join(__dirname, 'curators.json');

    fs.readFile(filePath, (err, data) => {
        let curators = [];
        if (!err) {
            try {
                curators = JSON.parse(data);
            } catch (e) {
                console.error('Error parsing JSON:', e);
            }
        }
        
        curators.push(userData);

        fs.writeFile(filePath, JSON.stringify(curators, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).send('Error saving data');
            }
            res.status(200).send('Registration successful');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});