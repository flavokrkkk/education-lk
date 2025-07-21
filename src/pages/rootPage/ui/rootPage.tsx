import { Footer, Header } from "@/widgets";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Suspense>
      <div className="flex flex-col h-screen bg-[#140c1c]">
        <Header />
        <div className="flex flex-1 h-0  max-w-[1250px] mx-auto w-full">
          <div className="flex flex-col flex-1 h-full">
            <main className="flex-1 p-6 overflow-y-auto">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default RootPage;
