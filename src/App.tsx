import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import HomePage from "./pages/Homepage";
import BaseLayout from "./components/BaseLayout";
import LoadingPage from "./components/LoadingPage";

const AboutUs = lazy(() => import("./pages/AboutUs/index"));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<LoadingPage />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
