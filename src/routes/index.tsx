import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoutes from "./protected-routes";
import HomeLayout from "@/components/home-layout";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import DetailBook from "@/pages/books/details";
import EditProfilePage from "@/pages/profile/edit-profile";
import HistoryBorrowPage from "@/pages/profile/history-borrow";
import ContentLayout from "@/components/content-layout";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <HomeLayout />,
        },
        {
          path: "/",
          element: <ContentLayout />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/books/:id_book",
          element: <DetailBook />,
        },
        {
          path: "/profile",
          element: <EditProfilePage />,
        },
        {
          path: "/edit-profile",
          element: <EditProfilePage />,
        },
        {
          path: "/history-borrow",
          element: <HistoryBorrowPage />,
        },
        {
          path: "*",
          element: <div>404 page not found</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}