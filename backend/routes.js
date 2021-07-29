const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Plant = require("./models/Plant");
const User = require("./models/User");
const Post = require("./models/Post");
const Comment = require("./models/Comment");
const Suggestion = require("./models/Suggestion");
/**ALL OUR BACKEND ROUTES */

router.get("/", (req, res) => {
  res.json({ serverWorking: true });
});

router.post("/add-plant", (req, res) => {
  let newPlant = req.body;
  // console.log(newPlant);
  Plant.create(newPlant).then((res) => {
    res.json(res);
  });
});

router.get("/getplantsfromserver", (req, res) => {
  Plant.find().then((plants) => {
    res.json(plants);
    // console.log(plants);
  });
});

router.post("/savedplants", authorize, (req, res) => {
  // console.log(req.body, res.locals.user);
  User.findByIdAndUpdate(
    res.locals.user._id,
    {
      $addToSet: { favPlants: req.body._id },
    },
    { new: true }
  )
    .populate("favPlants")
    .then((user) => {
      Plant.findByIdAndUpdate(
        req.body._id,
        {
          $addToSet: { userIds: res.locals.user._id },
        },
        { new: true }
      ).then((plant) => {
        res.json({ plant, user });
      });
    });
});

router.post("/removeplants", authorize, (req, res) => {
  console.log(req.body, res.locals.user);
  User.findByIdAndUpdate(
    res.locals.user._id,
    {
      $pull: { favPlants: req.body._id },
    },
    { new: true }
  )
    .populate("favPlants")
    .then((user) => {
      Plant.findByIdAndUpdate(
        req.body._id,
        {
          $pull: { userIds: res.locals.user._id },
        },
        { new: true }
      ).then((plant) => {
        res.json({ plant, user });
      });
    });
});

router.post("/suggestions", authorize, (req, res) => {
  let newSuggestion = req.body;
  newSuggestion.userId = res.locals.user._id;
  Suggestion.create(newSuggestion).then((suggestion) => {
    res.json(suggestion);
  });
});

router.get("/suggestions", (req, res) => {
  Suggestion.find().then((suggestion) => {
    res.json(suggestion);
    // console.log(plants);
  });
});

router.delete("/suggestions", authorize, (req, res) => {
  console.log(req.body);
  Suggestion.findByIdAndDelete(req.query.id).then((res) => {
    res.json(res);
  });
});

router.get("/get-the-user", authorize, async (req, res) => {
  let user = await User.findById(res.locals.user._id).populate("favPlants");
  res.json(user);
});

router.post("/authenticate", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    user = await User.create(req.body);
  }
  jwt.sign({ user }, "secret key", { expiresIn: "100min" }, (err, token) => {
    res.json({ user, token });
  });
});

router.post("/add-post", authorize, async (req, res) => {
  let newPost = req.body;
  newPost.userId = res.locals.user._id;
  Post.create(newPost).then((post) => {
    res.json(post);
  });
});

router.get("/all-the-posts", (req, res) => {
  Post.find()
    .populate("userId")
    .populate("comments")
    .then((posts) => {
      res.json(posts);
    });
});

router.post("/add-comment", authorize, async (req, res) => {
  let newComment = req.body;
  newComment.userId = res.locals.user._id;
  console.log(newComment, req.body.postId, req.body._id);
  Comment.create(newComment).then((comment) => {
    Post.findByIdAndUpdate(
      req.body.postId,
      {
        $addToSet: { comments: comment },
      },
      { new: true }
    )
      .populate("comments")
      .then((newComment) => {
        res.json(newComment);
      });
  });
});

router.get("/getcomments", (req, res) => {
  Comment.find()
    .populate("userId")
    .then((comments) => {
      res.json(comments);
      // console.log(comments);
    });
});

router.get("/get-comments", (req, res) => {
  Comment.find({ postId: req.body.postId })
    //.populate("userId")
    .then((comments) => {
      res.json(comments, user);
    });
});

//Middle ware >>> Put this in the middle of any route where you want to authorize
function authorize(req, res, next) {
  let token = req.headers.authorization?.split(" ")[1]; //Token from front end
  if (token) {
    jwt.verify(token, "secret key", (err, data) => {
      if (!err) {
        res.locals.user = data.user; //Set global variable with user data in the backend
        next();
      } else {
        res.status(403).json({ message: err });
        //throw new Error({ message: "ahhh" })
      }
    });
  } else {
    res.status(403).json({ message: "Must be logged in!" });
  }
}

module.exports = router;
