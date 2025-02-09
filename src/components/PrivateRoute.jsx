import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {

  return JSON.parse(localStorage.getItem("userAuth")) ? (
    component
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
