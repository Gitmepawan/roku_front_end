const express = require('express');
const server = express();

const port = process.env.PORT || 3000;

// this route managses user data
server.use('/ums', require('./routes/api'));

server.listen(port, () => {
    console.log(`server is running on ${port}`);
})