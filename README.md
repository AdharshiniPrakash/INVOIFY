# Invoify

A simple, responsive invoice generator web app built with React and Vite. Easily create, preview, and manage invoices for your business or freelance work.

## Features

- Add, edit, and remove invoice items
- Responsive design (desktop & mobile friendly)
- Real-time invoice preview
- Company and client details input
- Simple, clean UI

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **Language:** JavaScript (ES6+)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
	```sh
	git clone https://github.com/your-username/invoify-project.git
	cd invoify-project
	```

2. **Install dependencies:**
	```sh
	npm install
	# or
	yarn install
	```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Building for Production

To build the app for production:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```sh
npm run preview
# or
yarn preview
```

## Usage

1. Enter your company and client details.
2. Add invoice items with description, quantity, and rate.
3. The total amount is calculated automatically.
4. Preview your invoice in real-time.
5. (Optional) Print or export the invoice (feature can be added).

## Folder Structure

```
src/
  App.jsx
  main.jsx
  App.css
  index.css
  assets/
  components/
	 ClientDetails.jsx
	 CompanyDetails.jsx
	 InvoiceItems.jsx
	 InvoicePreview.jsx
	 NavBar.jsx
public/
index.html
vite.config.js
eslint.config.js
package.json
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
