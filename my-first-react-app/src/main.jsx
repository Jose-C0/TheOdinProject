import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";
import routes from "./routes";
// import Profile from "./Components/Profile.jsx";
// import DefaultProfile from "./Components/DefaultProfile";
// import Spinach from "./Components/Spinach";
// import Popeye from "./Components/Popeye";
// import ErrorPage from "./Components/ErrorPage";
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
