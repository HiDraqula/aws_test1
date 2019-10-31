const express = require('express');
// const cors = require('cors');
const path = require("path");
// const mongoose = require('mongoose');
// const Users = require('./routes/users.js');

// require('dotenv').config();

function main() {
    const app = express();
    const port = process.env.PORT || 5000;

    // var http = require('http').createServer(app);
    // var io = require('socket.io')(http);

    // app.use(cors({
    //     origin: ['http://localhost:3000'],
    //     methods: ['GET', 'POST', 'DELETE', 'PUT'],
    //     credentials: true // enable set cookie
    // }));
    // app.use(cors())
    app.use(express.json());


    app.get('/admin', (req, res) => {
        const user =
        {
            name: 'Aniket Sharma',
            username: 'Draqula',
            email: 'draqulainc@gmail.com'
        }

        res.json(user)
    })

    // const uri = process.env.ATLAS_URI;
    // mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    // );
    // const connection = mongoose.connection;
    // connection.once('open', () => {
    //     console.log("MongoDB database connection established successfully");
    // })

    // app.use('/users', Users);
    // const Todo = require('./routes/todoList.js');
    // app.use('/Todo', Todo);

    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}
main()



// var app = require('express')();
// var app = express();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);
// var wsport = 5000;
// app.get('/', function (req, res) {
//     res.send('<h1>Hello world</h1>');
//     // res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//     console.log('an user connected');
//     // socket.broadcast.emit('hi');
//     socket.on('chat message', function (msg) {
//         console.log('message: ' + msg);
//         io.emit('chat message', msg);
//     });
//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });
// });

// http.listen(wsport, function () {
//     console.log('listening on *: ' + port);
// });


// // const mongoose = require('mongoose')
// const express = require('express')
// const app = express()
// // const validator = require('express-validator')
// // const cors = require('cors')
// const parser = require('body-parser')
// // import apiRouter from './api'
// // require('./api')(app)
// const api = require('./api')

// PORT = process.env.PORT || 8000

// app.use(parser.json())
// app.use(express.static('public'))
// app.use('/api', api.route)
// // app.use(cors())
// // mongoose.connect()

// app.get('/user', (req, res) => {
//     const user =
//     {
//         name: 'Aniket Sharma',
//         username: 'Draqula',
//         email: 'draqulainc@gmail.com'
//     }

//     res.json(user)
// })

// app.listen(PORT, () => { console.log('Listining on..... ' + PORT) });
