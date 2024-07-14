const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const _ = require("lodash");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { title } = require("process");
const port = process.env.PORT || 3000;

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO_URI);

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

const homeStartingContent = "Welcome to my daily journal! Here, I document my journey as a web developer, sharing insights, tutorials, and experiences from my projects. Whether you're a fellow developer, a tech enthusiast, or someone curious about the world of coding, you'll find something interesting here.";
const aboutContent = "Hello! I'm Mohammed Alazami, a passionate web developer with a keen interest in creating dynamic and responsive web applications. This blog serves as a platform to share my knowledge, experiences, and the lessons I've learned along the way. My goal is to contribute to the developer community and help others on their coding journey.";
const contactContent = "I'd love to hear from you! Whether you have feedback, questions, or potential collaboration opportunities, feel free to reach out. You can contact me via email at moh-azamy@hotmail.com. Let's connect and create something amazing together!";

const postSchema = new mongoose.Schema({
  title: String,
  body: String
});

const Post = new mongoose.model('Post', postSchema);

const postOne = new Post ({
    title: "Exploring Node",
    body: "Today, I delved into Node.js, a powerful JavaScript runtime built on Chrome's V8 engine. It's amazing how you can use JavaScript for both client-side and server-side development. I experimented with creating a simple server and handling HTTP requests. Node.js makes it so easy to build scalable network applications!"
  });
  const postTwo = new Post ({
    title: "Understanding Express",
    body: "I spent some time learning about Express.js, a minimal and flexible Node.js web application framework. It provides a robust set of features for web and mobile applications. I implemented some basic routes and middleware to understand how it handles HTTP requests and responses. Express.js simplifies the process of building web applications significantly!"
  });
  const postThree = new Post ({
    title: "Introduction to EJS Templating",
    body:"EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. Today, I integrated EJS into my Node.js project and created dynamic templates for my views. It's incredibly straightforward to pass data to EJS templates and render HTML content dynamically. This will be a valuable tool for my web development projects!"
  });
  const initialPosts = [postOne, postTwo, postThree];

  async function insertInitialPosts() {
    try {
      await Post.insertMany(initialPosts);
    } catch (error) {
      console.error("Error, coudln't add initial posts.");
    }
  };

app.get("/", function(req, res) {
  async function findPosts() {
    try {
      const foundPosts = await Post.find({});
      if (foundPosts.length === 0) {
        insertInitialPosts();
        res.redirect("/");
      } else {
        res.render("home", {startingContent: homeStartingContent, newPosts: foundPosts});
      }
    } catch (error) {
      console.error("Error, couldn't find posts.");
    }
  };
  findPosts();
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
  const postData = new Post ({
    title: req.body.postTitle,
    body: req.body.postBody,
  });
  postData.save();
  res.redirect("/");
});


// Rout Parameters in Express //
app.get("/posts/:postId", function(req, res) {
  let postId = req.params.postId;

  async function findOnePost() {
    try {
      const selectedPost = await Post.findOne({_id: postId});
      res.render('post', {title: selectedPost.title, body: selectedPost.body});
    } catch (error) {
      console.error("Error, couldn't find the post.");
    }
  }
  findOnePost();

});














app.listen(port, function() {
  console.log("Server started on port 3000");
});
