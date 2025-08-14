import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("Logged out!!!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");

    setTimeout(() => {
      navigate("/home");
      window.location.reload(true);
    }, 1000); // Redirect after 3 seconds
  };
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-color"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b className="btn btn-outline-dark"> Category</b>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link
              to="/admin/course/category/add"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color btn btn-outline-primary"> Add Category</b>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/course/category/all"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color  btn btn-outline-primary">View Categories</b>
            </Link>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <Link
          to="/admin/mentor/course/purchases/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color btn btn-outline-dark">Purchased Courses</b>
        </Link>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-color"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b className="text-color btn btn-outline-dark"> User</b>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link
              to="/admin/customer/all"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color btn btn-outline-primary">View Students</b>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/mentor/all"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color btn btn-outline-primary">View Teachers</b>
            </Link>
          </li>
          {/* <Link
            to="/user/admin/register"
            class="nav-link active"
            aria-current="page"
          >
            <b className="text-color">Register Admin</b>
          </Link> */}
        </ul>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color text-white btn btn-danger">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
