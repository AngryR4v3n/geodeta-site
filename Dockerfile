FROM node:lts-bullseye

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

ENV NODE_PORT=3000

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose port 3000
EXPOSE 3000

# Define environment variable
ENV NODE_ENV=production

# Command to run your application
CMD ["node", "index.js"]
