const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
// Tasks: Add a Spinner when requesting data from the server - V
//       Add a delete button on each of the pictures - V
//       Add a pop up component for errors - V
//       Add a progress bar to the Home component / Indication about Uploaded Files - Success message - V
//       Connect the server to MongoDB
//       Edit the README.md file in github - V
//       Add an if statement - cannot upload anything that is not an image. (only jpg, png ...) - V
//       Make the Upload button disabled when nothing has been selected - V
//       Trim the file extensions - V
//       Add a Modal component for an Expand component - the Picture will open in a pop up window - enlarged picture - V
//       Implement Routes - V

// Initial "database" - will be deleted after connecting to MongoDB
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
//In order to fake a long request - using in order to test Spinner
const sleep = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

app.use(cors());

//Get request - Using fake images "data base"
app.get("/api/media", (req, res) => {
  // res.json - receive an object or array, and converts it to JSON before sending it
  res.json(images);
  res.status(200);
  // sleep(3000).then(() => {
  //   res.status(200).send(res.json(images).status(200));
  // });
});
//For using POST method, I have to use the package bodyParser, it converts the data to JSON format
app.use(bodyParser.json({ limit: "50mb", extended: true })); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Post request - Generating id by using current Date, removing extension of each posted image
app.post("/api/media", (req, res, next) => {
  let newImage = {
    id: Date.now(),
    name: req.body.name
      .split(".")
      .slice(0, -1)
      .join("."),
    path: req.body.path
  };
  images.push(newImage);
  console.log(
    `New Image has been appended to the server: [id: ${newImage.id}, name: ${newImage.name}`
  );
  res.status(201).send();
});

//Get request - Getting a specific image using the id of it - testing purposes only
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

// app.use(express.static("client/build"));

// app.use("/", express.static(path.join(__dirname, "/client/build")));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
