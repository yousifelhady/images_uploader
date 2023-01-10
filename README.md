# Images uploader
Full web application which can upload multiple images to an image host and provide the capability to display and preview the uploaded images managed into groups.

## Tech Stack
### Backend
- NodeJS
- ExpressJS
- MongoDB

### FrondEnd
- ReactJS
- Ant Design System

## How to start?
The application is runnable using Docker Compose.
### Pre-requisites to run the application
1. Install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) and any of their dependencies.
2. Install [git](https://git-scm.com/downloads) in order to clone the repo on your machine.
3. Open your terminal and clone the repo.
4. After successfully cloning the repo, `cd` inside the directory of the repo and do the following
   - Build the docker containers using `docker-compose build --no-cache`
   - Three docker containers should be built `mongo-db`, `node-api` & `react-ui`
   - Run the application using `docker-compose up`
   - The application should run and you will get the following logging message
    ![image](https://user-images.githubusercontent.com/15186131/211625795-1c903275-08ae-4000-858d-463fff284a08.png)
   - Inside your browser, open `http://localhost:3000` and you will land to my awesome images-uploader application :)

## Authors
Software Engineer/ Yousif Elhady
E: yousif.abdelhamed@gmail.com
