const express = require('express');
const bodyParser = require('body-parser');
const client_config = require('dotenv').config().parsed;
var cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', (req, res) => {
    res.json({
        "message": "Weicome to Ninja-Rest"
    });
});

app.post('/login', (req, res, next) => {
    let result;

    console.log("paso");

    if (!req.body.username) {
        return res.status(400).json({
            status: 400,
            message: "Error: Field ninja_username must be present"
        })
    }

    switch (req.body.username) {
        case "Asuka":
            if (!req.body.password === "12345")
                res.status(401).json({
                    status: 401,
                    message: "Unauthorized Ninja not match"
                });
            result = "Shinobi";
            break;
        case "Nara":
            if (!req.body.password === "12345")
                res.status(401).json({
                    status: 401,
                    message: "Unauthorized Ninja not match"
                });
            result = "Ukami";
            break;
        case "Sengoku":
            if (!req.body.password === "12345")
                res.status(401).json({
                    status: 401,
                    message: "Unauthorized Ninja not match"
                });
            result = "Kanja";
            break;
        case "Edo":
            if (!req.body.password === "12345")
                res.status(401).json({
                    status: 401,
                    message: "Unauthorized Ninja not match"
                });
            result = "Onmitsu";
            break;
        case "Era Taisho":
            if (!req.body.password === "12345")
                res.status(401).json({
                    status: 401,
                    message: "Unauthorized Ninja not match"
                });
            result = "Ninsha";
            break;
        default:
            res.status(401).json({
                status: 401,
                message: "Unauthorized Ninja not match"
            });
    }

    res.status(200).json({
        status: 200,
        result: result,
        password: 12345,
        message: "Weicome to Ninja-Rest"
    });
});

app.listen(client_config.PORT, () => {
    console.log("Ninja-Rest service on : http://localhost:" + client_config.PORT);
});