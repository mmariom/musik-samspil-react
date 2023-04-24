# Use the official Node.js image as the base image
FROM node:18 AS build

MAINTAINER mariomatejovic

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use the Nginx image for serving the frontend
FROM nginx:1.19.0-alpine

# Copy the React build output to the Nginx container
COPY --from=build /app/build /usr/share/nginx/html



# Expose the port Nginx is running on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
