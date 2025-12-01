import { createBrowserRouter } from "react-router";
import Login from "@/pages/Login";
import Agenda from "@/pages/Agenda";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/agenda",
    element: <Agenda />,
  },
]);
