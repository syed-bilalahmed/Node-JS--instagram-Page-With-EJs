const express = require('express');
const app = express();

let port= 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
app.get("/", (req, res) => {
    res.send("Welcome TO my First Rotutre");
});

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     const queryString = JSON.stringify(req.query)
//     res.send(`Search Not Found:  ${queryString}`);
// });
app.get("/search", (req, res) => {
    console.log(req.query);
    const searchQuery = req.query.search;
    if (searchQuery) {
        res.send(`Search Found: ${searchQuery}`);
    } else {
        res.send(`Search Not Found `);
    }
});

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send(`Welcome to page :<h1>${req.params.username}</h1> : your ID is ${req.params.id}`);
});

app.get("/:username", (req, res) => {
    console.log(req.params);
    res.send(`Welcome to page User: ${req.params.username}`);
});

// app.use((req, res)=>{


//     res.send( {
//         name: "SYe Bilal Ahmed ",
//         age: 20,
//         city: "Kkohat"
//     } ); 
// });



// app.get('/example', (req, res) => {
//     res.send('Hello World');
// });

// app.get("*", (req, res)=>{
//     res.send("This Directory is Not Exist"); 
// })
