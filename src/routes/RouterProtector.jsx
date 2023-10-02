import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ element }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return <Navigate to={`/`} replace />;
  }
  return element;
};

export const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to={`/signin`} replace />;
  }

  return element;
};
