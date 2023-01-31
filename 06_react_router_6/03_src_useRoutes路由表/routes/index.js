import About from "../pages/About"
import Home from "../pages/Home"
import { Navigate } from "react-router-dom"

export const routes = [
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/home",
      element:<Home />
    },
    {
      path:"/",
      element:<Navigate to="/home" />
    },
  ]