import { HTMLAttributes, forwardRef } from "react";
import Sidebar from "../Sidebar";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export default forwardRef<HTMLDivElement, LayoutProps>(function Layout(
  { children },
  ref
) {
  return (
    <main className="w-screen flex" ref={ref}>
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <section>
        {/* Top Navigation */}
        <div>Top Navigation</div>
        {children}
      </section>
    </main>
  );
});
