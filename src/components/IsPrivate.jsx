import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

const IsPrivate = ({ children }) => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default IsPrivate;