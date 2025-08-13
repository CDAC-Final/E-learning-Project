import { Navigate, useNavigate  } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {} from 'react-router-dom';

const MentorProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem('mentor-jwtToken');
  const customer_token = sessionStorage.getItem('customer-jwtToken');
  const admin_token = sessionStorage.getItem('admin-jwtToken');

  let navigate = useNavigate();

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
    if (customer_token || admin_token) {
      Logout();
      window.location.reload(true);
    }
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default MentorProtectedRoute;