# Use base image node 8 on Alpine LInux
FROM node:8-alpine

# Create a directory. -p to make sure parent dir exists
RUN mkdir -p /usr/src/app

# Set working directory in the container
WORKDIR /usr/src/app

# Copy all local files (source) into the container (destination)
COPY . .

# Install dependencies
RUN npm install

# Expose port 8080
EXPOSE 8080

# Set env variable
#ENV NODE_ENV test

# Run the nodejs app
ENTRYPOINT [ "npm", "start" ]