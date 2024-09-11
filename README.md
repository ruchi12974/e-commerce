# Title
    Frontend Development Assignment: E-commerce Website

## Objective
    The goal of this assignment is to build a clean, modular, and scalable E-commerce website using any frontend framework (React, Angular, or Next.js). This project will focus on implementing core e-commerce functionalities such as product listing, search, cart management, and order placement with role-based access and JSON Server for backend simulation.

## Tech Stack
    Frontend : React / Angular / Next.js (Choose one)
    Backend : JSON Server
    Deployment: Heroku / GitHub Pages
    Languages: HTML, CSS, JavaScript (ES6+)

## Completion Instructions

### Functionality
#### Must Have
* Build an e-commerce website with multiple pages/components including Login, Home, Produts, cart, ProductDetailsSection, CartSummary, NotFound 
* implement features such as authentication, role-based access, product listing, search, filtering, pagination
### Features
- **Product Listing**: Users can browse products, view details, and add items to their cart.
- **Cart Management**: Users can manage items in their cart (add, remove, increment, decrement).
- **Role-Based Access**: Admin users have access to an admin panel where they can manage products.
- **Checkout Page**: Once a user adds items to the cart, they can proceed to checkout.

### Pages and Navigation
- **Home Page**: General product listings.
- **Products Page**: List of products available to users.
- **Product Details**: Detailed view of individual products.
- **Cart Page**: View and modify cart contents.
- **Checkout Page**: Final page to confirm purchase.
- **Admin Page**: Only accessible to admins. Used to manage products.
- **Login Page**: Allows users to log in and redirects them based on role.
- **404 Page**: Fallback page for undefined routes.

### Navigation
- `/login`: Redirects to login form.
- `/products`: Shows product list.
- `/cart`: Shows the user's cart.
- `/checkout`: Proceed to purchase.
- `/admin`: Only for admins.
- `/not-found`: 404 error.
### Role-Based Access Control
Admins have access to:
- AdminPage for product and user management.

Regular users have access to:
- Product browsing and purchasing functionality.

#### Nice to Have
* Performance Optimization:
    * Implement lazy loading for images.
    * Optimize assets to reduce loading times.
* Error Handling:
    * Gracefully handle errors (e.g., when data fails to load).
    * Display clear error messages without crashing.

### Guidelines to Develop the Project
#### Must Have
* Code Quality:
    * Maintain a modular structure.
    * Follow DRY principles and proper naming conventions.
    * Write reusable and well-organized code.
    * Include comments and documentation for better understanding.
* Responsiveness:
    * Ensure the app is fully responsive across desktop, tablet, and mobile devices.
    * Use responsive layouts that adapt smoothly across different screen sizes.
* User Experience:
    * Make the app intuitive and easy to navigate.
    * Provide feedback for user actions (e.g., adding items to cart, order confirmation).
    * The app should be easy to use and navigate.
* Design Sense:
    * Build a visually appealing UI with consistent colors, typography, and layout.
* Error Handling:
    * Handle errors gracefully and provide user-friendly error messages.

#### Nice to Have
* Testing:
    * Unit tests for critical components.
    * E2E testing for user flow scenarios.
* Advanced Performance Optimization:
    * Reduce asset sizes.
* Implement caching or service workers for offline access.

### Submission Instructions
#### Must Have
* Git Repository:
    * Upload your project to a public Git repository (GitHub, GitLab, or Bitbucket).
    * Include a README.md file with clear setup instructions.
    * Ensure the project is fully functional without any major bugs or errors.
* Deployment:
    * Deploy the app using Heroku, GitHub Pages, or any other free hosting platform.
    * The app should be accessible and fully functional from the deployment link.
* Submission:
    * Submit both the deployed app link and GitHub repository link via the provided Google Form.
#### Nice to Have
* Documentation:
    * Include detailed user and developer documentation.
    * Provide additional notes on optimizations or improvements.

### Resources
#### Design Files
Header - logo

### APIs
procusts, PrimeDealsSection, AllProductsSection, Search, filtering, Sorting, ProductItemDetails, Login
Reference API : 
   https://apis.ccbp.in/login
   https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}
   https://apis.ccbp.in/prime-deals
   https://apis.ccbp.in/products/${id}

### Third-party Packages
navigation (react-router-dom)
jwt token storage (js-cookie) 
Icons (react-icons)
loading (react-loader-spinner)
