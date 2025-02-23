# GitHub Management Console

A web application for managing GitHub repositories.

## Features

*   List GitHub repositories
*   Archive repositories
*   Search repositories

## Technologies Used

*   React
*   TypeScript
*   Tailwind CSS
*   Vite

## Getting Started

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```
2.  Install dependencies:

    ```bash
    bun install
    ```
3.  Start the development server:

    ```bash
    bun run dev
    ```
4.  Open your browser and navigate to `http://localhost:5173`.

## Environment Variables

The application requires a GitHub personal access token to access the GitHub API.

Create a `.env` file in the root directory with the following content:

```
GITHUB_TOKEN=<your_github_token>
```

Replace `<your_github_token>` with your actual GitHub personal access token.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
