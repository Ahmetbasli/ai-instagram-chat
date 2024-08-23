# React + Vite + TypeScript Template (react-vite-ui)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Dan5py/react-vite-ui/blob/main/LICENSE)

A React + Vite template powered by shadcn/ui.

## 🎉 Features

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast, opinionated frontend build tool.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS** - A utility-first CSS framework.
- **Tailwind Prettier Plugin** - A Prettier plugin for formatting Tailwind CSS classes.
- **ESLint** - A pluggable linting utility for JavaScript and TypeScript.
- **PostCSS** - A tool for transforming CSS with JavaScript.
- **Autoprefixer** - A PostCSS plugin to parse CSS and add vendor prefixes.
- **shadcn/ui** - Beautifully designed components that you can copy and paste into your apps.

## ⚙️ Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (version 16 or above)
- pnpm (package manager)

## 🚀 Getting Started

Follow these steps to get started with the react-vite-ui template:

1. Clone the repository:

   ```bash
   git clone https://github.com/dan5py/react-vite-ui.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-vite-ui
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

## 📜 Available Scripts

- pnpm dev - Starts the development server.
- pnpm build - Builds the production-ready code.
- pnpm lint - Runs ESLint to analyze and lint the code.
- pnpm preview - Starts the Vite development server in preview mode.

## 📂 Project Structure

The project structure follows a standard React application layout:

```python
react-vite-ui/
  ├── node_modules/      # Project dependencies
  ├── public/            # Public assets
  ├── src/               # Application source code
  │   ├── components/    # React components
  │   │   └── ui/        # shadc/ui components
  │   ├── styles/        # CSS stylesheets
  │   ├── lib/           # Utility functions
  │   ├── App.tsx        # Application entry point
  │   └── index.tsx      # Main rendering file
  ├── .eslintrc.json     # ESLint configuration
  ├── index.html         # HTML entry point
  ├── postcss.config.js  # PostCSS configuration
  ├── tailwind.config.js # Tailwind CSS configuration
  ├── tsconfig.json      # TypeScript configuration
  └── vite.config.ts     # Vite configuration
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
-# React + Vite + TypeScript Template (react-vite-ui)
+# AI Instagram Chat Bot

-[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Dan5py/react-vite-ui/blob/main/LICENSE)
+AI Instagram Chat Bot is a browser extension that enhances your Instagram Direct Messaging experience by providing an AI-powered chatbot assistant.

-A React + Vite template powered by shadcn/ui.
+## Features

-## 🎉 Features
+- Integrates seamlessly with Instagram's Direct Messaging interface
+- Provides AI-generated responses to messages
+- Customizable settings for the AI assistant
+- Easy-to-use interface within the Instagram website

-- **React** - A JavaScript library for building user interfaces.
-- **Vite** - A fast, opinionated frontend build tool.
-- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
-- **Tailwind CSS** - A utility-first CSS framework.
-- **Tailwind Prettier Plugin** - A Prettier plugin for formatting Tailwind CSS classes.
-- **ESLint** - A pluggable linting utility for JavaScript and TypeScript.
-- **PostCSS** - A tool for transforming CSS with JavaScript.
-- **Autoprefixer** - A PostCSS plugin to parse CSS and add vendor prefixes.
-- **shadcn/ui** - Beautifully designed components that you can copy and paste into your apps.
+## Installation

-## ⚙️ Prerequisites
+1. Clone this repository or download the source code.
+2. Install dependencies:

- ```

  ```
- npm install
- ```
  +3. Build the extension:
  ```
- ```

  ```
- npm run build
- ```
  +4. Load the extension in your browser:
  ```
- - For Chrome: Go to `chrome://extensions/`, enable "Developer mode", click "Load unpacked", and select the `dist` folder.
- - For Firefox: Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and select any file in the `dist` folder.

-Make sure you have the following installed on your development machine:
+## Development

-- Node.js (version 16 or above)
-- pnpm (package manager)
+To run the project in development mode:

-## 🚀 Getting Started +`
+npm run dev
+`

-Follow these steps to get started with the react-vite-ui template:
+This will start a development server with hot-reloading enabled.

-1. Clone the repository:
+## Building for Production

- ```bash

  ```
- git clone https://github.com/dan5py/react-vite-ui.git
- ```
  +To build the extension for production:
  ```

-2. Navigate to the project directory: +`
+npm run build
+`

- ```bash

  ```
- cd react-vite-ui
- ```
  +This will create a `dist` folder with the compiled extension files.
  ```

-3. Install the dependencies:
+To create a ZIP file for distribution:

- ```bash

  ```
- pnpm install
- ````
  +```
  +npm run build-zip
  +```
  ````

-4. Start the development server:
+## Project Structure

- ```bash

  ```
- pnpm dev
- ```
  +- `src/`: Source code for the extension
  ```

* - `api/`: API-related functions
* - `assets/`: Static assets like images
* - `background/`: Background script for the extension
* - `components/`: React components
* - `content-script/`: Content script that runs on the Instagram website
* - `hooks/`: Custom React hooks
* - `styles/`: CSS styles
* - `utils/`: Utility functions
    +- `public/`: Public assets and manifest file
    +- `vite.config.ts`: Vite configuration for the main app
    +- `vite-content.config.ts`: Vite configuration for the content script
    +- `vite-background.config.ts`: Vite configuration for the background script

-## 📜 Available Scripts
+## Technologies Used

-- pnpm dev - Starts the development server.
-- pnpm build - Builds the production-ready code.
-- pnpm lint - Runs ESLint to analyze and lint the code.
-- pnpm preview - Starts the Vite development server in preview mode.
+- React
+- TypeScript
+- Vite
+- Tailwind CSS
+- Chrome Extension API

-## 📂 Project Structure
+## Contributing

-The project structure follows a standard React application layout:
+Contributions are welcome! Please feel free to submit a Pull Request.

-```python
-react-vite-ui/

- ├── node_modules/ # Project dependencies
- ├── public/ # Public assets
- ├── src/ # Application source code
- │ ├── components/ # React components
- │ │ └── ui/ # shadc/ui components
- │ ├── styles/ # CSS stylesheets
- │ ├── lib/ # Utility functions
- │ ├── App.tsx # Application entry point
- │ └── index.tsx # Main rendering file
- ├── .eslintrc.json # ESLint configuration
- ├── index.html # HTML entry point
- ├── postcss.config.js # PostCSS configuration
- ├── tailwind.config.js # Tailwind CSS configuration
- ├── tsconfig.json # TypeScript configuration
- └── vite.config.ts # Vite configuration
  -```
  +## License

-## 📄 License
+This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

-This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
+## Privacy Policy

+For information about how we handle user data, please refer to our [Privacy Policy](privacy_policy.md).
