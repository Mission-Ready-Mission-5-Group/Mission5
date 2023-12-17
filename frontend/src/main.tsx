import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import { Listings } from "./routes/Listings.tsx";
import { SingleListing } from "./routes/SingleListing.tsx";
import { Booking } from "./routes/Booking.tsx";
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
        path: "listings",
        element: <Listings />,
      },
      {
        path: "listings/:id",
        element: <SingleListing />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
