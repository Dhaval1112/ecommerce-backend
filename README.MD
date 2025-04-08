# 🛒 E-Commerce Backend API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)


## 📖 Project Overview

This is the backend API for an e-commerce platform built using the Nodejs. It provides endpoints for managing add to cart and place order feature.

## 🚀 Features

- Add to cart
- Place order
- Get all Statistics (only admin have access)
- Generate Coupon Code (only admin have access)

## 🛠️ Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Backend framework.

## 📂 Folder Structure

```
/ecommerce-backend
├── controllers/
├── routes/
├── config/
├── service
├── storage
├── util
├── .env.{environments}
└── app.js
```

## 📌 API Endpoints

### User Endpoints

* **POST /api/cart/add** - Add an item to the user's cart.
* **POST /api/checkout** - Place an order with an optional discount code.

### Admin Endpoints

* **GET /api/admin/generate-discount** - Generate a discount code if the next order is eligible.
* **GET /api/admin/stats** - Returns item count, total purchases, discount codes, and total discounts applied.

### Note: Please find Ecommerce.postman_collection.json file for all endpoints (you can direcly import that in postman) and enjoy this project

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Dhaval1112/ecommerce-backend.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables in a `.env` file:
    ```
    PORT=5000
    DISCOUNT_EVERY_NTH_ORDER=3 # nth order
    DISCOUNT_PERCENT=0.1 # means 10%
    ```
4. Start the server:
    ```bash
    npm run {according-to-package-script} 
    OR
    npm start
    ```
---  

## 🖼️ Test cases with reference screenshots
Add to cart
![Add to cart](assets/screenshots/add-to-cart-success.png)

Checkout without discount
![Checkout](assets/screenshots/checkout-without-discount.png)

Generate Coupon (by admin) before nth order 
![Generate Discount](assets/screenshots/generate-discount.png)

Checkout with discount
![Checkout with discount](assets/screenshots/checkout-with-discount-code.png)

Statistics (stats) API for the admins
![Stats](assets/screenshots/stats-api.png)

Store API for getting all the store information (cart, orders, nth order value etc)
![Store API](assets/screenshots/store-api.png)


Validations
---  
When checkout code is invalid
![Add to cart](assets/screenshots/add-to-cart-validation.png)
![Checkout](assets/screenshots/checkout-validation.png)
![Checkout](assets/screenshots/cart-empty-validation.png)
![Checkout](assets/screenshots/generate-code-validation.png)

