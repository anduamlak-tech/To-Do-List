# To-Do-List React App

A simple and interactive To-Do List application built with React and Vite.

## Live Demo

[https://to-do-list-ig90.onrender.com/](https://to-do-list-ig90.onrender.com/)

## Features

- Add, delete, and reorder tasks
- Responsive and modern UI
- Fast development with Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/anduamlak-tech/To-Do-List.git
cd To-Do-List/website/my-react-app
npm install
```

### Running Locally

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Deployment (Render.com)

1. Push your code to GitHub.
2. On Render.com, create a new Web Service:
   - **Root Directory:** `website/my-react-app`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run preview`
   - **Environment Variable:** `NPM_CONFIG_PRODUCTION=false`
3. Add your Render domain to `allowedHosts` in `vite.config.js` if needed.

## License

MIT
