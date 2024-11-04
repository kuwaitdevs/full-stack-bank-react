import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import LayoutAuth from "layout/LayoutAuth";

export const ProtectedRoute = () => {
    const { token } = useAuth();
  
    if (!token) {
      return <Navigate to="/login" />;
    }
  
    return <LayoutAuth><Outlet /></LayoutAuth> ;
};