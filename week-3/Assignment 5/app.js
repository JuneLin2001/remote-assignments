import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/myName", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("myName", { name });
  } else {
    res.render("index");
  }
});

app.get("/trackName", (req, res) => {
  const name = req.query.name;
  if (name) {
    res.cookie('username', name);
    res.redirect("/myName");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

