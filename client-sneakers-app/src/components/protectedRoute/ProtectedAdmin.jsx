import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user && !user.role !== 'admin') {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};