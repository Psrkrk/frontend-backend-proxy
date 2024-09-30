import express from 'express'

const app = express();

app.get('/', (req, res ) => {
    res.send('server runnig ');


})
app.get('/chatgpt/api/jokes', (req, res) => {
    const articles = [
        { id: 1, title: "The Power of JavaScript", content: "JavaScript is a versatile language used for both frontend and backend development." },
        { id: 2, title: "Understanding Asynchronous Programming", content: "Asynchronous programming is a key feature in JavaScript that allows for non-blocking code execution." },
        { id: 3, title: "Node.js for Beginners", content: "Node.js is a runtime environment that enables JavaScript to be used on the server side." },
        { id: 4, title: "Express.js Simplified", content: "Express.js is a popular web framework for Node.js that makes building web applications easier." },
        { id: 5, title: "MongoDB Basics", content: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents." }
    ];

    res.send(articles);
});



const port = process.env.port || 3000

app.listen(port, () =>{
    console.log(`serve at http://localhost:${port}`);
})