import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import EventDetails from "../pages/Events/EventDetails";
import MyEvents from "../pages/MyEvents/MyEvents";
import Events from "../pages/Events/Events";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/event-details",
        element: <EventDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/my-events",
        element: (
          <PrivateRoute>
            <MyEvents />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
