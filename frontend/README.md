# 🌟 CRAVATO: Your Culinary Adventure Starts Here 🌟

Welcome to **CRAVATO**, where culinary dreams come true! Dive into a seamless dining experience, explore mouth-watering dishes, and enjoy every bite. Let's make your meals unforgettable.

## 🍽️ Table of Contents
- [🌐 Project Overview](#-project-overview)
- [🎥 Demo](#-demo)
- [🚀 Features](#-features)
- [🛠️ Getting Started](#-getting-started)
- [🧩 Detailed Components](#-detailed-components)
- [💡 Fun Facts](#-fun-facts)
- [🤝 Contributing](#-contributing)
- [🏗️ Project Structure](#-project-structure)


## 🌐 Project Overview

CRAVATO is designed to revolutionize the way you dine. From exploring diverse cuisines to managing your orders seamlessly, CRAVATO offers an unmatched user experience.

## 🎥 Demo

Curious to see CRAVATO in action? Check out our [Live Demo](http://example.com) or watch our [Demo Video](http://example.com).

 ### [ 👆🏼WORK IN PROGRESS👆🏼 ]

## 🚀 Features

- **Stunning UI/UX**: Intuitive and visually appealing interface.
- **Dynamic Menu**: Discover a variety of dishes with ease.
- **Responsive Design**: Optimized for all devices.
- **Downloadable App**: Available on both Play Store and App Store.
- **Cart Management**: Effortlessly manage your cart.
- **Secure Authentication**: Safe and secure login and signup processes.

## 🛠️ Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/JigarHingu/CRAVATO.git
    cd CRAVATO/frontend
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm run dev
    ```

Voila! The application will be running on `http://localhost:5173/`.

## 🧩 Detailed Components
1. AppDownload
Encourages users to download the Cravato app with links to Play Store and App Store.

2. ExploreMenu
Displays menu categories, allowing users to filter dishes based on the selected category.

3. FoodDisplay
Shows the list of food items based on the selected category.

4. FoodItem
Represents each food item with details like name, description, price, and an option to add to the cart.

5. Footer
Contains company information, social media links, and contact details.

6. Header
Provides an introductory section with a call-to-action button.

7. LoginPopup
Popup for user authentication, supporting both login and sign-up functionalities.

8. Navbar
Navigation bar with links to different sections of the application.

9. StoreContext
Context API setup for managing global state, including cart items and food list.

## 💡 Fun Facts
- CRAVATO's name is derived from the Italian word "cravata," meaning craving.
- The app includes over 1000+ unique dishes from various cuisines.
- CRAVATO was built with a team of 5 passionate food enthusiasts and developers.
- The app’s user interface was inspired by some of the world’s top-rated restaurants.

## 🤝 Contributing

We love contributions! Here’s how you can help:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature-branch).
- Open a Pull Request.

## 🏗️ Project Structure

```plaintext
CRAVATO
│   README.md
│   package.json
│   .gitignore
│
└───frontend
    │
    ├───node_modules
    │
    ├───public
    │   │   index.html
    │   │   ...
    │
    └───src
        │   App.js
        │   index.js
        │   ...
        │
        ├───assets
        │   └───assets.js
        │
        ├───components
        │   │   AppDownload.js
        │   │   ExploreMenu.js
        │   │   FoodDisplay.js
        │   │   FoodItem.js
        │   │   Footer.js
        │   │   Header.js
        │   │   LoginPopup.js
        │   │   Navbar.js
        │   │   ...
        │
        ├───context
        │   │   StoreContext.js
        │
        └───styles
            │   AppDownload.css
            │   ExploreMenu.css
            │   FoodDisplay.css
            │   FoodItem.css
            │   Footer.css
            │   Header.css
            │   LoginPopup.css
            │   Navbar.css
            │   ...


