# Retrieve nginx inage
FROM nginx:latest

# Delete the default welcome to nginx page.
RUN rm /usr/share/nginx/html/*

# Copy over the custom default configs.
COPY configs/default.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]