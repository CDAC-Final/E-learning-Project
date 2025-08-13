import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./NavbarComponent/Header";
import AdminRegisterForm from "./UserComponent/AdminRegisterForm";
import UserLoginForm from "./UserComponent/UserLoginForm";
import UserRegister from "./UserComponent/UserRegister";
import HomePage from "./PageComponent/HomePage";
import AddCategoryForm from "./CategoryComponent/AddCategoryForm";
import ViewAllCategories from "./CategoryComponent/ViewAllCategories";
import UpdateCategoryForm from "./CategoryComponent/UpdateCategoryForm";
import ViewAllCustomers from "./UserComponent/ViewAllCustomers";
import ViewAllMentor from "./UserComponent/ViewAllMentor";
import CourseDetailPage from "./CourseComponent/CourseDetailPage";
import PurchasedCourseDetail from "./CourseComponent/PurchasedCourseDetail";
import MentorAllCoursesPage from "./CourseComponent/MentorAllCoursesPage";
import AddCourseForm from "./CourseComponent/AddCourseForm";
import AddCourseSectionForm from "./CourseComponent/AddCourseSectionForm";
import ViewMentorCourses from "./CourseComponent/ViewMentorCourses";
import CourseBookingPage from "./CourseBookingComponent/CourseBookingPage";
import ViewCustomerCourse from "./CourseBookingComponent/ViewCustomerCourse";
import ViewMentorCoursePurchases from "./CourseBookingComponent/ViewMentorCoursePurchases";
import ViewAllCoursePurchases from "./CourseBookingComponent/ViewAllCoursePurchases";
import MentorDashboard from "./CourseComponent/MentorDashboard";
import MentorProfile from "./UserComponent/MentorProfile";
import AddProfile from "./UserComponent/AddProfile";
import NotFoundPage from './not-found/index';
import AdminProtectedRoute from "./protected-routes/AdminProtectedRoute";
import MentorProtectedRoute from './protected-routes/MentorProtectedRoute';
import CustomerProtectedRoute from './protected-routes/CustomerProtectedRoute';

function App() {

  return (
   <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/user/admin/register" element={<AdminRegisterForm />} /> */}
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/customer/register" element={<UserRegister />} />
        <Route path="/user/mentor/register" element={<UserRegister />} />
        <Route path="/course/:courseId/detail" element={<CourseDetailPage />}/>

        <Route
          path="/admin/course/category/add"
          element={
            <AdminProtectedRoute>
              <AddCategoryForm />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/course/category/all"
          element={
            <AdminProtectedRoute>
              <ViewAllCategories />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/course/category/update"
          element={
            <AdminProtectedRoute>
              <UpdateCategoryForm />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/customer/all"
          element={
            <AdminProtectedRoute>
              <ViewAllCustomers />
            </AdminProtectedRoute>
          }
        />

        <Route path="/admin/mentor/all"
          element={
            <AdminProtectedRoute>
              <ViewAllMentor />
            </AdminProtectedRoute>}
        />

        <Route
          path="/admin/mentor/course/purchases/all"
          element={
            <AdminProtectedRoute>
              <ViewAllCoursePurchases />
            </AdminProtectedRoute>
          }
        />

        {/* Customer */}
        <Route
          path="/course/:courseId/videos"
          element={
          <CustomerProtectedRoute>
            <PurchasedCourseDetail />
          </CustomerProtectedRoute>}
        />

         {/* Customer */}
        <Route
          path="/course/:courseId/payment/page"
          element={
            <CustomerProtectedRoute>
              <CourseBookingPage />
            </CustomerProtectedRoute>}
        />

        {/* Customer */}
        <Route
          path="/customer/course/purchases"
          element={
            <CustomerProtectedRoute>
              <ViewCustomerCourse />
            </CustomerProtectedRoute>
          }
        />

        <Route
          path="/mentor/:mentorId/course/all"
          element={
            <MentorProtectedRoute>
              <MentorAllCoursesPage />
            </MentorProtectedRoute>
          }
        />

        <Route path="/mentor/course/add" element={
          <MentorProtectedRoute>
            <AddCourseForm />
          </MentorProtectedRoute>}
        />

        <Route
          path="/mentor/course/section/add"
          element={
            <MentorProtectedRoute>
              <AddCourseSectionForm />
            </MentorProtectedRoute>}
        />

        <Route path="/mentor/course/all" element={
          <MentorProtectedRoute>
            <ViewMentorCourses />
          </MentorProtectedRoute>}
        />

        {/* <Route
          path="/mentor/course/customer/purchases"
          element={<ViewMentorCoursePurchases />}
        /> */}

        <Route path="/mentor/dashboard" element={
          <MentorProtectedRoute>
            <MentorDashboard />
          </MentorProtectedRoute>} />

        <Route path="/mentor/profile" element={
          <MentorProtectedRoute>
            <MentorProfile />
          </MentorProtectedRoute>}
        />

        <Route path="/mentor/profile/add"
          element={
            <MentorProtectedRoute>
              <AddProfile />
            </MentorProtectedRoute>}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
