# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app/server

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Install TypeScript globally
RUN yarn global add typescript

# Copy the rest of the project files
COPY . .

# Build the project
RUN yarn build

# Expose the port (if applicable)
EXPOSE 4000

# Start the application
CMD ["yarn", "start"]
