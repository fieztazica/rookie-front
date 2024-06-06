# Stage 1: Build the Next.js application
FROM node:18 AS builder

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml
COPY apps/web/package*.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY apps/web .

# Build the Next.js application
RUN pnpm run build

# Stage 2: Create the final image
FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /usr/src/app

# Copy the built files from the builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["pnpm", "start"]
