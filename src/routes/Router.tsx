import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root";
import Home from "./Home";
import MessageBoard from "./Message-Board";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: "/message-board",
          element: <MessageBoard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}