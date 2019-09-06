const express = require('express');
const bodyParser = require('body-parser');
const client_config = require('dotenv').config().parsed;
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        "message": "Weicome to Ninja-Rest"
    });
});

app.get('/ninja_validator', (req, res) => {
    let result;

    switch (req.query.ninja_username) {
        case "Asuka":
            result = "Shinobi";
            break;
        case "Nara":
            result = "Ukami";
            break;
        case "Sengoku":
            result = "Kanja";
            break;
        case "Edo":
            result = "Onmitsu";
            break;
        case "Era Taisho":
            result = "Ninsha";
            break;
        default:
            result = "none";
            res.status(401).json({
                "result": result
            });
    }

    res.status(200).json({
        "result": result,
        "message": "Weicome to Ninja-Rest"
    });
});

app.listen(client_config.PORT, () => {
    console.log("Ninja-Rest service on : http://localhost:" + client_config.PORT);
});