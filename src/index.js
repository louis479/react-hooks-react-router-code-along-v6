import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js"; // Import the routes from routes.js
import Home from "./pages/Home";  // Home component that is already there
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";


// Create the router with an array of route objects
const router = createBrowserRouter(routes, [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage /> // Add errorElement for Home
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage /> // Add errorElement for About
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage /> // Add errorElement for Login
      },
      {
        path: "/profile/:id",
        element: <UserProfile />,
        errorElement: <ErrorPage /> // Add errorElement for UserProfile
      }
]);

// Pass the router to RouterProvider to make it available in your app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
