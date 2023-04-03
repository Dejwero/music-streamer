import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AuthContextProvider from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import AuthGuard from "./helpers/AuthGuard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard authAccess={true}>
        <HomePage />
      </AuthGuard>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthGuard authAccess={false}>
        <RegisterPage />
      </AuthGuard>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthGuard authAccess={false}>
        <LoginPage />
      </AuthGuard>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
);
