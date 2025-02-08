import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./RectrictedRoute";
import PrivateRoute from "./PrivateRoute";

import Layout from "./Layout/Layout";
import Loader from "./Loader/Loader";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/registration/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/login/LoginPage"));
const ContactsPage = lazy(() => import("../pages/contacts/ContactsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
import css from "./App.module.css";


const App = () => {
  const dispatch = useDispatch();
  const IsRefreshing = useSelector(selectIsRefreshing);
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  if (IsRefreshing) {
    return <Loader />
  }

  return (
    <div>
      <Layout>
        <main className={css.links}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Layout>
    </div>
  );
};

export default App;
