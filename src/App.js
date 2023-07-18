import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/projects", element: <ProjectsPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
