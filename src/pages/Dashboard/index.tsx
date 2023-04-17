import { Suspense, lazy } from "react";
import Layout from "../../components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "../../components/Spinner";

// Suspense Fallback
const fallbackContent = (
  <div className="w-screen h-screen flex items-center justify-center">
    <Spinner />
  </div>
);

const Home = lazy(() => import("./Home"));

export default function Dashboard() {
  return (
    <Suspense fallback={fallbackContent}>
      <Router>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}
