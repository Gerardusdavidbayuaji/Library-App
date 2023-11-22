import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoutes from "./protected-routes";
import HomeLayout from "@/components/home-layout";
import ContentLayout from "@/components/content-layout";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import DetailBook from "@/pages/books/details";
import EditProfilePage from "@/pages/profile/edit-profile";
import AddBookPage from "@/pages/admin/add-book";
import EditBookPage from "@/pages/admin/edit-book";
import ProfilePage from "@/pages/profile/profile-page";
import ProfileUser from "@/pages/profile/profile-user";

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
          path: "/profile-user",
          element: <ProfileUser />,
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