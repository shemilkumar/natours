# Natours Application

Live URL : [https://natours-shemil.cyclic.app](https://natours-shemil.cyclic.app/)

Build using modern technologies: node.js, express, mongoDB, mongoose.

![HomeImage](https://github.com/shemilkumar/natours/blob/master/dev-data/screenshots/home.png)

![TourImage1](https://github.com/shemilkumar/natours/blob/master/dev-data/screenshots/tour1.png)

![TourImage2](https://github.com/shemilkumar/natours/blob/master/dev-data/screenshots/tour2.png)


## Technologies

* Node.js
* express
* mongodb
* mongoose
* Pug
* MapBox
* Axios
* HTML & CSS
* Json Web Token
* Stripe payment
* Parcel bundler
* Multer and Sharp for image processing

## Features

* Signup and Login
* Forgot password with nodemailer
* Password resetting and edit profile
* Filtering tours in API
* Online Payment with Stripe
* Map location using MapBox
* Secure Account management


# Usage

## Env Variables

Create a config.env file in the root and add the following

```javascript
NODE_ENV = development
PORT = 3000

DB = your mongo url
DB_PASSWORD = your password

JWT_SECRET = set_a_powerfull_secret
JWT_EXPIRES_IN = 1682590205
JWT_COOKIE_EXPIRES_IN = 90

MAILTRAP_USERNAME = your mailtrap username 
MAILTRAP_PASSWORD = mailtrap password
EMAIL_HOST = mailtrap host
EMAIL_PORT = 25

EMAIL_FROM = your email

SENDGRID_USERNAME = sendgrid username
SENDGRID_PASSWORD= sendgrid password

STRIPE_SECRET_KEY = stripe secret key
STRIPE_PUBLIC_KEY = stripe public key

```

## Install Dependencies and Run

```
npm install
npm run start
```

* Version: 1.0.0
* License: MIT
* Author: Shemilkumar E A
