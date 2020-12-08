# Retrieve node 14 base image
FROM node:14.14.0

# Create app directory
WORKDIR /app

# Copy package and yarn files for api server
COPY package.json package.json
COPY yarn.lock yarn.lock

# Install deps api server
RUN yarn install

# Add source code
COPY . .

# Expose internal port to receive request drom the proxy container
EXPOSE 5000

# Run the app
CMD [ "yarn", "server" ]