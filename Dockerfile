# Use the official Node.js 16.x image as the base image
FROM node:16

RUN mkdir public

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json ./

# Install project dependencies
RUN yarn install

# Copy the project files to the working directory
COPY . .

# Build the project
RUN yarn build:sprite

# Copy the sprite generated to public
RUN cp /app/dist/atomic-icons.svg /app/public/atomic-icons.svg 

# Expose the port on which the application will run
EXPOSE 3002

# Start the application
CMD ["yarn", "dev"]
