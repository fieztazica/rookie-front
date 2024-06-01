#  Rookie Store

This project is a simple e-commerce platform built with modern web technologies, designed to help rookies (me) understand the basics of full-stack development.

[![Build](https://github.com/fieztazica/rookie-store/actions/workflows/build.yml/badge.svg)](https://github.com/fieztazica/rookie-store/actions/workflows/build.yml)
[![CI](https://github.com/fieztazica/rookie-store/actions/workflows/ci.yml/badge.svg)](https://github.com/fieztazica/rookie-store/actions/workflows/ci.yml)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Product listing and search
- Shopping cart functionality
- Order management
- Responsive design (soon)

## Tech Stack

**Website:**

- Next.js
- TypeScript
- Tailwind CSS
- @shadcn-ui
- @apollo/client

**API:**

- NestJS
- Graphql
- TypeScript
- PostgreSQL
- Redis

**Other Tools:**

- Prisma (ORM)
- Auth0 for authentication
- Docker (optional)

## Installation

### Prerequisites

- Node.js (>=18.x)
- pnpm (>=8.9.0)
- PostgreSQL
- Redis
- Docker (optional)

### Clone the Repository

```bash
git clone https://github.com/fieztazica/rookie-store.git
cd rookie-store
```

### General Setup

1. Install dependencies:

    ```bash
    pnpm install
    ```

### API Setup

1. Navigate to the `apps/api` directory:

    ```bash
    cd apps/api
    ```

2. Set up environment variables:

    Find `.env.example`, rename it into `.env` and adjust provided values

3. Run database migrations:

    ```bash
    pnpm run --filter api prisma migrate dev
    ```

4. Start the backend server:

    ```bash
    pnpm run --filter api dev
    ```

### Website Setup

1. Navigate to the `apps/web` directory:

    ```bash
    cd ../web
    ```

2. Set up environment variables:

    Find `.env.example`, rename it into `.env` and adjust provided values

3. Start the frontend server:

    ```bash
    pnpm run --filter web dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the frontend.
2. The admin page will be available at `http://localhost:7000/admin`.
3. The backend API will be available at `http://localhost:7000/api/graphql`.

## Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
