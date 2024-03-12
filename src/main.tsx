import React from "react";
import ReactDOM from "react-dom/client";

import Root from "./Root.tsx";
import Home from "./Home.tsx";
import Listings from "./routes/Listings.tsx";
import Profile from "./routes/Profile.tsx";
import Login from "./routes/Login.tsx"
import ListingDetails from "./routes/ListingDetails.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listings",
        element: <Listings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/listingDetails",
        element: <ListingDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
