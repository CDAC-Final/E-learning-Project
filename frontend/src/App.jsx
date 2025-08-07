import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Headers from "./components/header/header";
import Footer from "./components/footer/Footer";
import CourseDetailPage from "./pages/coursedescription/CourseDetailPage";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/Home/Home";
import Account from "./pages/account/Account";
import EnrollmentPage from "./pages/coursenrollment/CourseEnrollment";
import Coursesx from "./pages/courses/CoursesPages";
import LoggedInHome from "./pages/home/LoginHome";
import ContactUs from "./pages/contact/Contact";

// Component to conditionally render header and footer
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Routes where header should be hidden
  const hideHeaderRoutes = ['/home'];
  
  // Routes where footer should be hidden (you can add more if needed)
  const hideFooterRoutes = ['/home'];
  
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Headers />}
      {children}
      {!shouldHideFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<h1>Verify Page</h1>} />
          <Route path="/courses" element={<Coursesx/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/coursedescription/:courseId" element={<CourseDetailPage />} />
          <Route path="/enrollment" element={<EnrollmentPage />} />
          <Route path="/home" element={<LoggedInHome />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;