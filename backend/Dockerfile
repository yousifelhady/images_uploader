# Pull the Node image from Docker Hub
FROM node:14-slim

# Setting Working Directory
WORKDIR /usr/app

# Copying only package.json
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy rest of the code to container
COPY . .

EXPOSE 8080

# Run the API on Nodemon
CMD ["npm", "start"]