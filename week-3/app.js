import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 4000;

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug");

//Assignment 1: Your First Web Server
app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//Assignment 2: Build Backend API for Front-End

app.get("/getData", (req, res) => {
  const number = parseInt(req.query.number, 10);
  if (!req.query.number) {
    res.send("<h1>Lack of Parameter</h1>");
  } else if (isNaN(number)) {
    res.send("<h1>Wrong Parameter</h1>");
  } else {
    let result = (number * (number + 1)) / 2;
    res.send(`<h1>${result}</h1>`);
  }
});

//Assignment 3: Connect to Backend API by AJAX
app.use(express.static("public"));

//Assignment 5: HTTP Cookie (Advanced Optional)
app.get("/enterName", (req, res) => {
  res.render("enterName");
});

app.get("/myName", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("myName", { name });
  } else {
    res.render("enterName");
  }
});

app.get("/trackName", (req, res) => {
  const name = req.query.name;
  if (name) {
    res.cookie("username", name);

    res.redirect("/myName");
  } else {
    res.redirect("/");
  }
});
