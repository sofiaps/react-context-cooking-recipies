// page components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// styles
import "./App.css";
import RootLayout from "./pages/layout/layout.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/recipies/:id",
        element: <Recipe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
