# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g ts-node

# Copy the rest of the application code to the working directory
COPY . .

# Expose the application port
EXPOSE 3002

# Start the application
CMD ["npm", "run", "start"]