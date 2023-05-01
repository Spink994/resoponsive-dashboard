import { HTMLAttributes, forwardRef } from "react";
import Sidebar from "../Sidebar";
import TopNavigation from "../TopNavigation";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export default forwardRef<HTMLDivElement, LayoutProps>(function Layout(
  { children },
  ref
) {
  return (
    <main className="w-screen h-screen overflow-hidden flex" ref={ref}>
      {/* Sidebar */}
      <Sidebar />

      <section className="w-full overflow-y-auto">
        {/* Top Navigation */}
        <TopNavigation />

        {/* Main content */}
        <div className="w-full h-[calc(100%-21px)] [@media_(min-width:_840px)]:mt-0 mt-[60px] bg-gray-1">
          {children}
        </div>
      </section>
    </main>
  );
});
