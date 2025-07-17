import { ERouteNames } from "@/shared/libs/utils/routeVariables";
import RootPage from "./rootPage";
import ErrorPage from "./errorPage";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

const DashboardPage = lazy(() => import("@pages/dashboardPage"));

export const routes = createBrowserRouter([
  {
    path: ERouteNames.DEFAULT_ROUTE,
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ERouteNames.EMPTY_ROUTE,
        element: <Navigate to={ERouteNames.DASHBOARD_ROUTE} />,
      },
      {
        path: ERouteNames.DASHBOARD_ROUTE,
        element: <DashboardPage />,
      },
    ],
  },
]);
