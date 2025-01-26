import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";  // Home component that is already there
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";


// Create the router with an array of route objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />  // Home component on the root path
  },
  {
    path: "/about",
    element: <About />  // About page
  },
  {
    path: "/login",
    element: <Login />  // Login page
  },
  {
    path: "/profile/:id",  // This is your dynamic route for the user profile
    element: <UserProfile />  //  UserProfile here
  }
]);

// Pass the router to RouterProvider to make it available in your app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
