const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/search", (req, res) => {
  console.log(req.query);
  const searchQuery = req.query.search;
  if (searchQuery) {
    res.send(`Search Found: ${searchQuery}`);
  } else {
    res.send(`Search Not Found`);
  }
});

app.get("/ig/:username", (req, res) => {
  // Extract username from URL parameters
  const { username } = req.params;

  // Load data from JSON file
  const instaData = require("./data.json");

  // Get user data for the given username
  const data = instaData[username];

  // Check if data exists for the given username
  if (data) {
    // Render the template with the user data
    res.render("instagaram.ejs", { data });
  } else {
    // Handle the case where no data is found for the given username
    res.status(404).send("User not found");
  }

  //   console.log(req.params);
  //   res.send(`Welcome to Instagram User: ${req.params.username}`);
  // const followers= ["__imsyed", "_hum.sab", "  Instagram"] ;

  // console.log(instaData);
});

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  res.send(
    `Welcome to page :<h1>${req.params.username}</h1> : your ID is ${req.params.id}`
  );
});

app.get("/:username", (req, res) => {
  console.log(req.params);
  res.send(`Welcome to page User: ${req.params.username}`);
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.use((req, res)=>{

//     res.send( {
//         name: "SYe Bilal Ahmed ",
//         age: 20,
//         city: "Kkohat"
//     } );
// });

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     const queryString = JSON.stringify(req.query)
//     res.send(`Search Not Found:  ${queryString}`);
// });

// app.get('/example', (req, res) => {
//     res.send('Hello World');
// });
