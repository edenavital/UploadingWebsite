const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

// Initial "database" - will be deleted
// Tasks: Add a Spinner when requesting data from the server
//       Add a delete button on each of the pictures - V
//       Add a Modal component
//       Add a pop up component for errors
//       Add a progress bar to the Home component
//       Connect the server to MongoDB
//       Edit the README.md file in github - V
//       Add an if statement - cannot upload anything that is not an image. (only jpg, png ...)

const images = [
  {
    id: 0,
    name: "blackKitty",
    path:
      "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg"
  },
  {
    id: 1,
    name: "brownKitty",
    path:
      "https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg"
  }
];

//GET REQUEST using fake media "data base"
app.get("/api/media", (req, res) => {
  // res.json - receive an object or array, and converts it to JSON before sending it
  res.json(images);
  res.status(200);
});
//For using POST method, I have to use the package bodyParser, it converts the data to json format
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Middleware - Request body content
app.use(function(req, res, next) {
  console.log("REQUEST body is: ", req.params);
  next();
});
//Middleware - Respond body content
app.use(function(req, res, next) {
  console.log("RESPONSE body is: ", res.body);
  next();
});

app.post("/api/media", (req, res, next) => {
  let newImage = {
    id: Date.now(),
    name: req.body.name,
    path: req.body.path
  };
  images.push(newImage);
  console.log(newImage);
  res.status(201).send();
});

app.get(
  "/api/media/:id",
  (req, res, next) => {
    res.json(images[req.params.id]);
    next();
  },
  (req, res, next) => {
    console.log("PASSED TO THE SIBLING MIDDLEWARE");
    next();
  }
);

// Find the index of the object that has the specified id
const findIndexOfImages = deleteId => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].id == deleteId) {
      images.splice(i, 1);
    }
  }
};

app.delete("/api/media/:id", (req, res, next) => {
  //req.params.id
  console.log("Delete Request invoked, deleting image.id === " + req.params.id);
  findIndexOfImages(req.params.id);

  res.status(204).send();
});

app.listen(port, () => console.log(`Server started on port ${port}`));
