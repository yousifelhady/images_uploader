# Images Uploader App
Full web application which can upload multiple images to an image host and provide the capability to display and preview the uploaded images managed into groups.

## Main Tech Stack (MERN)

### Backend
- [NodeJS](https://en.wikipedia.org/wiki/Node.js)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Frontend
- [ReactJS](https://reactjs.org/)
- [Ant Design System](https://ant.design/)

## How to start?

The application is runnable using Docker Compose.

### Pre-requisites to run the application
1. Install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) and any of their dependencies.
2. Install [git](https://git-scm.com/downloads) in order to clone the repo on your machine.
3. Open your terminal and clone the repo.
4. After successfully cloning the repo, `cd` inside the directory of the repo and do the following:
   - Build the docker containers using `docker-compose build --no-cache`
   - Three docker containers should be built `mongo-db`, `node-api` & `react-ui`
   - Run the application using `docker-compose up`
   - The application should compile and run successfully.
   - Inside your browser, open `http://localhost:3000` and you will land to my awesome images-uploader application. :)

## Backend Documentation
Head to [backend](https://github.com/yousifelhady/images_uploader/tree/main/backend) folder

## Frontend Documentation
Head to [frontend](https://github.com/yousifelhady/images_uploader/tree/main/frontend) folder

## Future Work

#### Add more functionalities to the application
##### For Example:
- Ability to rename a group.
- Ability to delete a group.
- Ability to edit the list of group images (add more images to an existing group).
- Ability to delete a certain image inside a group.

#### Backend Side
- Enhance unit testing by adding more test suites to each of the developed endpoints covering their happy scenarios and corner cases.
 > The testing environemt is ready, I already built it, it just needs to have more test cases.
- Using secret vault to store sensitive data like `IMGUR_CLIENT_ID` and `MONGO_URI` or use an encryption/decryption algorithm.

#### Frontend Side
- Add error handling for failures of server calls.

#### General
- Add Linting rules for the project files.

## Authors
Software Engineer/ Yousif Elhady<br />
E: yousif.abdelhamed@gmail.com
