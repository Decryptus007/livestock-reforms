import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import HomePage from "./pages/Homepage";
import LoadingPage from "./components/LoadingPage";

const AboutUs = lazy(() => import("./pages/AboutUs/index"));
const Signin = lazy(() => import("./pages/Signin"));
const AdminDashboard = lazy(() => import("./pages/admin/dashboard/index"));
const AdminUsers = lazy(() => import("./pages/admin/users/index"));
const AdminUser = lazy(() => import("./pages/admin/users/user/index"));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
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
      <Route
        path="/signin"
        element={
          <Suspense fallback={<LoadingPage />}>
            <Signin />
          </Suspense>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <Suspense fallback={<LoadingPage />}>
            <AdminDashboard />
          </Suspense>
        }
      />
      <Route
        path="/admin/users"
        element={
          <Suspense fallback={<LoadingPage />}>
            <AdminUsers />
          </Suspense>
        }
      />
      <Route
        path="/admin/users/:userId"
        element={
          <Suspense fallback={<LoadingPage />}>
            <AdminUser />
          </Suspense>
        }
      />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
