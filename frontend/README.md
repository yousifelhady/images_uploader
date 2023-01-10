# React Frontend

The frontend was created with [Create React App](https://github.com/facebook/create-react-app).

## Tech Stack
- [React](https://reactjs.org/)
- [Ant Design System](https://ant.design/)
- [Axios](https://axios-http.com/docs/intro)

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How it works?

1. Upload single or multiple images through the uploader.
2. Add or remove images before Starting upload.
3. Add a group name.
4. Hit the Start Upload action to upload the files to imgur cloud.
5. A new group will be listed and its images will be shown in the images viewer.
6. Images can be previewed by clicking on them, they will zoom in! ;)

## Error Handling
The application can only upload files of image type (`png`, `jpg`, `jpeg`, `gif`)<br />
If any other file extension is added for upload, an error will be displayed and the file won't be counted.
