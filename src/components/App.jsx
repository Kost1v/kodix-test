import { lazy } from "react";

import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
import css from "./App.module.css";
import FeaturePage from "../pages/FeaturePage/FeaturePage";
import TestimonialsPage from "../pages/TestimonialsPage/TestimonialsPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import BlogPostPage from "../pages/BlogPostPage/BlogPostPage";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <div>
      <Layout>
        <main className={css.links}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/feature" element={<FeaturePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route
              path="/blog/:id"
              element={<PrivateRoute component={<BlogPostPage />} />}
            />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Layout>
    </div>
  );
};

export default App;
