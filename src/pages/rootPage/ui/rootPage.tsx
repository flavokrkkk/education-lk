import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default RootPage;
