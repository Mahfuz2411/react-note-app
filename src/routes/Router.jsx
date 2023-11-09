import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import SignIn from "../auth/SignIn";
import Post from "../pages/Post";
import Notes from "../pages/Notes";
import PrivateRouter from "./PrivateRouter";
import UpdateNote from "../pages/UpdateNote";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
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
      },
      {
        path: "/update/:id",
        element: <PrivateRouter><UpdateNote/></PrivateRouter>,
        loader: ({params}) => fetch(`https://react-note-app-server.vercel.app/update/${params.id}`)
      }
    ]
  },
]);

export default router;