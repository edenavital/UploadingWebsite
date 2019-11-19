This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Uploading Website

Hello there,
I built an uploading images website, using React and Express.
In this website, the user can upload, view and delete images.
At the moment, they are stored as blobs.
In the future, they will be stored through MongoDB.

### Released Features :

- Upload images directly to the website's server.
- Communication to the backend with provided status codes.
- Delete component which deletes an uploaded image.
- Spinner component. (Appears when fetching data from the server).
- An indication that a file has been selected and checking if the file extension is supported.
- Using Routes in order to navigate between Home, MediaItems components.
- Backdrop & Modal component which indicates an Error / Successful upload.
- EnlargedImage component which displays a selected image on larger scale.
- The website is responsive, using variety of resolutions.
- All the project Props & States are managed by TypeScript

### How to launch the website (development mode)

In order to run the website, you will need to Install the required dependencies.
Clone or download the project, enter the terminal and write the following scripts:

```sh
$ cd frontend
$ npm i
$ cd .. && cd backend
$ npm i
$ npm run dev (From backend directory)
```

If the website not pop up automatically , Open a browser instance and type in the url: http://localhost:3000/
