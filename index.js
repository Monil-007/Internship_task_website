const express = require('express');
const app = express();
const routes = require('./Routes/routes.js');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: './config.env' });
const connectDB = require('./db/dbConnect.js');
var cors = require('cors')

app.use(cors());

app.use('/', routes);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "./Front-end/crypto-analyzer/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./Front-end/crypto-analyzer/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}, jai shree radhe krishna!!! `)
        })
    }
    catch (err) {
        console.log(`Some error occured ${err}`);
    }
}

start();