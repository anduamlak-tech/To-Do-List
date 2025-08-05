# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to run

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. Open your browser and go to the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

## Deploying to Render.com

1. Push your code to a GitHub repository.
2. Create a new **Web Service** on [Render.com](https://render.com/).
3. Connect your repository.
4. Set the following in the Render service settings:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run preview`
5. (Optional) If deploying to a subpath, set the `base` option in `vite.config.js`.
6. Render will automatically set the `PORT` environment variable.
