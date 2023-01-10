# API Server
API Server which serve the application.

## Tech Stack
- [NodeJS](https://en.wikipedia.org/wiki/Node.js)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://www.npmjs.com/package//mongoose)
- [Multer](https://www.npmjs.com/package/multer)
- [Multer-storage-imgur](https://www.npmjs.com/package/multer-storage-imgur)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

## APIs Documentation
APIs are documented using [OpenAPI](https://www.openapis.org/), and visualized using [SwaggerUI](https://www.npmjs.com/package/swagger-ui-express)

After Successfully running the application, open the browser and go to `http://localhost:8080`<br />
You will land to the API Documentation using SwaggerUI.<br />
You can try out the APIs and see their output.

## About `.env`
The application has a `.env` file which stores the environmental variables of the application.<br />
It contains 4 main variables which are:
- `MONGO_URI`: the connection string of the MongoDB.
   > It should be stored in a secrets vault or encrypted for a real life application
- `IMGUR_CLIENT_ID`: the client id of imgur that authenticate the user to upload images on imgur cloud.
   > It should not be there, if should be left empty and every user should add its own client id, but I included my client id in the src code so the application would be able to upload images when tested.
- `IMAGE_MAX_SIZE`: this is the accumlative maximum size allowed for the uploaded images at once.
   > It is configurable using the .env file and I initially set it to 4 MB to avoid uploading large files which might take a lot of time and halt the application.
- `SERVICE`: it holds the service name which is used in the logging.

## Error Handling
The backend server handles all types of errors.

### Image Upload Errors
- It validates on the group name, it should be passed before uploading.
- It validates on the allowed max size of images (which is configured in the `.env` file).
- It validates on the type of files to be uploaded (only image type files are allowed: `png`, `jpg`, `jpeg`, `gif`).

### Group's Images Errors
- It validates on the passed group Id, it should be a valid mongo objectId.
- It validates that the passed group Id exists in the database.

## Logging
The application has an integrated logger, which logs all the errors that might be thrown from the server during requests.<br />
These logs are usefull and can be used to monitor the performance of the application, and can be used to debug and trace any problems.

## Unit Testing
The testing environment has been set for the application using `mocha` and `chai`.<br />
Currently, only one unit test is developed for the `GET /health` endpoint as an example.
