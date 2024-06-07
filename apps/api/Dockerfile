FROM node:18

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

# Expose the port the app runs on
EXPOSE 7000

# Command to run the application
CMD ["pnpm", "--filter=api", "start:prod"]
