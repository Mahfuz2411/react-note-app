import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import SignIn from "../auth/SignIn";
import Post from "../pages/Post";
import Notes from "../pages/Notes";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/login",
        element: <SignIn></SignIn>
      },
      {
        path: "/add",
        element: <PrivateRouter><Post/></PrivateRouter>,
      },
      {
        path: "/notes",
        element: <PrivateRouter><Notes/></PrivateRouter>,
      }
    ]
  },
]);

export default router;