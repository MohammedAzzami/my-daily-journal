const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const _ = require("lodash");
const port = process.env.PORT || 3000;

const homeStartingContent = "Welcome to my daily journal! Here, I document my journey as a web developer, sharing insights, tutorials, and experiences from my projects. Whether you're a fellow developer, a tech enthusiast, or someone curious about the world of coding, you'll find something interesting here.";
const aboutContent = "Hello! I'm Mohammed Alazami, a passionate web developer with a keen interest in creating dynamic and responsive web applications. This blog serves as a platform to share my knowledge, experiences, and the lessons I've learned along the way. My goal is to contribute to the developer community and help others on their coding journey.";
const contactContent = "I'd love to hear from you! Whether you have feedback, questions, or potential collaboration opportunities, feel free to reach out. You can contact me via email at moh-azamy@hotmail.com. Let's connect and create something amazing together!";
let posts = [];


const app = express();

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("home", {startingContent: homeStartingContent, newPosts:posts});
});

app.get("/about", function(req, res) {
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res) {
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res) {
  let postData = {
    title: req.body.postTitle,
    body: req.body.postBody,
  };
  posts.push(postData);
  res.redirect("/");
});


// Rout Parameters in Express //
app.get("/posts/:postId", function(req, res) {
  let postId = _.lowerCase(req.params.postId);

  posts.forEach(function(post) {
    let postTitle = _.lowerCase(post.title);
    if (postTitle === postId) {
      res.render("post", {
        title: post.title,
        body: post.body,
      });
    };
  });
});














app.listen(port, function() {
  console.log("Server started on port 3000");
});
