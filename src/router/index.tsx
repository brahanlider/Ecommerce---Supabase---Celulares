import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage, CellPhonePage, CellPhonesPage, HomePage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "celulares", element: <CellPhonesPage /> },
      { path: "celulares/:slug", element: <CellPhonePage /> }, //:slug de la bd supabase
      { path: "nosotros", element: <AboutPage /> },
    ],
  },
]);
