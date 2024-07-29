FROM node:20.15.1-alpine AS build


# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

RUN npm install -g @angular/cli

EXPOSE 4200

# Build the Angular application
CMD ["ng", "serve","--host","0.0.0.0"]

# Stage 2: Serve the Angular application with Nginx
# FROM nginx:alpine

# # Copy the built Angular application from the previous stage
# COPY --from=build /app/dist/portfolio-app /usr/share/nginx/html

# # Copy custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]



# RUN apk upgrade

# WORKDIR /app

# COPY . .

# RUN npm install -g @angular/cli



# CMD ["ng", "start"]