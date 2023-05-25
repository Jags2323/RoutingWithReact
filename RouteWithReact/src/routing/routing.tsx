import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import ListPage from "../components/ListPage";

// array of route objects
// two properties path and element to render in that path
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <ListPage /> },
]);

export default router;