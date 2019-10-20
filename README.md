This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Uploading Website

Hello there,
I built an uploading images website, using React and Express.
In this website, the user can upload and delete images.
At the moment, they are stored as blobs.
In the future, they will be stored at MongoDB.

### Released Features :
  - Upload images directly to the website's server
  - Communicatation to the backend with provided status codes
  - Delete component which deletes an uploaded image
  - Spinner component. (Appears when fetching data)
  - An indication that a file has been selected.
  - Delete component which deletes an uploaded image.
  - Use Routes in order to navigate between Home, MediaItems component

### Features in development :
  - Add a Database. (MongoDB
  - Add a Modal component.
  - Add a progress bar to the Home component.
  


### How to launch the website

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
