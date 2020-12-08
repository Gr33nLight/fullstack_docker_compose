# Multi-stage build pattern to build static assets and inject in the NGINX image

# Retrieve node 14 base image
FROM node:14.14.0 as build

# Create app directory
WORKDIR /app

# Copy package and yarn files for api server
COPY package.json package.json
COPY yarn.lock yarn.lock

# Install deps for the client
RUN yarn install

# Add source code
COPY . .

# Build client static assets
RUN npm run build

# Retrieve nginx inage
FROM nginx:latest

# Expose internal port to receive request drom the proxy container
EXPOSE 3000

# Copy nginx configuration to serve static client assets
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Retrieve built assets from previous image and inject them in the public directory
COPY --from=build /app/build /usr/share/nginx/html