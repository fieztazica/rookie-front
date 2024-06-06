# Stage 1: Build the Next.js application
FROM node:18 AS builder

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /usr/src/app

# Copy workspace configuration files
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY package.json ./

# Copy the package.json and pnpm-lock.yaml from the app and shared packages
COPY apps/web/package*.json apps/web/
COPY apps/api/package*.json apps/api/
COPY packages/*/package*.json packages/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY apps/web ./apps/web
COPY apps/api ./apps/api
COPY packages ./packages

# Build the Next.js application
RUN pnpm --filter=web build

# Stage 2: Create the final image
FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /usr/src/app

# Copy the built files from the builder stage
COPY --from=builder /usr/src/app/apps/web/.next ./.next
COPY --from=builder /usr/src/app/apps/web/node_modules ./node_modules
COPY --from=builder /usr/src/app/apps/web/package*.json ./
COPY --from=builder /usr/src/app/apps/web/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["pnpm", "start"]
