# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app/client

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files and folders to the container
COPY . .

# Build the React app
RUN npm run build

# Specify the command to run the React app
CMD ["npm", "start"]
