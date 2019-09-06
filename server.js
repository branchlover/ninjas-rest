const express = require('express');
const bodyParser = require('body-parser');
const client_config = require('dotenv').config().parsed;
var cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

let allowedOrigins = ['http://localhost:3000',
    'http://localhost:4200'
];


app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.get('/', (req, res) => {
    res.json({
        "message": "Weicome to Ninja-Rest"
    });
});

app.post('/login', (req, res) => {
    let result;

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