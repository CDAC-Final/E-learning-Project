import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NormalHeader = () => {
  let navigate = useNavigate();

  const navigateToForgetPasswordPage = () => {
    navigate("/customer/forgetPassword");
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          to="/user/mentor/register"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color btn btn-light" style={{border:'2px solid purple',padding:'10px',borderRadius:'12px',
            color:''
          }}>Register Teacher</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/customer/register"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color btn btn-light" style={{border:'2px solid purple',padding:'10px',borderRadius:'12px',
            color:''
          }}>Register Student</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link to="/user/login" class="nav-link active" aria-current="page">
          <b className="text-color btn btn-light" style={{border:'2px solid purple',padding:'10px',borderRadius:'12px',
            color:''
          }}>Login User</b>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
