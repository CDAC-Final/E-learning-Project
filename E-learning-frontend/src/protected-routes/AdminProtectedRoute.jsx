import { Navigate, useNavigate  } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {} from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem('admin-jwtToken');
  const customer_token = sessionStorage.getItem('customer-jwtToken');
  const mentor_token = sessionStorage.getItem('mentor-jwtToken');

  const Logout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.clear();
  };

  if (!token) {
    if (customer_token || mentor_token) {
      Logout();
      window.location.reload(true);
    }
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default AdminProtectedRoute;