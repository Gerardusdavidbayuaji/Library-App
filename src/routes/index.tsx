import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoutes from "./protected-routes";
import HomeLayout from "@/components/home-layout";
import ContentLayout from "@/components/content-layout";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import DetailBook from "@/pages/books/details";
import EditProfilePage from "@/pages/profile/edit-profile";
import HistoryBorrowPage from "@/pages/profile/history-borrow";
import ProfilePage from "@/pages/profile/profile-page";
import AddBookPage from "@/pages/admin/add-book";
import EditBookPage from "@/pages/admin/edit-book";

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
          path: "/content-layout",
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
          path: "/profile-page",
          element: <ProfilePage />,
        },
        {
          path: "/add-book",
          element: <AddBookPage />,
        },
        {
          path: "/edit-book",
          element: <EditBookPage />,
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