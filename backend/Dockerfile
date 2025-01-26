# Use the Node.js official image as the base
FROM node:latest

# Set the working directory inside the container
WORKDIR /home/app

# Copy package.json and package-lock.json first (for dependency caching)
COPY package.json package-lock.json /home/app/

# Install Node.js dependencies
RUN npm install

# Install TypeScript and ts-node globally
RUN npm install -g typescript ts-node

# Copy the rest of the application code, including TypeScript files
COPY . /home/app

# Expose the application port
EXPOSE 3200

# Run the application using ts-node
CMD ["ts-node", "src/server.ts"]
