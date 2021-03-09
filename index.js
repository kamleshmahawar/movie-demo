const express = require('express');
const moviesRouter = require('./movie');
const path = require("path");
const app = express();
app.use(express.json());



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
})

app.use('/api/movies', moviesRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server in running on port ${port}....`))

