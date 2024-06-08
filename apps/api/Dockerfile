# Stage 1: Build the NestJS application
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
COPY apps/api/package*.json apps/api/
COPY packages/*/package*.json packages/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY apps/api ./apps/api
COPY packages ./packages

# Generated contents
# RUN pnpm --filter=api run assets:gen
RUN pnpm --filter=api run zenstack generate
RUN pnpm --filter=api run prisma generate

# Build the NestJS application
RUN pnpm --filter=api build

# Stage 2: Create the final image
FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /usr/src/app

# Copy the built files from the builder stage
COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/pnpm-workspace.yaml ./
COPY --from=builder /usr/src/app/apps/api/package*.json ./apps/api/
COPY --from=builder /usr/src/app/apps/api/dist ./apps/api/dist
COPY --from=builder /usr/src/app/apps/api/node_modules ./apps/api/node_modules
COPY --from=builder /usr/src/app/apps/api/public ./apps/api/public
COPY --from=builder /usr/src/app/apps/api/views ./apps/api/views
COPY --from=builder /usr/src/app/apps/api/prisma ./apps/api/prisma
COPY --from=builder /usr/src/app/apps/api/*.env ./apps/api

# Expose the port the app runs on
EXPOSE 7000

# Command to run the application
CMD ["pnpm", "--filter=api", "start:prod"]
