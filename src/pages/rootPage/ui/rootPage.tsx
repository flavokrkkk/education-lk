import { Header } from "@/widgets";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Suspense>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 h-0  max-w-[1250px] mx-auto w-full">
          <div className="flex flex-col flex-1 h-full">
            <main className="flex-1 p-6 bg-white border overflow-y-auto">
              <Outlet />
            </main>
            <footer className="bg-gray-800 text-white text-center py-4 border">
              Footer
            </footer>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default RootPage;
