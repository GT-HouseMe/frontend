import React from "react";
import ReactDOM from "react-dom/client";

import Root from "./Root.tsx";
import Home from "./Home.tsx";
import Listings from "./routes/Listings.tsx";
import Internships from './routes/Internships.tsx';
import Profile from "./routes/Profile.tsx";
import Login from "./routes/Login.tsx"
import SignUp from "./routes/SignUp.tsx"
import ListingDetails from "./routes/ListingDetails.tsx";
import InternshipDetails from "./routes/InternshipDetails.tsx";
import CreateInternship from "./routes/CreateInternship.tsx";
import CreateListing from "./routes/CreateListing.tsx";
import InternshipEdit from "./routes/InternshipEdit.tsx";
import ListingEdit from "./routes/ListingEdit.tsx";

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
        path: "/internships",
        element: <Internships />,
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
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/createinternship",
        element: <CreateInternship />
      },
      {
        path: "/createlisting",
        element: <CreateListing />
      },
      {
        path: "/listingDetails/:id",
        element: <ListingDetails />,
      },
      {
        path: "/internshipDetails/:id",
        element: <InternshipDetails />,
      },
      {
        path: "/listingEdit/:id",
        element: <ListingEdit />,
      },
      {
        path: "/internshipEdit/:id",
        element: <InternshipEdit />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
