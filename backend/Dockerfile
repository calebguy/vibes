# syntax=docker/dockerfile:1

# Build the Node App
FROM --platform=linux/amd64 node:18-alpine AS appbuild
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY ["package.json", "package-lock.json*", "./"]

# Copy the code and build config files (excluding those in .dockerignore)
COPY ./ ./

# Install production dependencies.
RUN npm install

# Generate prisma client
RUN npx prisma generate

# Build the app
RUN npm run build

RUN npm prune --production

# Move the production build into the container
FROM --platform=linux/amd64 node:18-alpine AS imagebuild

# Create and change to the app directory.
WORKDIR /app

# Only build for production
ENV NODE_ENV=production

# Copy application dependency manifests to the container image.
COPY ["package.json", "package-lock.json*", "./"]

# Copy build code from previous stage to container
COPY --from=appbuild /app/build ./build

# Copy installed dependencies from previous stage
COPY --from=appbuild /app/node_modules ./node_modules

# Run the web service on container startup.
CMD [ "npm", "start" ]