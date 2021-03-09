const express = require('express');
const router = express.Router();

const movies = [
    {id: 1, name: "Solay"},
    {id: 2, name: "Heena"},
    {id: 3, name: "Hedar"},
]

router.get('', (req, res) => {
    res.cookie('SESSION_KEY',(Math.random()*10)+10, { maxAge: 900000, httpOnly: false })
    res.send(movies);
})

router.get('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send("movie not found with given id")
    res.setHeader("").send(movie);
})

router.post('', (req, res) => {
    const movie = {
        id: movies.length+1,
        name: req.body.name
    };
    movies.push(movie);
    res.send(movie);
})

router.put('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send("movie not found with given id");
    movie.name = req.body.name;
    res.send(movie);
})

router.delete('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send("movie not found with given id");
    const index = movies.indexOf(movie);
    movies.splice(index,1);
    res.send(movie);
})

module.exports = router;