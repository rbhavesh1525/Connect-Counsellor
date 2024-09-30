import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import CustomNavbar from "./Components/CustomNavbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Contactus from "./Components/Contactus";
import UserProfile from "./Components/UserProfile"
import AppointmentBooking from "./Components/AppointmentBooking";
import AccountSetting from "./Components/AccountSetting";
import Notifications from "./Components/Notifications";
// import UserCourses from "./Components/UserCourses";
import Courses from "./Components/Courses";
import Aboutus from "./Components/Aboutus";
import Blog from "./Components/Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CookiePolicy from "./Components/footer/CookiePolicy";
import CourseInfo from "./Components/CourseInfo";
import PrivacyPolicy from "./Components/footer/PrivacyPolicy";
import RefundAndCancellationPolicy from "./Components/footer/RefundAndCancellationPolicy";
import TermsAndConditions from "./Components/footer/TermsAndConditions";
import DisclaimerPolicy from "./Components/footer/DesclaimerPolicy";
import AppInfo from "./Components/AppInfo";
import Help from "./Components/Help";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import CourseManagement from "./Components/AdminPanel/CourseManagement";
import BlogManagement from "./Components/AdminPanel/BlogManagement";
import PrivateRoute from "./Components/PrivateRoute";
import AdminBanner from "./Components/AdminPanel/AdminBanner";
import AppointmentsList from "./Components/AdminPanel/Appointment";
import ForgotPass from "./Components/ForgotPass";
import ResetPassword from "./Components/ResetPassword";
import OtpVerification from "./Components/OtpVerification";
import WebinarInfo from "./Components/WebinarInfo";
import Webinars from "./Components/Webinar";
import WebinarManagement from "./Components/AdminPanel/WebinarManagement";
import FloatWebinar from "./Components/FloatWebinar";
import LandingPageBlog from "./Components/LandingPageBlog";
import Loading from "./Components/Loading";
import NotFoundPage from "./Components/NotFoundPage";
import UserCourses from "./Components/UserCourses";
// Example components for routes
const Home = () => {
  return (
    <>
      <CustomNavbar />
      <Banner />
      <FloatWebinar/>


      {/* <Webinars/> */}
      {/* <Courses /> */}
      <AppInfo/>
      <LandingPageBlog/>
      <Footer />
    </>
  );
};

const BookNow = () => {
  return (
    <>
      <CustomNavbar />
    
      <AppointmentBooking/>
      <FloatWebinar/>
      <Footer />
    </>
  );
};

function App() {
  return (
        <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/aboutus"
            element={
              <>
                <CustomNavbar />
                <Aboutus />
                <FloatWebinar/>
                <Footer />
              </>
            }
          />

<Route path="*" element={<NotFoundPage/>} />

          <Route
            path="/contact"
            element={
              <>
                <CustomNavbar />
                <Contactus />
                <FloatWebinar/>
               
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <CustomNavbar />
                <Blog />
                <FloatWebinar/>
                <Footer />
              </>
            }
          />
          
          <Route
            path="/cookiepolicy"
            element={
              <>
                <CustomNavbar />
                <CookiePolicy />
                <FloatWebinar/>
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <CustomNavbar />
                <PrivacyPolicy />
                <FloatWebinar/>
                <Footer />
              </>
            }
          />

          <Route
            path="/terms-conditions"
            element={
              <>
                <CustomNavbar />
                <TermsAndConditions />
                <FloatWebinar/>
                <Footer />
              </>
            }
          />
          <Route
            path="/refund-cancellation"
            element={
              <>
                <CustomNavbar />
                <RefundAndCancellationPolicy />
                <FloatWebinar/>
                <Footer />
              </>
            }
          />
          <Route
            path="/disclaimer-policy"
            element={
              <>
                <CustomNavbar />
                <DisclaimerPolicy />
                <FloatWebinar/>
                <Footer />
              </>
            }
            />
          <Route element={<PrivateRoute requiredRole="user" />}>
          <Route
          path="/webinarinfo/:id" element ={<> <CustomNavbar/><WebinarInfo/> <FloatWebinar/> <Footer/></>}></Route>
          <Route
          path="/profile" element ={<> <CustomNavbar/><UserProfile/> <FloatWebinar/><Footer/></>}></Route>
          <Route
            path="/courseInfo/:courseId"
            element={
              <>
                <CustomNavbar />
                <CourseInfo/>
                <Footer />
              </>
            }
          />
          <Route
          path="/account-setting" element ={<> <CustomNavbar/><AccountSetting/> <FloatWebinar/> <Footer/></>}></Route>
          <Route path = '/UserCourses' element = {<> <CustomNavbar/> <UserCourses/>  <Footer/> </>}></Route>
          <Route
         
          path="/Notifications" element ={<> <CustomNavbar/><Notifications/> <FloatWebinar/> <Footer/></>}></Route>
          <Route path="/booknow" element={<BookNow />} />


       
          </Route>
          <Route path="/courses" element={<><CustomNavbar/><Courses/><FloatWebinar/>  <Footer/></>}/>
      <Route path = '/Webinar' element={<><CustomNavbar/> <Webinars/> <Footer/> </>}/>
          <Route path="/help" element={<>  <CustomNavbar /> <Help /> <FloatWebinar/> <Footer /> </> } />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute requiredRole="admin" />}/>
            <Route path="/adminpanel" element={<>   <AdminPanel /> </> } />
            <Route path="/admin/courses" element={<>   <AdminPanel /> <CourseManagement/> </> } />
            <Route path="/admin/blogs" element={<>   <AdminPanel /> <BlogManagement/> </> } />
            <Route path="/admin/Appointment" element={<>   <AdminPanel /> <AppointmentsList/> </> } />
            <Route path="/admin-home" element={<>   <AdminPanel /> <AdminBanner /> </> } />
            <Route path = "/admin/webinar" element={<><AdminPanel/> <WebinarManagement/></>} />
           
           <Route path="/forgotpassword" element={<ForgotPass/>} />
           <Route path="/register" element={<Registration />} />
           <Route path="/resetPassword" element={<ResetPassword />} />
           <Route path="/verifyotp" element={<OtpVerification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
