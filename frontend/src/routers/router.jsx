import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import CategoryPage from "../pages/category/CategoryPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryPage />,
      },
    ],
  },
]);

export default router;
