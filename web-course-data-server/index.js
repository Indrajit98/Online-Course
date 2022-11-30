const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const courseCategory = require('./data/courseCategory.json')
const allCourse = require('./data/allCourse.json')


app.get('/', (req, res) => {
    res.send('web course running')
});



app.get('/courseCategory', (req, res) => {
    res.send(courseCategory)

})
app.get('/allCourse', (req, res) => {
    res.send(allCourse)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const categoryCourse = allCourse.filter(n => n.categoryId === id)
    res.send(categoryCourse)

})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const courseId = allCourse.find(n => n.id === id)
    res.send(courseId)
})

app.listen(port, () => {
    console.log('web course server running on port', port)
});
