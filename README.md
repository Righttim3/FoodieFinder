

# FoodieFinder 🍽️

## Overview

FoodieFinder is a React Native mobile application that helps users discover restaurants based on search criteria such as location, cuisine type, ratings, and reviews. The application integrates with the Yelp API to provide real\-time restaurant information, helping users make informed dining decisions.

This project was developed as part of the Mobile Application Development with React Native course and demonstrates the implementation of React Native components, navigation, API integration, custom hooks, and responsive mobile design.

---

## Features

- Search for restaurants by keyword
- Browse restaurant listings
- View restaurant ratings and review counts
- Access restaurant details including address and contact information
- Navigate between multiple application screens
- Responsive and user\-friendly mobile interface
- Real\-time restaurant data using the Yelp API

---

## Technologies Used

- React Native
- Expo
- JavaScript (ES6\+)
- React Navigation
- Axios
- Yelp Fusion API

---

## Project Structure

FoodieFinder/



*** assets/

*** components/

   ** Header.js

   ** SearchBar.js

   ** RestaurantCard.js



*** hooks/

   ** useRestaurants.js



*** screens/

   ** HomeScreen.js

   ** RestaurantListScreen.js

   ** RestaurantDetailScreen.js



*** navigation/

   ** AppNavigator.js



** README.md

** proposal.pdf

** App.js

---

## Installation

### 1\. Clone the Repository

git clone [https://github.com/Righttim3/FoodieFinder.git](https://github.com/Righttim3/FoodieFinder.git)

cd FoodieFinder

### 2\. Install Dependencies

npm install

### 3\. Start the Development Server

npx expo start

### 4\. Run the Application

Choose one of the following options:

- Android Emulator
- iOS Simulator
- Expo Go Application

---

## API Configuration

Create a Yelp Developer account and generate an API key.

Create a configuration file and add your API key:

const API\_KEY = "YOUR\_YELP\_API\_KEY";

**Important:** Never commit private API keys to a public repository.

---

## Screens

### Home Screen

Allows users to enter search terms and initiate restaurant searches.

### Restaurant List Screen

Displays search results in an organized list view.

### Restaurant Detail Screen

Provides detailed information about a selected restaurant.

---

## Learning Outcomes

This project demonstrates proficiency in:

- React Native component development
- State management using hooks
- Custom hook creation
- REST API consumption
- Mobile navigation architecture
- Reusable component design
- Responsive user interface development
- Modern JavaScript development practices

---

## Future Enhancements

- Favorite restaurants feature
- User authentication
- Interactive maps integration
- Restaurant filtering and sorting
- Dark mode support
- Offline caching

---

## Author

**Sylvia S.**

Software Development Student

Bow Valley College

Calgary, Alberta, Canada









## Author

Sylvia S.